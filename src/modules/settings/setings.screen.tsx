import React, { useCallback } from 'react';
import { Switch, View, Text } from 'react-native';
// Namespace
import { Routes } from '../../navigation';
// Assets
import Settings from '../../shared/assets/icons/settings.svg';
// Components
import { TabBarIcon } from '../../shared/components/tab-icon';
import { SafeArea } from '../../shared/components/safe-area';
// Store
import { useAppDispatch, useAppSelector } from '../../store/store.hooks.ts';
import { setSearchBy } from '../../store/slices/settings.slices.ts';
// Constants
import { SettingsFields, TITLE } from './setings.constants.ts';
import { FieldType } from '../user-details/components/form/form.constants.ts';
// Styles
import styles from './settings.styles.ts';

interface PropsT extends StackRouting.ScreenProps<Routes.Settings> {}

/**
 * 🔸 Settings Screen
 */
const SettingsScreen: React.FC<PropsT> = () => {
  const dispatch = useAppDispatch();
  const { searchBy } = useAppSelector(state => state.settings);

  const handleSwitchToggle = useCallback(
    (field: FieldType) => {
      if (field !== searchBy) {
        dispatch(setSearchBy(field));
      }
    },
    [dispatch, searchBy],
  );

  return (
    <SafeArea>
      <View style={styles.container}>
        {SettingsFields.map(field => (
          <View key={field} style={styles.row}>
            <Text style={styles.label}>{`Search by ${field}`}</Text>
            <Switch
              value={searchBy === field}
              onValueChange={() => handleSwitchToggle(field)}
            />
          </View>
        ))}
      </View>
    </SafeArea>
  );
};

export const useSettingsOptions = (): RouteStack.BottomTabScreenConfigs => {
  return {
    component: SettingsScreen,
    options: {
      title: TITLE,
      tabBarLabel: TITLE,
      tabBarIcon: ({ focused, color, size }) => (
        <TabBarIcon
          icon={Settings}
          size={size}
          color={color}
          focused={focused}
        />
      ),
    },
  };
};

export default SettingsScreen;
