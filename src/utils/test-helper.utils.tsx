import React from 'react';
import renderer from 'react-test-renderer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
// Store
import store from '../store';

export function getTreeWithProviders(Component: any, props: any = {}) {
  const { children = null } = props;

  return renderer
    .create(
      <GestureHandlerRootView>
        <SafeAreaProvider>
          <Provider store={store}>
            <Component {...props}>{children}</Component>
          </Provider>
        </SafeAreaProvider>
      </GestureHandlerRootView>,
    )
    .toJSON();
}
