import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from "react-native";

//Explicitly type the component as React.FC (functional component)
const SplashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#BFD8F6" />

      {/* Full Background Image */}
      <ImageBackground
        source={require("../assets/SplashScreen.png")}
        style={styles.background}
        resizeMode="cover"
      >
        {/* If your background already has logo + text, remove below */}
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
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centerContent: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0B2A75",
  },
  highlight: {
    color: "#1D73E8",
  },
});
