import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import PartnerUpdateForm from "../../components/partnerComponents/partnerProfile";
import RenewRoleCheck from '../../components/roleComponents/renewRoleCheck';

const partnerProfileEdit = () => {

  return (
      <SafeAreaView style={styles.container}>
      <RenewRoleCheck/>
        <>
          <PartnerUpdateForm />
        </>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#1f1f1f",
      alignItems: "center",
      justifyContent: "center",
    },
});
export default partnerProfileEdit;