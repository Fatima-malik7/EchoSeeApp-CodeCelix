import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App"; // ✅ Typed navigation

type OnboardingNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Onboarding"
>;

const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation<OnboardingNavigationProp>();

  const handleFinish = () => {
    // 👇 Navigate to your next screen after onboarding
    navigation.replace("LoginScreen"); 
  };

  return (
    <Onboarding
      bottomBarHighlight={false}
      showSkip
      showNext={false}
      onSkip={handleFinish}
      onDone={handleFinish}
      DoneButtonComponent={DoneButton}
      SkipButtonComponent={SkipButton}
      pages={[
        {
          backgroundColor: "#FFFFFF",
          image: (
            <ImageBackground
              source={require("../assets/onboarding1.png")}
              style={styles.backgroundImage}
              resizeMode="cover"
            >
              <View style={styles.slideContent}>
                <Text style={styles.logo}>
                  Echo<Text style={styles.logoHighlight}>See</Text>
                </Text>
                <Text style={styles.heyText}>HEY! EVERYONE</Text>
                <Text style={styles.subtitle}>
                  Save time with our speech transcription
                </Text>
              </View>
            </ImageBackground>
          ),
          title: "",
          subtitle: "",
        },
        {
          backgroundColor: "#FFFFFF",
          image: (
            <ImageBackground
              source={require("../assets/onboarding2.png")}
              style={styles.backgroundImage}
              resizeMode="cover"
            >
              <View style={styles.slideContent}>
                <Text style={styles.title}>
                  Speak freely, we will handle the Translation
                </Text>
                <Text style={styles.subtitleSmall}>
                  Tailored to your preferences
                </Text>
              </View>
            </ImageBackground>
          ),
          title: "",
          subtitle: "",
        },
      ]}
    />
  );
};

// ✅ Skip Button
const SkipButton = (props: any) => (
  <TouchableOpacity style={styles.skipButton} {...props}>
    <Text style={styles.skipButtonText}>Skip</Text>
  </TouchableOpacity>
);

// ✅ Done / Get Started Button
const DoneButton = (props: any) => (
  <TouchableOpacity style={styles.doneButton} {...props}>
    <Text style={styles.doneButtonText}>Get Started</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  slideContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#0B2A75",
  },
  logoHighlight: {
    color: "#1D73E8",
  },
  heyText: {
    fontSize: 14,
    color: "#0B2A75",
    marginTop: 10,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: "#0B2A75",
    textAlign: "center",
    fontWeight: "500",
    marginTop: 15,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
    color: "#0B2A75",
    lineHeight: 26,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  subtitleSmall: {
    fontSize: 14,
    textAlign: "center",
    color: "#1D73E8",
  },
  skipButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  skipButtonText: {
    color: "#1D73E8",
    fontSize: 14,
  },
  doneButton: {
    backgroundColor: "#1D73E8",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: 15,
  },
  doneButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default OnboardingScreen;
