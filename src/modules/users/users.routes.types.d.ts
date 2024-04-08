// Namespace
import { Routes } from '../../navigation';

declare global {
  namespace UsersRouting {
    // Tab screen Param List
    type TabParamList = {
      [Routes.UsersStack]: undefined;
    };

    // Other screens Param List
    type ParamList = {
      [Routes.Users]: undefined;
      [Routes.UserDetails]: {
        userId: string;
      };
    };
  }
}

export {};
