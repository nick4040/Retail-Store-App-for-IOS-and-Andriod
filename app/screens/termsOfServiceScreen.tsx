import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TermsOfServiceScreen = () => {

  const navigation = useNavigation();

  return (

    <ScrollView contentContainerStyle={styles.container}>

    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <Text style={styles.backButtonText}>← Back</Text>
    </TouchableOpacity>

      <Text style={styles.header}>Terms of Service</Text>
      <Text style={styles.subHeader}>Last Updated: 7/23/2025</Text>
      <Text style={styles.paragraph}>
        Welcome to Kashmakena ("we," "us," or "our"). By creating an account or using our cannabis-related services, you agree to these Terms of Service ("Terms"). Please read them carefully. If you do not agree, do not use the app.
      </Text>

      <Text style={styles.sectionTitle}>1. Eligibility</Text>
      <Text style={styles.paragraph}>
        You must be 21 years of age or older, or the legal age for cannabis consumption in your jurisdiction, to use this app. By registering, you confirm that you meet this requirement.
      </Text>

      <Text style={styles.sectionTitle}>2. Account Registration</Text>
      <Text style={styles.paragraph}>
        To access our services, you must create an account and provide:
        {"\n"}• Full name
        {"\n"}• Email address
        {"\n"}• Age or date of birth
        {"\n"}• Phone number
        {"\n"}• A secure password
        {"\n"}You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.
      </Text>

      <Text style={styles.sectionTitle}>3. User Data Collection & Privacy</Text>
      <Text style={styles.paragraph}>
        By using Kashmakena, you consent to the collection and use of your personal information, including:
        {"\n"}• Name
        {"\n"}• Email
        {"\n"}• Age
        {"\n"}• Phone number
        {"\n"}We use this data to verify your age, comply with applicable regulations, and communicate with you about services, promotions, and security notices.
        {"\n"}Please review our Privacy Policy for full details on how we protect your information.
      </Text>

      <Text style={styles.sectionTitle}>4. Use of the App</Text>
      <Text style={styles.paragraph}>
        You agree not to:
        {"\n"}• Violate any laws or regulations, especially those related to cannabis use or sales.
        {"\n"}• Impersonate any person or provide false or misleading information.
        {"\n"}• Attempt to gain unauthorized access to Kashmakena’s systems or interfere with the app’s operation.
        {"\n"}We reserve the right to suspend or terminate your access if you breach these Terms.
      </Text>

      <Text style={styles.sectionTitle}>5. Promotions, Discounts & Events</Text>
      <Text style={styles.paragraph}>
        From time to time, Kashmakena may offer promotional discounts or host events (in-person or virtual).
        {"\n"}All promotions, discounts, and events are subject to change or cancellation at any time without notice.
        {"\n"}We are not liable for any inconvenience or loss resulting from changes to or cancellations of such offerings.
      </Text>

      <Text style={styles.sectionTitle}>6. Legal Compliance</Text>
      <Text style={styles.paragraph}>
        You are solely responsible for ensuring that your use of Kashmakena complies with local laws and regulations regarding cannabis.
        {"\n"}We do not guarantee that the app or its services are legal or appropriate in any jurisdiction outside where explicitly permitted by law.
      </Text>

      <Text style={styles.sectionTitle}>7. Intellectual Property</Text>
      <Text style={styles.paragraph}>
        All content, graphics, trademarks, logos, and other intellectual property within Kashmakena are the property of Kashmakena or its licensors and may not be used without our written consent.
      </Text>

      <Text style={styles.sectionTitle}>8. Limitation of Liability</Text>
      <Text style={styles.paragraph}>
        Kashmakena shall not be liable for any indirect, incidental, consequential, or special damages arising from your use of the app.
        {"\n"}All services are provided “as is” and “as available”, without warranties of any kind.
      </Text>

      <Text style={styles.sectionTitle}>9. Termination</Text>
      <Text style={styles.paragraph}>
        We may suspend or terminate your account at any time, for any reason, including violations of these Terms or applicable laws.
      </Text>

      <Text style={styles.sectionTitle}>10. Modifications to Terms</Text>
      <Text style={styles.paragraph}>
        We may update these Terms at any time. If changes are material, we will notify you through the app or via email. Continued use of Kashmakena after such changes constitutes your acceptance of the revised Terms.
      </Text>

      <Text style={styles.sectionTitle}>11. Contact Us</Text>
      <Text style={styles.paragraph}>
        If you have any questions or concerns about these Terms, you can contact us at:
        {"\n"}Email: [Insert Contact Email]
      </Text>
    </ScrollView>
  );
};

export default TermsOfServiceScreen;

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
