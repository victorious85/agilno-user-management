import React, { memo, Fragment } from 'react';
import { View } from 'react-native';
// Components
import { Button } from '../../../../shared/components/button';
import { RowItem } from '../row-item';
// Assets
import Edit from '../../../../shared/assets/icons/edit.svg';
// Utils
import { handleEmailPress } from '../../../../utils';
// Constants
import { BUTTON_TITLE } from './profile.constants.ts';
import { FormFields, Icons, FieldType } from '../form/form.constants.ts';
// Styles
import styles from './profile.styles.ts';

interface PropsT {
  user: User.Details;
  openForm: () => void;
}
/**
 * 🔸 Profile Component
 */
const ProfileComponent: React.FC<PropsT> = ({ user, openForm }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {FormFields.map(field => (
          <Fragment key={field}>
            <RowItem
              icon={Icons[field]}
              value={user?.[field] ? user?.[field] : 'n/a'}
              {...(field === FieldType.Name && {
                textStyle: styles.name,
              })}
              {...(field === FieldType.Email && {
                onPress: () => handleEmailPress(user?.email),
              })}
            />
          </Fragment>
        ))}
      </View>
      <Button icon={Edit} title={BUTTON_TITLE} onPress={openForm} />
    </View>
  );
};

export default memo(ProfileComponent);
