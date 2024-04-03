export enum FieldType {
  NAME = 'name',
  EMAIL = 'email',
  ROLE = 'role',
}

export const FormFields = [FieldType.NAME, FieldType.EMAIL, FieldType.ROLE];

export interface FormErrors {
  [FieldType.NAME]?: string;
  [FieldType.EMAIL]?: string;
  [FieldType.ROLE]?: string;
}

export const Placeholders = {
  [FieldType.NAME]: 'Name',
  [FieldType.EMAIL]: 'Email',
  [FieldType.ROLE]: 'Role',
};
