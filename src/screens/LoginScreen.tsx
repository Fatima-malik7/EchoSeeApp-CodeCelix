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

type LoginScreenNavigationProp = NativeStackNavigationProp<
RootStackParamList,
"Login"

>;

const LoginScreen: React.FC = () => {
const navigation = useNavigation<LoginScreenNavigationProp>();
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [secureText, setSecureText] = useState(true);
const [rememberMe, setRememberMe] = useState(false);

const handleLogin = () => {
if (!username.trim() || !password.trim()) {
Alert.alert("Missing Fields", "Please enter both username and password.");
return;
}
if (password.length < 6) {
Alert.alert("Weak Password", "Password must be at least 6 characters long.");
return;
}

Alert.alert("Login Successful", `Welcome, ${username}!`);
navigation.navigate("Home");


};

const handleForgotPassword = () => {
if (!username.trim()) {
Alert.alert(
"Forgot Password",
"Please enter your username or email to reset your password."
);
return;
}

// You can replace this with actual navigation:
// navigation.navigate("ForgotPassword");
Alert.alert(
  "Password Reset",
  `A password reset link has been sent to ${username}.`
);


};

return (
<View style={styles.container}>
{/* Header */}
<View style={styles.topBar}>
<TouchableOpacity onPress={() => navigation.navigate("Signup")}>
<Text style={styles.forgotText}>Create new account</Text>
</TouchableOpacity>
<TouchableOpacity onPress={handleForgotPassword}>
<Text style={styles.forgotText}>Forgot password?</Text>
</TouchableOpacity>
</View>

  {/* Headings */}
  <Text style={styles.title}>Let’s start</Text>
  <Text style={styles.subtitle}>Good to see you back</Text>

  {/* Username */}
  <View style={styles.inputWrapper}>
    <TextInput
      style={styles.input}
      placeholder="User Name or Email"
      placeholderTextColor="#555"
      value={username}
      onChangeText={setUsername}
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

  {/* Remember me */}
  <TouchableOpacity
    style={styles.rememberRow}
    onPress={() => setRememberMe(!rememberMe)}
  >
    <Ionicons
      name={rememberMe ? "checkbox" : "square-outline"}
      size={18}
      color="#3A86FF"
    />
    <Text style={styles.rememberText}>Remember me next time</Text>
  </TouchableOpacity>

  {/* Login Button */}
  <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
    <Text style={styles.loginText}>Log In</Text>
  </TouchableOpacity>

  {/* Signup link */}
  <Text style={styles.signupText}>
    Don’t have an account?{" "}
    <Text
      style={styles.signupLink}
      onPress={() => navigation.navigate("Signup")}
    >
      Sign Up
    </Text>
  </Text>

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



const styles = StyleSheet.create({
container: { flex: 1, padding: 25, backgroundColor: "#000" },
topBar: {
flexDirection: "row",
justifyContent: "space-between",
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
rememberRow: { flexDirection: "row", alignItems: "center", marginBottom: 25 },
rememberText: { marginLeft: 8, color: "#ccc" },
loginBtn: {
backgroundColor: "#3A86FF",
padding: 15,
borderRadius: 25,
alignItems: "center",
marginBottom: 15,
},
loginText: { color: "#fff", fontWeight: "600", fontSize: 16 },
signupText: {
textAlign: "center",
fontSize: 14,
color: "#ccc",
marginBottom: 20,
},
signupLink: { color: "#3A86FF", fontWeight: "600" },
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
export default LoginScreen;