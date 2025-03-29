import mongoose, { Schema, Document } from "mongoose";

export type BudgetItemType = "income" | "expense";

export interface IBudgetItem extends Document {
  title: string;
  amount: number;
  category: string;
  type: BudgetItemType;
  date: Date;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const BudgetItemSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [1, "Title cannot be empty"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
      min: [0, "Amount cannot be negative"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
      minlength: [1, "Category cannot be empty"],
      maxlength: [50, "Category cannot exceed 50 characters"],
    },
    type: {
      type: String,
      required: [true, "Type is required"],
      enum: {
        values: ["income", "expense"],
        message: '{VALUE} is not a valid type. Must be either "income" or "expense"',
      },
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
      default: Date.now,
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
  },
  {
    timestamps: true,
  }
);

// Add indexes for better query performance
BudgetItemSchema.index({ date: 1 });
BudgetItemSchema.index({ category: 1 });
BudgetItemSchema.index({ type: 1 });

export default mongoose.model<IBudgetItem>("BudgetItem", BudgetItemSchema);
