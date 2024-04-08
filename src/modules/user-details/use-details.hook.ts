// Utils
import { useAppSelector } from '../../store/store.hooks.ts';
import { useToggle } from '../../hooks/use-toggle.hook.ts';

interface UseUserDetailsResult {
  user: User.Details;
  isViewMode: boolean;
  changeViewMode: () => void;
}

export const useUserDetails = (id: string): UseUserDetailsResult => {
  const { data } = useAppSelector(state => state.users);
  const user = data?.find(user => user.id === id);
  const [isViewMode, changeViewMode] = useToggle(!!user?.id);

  return {
    user,
    isViewMode,
    changeViewMode,
  };
};
