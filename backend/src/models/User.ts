import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  email: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
      validate: {
        validator: function (v: string) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: (props: { value: string }) => `${props.value} is not a valid email address!`,
      },
    },
    passwordHash: {
      type: String,
      required: [true, "Password hash is required"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  try {
    return await bcrypt.compare(candidatePassword, this.passwordHash);
  } catch (error) {
    throw new Error("Error comparing passwords");
  }
};

userSchema.pre("save", function (next) {
  if (!this.isModified("passwordHash")) {
    return next();
  }

  try {
    const salt = bcrypt.genSaltSync(10);
    this.passwordHash = bcrypt.hashSync(this.passwordHash, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

export const User = model<IUser>("User", userSchema);
