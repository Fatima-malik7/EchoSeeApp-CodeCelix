import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePassword = () => setSecureText(!secureText);
  const toggleRemember = () => setRememberMe(!rememberMe);

  const handleLogin = () => {
    Alert.alert('Login Pressed', `Username: ${username}, Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      {/* Heading */}
      <Text style={styles.title}>Let’s start</Text>
      <Text style={styles.subtitle}>Good to see you back</Text>

      {/* Username Input */}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="User Name"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={secureText}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.eyeIcon} onPress={togglePassword}>
          <Icon name={secureText ? "eye-off" : "eye"} size={20} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Remember Me */}
      <TouchableOpacity style={styles.rememberRow} onPress={toggleRemember}>
        <Icon
          name={rememberMe ? "checkbox" : "square-outline"}
          size={20}
          color="#007AFF"
        />
        <Text style={styles.rememberText}>Remember for the next time</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      {/* Sign up */}
      <Text style={styles.signupText}>
        Don’t have an account? <Text style={styles.signupLink}>Sign Up</Text>
      </Text>

      {/* Divider */}
      <Text style={styles.orText}>OR</Text>
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

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  forgotText: {
    color: "#007AFF",
    fontSize: 13,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  eyeIcon: {
    padding: 5,
  },
  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  rememberText: {
    marginLeft: 8,
    color: "#444",
  },
  loginBtn: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  loginText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  signupText: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: 20,
  },
  signupLink: {
    color: "#007AFF",
    fontWeight: "600",
  },
  orText: {
    textAlign: "center",
    marginBottom: 5,
    fontSize: 14,
    color: "#888",
  },
  continueText: {
    textAlign: "center",
    marginBottom: 15,
    fontSize: 14,
    color: "#888",
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  socialBtn: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 12,
  },
});
