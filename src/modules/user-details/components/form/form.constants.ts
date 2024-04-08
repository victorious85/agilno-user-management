import { KeyboardType } from '../form-input/form-input.constants.ts';
// Assets
import User from '../../../../shared/assets/icons/user.svg';
import Email from '../../../../shared/assets/icons/email.svg';
import Role from '../../../../shared/assets/icons/role.svg';
import Company from '../../../../shared/assets/icons/company.svg';

export const ERROR_TITLE = 'User Already Exists';
export const UPDATE_BUTTON_TITLE = 'Update';
export const ADD_BUTTON_TITLE = 'Add user';

export enum FieldType {
  Name = 'name',
  Email = 'email',
  Role = 'role',
  Company = 'company',
}

export const ErrorText = {
  [FieldType.Name]: 'Name must be at least 2 characters',
  [FieldType.Email]: 'Please enter a valid email address',
  [FieldType.Role]: 'Role must be at least 2 characters',
};

export const FormFields = [
  FieldType.Name,
  FieldType.Email,
  FieldType.Role,
  FieldType.Company,
];

export interface FormErrors {
  [FieldType.Name]?: string;
  [FieldType.Email]?: string;
  [FieldType.Role]?: string;
}

export const Placeholders = {
  [FieldType.Name]: 'Name',
  [FieldType.Email]: 'Email',
  [FieldType.Role]: 'Role',
  [FieldType.Company]: 'Company',
};

export const Icons = {
  [FieldType.Name]: User,
  [FieldType.Email]: Email,
  [FieldType.Role]: Role,
  [FieldType.Company]: Company,
};

export const KeyboardTypes = {
  [FieldType.Name]: KeyboardType.Default,
  [FieldType.Email]: KeyboardType.Email,
  [FieldType.Role]: KeyboardType.Default,
  [FieldType.Email]: KeyboardType.Default,
};
