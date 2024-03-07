import type { NextFunction, Request, Response } from 'express';

export const isTrustedRequest = async (request: Request, response: Response, next: NextFunction) => {
  if (!request.ip.includes('1')) return response.status(401).json();
  next();
}
