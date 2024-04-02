// Namespace
import {Routes} from '../navigation.namespace';
// Screen Options
import {useUserDetailsScreenOptions} from '../../modules/userDetails/user-details.screen.tsx';
import {useUsersOptions} from '../../modules/users/users.screen.tsx';

/* ====================================
 *      🔰 SCREEN ROUTES
 ==================================== */

type StackRoutesType = RouteStack.ScreenRoutes<StackRouting.ParamList>;

/**
 * 🔸 Authorized Routes
 */
export const useStackRoutes = (): StackRoutesType => ({
  [Routes.Users]: useUsersOptions(),
  [Routes.UserDetails]: useUserDetailsScreenOptions(),
});
