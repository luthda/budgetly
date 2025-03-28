import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { ApiException, ApiResponse, HttpStatus } from "../types";

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err.stack);

  if (err instanceof ApiException) {
    const response: ApiResponse = {
      success: false,
      error: {
        code: err.code,
        message: err.message,
        details: err.details,
      },
    };
    res.status(err.statusCode).json(response);
    return;
  }

  // Handle unknown errors
  const response: ApiResponse = {
    success: false,
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: "An unexpected error occurred",
      details: process.env.NODE_ENV === "development" ? { stack: err.stack } : undefined,
    },
  };
  res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(response);
};
