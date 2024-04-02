import {Routes} from '../navigation.namespace';
//Namespace
import {useUsersOptions} from '../../modules/users/users.screen.tsx';
import {useContactsOptions} from '../../modules/contacts/contacts.screen.tsx';

/* ====================================
 *    🔰 MAIN TABS SCREEN ROUTES
 ==================================== */

type RoutesType = RouteStack.BottomTabScreenRoutes<MainTabsRouting.ParamList>;

/**
 * component
 * options
 */
export const useMainTabsRoutes = (): RoutesType => ({
  [Routes.Users]: useUsersOptions(),
  [Routes.Contacts]: useContactsOptions(),
  // [Routes.Leads]: useLeadsScreenOptions(),
  // [Routes.Contacts]: useLoansScreenOptions(),
  // [Routes.Profiles]: useContactsScreenOptions(),
});
