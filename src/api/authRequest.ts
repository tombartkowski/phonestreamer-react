import { Request } from './request';
import { HttpMethod } from './httpMethod';

export type ValidationResult = {
  isValid: boolean;
};

export namespace AuthRequest {
  export const validateEmail: (email: string) => Request<ValidationResult> =
    email => ({
      path: '/users/emails/check-availability',
      query: undefined,
      body: { email },
      method: HttpMethod.POST,
    });
}
