import React from 'react';
import {Button, Text, View} from 'react-native';
// Styles
import Styles from './profile.styles.ts';

interface PropsT {
  user: User.Details;
  openForm: () => void;
}
/**
 * 🔸 Profile Component
 */
const ProfileComponent: React.FC<PropsT> = ({user, openForm}) => {
  return (
    <>
      <View style={Styles.container}>
        <Text style={Styles.name}>{user?.name}</Text>
        <Text style={Styles.email}>{user?.email}</Text>
        <Text style={Styles.role}>{user?.role}</Text>
      </View>
      <Button title="Edit" onPress={openForm} />
    </>
  );
};

export default ProfileComponent;
