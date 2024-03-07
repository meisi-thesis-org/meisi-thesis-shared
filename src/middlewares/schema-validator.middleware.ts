import { type NextFunction, type Request, type Response } from 'express';
import { type AnyZodObject } from 'zod';

export const SchemaValidator = (schema: AnyZodObject) => async (request: Request, response: Response, next: NextFunction) => {
  try {
    await schema.parseAsync({
      body: request.body,
      query: request.query,
      params: request.params
    });

    next();
  } catch (error) {
    return response.status(400).json(error);
  }
}
