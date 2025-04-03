import express, { Express, Request, Response, NextFunction, ErrorRequestHandler } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { ApiResponse, HttpStatus } from "./types";
import { errorHandler } from "./middleware/errorHandler";
import connectDB from "./config/database";
import authRoutes from "./routes/auth";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app: Express = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // Logging middleware

// Response wrapper middleware
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.sendSuccess = <T>(data: T, statusCode: number = HttpStatus.OK) => {
    const response: ApiResponse<T> = {
      success: true,
      data,
    };
    return res.status(statusCode).json(response);
  };
  next();
});

// Routes
app.use("/api/auth", authRoutes);

// Health check endpoint
app.get("/api/health-check", (req, res) => {
  res.sendSuccess({ timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use(errorHandler);

export default app;
