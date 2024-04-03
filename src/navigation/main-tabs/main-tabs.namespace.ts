import {Routes} from '../navigation.namespace';
//Namespace
import {useUsersOptions} from '../../modules/users/users.screen.tsx';
import {useSettingsOptions} from '../../modules/settings/setings.screen.tsx';

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
  [Routes.Settings]: useSettingsOptions(),
});
