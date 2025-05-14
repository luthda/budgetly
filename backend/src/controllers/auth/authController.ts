import { Request, Response } from "express";
import { SignupInput, LoginInput, signupSchema, loginSchema } from "./schemas";
import { User } from "../../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  maxAge: 24 * 60 * 60 * 1000, // 24 hours
};

export const signup = async (req: Request, res: Response) => {
  try {
    const validatedData = signupSchema.parse(req.body);
    const { email, password } = validatedData;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: "error",
        message: "Email already registered",
      });
    }

    const user = new User({
      email,
      passwordHash: password,
    });

    await user.save();

    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: "24h",
    });

    return res.status(201).json({
      status: "success",
      data: {
        user: {
          id: user._id,
          email: user.email,
          createdAt: user.createdAt,
        },
        token,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        status: "error",
        message: error.message,
      });
    }

    console.error("Signup error:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const validatedData = loginSchema.parse(req.body);
    const { email, password } = validatedData;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        status: "error",
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      return res.status(401).json({
        status: "error",
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: "24h",
    });

    // Set JWT token in HTTP-only cookie
    res.cookie("token", token, COOKIE_OPTIONS);

    return res.status(200).json({
      status: "success",
      data: {
        user: {
          id: user._id,
          email: user.email,
          createdAt: user.createdAt,
        },
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        status: "error",
        message: error.message,
      });
    }

    console.error("Login error:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
