import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from '../store';

export function findByTestID(testID: string) {
  // @ts-ignore
  return this.find(`[data-testid="${testID}"]`);
}

export function getShallowComponent(Component: any, props: any = {}) {
  const { children = null } = props;

  return ShallowRenderer.createRenderer().render(
    <Component {...props}>{children}</Component>,
  );
}

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
