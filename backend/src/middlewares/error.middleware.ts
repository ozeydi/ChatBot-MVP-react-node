import type { ErrorRequestHandler } from "express";
import { ZodError } from "zod";

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err);
  const status =
    err instanceof ZodError ? 400 : (err as { status?: number }).status || 500;
  res.status(status).json({
    error: err.message || "Internal Server Error",
  });
};
