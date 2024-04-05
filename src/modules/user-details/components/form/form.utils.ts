// Constants
import { FieldType, ErrorText } from './form.constants.ts';

const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const fieldValidationError = (
  type: FieldType,
  value: string,
): string | undefined => {
  if (!value || value.length < 2) {
    return ErrorText[type];
  }
};

const emailValidationError = (
  type: FieldType,
  value: string,
): string | undefined => {
  if (!value || !isValidEmail(value)) {
    return ErrorText[type];
  }
};

export const validators = {
  [FieldType.Name]: fieldValidationError,
  [FieldType.Email]: emailValidationError,
  [FieldType.Role]: fieldValidationError,
};

export const existingUser = (users: User.Details[], email: string) =>
  users.find(user => user.email.toLowerCase() === email.toLowerCase());

export const errorMessage = (email: string) =>
  `A user with the email "${email.toLowerCase()}" already exists. Please review it and consider using a different email.`;
