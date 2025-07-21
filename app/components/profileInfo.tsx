import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Button, Image, Dimensions, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import Parse from 'parse/react-native';
import Navbar from "./navbar"
import { handleParseError } from "./errorHandling/parseError"

export const ProfilePage: FC<{}> = (): ReactElement => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    age: '',
    fname: '',
    lname: '',
    phoneNumber: ''
  });

  useEffect(() => {
    async function getCurrentUser() {
    try {
        const currentUser = await Parse.User.currentAsync();
        if (currentUser !== null) {
          setUserData({
            username: currentUser.getUsername(),
            email: currentUser.getEmail() || 'No email provided',
            age: currentUser.get('age') || 'Age not available',
            fname: currentUser.get('fname') || 'First name not available',
            lname: currentUser.get('lname') || 'Last name not available',
            phoneNumber: currentUser.get('phoneNumber') || 'Phone number not available',
          });
        }
      } catch (error) {
        handleParseError(error); // Redirect if Parse isn't initialized
      }
    }

    getCurrentUser();
  }, []);

return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.profileCard}>
        {/* About Me */}
        <Text style={styles.sectionTitle}>About Me</Text>

        {/* Username */}
        <View style={styles.itemRow}>
          <View style={styles.iconBox}>
            <Image source={require('@/assets/images/profile/icon_profile.png')} style={styles.iconImage} />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.mainText}>{userData.username}</Text>
            <Text style={styles.subText}>Username</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("screens/resetProfile")}>
            <Image source={require('@/assets/images/profile/icon_arrow.png')} style={styles.arrowImage} />
          </TouchableOpacity>
        </View>

        {/* Email */}
        <View style={styles.itemRow}>
          <View style={styles.iconBox}>
            <Image source={require('@/assets/images/profile/icon_email.png')} style={styles.iconImage} />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.mainText}>{userData.email}</Text>
            <Text style={styles.subText}>E-mail Address</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("screens/resetProfile")}>
            <Image source={require('@/assets/images/profile/icon_arrow.png')} style={styles.arrowImage} />
          </TouchableOpacity>
        </View>

        {/* Phone */}
        <View style={styles.itemRow}>
          <View style={styles.iconBox}>
            <Image source={require('@/assets/images/profile/icon_phone.png')} style={styles.iconImage} />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.mainText}>{userData.phoneNumber}</Text>
            <Text style={styles.subText}>Phone Number</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("screens/resetProfile")}>
            <Image source={require('@/assets/images/profile/icon_arrow.png')} style={styles.arrowImage} />
          </TouchableOpacity>
        </View>

        {/* First Name */}
        <View style={styles.itemRow}>
          <View style={styles.iconBox}>
            <Image source={require('@/assets/images/profile/icon_name.png')} style={styles.iconImage} />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.mainText}>{userData.fname}</Text>
            <Text style={styles.subText}>First Name</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("screens/resetProfile")}>
            <Image source={require('@/assets/images/profile/icon_arrow.png')} style={styles.arrowImage} />
          </TouchableOpacity>
        </View>

        {/* Last Name */}
        <View style={styles.itemRow}>
          <View style={styles.iconBox}>
            <Image source={require('@/assets/images/profile/icon_name.png')} style={styles.iconImage} />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.mainText}>{userData.lname}</Text>
            <Text style={styles.subText}>Last Name</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("screens/resetProfile")}>
            <Image source={require('@/assets/images/profile/icon_arrow.png')} style={styles.arrowImage} />
          </TouchableOpacity>
        </View>

        {/* Settings */}
        <Text style={styles.sectionTitle}>Settings</Text>

        {/* Notifications */}
        <View style={styles.itemRow}>
          <View style={styles.iconBox}>
            <Image source={require('@/assets/images/profile/icon_notification.png')} style={styles.iconImage} />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.mainText}>On</Text>
            <Text style={styles.subText}>Notifications</Text>
          </View>
          <Switch value={true} />
        </View>

        {/* Password */}
        <View style={styles.itemRow}>
          <View style={styles.iconBox}>
            <Image source={require('@/assets/images/profile/icon_password.png')} style={styles.iconImage} />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.mainText}>Password</Text>
            <Text style={styles.subText}>Change password</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("screens/passwordReset")}>
            <Image source={require('@/assets/images/profile/icon_arrow.png')} style={styles.arrowImage} />
          </TouchableOpacity>
        </View>

        {/* Need Help */}
        <View style={styles.itemRow}>
          <View style={styles.iconBox}>
            <Image source={require('@/assets/images/profile/icon_email.png')} style={styles.iconImage} />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.mainText}>Need Help</Text>
            <Text style={styles.subText}>Email us</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("screens/emailForm")}>
            <Image source={require('@/assets/images/profile/icon_arrow.png')} style={styles.arrowImage} />
          </TouchableOpacity>
        </View>

        {/* Delete Account */}
        <View style={styles.itemRow}>
          <View style={styles.iconBox}>
            <Image source={require('@/assets/images/profile/icon_faq.png')} style={styles.iconImage} />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.mainText}>Delete your Account</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("screens/deleteAccountView")}>
            <Image source={require('@/assets/images/profile/icon_arrow.png')} style={styles.arrowImage} />
          </TouchableOpacity>
        </View>

        {/* Terms of service */}
        <View style={styles.itemRow}>
          <View style={styles.iconBox}>
            <Image source={require('@/assets/images/profile/icon_security.png')} style={styles.iconImage} />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.mainText}>Terms of service</Text>
            <Text style={styles.subText}>Terms of service and Privacy Policy</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("screens/passwordReset")}>
            <Image source={require('@/assets/images/profile/icon_arrow.png')} style={styles.arrowImage} />
          </TouchableOpacity>
        </View>

        {/* Sign Out */}
        <TouchableOpacity onPress={() => router.replace("screens/LogoutView")} style={styles.signOutButton}>
          <View style={styles.signOutRow}>
            <Image source={require('@/assets/images/profile/icon_logout.png')} style={styles.iconImage} />
            <Text style={styles.signOutText}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#FFF5E5',
    paddingBottom: 75,
  },
  profileCard: {
    margin: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 6,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF1493',
    marginTop: 20,
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconBox: {
    width: 35,
    alignItems: 'center',
  },
  iconImage: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  textBox: {
    flex: 1,
    marginLeft: 10,
  },
  mainText: {
    fontSize: 16,
    color: '#222',
  },
  subText: {
    fontSize: 12,
    color: '#777',
  },
  arrowImage: {
    width: 18,
    height: 18,
    marginLeft: 8,
  },
  signOutButton: {
    marginTop: 30,
    alignSelf: 'center',
  },
  signOutRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signOutText: {
    color: '#FF1493',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
});





