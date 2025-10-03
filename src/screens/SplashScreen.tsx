import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type SplashScreenProps = NativeStackScreenProps<RootStackParamList, "Splash">;

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Onboarding"); // ✅ Navigate to Onboarding after 3s
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#BFD8F6" />
      <ImageBackground
        source={require("../assets/SplashScreen.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.centerContent}>
          <Text style={styles.title}>
            Echo<Text style={styles.highlight}>See</Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BFD8F6",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  centerContent: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#0B2A75",
    letterSpacing: 1,
  },
  highlight: {
    color: "#1D73E8",
  },
});
