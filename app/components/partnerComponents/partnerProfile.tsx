import React, { FC, ReactElement, useState } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import Parse from "../parseInit";
import { LinearGradient } from 'expo-linear-gradient';

export const PartnerUpdateForm: FC<{}> = (): ReactElement => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const createPartner = async (): Promise<boolean> => {
    try {
      const currentUser = await Parse.User.currentAsync();

      if (!currentUser) {
        setErrorMessage("You must be logged in to create a partner.");
        return false;
      }
      const fetchedRole = currentUser.get('role')
      const Partners = Parse.Object.extend("Partners");
      const partnerObj = new Partners();


      partnerObj.set("Name", name.trim());
      partnerObj.set("Description", description.trim());
      partnerObj.set("companyName", fetchedRole);

      const acl = new Parse.ACL(currentUser);
      acl.setPublicReadAccess(true);
      acl.setPublicWriteAccess(false);
      partnerObj.setACL(acl);

      await partnerObj.save();

      Alert.alert("✅ Success", "Your Partner profile was created!");
      router.push("screens/appPartners/renewPortal");
    } catch (error: any) {
      console.error("Create error:", error);
      setErrorMessage(error.message || "Error creating Partner profile.");
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Your Partner Page</Text>

      {/* ✅ Gradient TextInput 1 */}
      <LinearGradient
        colors={['#ff66c4', '#ffde59']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.inputGradient}
      >
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Name of Company"
          placeholderTextColor="#ffffff"
          onChangeText={setName}
        />
      </LinearGradient>

      {/* ✅ Gradient TextInput 2 */}
      <LinearGradient
        colors={['#ff66c4', '#ffde59']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.inputGradient}
      >
        <TextInput
          style={styles.input}
          value={description}
          placeholder="Company Description"
          placeholderTextColor="#ffffff"
          onChangeText={setDescription}
        />
      </LinearGradient>

      <TouchableOpacity onPress={createPartner} style={styles.button}>
        <Text style={styles.buttonText}>Update Your Partner Page</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/screens/appPartners/renewPortal')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Back to Portal</Text>
      </TouchableOpacity>

      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#1f1f1f",
    paddingBottom: 300,
    paddingTop: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 25,
    textAlign: "center",
    fontFamily: 'TT-Hoves-Regular',
  },

  // ✅ Wrapper for gradient input
  inputGradient: {
    borderRadius: 10,
    marginVertical: 8,
    padding: 2,
  },

  input: {
    height: 50,
    paddingHorizontal: 12,
    borderRadius: 10,
    color: "#ffffff",
    fontSize: 16,
    fontFamily: 'TT-Hoves-Regular',
  },

  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: 'TT-Hoves-Regular',
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
    fontFamily: 'TT-Hoves-Regular',
  },
});

export default PartnerUpdateForm;
