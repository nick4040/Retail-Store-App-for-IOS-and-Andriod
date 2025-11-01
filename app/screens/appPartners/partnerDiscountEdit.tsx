import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import ManageDiscounts from "../../components/partnerComponents/partnerEditDiscount";
import RenewRoleCheck from '../../components/roleComponents/renewRoleCheck';

const partnerProfileEdit = () => {

  return (
      <SafeAreaView style={styles.container}>
      <RenewRoleCheck/>
        <>
          <ManageDiscounts />
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
export default partnerProfileEdit;