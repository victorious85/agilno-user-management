// Namespace
import { Routes } from '../../navigation';

declare global {
  namespace SettingsRouting {
    // Tab screen Param List
    type TabParamList = {
      [Routes.Settings]: undefined;
    };
  }
}

export {};
