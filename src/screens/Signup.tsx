import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={22} color="#3A86FF" />
        </TouchableOpacity>
        <Text style={styles.helpText}>Need some help?</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Getting Started</Text>
      <Text style={styles.subtitle}>Create an account to continue</Text>

      {/* Inputs */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Gmail"
            placeholderTextColor="#555"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="User Name"
            placeholderTextColor="#555"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#555"
            secureTextEntry={!showPassword}
            style={styles.passwordInput}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={20}
              color="#777"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Remember me */}
      <TouchableOpacity
        style={styles.rememberContainer}
        onPress={() => setRemember(!remember)}
      >
        <Ionicons
          name={remember ? "checkbox" : "square-outline"}
          size={18}
          color="#3A86FF"
        />
        <Text style={styles.rememberText}>Remember for the next time</Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <Text style={styles.loginText}>
        Already have an account?{" "}
        <Text style={styles.loginLink}>Login</Text>
      </Text>

      {/* OR Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.divider} />
      </View>

      {/* Social Login */}
      <Text style={styles.continueText}>Continue with</Text>
      <View style={styles.socialContainer}>
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
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 25,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  helpText: {
    color: "#3A86FF",
    fontSize: 13,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 5,
    color: "#fff",
  },
  subtitle: {
    fontSize: 15,
    color: "#aaa",
    marginBottom: 25,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputWrapper: {
    backgroundColor: "#fff",
    borderRadius: 25,
    marginBottom: 12,
    paddingHorizontal: 15,
  },
  input: {
    paddingVertical: 10,
    color: "#000",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 10,
    color: "#000",
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  rememberText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#ccc",
  },
  signupBtn: {
    backgroundColor: "#3A86FF",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  signupText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  loginText: {
    marginTop: 15,
    textAlign: "center",
    color: "#ccc",
    fontSize: 14,
  },
  loginLink: {
    color: "#3A86FF",
    fontWeight: "600",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#222",
  },
  orText: {
    marginHorizontal: 10,
    color: "#888",
  },
  continueText: {
    textAlign: "center",
    marginBottom: 15,
    fontSize: 14,
    color: "#888",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  socialBtn: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 15,
    width: 60,
    alignItems: "center",
  },
});
