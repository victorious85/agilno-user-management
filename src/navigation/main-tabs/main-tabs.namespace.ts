//Namespace
import {Routes} from '../navigation.namespace';
//Screen Options
import {useSettingsOptions} from '../../modules/settings';
import {useUserStackOptions} from '../user-stack';

/* ====================================
 *    🔰 MAIN TABS SCREEN ROUTES
 ==================================== */

type RoutesType = RouteStack.BottomTabScreenRoutes<MainTabsRouting.ParamList>;

/**
 * component
 * options
 */

export const useMainTabsRoutes = (): RoutesType => ({
  [Routes.UsersStack]: useUserStackOptions(),
  [Routes.Settings]: useSettingsOptions(),
});
