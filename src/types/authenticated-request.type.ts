import { type Request } from 'express';

export type AuthenticatedRequest = Request & {
  user: { userUuid: string }
}
