import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PrivacyPolicy = () => {

  const navigation = useNavigation();

  return (

    <ScrollView contentContainerStyle={styles.container}>

    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <Text style={styles.backButtonText}>← Back</Text>
    </TouchableOpacity>

      <Text style={styles.header}>Privacy Policy</Text>
      <Text style={styles.subHeader}>Last Updated: 7/23/2025</Text>
      <Text style={styles.paragraph}>
        Welcome to Kashmakena ("we," "us," or "our"). Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Kashmakena mobile application (the "App").
      </Text>
      <Text style={styles.paragraph}>
        By using Kashmakena, you agree to the terms of this Privacy Policy. If you do not agree, please do not use the App.
      </Text>

      <Text style={styles.sectionTitle}>1. Information We Collect</Text>
      <Text style={styles.paragraph}>
        When you register or interact with the App, we may collect the following personal information:
        {"\n"}• Full Name
        {"\n"}• Email Address
        {"\n"}• Phone Number
        {"\n"}• Date of Birth / Age Verification
        {"\n"}• Password (encrypted)
        {"\n"}• Device Information (e.g., device type, OS version)
        {"\n"}• App usage activity (e.g., pages visited, features used)
      </Text>

      <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>
      <Text style={styles.paragraph}>
        We use your information to:
        {"\n"}• Verify your legal age to access cannabis-related content
        {"\n"}• Create and manage your user account
        {"\n"}• Communicate with you about promotions, events, or updates
        {"\n"}• Send transactional or security-related messages
        {"\n"}• Improve the App’s functionality and user experience
        {"\n"}• Comply with legal or regulatory requirements
      </Text>

      <Text style={styles.sectionTitle}>3. Discounts, Events, and Communications</Text>
      <Text style={styles.paragraph}>
        Kashmakena may notify you about promotional discounts, events, and other offerings.
        {"\n"}Please note: Discounts and events are subject to change or cancellation at any time without prior notice.
        {"\n"}You may opt out of promotional communications at any time by following the instructions in the messages or contacting us directly.
      </Text>

      <Text style={styles.sectionTitle}>4. How We Share Your Information</Text>
      <Text style={styles.paragraph}>
        We do not sell your personal data.
        {"\n"}We may share your data with trusted third parties only when necessary to:
        {"\n"}• Provide core app functionality (e.g., hosting, analytics)
        {"\n"}• Comply with law enforcement, legal processes, or regulations
        {"\n"}• Protect the rights, property, or safety of Kashmakena or users
        {"\n"}All service providers are required to protect your data and use it only for authorized purposes.
      </Text>

      <Text style={styles.sectionTitle}>5. Data Security</Text>
      <Text style={styles.paragraph}>
        We implement appropriate technical and organizational measures to protect your data, including encryption and secure storage. However, no system can guarantee 100% security, so you use the App at your own risk.
      </Text>

      <Text style={styles.sectionTitle}>6. Data Retention</Text>
      <Text style={styles.paragraph}>
        We retain your personal data as long as your account is active or as needed for legitimate business or legal purposes. You may request deletion of your data by contacting us (see Section 9).
      </Text>

      <Text style={styles.sectionTitle}>7. Children’s Privacy</Text>
      <Text style={styles.paragraph}>
        Kashmakena is not intended for users under the age of 21. We do not knowingly collect personal information from individuals under the legal age for cannabis use.
      </Text>

      <Text style={styles.sectionTitle}>8. Your Rights and Choices</Text>
      <Text style={styles.paragraph}>
        Depending on your location, you may have the right to:
        {"\n"}• Access the personal data we hold about you
        {"\n"}• Request correction or deletion of your data
        {"\n"}• Withdraw consent for data processing
        {"\n"}• Opt out of marketing communications
        {"\n"}To exercise any of these rights, please contact us (see Section 9).
      </Text>

      <Text style={styles.sectionTitle}>9. Contact Us</Text>
      <Text style={styles.paragraph}>
        If you have any questions about this Privacy Policy or your data, you may contact us at:
        {"\n"}Email: [Insert Contact Email]
        {"\n"}Subject Line: Privacy Policy Inquiry
      </Text>

      <Text style={styles.sectionTitle}>10. Policy Updates</Text>
      <Text style={styles.paragraph}>
        We may update this Privacy Policy periodically. If material changes are made, we will notify you through the App or by email. Continued use of the App after updates indicates your acceptance of the revised policy.
      </Text>
    </ScrollView>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  subHeader: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
    color: '#333',
  },
  paragraph: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
  },
  backButton: {
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
  },

  backButtonText: {
    fontSize: 14,
    color: '#007bff',
    fontWeight: '500',
  },

});
