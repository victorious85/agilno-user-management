// Namespace
import { Routes } from '../navigation.namespace.ts';
// Screen Options
import { useUserDetailsScreenOptions } from '../../modules/user-details';
import { useUsersScreenOptions } from '../../modules/users';

/* ====================================
 *      🔰 USER STACK ROUTES
 ==================================== */

type StackRoutesType = RouteStack.ScreenRoutes<StackRouting.ParamList>;

/**
 * 🔸 User Stack Routes
 */
export const useStackRoutes = (): StackRoutesType => ({
  [Routes.Users]: useUsersScreenOptions(),
  [Routes.UserDetails]: useUserDetailsScreenOptions(),
});
