// Constants
import {FieldType} from './user-details.constants.ts';

export interface FormErrors {
  [FieldType.NAME]?: string;
  [FieldType.EMAIL]?: string;
  [FieldType.ROLE]?: string;
}

const ErrorText = {
  [FieldType.NAME]: 'Name must be at least 2 characters',
  [FieldType.EMAIL]: 'Please enter a valid email address',
  [FieldType.ROLE]: 'Role must be at least 2 characters',
};

const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const fieldValidationError = (
  type: FieldType,
  value: string,
): string | undefined => {
  if (!value || value.length < 2) {
    return ErrorText[type];
  }
  return undefined;
};

const emailValidationError = (
  type: FieldType,
  value: string,
): string | undefined => {
  if (!value || !isValidEmail(value)) {
    return ErrorText[type];
  }
  return undefined;
};

export const validators = {
  [FieldType.NAME]: fieldValidationError,
  [FieldType.EMAIL]: emailValidationError,
  [FieldType.ROLE]: fieldValidationError,
};
