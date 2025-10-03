/**
 * EchoSee App Entry
 * Splash screen first
 */

import React from "react";
import { StatusBar, StyleSheet, useColorScheme, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import SplashScreen from "./src/screens/SplashScreen";
// import Signup from "./src/screens/Signup";
//import LoginScreen from './src/screens/LoginScreen';
 import HomeScreen from './src/screens/HomeScreen';
const App: React.FC = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={styles.container}>
        {/* <SplashScreen /> */}
        {/* <LoginScreen /> */}
        {/* <Signup /> */}
        <HomeScreen />
      </View>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
