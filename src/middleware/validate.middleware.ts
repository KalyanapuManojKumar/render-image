import { ZodObject } from "zod";
import { Request, Response, NextFunction } from "express";

export function validate(schema: ZodObject<any>) {
  return (
    req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return next(result.error);
    }

    req.body = result.data;

    next();
  };
}