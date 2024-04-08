import { useState, useCallback } from 'react';

type UseToggleReturnType = [boolean, () => void];

export const useToggle = (initialState: boolean): UseToggleReturnType => {
  const [flag, setFlag] = useState<boolean>(initialState);

  const toggleFlag = useCallback(() => {
    setFlag(prevFlag => !prevFlag);
  }, []);

  return [flag, toggleFlag];
};
