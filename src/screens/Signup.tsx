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
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.helpText}>Need some help?</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Getting Started</Text>
      <Text style={styles.subtitle}>Create an account to continue</Text>

      {/* Inputs */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Gmail"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="User Name"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            style={styles.passwordInput}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={20}
              color="#666"
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
          size={20}
          color="#007BFF"
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
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
      </Text>

      {/* OR Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.divider} />
      </View>

      {/* Social Login */}
      <Text style={styles.continueText}>Continue with</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialBtn}>
          <FontAwesome name="facebook" size={30} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <FontAwesome name="google" size={30} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <FontAwesome name="apple" size={30} color="#000000" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  helpText: {
    color: "#007BFF",
    fontSize: 14,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#007BFF",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#007BFF",
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 10,
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  rememberText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#333",
  },
  signupBtn: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  signupText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginText: {
    marginTop: 15,
    textAlign: "center",
    color: "#555",
  },
  loginLink: {
    color: "#007BFF",
    fontWeight: "bold",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  orText: {
    marginHorizontal: 10,
    color: "#666",
  },
  continueText: {
    textAlign: "center",
    marginBottom: 10,
    color: "#666",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  socialBtn: {
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    width: 60,
  },
});

export default Signup;
