import React, { memo } from 'react';
import { TouchableOpacity, View } from 'react-native';
// Components
import { Button } from '../../../../shared/components/button';
import { RowItem } from '../row-item';
// Assets
import Edit from '../../../../shared/assets/icons/edit.svg';
import User from '../../../../shared/assets/icons/user.svg';
import Email from '../../../../shared/assets/icons/email.svg';
import Role from '../../../../shared/assets/icons/role.svg';
// Utils
import { handleEmailPress } from '../../../../utils/link.utils.ts';
// Constants
import { BUTTON_TITLE } from './profile.constants.ts';
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
    <>
      <View style={styles.container}>
        <RowItem textStyle={styles.name} icon={User} value={user?.name} />
        <TouchableOpacity onPress={() => handleEmailPress(user?.email)}>
          <RowItem textStyle={styles.email} icon={Email} value={user?.email} />
        </TouchableOpacity>
        <RowItem icon={Role} value={user?.role} />
      </View>
      <Button icon={Edit} title={BUTTON_TITLE} onPress={openForm} />
    </>
  );
};

export default memo(ProfileComponent);
