import React, { FC, ReactElement, useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View, StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function generateRandomSixDigit(): number {
    let num;
    do {
        num = Math.floor(100000 + Math.random() * 900000); // Ensures a 6-digit number
    } while (new Set(String(num)).size !== 6); // Ensures all digits are unique

    return num;
}

const PlatinumLogin: FC<{}> = (): ReactElement => {

  const router = useRouter();
  const [GoldCard, setGoldCard] = useState('');
  const [passCode, setPassCode] = useState('');

const doPlatinumLogin = async function (): Promise<boolean> {
    const GoldCardValue: string = GoldCard; // Assuming GoldCard is declared elsewhere

    try {
        const query: Parse.Query = new Parse.Query('PlatinumCard');

        // Normalize spaces: Convert multiple spaces to a single space, then trim
        const formattedGoldCardValue = GoldCardValue.replace(/\s+/g, ' ').trim();

        console.log('Formatted PlatinumCardValue for Query:', formattedGoldCardValue);

        // Query directly for a matching GoldCardNumber
        query.equalTo('PlatinumCardNumbers', formattedGoldCardValue);
        const results: Parse.Object[] = await query.find();

        // Debugging: Log fetched values to verify the stored format
        results.forEach(obj => console.log('Fetched DB Value:', obj.get('PlatinumCardNumbers')));

        // If any record is found, return true
        const isGoldMember = results.length > 0;
        console.log('isGoldMember:', isGoldMember);

        if (isGoldMember) {

            let isPassCodeNew = false;
            let randomNumber;

            // Check if the card number already exists
            const cardQuery = new Parse.Query('UserPlatinumCard');
            cardQuery.equalTo('UserNumber', formattedGoldCardValue);

            try {
                const existingCard = await cardQuery.first();
                if (existingCard) {
                    console.log(`Card number ${formattedGoldCardValue} already exists.`);
                    return;
                }
            } catch (error) {
                console.error('Error checking for existing card number:', error);
                return;
            }

            while (!isPassCodeNew) {
                // Generate random six-digit number
                randomNumber = generateRandomSixDigit();

                const query = new Parse.Query('UserPlatinumCard');
                query.equalTo('UserPass', randomNumber);

                try {
                    const results = await query.find();

                    if (results.length === 0) {
                        // No existing passcode found, proceed with creating a new entry
                        const userGoldCard = new Parse.Object('UserPlatinumCard');
                        userGoldCard.set('UserNumber', formattedGoldCardValue);
                        userGoldCard.set('UserPass', randomNumber);

                        if (isGoldMember) {
                            await userGoldCard.save();
                            Alert.alert(
                              'Success!',
                              `Your Platinum card account has been created`,
                               console.log(`Created PlatinumCard ${formattedGoldCardValue} with passCode: ${randomNumber}`),
                            );
                            setPassCode(randomNumber);
                        } else {
                            console.log(`PlatinumCard with cardNumber ${formattedGoldCardValue} not found.`);
                        }

                        isPassCodeNew = true;
                    } else {
                        console.log(`PassCode ${randomNumber} already exists. Generating a new one...`);
                    }
                } catch (error) {
                    console.error('Error checking or creating PlatinumCard:', error);
                }
            }
        } else {
            Alert.alert(
              'Failed!',
              `invalid card number please try again!`,
               console.log('failed to create gold card'),
            );
        }
    } catch (error: any) {
        console.error('Error while fetching GoldCard data:', error);
        return false;
    }
};

return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Platinum Card Sign Up</Text>
        <TextInput
          style={styles.input}
          value={GoldCard}
          placeholder="Enter Platinum Card"
          autoCapitalize="none"
          onChangeText={(text) => setGoldCard(text)}
          keyboardType="email-address"
          placeholderTextColor="#888"
        />
        <TouchableOpacity onPress={doPlatinumLogin} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        {passCode ? <Text style={{ fontSize: 20, marginTop: 20 }}>Your Passcode: {passCode}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  card: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#FFF',
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PlatinumLogin