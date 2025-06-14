import React, { FC, ReactElement, useEffect } from 'react';
import { Alert } from 'react-native';
import { useRouter } from 'expo-router';
import Parse from 'parse/react-native';

export const CheckRole: FC<{}> = (): ReactElement => {
  const router = useRouter();

  useEffect(() => {
    const doCheckRole = async (): Promise<void> => {
      try {
        const currentUser = Parse.User.current();

        if (!currentUser) {
          Alert.alert('Error', 'No logged-in user found.');
          return;
        }

        const currentUsername = currentUser.getUsername();
        const userQuery = new Parse.Query(Parse.User);
        userQuery.equalTo('username', currentUsername);
        const userResults = await userQuery.find();

        if (userResults.length === 0) {
          Alert.alert('Error', 'User not found.');
          return;
        }

        const user = userResults[0];
        const currentRole = user.get('role');

        // Navigate based on existing role
        if (currentRole === 'Vip') {
          router.push('screens/Vip');
          return;
        } else if (currentRole === 'platinum') {
          router.push('screens/platinumCard/platinumCard');
          return;
        } else if (currentRole === 'gold') {
          router.push('screens/GoldCard');
          return;
        } else {
          // If no valid role, assign "Vip"
          user.set('role', 'Vip');
          try {
            await user.save();
            Alert.alert('Success', 'You are now a Vip member!');
            router.push('screens/GoldCard');
          } catch (saveError: any) {
            console.error('Error while updating user role:', saveError);
            Alert.alert('Error', 'Failed to update user role.');
          }
        }
      } catch (error) {
        console.error('Error checking user role:', error);
        Alert.alert('Error', 'An error occurred while checking the user role.');
      }
    };

    doCheckRole();
  }, []);

  return <></>; // Empty component since navigation happens immediately
};

export default CheckRole;
