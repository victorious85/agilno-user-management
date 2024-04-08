import React, {ReactNode} from 'react';
import {Provider} from 'react-redux';
import store from '../store';

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};
