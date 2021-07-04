export enum FirebaseAuthErrorCode {
  ARGUMENT_ERROR = 'auth/argument-error',
  CAPTCHA_CHECK_FAILED = 'auth/captcha-check-failed',
  CODE_EXPIRED = 'auth/code-expired',
  CREDENTIAL_ALREADY_IN_USE = 'auth/credential-already-in-use',
  EMAIL_EXISTS = 'auth/email-already-in-use',
  EXPIRED_POPUP_REQUEST = 'auth/cancelled-popup-request',
  INTERNAL_ERROR = 'auth/internal-error',
  INVALID_AUTH = 'auth/invalid-user-token',
  INVALID_EMAIL = 'auth/invalid-email',
  INVALID_IDP_RESPONSE = 'auth/invalid-credential',
  INVALID_PASSWORD = 'auth/wrong-password',
  NEED_CONFIRMATION = 'auth/account-exists-with-different-credential',
  NETWORK_REQUEST_FAILED = 'auth/network-request-failed',
  NULL_USER = 'auth/null-user',
  POPUP_BLOCKED = 'auth/popup-blocked',
  POPUP_CLOSED_BY_USER = 'auth/popup-closed-by-user',
  PROVIDER_ALREADY_LINKED = 'auth/provider-already-linked',
  QUOTA_EXCEEDED = 'auth/quota-exceeded',
  REDIRECT_CANCELLED_BY_USER = 'auth/redirect-cancelled-by-user',
  REDIRECT_OPERATION_PENDING = 'auth/redirect-operation-pending',
  REJECTED_CREDENTIAL = 'auth/rejected-credential',
  TIMEOUT = 'auth/timeout',
  TOKEN_EXPIRED = 'auth/user-token-expired',
  TOO_MANY_ATTEMPTS_TRY_LATER = 'auth/too-many-requests',
  UNVERIFIED_EMAIL = 'auth/unverified-email',
  USER_CANCELLED = 'auth/user-cancelled',
  USER_DELETED = 'auth/user-not-found',
  USER_DISABLED = 'auth/user-disabled',
  USER_MISMATCH = 'auth/user-mismatch',
  USER_SIGNED_OUT = 'auth/user-signed-out',
  WEAK_PASSWORD = 'auth/weak-password',
}

export const isSilentError = (errorCode: string) => {
  const silentErrorCodes = [
    'auth/popup-blocked',
    'auth/popup-closed-by-user',
    'auth/provider-already-linked',
    'auth/redirect-cancelled-by-user',
    'auth/redirect-operation-pending',
    'auth/user-cancelled',
    'auth/user-signed-out',
  ];
  return silentErrorCodes.includes(errorCode);
};

export const mapCodeToUserMessage = (errorCode: string) => {
  const errorMessagesMap: { [key: string]: string } = {
    'auth/argument-error':
      'Encountered a wrong argument. Might be the email or password.',
    'auth/captcha-check-failed':
      'Failed to check Captcha. Try to referesh until you get an easy one.',
    'auth/credential-already-in-use':
      "User already exists. Perhaps that's you - try to sign in.",
    'auth/email-already-in-use':
      'This email is already in use. Try to sign in instead.',
    'auth/internal-error':
      "Internal error of the external authorization provider. Can't do much about it.",
    'auth/invalid-email':
      "That doesn't quite look like an email. Make sure it has a correct format.",
    'auth/invalid-credential':
      'Credential seems to be invalid. Please double check it.',
    'auth/wrong-password':
      "The email or password don't match. If you're stuck try to reset your password.",
    'auth/account-exists-with-different-credential':
      'This account already exists, but was created in a different way. Try to use the original sign in method.',
    'auth/network-request-failed':
      'Problem with reaching the external authorization service. Try again soon.',
    'auth/null-user': 'Unable to identify who you are. Best to try again.',
    'auth/quota-exceeded':
      'Yikes. We forgot to increase the quota for registered users in the auth service.',
    'auth/rejected-credential':
      'The entered credentials appear to be invalid. Make sure everything is alright.',
    'auth/timeout': 'That took way too long. Check your internet and try again.',
    'auth/too-many-requests':
      "We've recieved too many requests. Please slow down and try again soon.",
    'auth/unverified-email': 'The email is not verified. Please verify it.',
    'auth/user-not-found':
      "The email or password don't match. If you're stuck, try to reset your password.",
    'auth/user-disabled':
      "Look like you'r account has been disabled. Contact us to resolve this issue.",
    'auth/user-mismatch':
      'There has been an user mismatch. Try to log out and log back in.',
  };

  return errorMessagesMap[errorCode];
};
