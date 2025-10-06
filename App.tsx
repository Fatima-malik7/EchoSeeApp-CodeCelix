import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import HomeListening from "./src/screens/HomeListening";
// import HomeScreen from "./src/screens/HomeScreen";
// import Signup from "./src/screens/Signup";
import TranscriptScreen from "./src/screens/TranscriptScreen";
// import LoginScreen from "./src/screens/LoginScreen";

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        {/* <HomeListening /> */}
        {/* <HomeScreen /> */}
        {/* <LoginScreen /> */}
        {/* <Signup /> */}
        <TranscriptScreen />
      </View>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Always black
  },
});
