import React, { FC, ReactElement, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import Parse from 'parse/react-native';

const GetName: FC<{}> = (): ReactElement => {
  const [name, setName] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        // Await the promise from currentAsync()
        const currentUser = await Parse.User.currentAsync();
        if (!currentUser) {
          Alert.alert('Error', 'No logged-in user found.');
          setName('Guest');
          setLoading(false);
          return;
        }

        const fetchedName = currentUser.get('name') || currentUser.getUsername() || 'User';
        setName(fetchedName);
      } catch (error) {
        console.error('Error fetching user name:', error);
        Alert.alert('Error', 'Failed to load user name.');
        setName('Unknown');
      } finally {
        setLoading(false);
      }
    };

    fetchUserName();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color="#ff80ab" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{name}</Text>
    </View>
  );
};

export default GetName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameText: {
    fontSize: 22,
    color: '#ff80ab',
    fontWeight: 'bold',
    fontFamily: 'TT-Hoves-Regular',
  },
});
