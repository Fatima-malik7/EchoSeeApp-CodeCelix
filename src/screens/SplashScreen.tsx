import React, { useEffect } from "react";
import { View, ImageBackground, StyleSheet, Text, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";

type SplashScreenNavigationProp = NativeStackNavigationProp<
RootStackParamList,
"Login"

>;

const SplashScreen: React.FC = () => {
const navigation = useNavigation<SplashScreenNavigationProp>();

useEffect(() => {
const timer = setTimeout(() => {
navigation.replace("Login");
}, 2500); // 2.5 seconds delay

return () => clearTimeout(timer);


}, [navigation]);

return (
<ImageBackground
source={require("../../assets/splash-bg.png")}
style={styles.background}
resizeMode="cover"
>
<View style={styles.overlay}>
<Text style={styles.title}>EchoSee</Text>
<ActivityIndicator size="large" color="#fff" style={styles.indicator} />
</View>
</ImageBackground>
);
};


export default SplashScreen;

const styles = StyleSheet.create({
background: {
flex: 1,
justifyContent: "center",
alignItems: "center",
},
overlay: {
backgroundColor: "rgba(0,0,0,0.5)",
width: "100%",
height: "100%",
justifyContent: "center",
alignItems: "center",
},
title: {
fontSize: 40,
color: "#fff",
fontWeight: "bold",
letterSpacing: 1.5,
},
indicator: {
marginTop: 20,
},
});
