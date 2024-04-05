import {KeyboardType} from '../form-input/form-input.constants.ts';

export const ERROR_TITLE = 'User Already Exists';

export enum FieldType {
  Name = 'name',
  Email = 'email',
  Role = 'role',
}

export const ErrorText = {
  [FieldType.Name]: 'Name must be at least 2 characters',
  [FieldType.Email]: 'Please enter a valid email address',
  [FieldType.Role]: 'Role must be at least 2 characters',
};

export const FormFields = [FieldType.Name, FieldType.Email, FieldType.Role];

export interface FormErrors {
  [FieldType.Name]?: string;
  [FieldType.Email]?: string;
  [FieldType.Role]?: string;
}

export const Placeholders = {
  [FieldType.Name]: 'Name',
  [FieldType.Email]: 'Email',
  [FieldType.Role]: 'Role',
};

export const KeyboardTypes = {
  [FieldType.Name]: KeyboardType.Default,
  [FieldType.Email]: KeyboardType.Email,
  [FieldType.Role]: KeyboardType.Default,
};
