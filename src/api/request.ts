import { HttpMethod } from './httpMethod';

export interface Request<T> {
  path: string;
  method: HttpMethod;
  query?: Record<string, any>;
  body?: Record<string, any>;
}
