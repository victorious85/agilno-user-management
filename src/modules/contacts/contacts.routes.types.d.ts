import {Routes} from '../../navigation';

declare global {
  namespace ContactsRouting {
    // Tab screen Param List
    type TabParamList = {
      [Routes.Contacts]: undefined;
    };
  }
}

export {};
