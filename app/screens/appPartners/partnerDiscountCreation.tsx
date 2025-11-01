import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import PartnerDiscountUpdateForm from "../../components/partnerComponents/partnerDiscount";
import RenewRoleCheck from '../../components/roleComponents/renewRoleCheck';

const partnerDiscountCreation = () => {

  return (
      <SafeAreaView style={styles.container}>
      <RenewRoleCheck/>
        <>
          <PartnerDiscountUpdateForm />
        </>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1f1f1f",
      alignItems: "center",
      justifyContent: "center",
    },
});
export default partnerDiscountCreation;