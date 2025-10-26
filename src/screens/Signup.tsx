import React, { useState } from "react";
import {
View,
Text,
TextInput,
TouchableOpacity,
StyleSheet,
Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type SignupScreenNavigationProp = NativeStackNavigationProp<
RootStackParamList,
"Signup"

>;

const SignupScreen: React.FC = () => {
const navigation = useNavigation<SignupScreenNavigationProp>();
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [secureText, setSecureText] = useState(true);
const [secureConfirm, setSecureConfirm] = useState(true);

const handleSignup = () => {
// Check empty fields
if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
Alert.alert("Missing Fields", "Please fill in all fields.");
return;
}

// Validate email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  Alert.alert("Invalid Email", "Please enter a valid email address.");
  return;
}

// Password strength
if (password.length < 6) {
  Alert.alert("Weak Password", "Password must be at least 6 characters long.");
  return;
}

// Confirm password match
if (password !== confirmPassword) {
  Alert.alert("Password Mismatch", "Passwords do not match.");
  return;
}

Alert.alert("Signup Successful", `Welcome, ${username}!`);
navigation.replace("Home");


};

return (
<View style={styles.container}>
{/* Header */}
<View style={styles.topBar}>
<TouchableOpacity onPress={() => navigation.navigate("Login")}>
<Text style={styles.forgotText}>Already have an account?</Text>
</TouchableOpacity>
</View>

  {/* Headings */}
  <Text style={styles.title}>Create Account</Text>
  <Text style={styles.subtitle}>Join us and explore</Text>

  {/* Username */}
  <View style={styles.inputWrapper}>
    <TextInput
      style={styles.input}
      placeholder="Username"
      placeholderTextColor="#555"
      value={username}
      onChangeText={setUsername}
    />
  </View>

  {/* Email */}
  <View style={styles.inputWrapper}>
    <TextInput
      style={styles.input}
      placeholder="Email"
      placeholderTextColor="#555"
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"
    />
  </View>

  {/* Password */}
  <View style={styles.inputWrapper}>
    <TextInput
      style={styles.input}
      placeholder="Password"
      placeholderTextColor="#555"
      secureTextEntry={secureText}
      value={password}
      onChangeText={setPassword}
    />
    <TouchableOpacity
      style={styles.eyeIcon}
      onPress={() => setSecureText(!secureText)}
    >
      <Ionicons name={secureText ? "eye-off" : "eye"} size={20} color="#777" />
    </TouchableOpacity>
  </View>

  {/* Confirm Password */}
  <View style={styles.inputWrapper}>
    <TextInput
      style={styles.input}
      placeholder="Confirm Password"
      placeholderTextColor="#555"
      secureTextEntry={secureConfirm}
      value={confirmPassword}
      onChangeText={setConfirmPassword}
    />
    <TouchableOpacity
      style={styles.eyeIcon}
      onPress={() => setSecureConfirm(!secureConfirm)}
    >
      <Ionicons name={secureConfirm ? "eye-off" : "eye"} size={20} color="#777" />
    </TouchableOpacity>
  </View>

  {/* Signup Button */}
  <TouchableOpacity style={styles.signupBtn} onPress={handleSignup}>
    <Text style={styles.signupText}>Sign Up</Text>
  </TouchableOpacity>

  {/* Divider */}
  <Text style={styles.orText}>or</Text>
  <Text style={styles.continueText}>Continue with</Text>

  {/* Social Buttons */}
  <View style={styles.socialRow}>
    <TouchableOpacity style={styles.socialBtn}>
      <FontAwesome name="google" size={20} color="#DB4437" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.socialBtn}>
      <FontAwesome name="facebook" size={20} color="#1877F2" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.socialBtn}>
      <FontAwesome name="apple" size={20} color="#000" />
    </TouchableOpacity>
  </View>
</View>


);
};

export default SignupScreen;

const styles = StyleSheet.create({
container: { flex: 1, padding: 25, backgroundColor: "#000" },
topBar: {
flexDirection: "row",
justifyContent: "flex-end",
marginBottom: 40,
},
forgotText: { color: "#3A86FF", fontSize: 13 },
title: { fontSize: 28, fontWeight: "700", color: "#fff", marginBottom: 5 },
subtitle: { fontSize: 15, color: "#aaa", marginBottom: 25 },
inputWrapper: {
flexDirection: "row",
alignItems: "center",
backgroundColor: "#fff",
borderRadius: 25,
marginBottom: 15,
paddingHorizontal: 15,
},
input: { flex: 1, paddingVertical: 10, color: "#000" },
eyeIcon: { padding: 5 },
signupBtn: {
backgroundColor: "#3A86FF",
padding: 15,
borderRadius: 25,
alignItems: "center",
marginBottom: 15,
},
signupText: { color: "#fff", fontWeight: "600", fontSize: 16 },
orText: { textAlign: "center", color: "#888" },
continueText: {
textAlign: "center",
marginBottom: 15,
fontSize: 14,
color: "#888",
},
socialRow: { flexDirection: "row", justifyContent: "space-around" },
socialBtn: {
backgroundColor: "#fff",
padding: 12,
borderRadius: 15,
width: 60,
alignItems: "center",
},
});