import React, { FC, useState } from 'react';
import { Alert, TextInput, Button, View } from 'react-native';
import Parse from 'parse/react-native';
import { useRouter } from 'expo-router';

const PlatinumLogin: FC<{}> = (): React.ReactElement => {
  const router = useRouter();
  const [PlatinumCard, setPlatinumCard] = useState('');

  const doPlatinumLogin = async (): Promise<boolean> => {
    try {
      const formattedCardValue = PlatinumCard.replace(/\s+/g, ' ').trim();
      console.log('Formatted PlatinumCardValue for Query:', formattedCardValue);

      const cardQuery = new Parse.Query('PlatinumCard');
      cardQuery.equalTo('PlatinumCardNumbers', formattedCardValue);
      const cardResults: Parse.Object[] = await cardQuery.find();

      const isPlatinumMember = cardResults.length > 0;
      console.log('isPlatinumMember:', isPlatinumMember);

      if (isPlatinumMember) {
        const currentUser = Parse.User.current();
        const currentUsername = currentUser?.getUsername();

        if (!currentUsername) {
          Alert.alert('Error', 'No logged-in user found.');
          return false;
        }

        const userQuery = new Parse.Query(Parse.User);
        userQuery.equalTo('username', currentUsername);
        const userResults = await userQuery.find();

        if (userResults.length > 0) {
          const user = userResults[0];
          user.set('role', 'platinum');

          try {
            const response = await user.save();
            console.log('Updated user role to platinum:', response);
            Alert.alert('Success', 'You are now a platinum member!');
            return true;
          } catch (saveError: any) {
            console.error('Error while updating user role:', saveError);
            Alert.alert('Error', 'Failed to update user role.');
            return false;
          }
        } else {
          console.error('User not found for username:', currentUsername);
          Alert.alert('Error', 'User not found.');
          return false;
        }
      } else {
        Alert.alert('Failed!', 'Invalid card number, please try again!');
        return false;
      }
    } catch (error: any) {
      console.error('Error while fetching PlatinumCard data:', error);
      Alert.alert('Error', 'An unexpected error occurred.');
      return false;
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter Platinum Card Number"
        value={PlatinumCard}
        onChangeText={setPlatinumCard}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderRadius: 5 }}
      />

      <Button title="Login as Platinum" onPress={doPlatinumLogin} />
    </View>
  );
};

export default PlatinumLogin;
