import React, { FC, ReactElement, useState } from 'react';
import { Alert, TextInput, Button, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Parse from 'parse/react-native';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';

const GoldLogin: FC<{}> = (): React.ReactElement => {
  const router = useRouter();
  const [GoldCard, setGoldCard] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const doGoldLogin = async (): Promise<boolean> => {
    try {
      const formattedCardValue = GoldCard.replace(/\s+/g, ' ').trim();
      console.log('Formatted GoldCardValue for Query:', formattedCardValue);

      const cardQuery = new Parse.Query('GoldCard');
      cardQuery.equalTo('GoldCardNumbers', formattedCardValue);
      const cardResults: Parse.Object[] = await cardQuery.find();

      const isGoldMember = cardResults.length > 0;
      console.log('isGoldMember:', isGoldMember);

      if (isGoldMember) {
        const currentUser = Parse.User.current();
        const currentUsername = currentUser?.getUsername();

        if (!currentUsername) {

          setErrorMessage('No logged-in user found.');
          return false;

        }

        const userQuery = new Parse.Query(Parse.User);
        userQuery.equalTo('username', currentUsername);
        const userResults = await userQuery.find();

        if (userResults.length > 0) {
          const user = userResults[0];
          user.set('role', 'gold');

          try {
            const response = await user.save();
            console.log('Updated user role to gold:', response);
            Alert.alert('Success', 'You are now a gold member!');
            router.push('screens/goldCard/accountCreated');
            return true;
          } catch (saveError: any) {
            console.error('Error while updating user role:', saveError);
            setErrorMessage('Failed to update user role.');
            return false;
          }
        } else {
          console.error('User not found for username:', currentUsername);
          setErrorMessage('User not found.');
          return false;
        }
      } else {
        setErrorMessage('Invalid card number, please try again!');
        return false;
      }
    } catch (error: any) {
      console.error('Error while fetching GoldCard data:', error);
      setErrorMessage('An unexpected error occurred.');
      return false;
    }
  };

  return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Gold Account</Text>
            <Link href="screens/goldCard/GoldCard" style={styles.secondTitle}>
                Already Registered? Click Here.
            </Link>

          <TextInput
            style={styles.input}
            placeholder="Enter gold Card Number"
            value={GoldCard}
            onChangeText={setGoldCard}
            autoCapitalize="none"
          />

          <TouchableOpacity onPress={() => doGoldLogin()} style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          {errorMessage && (
              <Text style={styles.errorText}>{errorMessage}</Text>
          )}

            <Link href="screens/Home" style={styles.bottomLink}>
                Click to home
            </Link>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#1f1f1f",
  },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 25,
      textAlign: 'center',
    },
  secondTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  bottomLink: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 75,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 60,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#ff66a2",
    paddingHorizontal: 10,
    borderRadius: 20,
    color: "white",
  },
    button: {
      backgroundColor: '#ff66a2',
      paddingVertical: 12,
      borderRadius: 20,
      alignItems: 'center',
      marginTop: 10,
    },
     buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
      },
});

export default GoldLogin;

