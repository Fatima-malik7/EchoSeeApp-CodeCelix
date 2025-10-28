import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./src/screens/SplashScreen"; // 👈 Added splash screen
import LoginScreen from "./src/screens/LoginScreen";
import Signup from "./src/screens/Signup";
import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import DevicePairingScreen from "./src/screens/DevicePairingScreen";
import DevicePairing from "./src/screens/DevicePairing";
import HomeListening from "./src/screens/HomeListening";
import TranscriptScreen from "./src/screens/TranscriptScreen";
import PremiumScreen from "./src/screens/PremiumScreen";
import TranscriptDetailScreen from "./src/screens/TranscriptDetailScreen";

export type Transcript = {
  id: string;
  title: string;
  time: string;
  duration: string;
  description: string;
  speakers: number;
};

export type RootStackParamList = {
  Splash: undefined; // 👈 Added splash route type
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  Settings: undefined;
  DevicePairing: undefined;
  DevicePairingScreen: undefined;
  HomeListening: undefined;
  Transcript: undefined;
  Premium: undefined;
  TranscriptDetail: { transcript: Transcript };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Stack.Navigator
          initialRouteName="Splash" // 👈 Run Splash first
          screenOptions={{ headerShown: false }}
        >
          {/* 👇 Added splash screen */}
          <Stack.Screen name="Splash" component={SplashScreen} />

          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="DevicePairing" component={DevicePairing} />
          <Stack.Screen
            name="DevicePairingScreen"
            component={DevicePairingScreen}
          />
          <Stack.Screen name="HomeListening" component={HomeListening} />
          <Stack.Screen name="Transcript" component={TranscriptScreen} />
          <Stack.Screen name="Premium" component={PremiumScreen} />
          <Stack.Screen
            name="TranscriptDetail"
            component={TranscriptDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
