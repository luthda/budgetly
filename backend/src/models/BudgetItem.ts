import mongoose, { Schema, Document } from 'mongoose';

export interface IBudgetItem extends Document {
  title: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
  date: Date;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const BudgetItemSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['income', 'expense'],
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IBudgetItem>('BudgetItem', BudgetItemSchema);
