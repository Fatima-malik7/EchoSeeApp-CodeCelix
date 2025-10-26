// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   SafeAreaView,
// } from "react-native";
// import LinearGradient from "react-native-linear-gradient";

// const OnboardingScreen: React.FC = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Gradient background */}
//       <LinearGradient colors={["#ffffff", "#0D47A1"]} style={styles.gradient}>
//         {/* Logo */}
//         <View style={styles.logoContainer}>
//           <Image
//             source={require("../assets/logo.png")}
//             // 👈 replace with your actual logo path
//             style={styles.logo}
//             resizeMode="contain"
//           />
//           <Text style={styles.appName}>
//             Echo<Text style={styles.appNameBlue}>See</Text>
//           </Text>
//         </View>

//         {/* Waveform Image */}
//         <View style={styles.waveContainer}>
//           <Image
//             source={require("../assets/wave.png")}
//             // 👈 replace with your waveform image
//             style={styles.wave}
//             resizeMode="contain"
//           />
//         </View>

//         {/* Heading */}
//         <Text style={styles.heading}>HEY! EVERYONE</Text>

//         {/* Subtitle */}
//         <Text style={styles.subtitle}>
//           💬 Save time with our speech transcription
//         </Text>

//         {/* Pagination dots */}
//         <View style={styles.pagination}>
//           <View style={[styles.dot, { opacity: 0.5 }]} />
//           <View style={[styles.dot, { width: 25 }]} />
//           <View style={[styles.dot, { opacity: 0.5 }]} />
//         </View>

//         {/* Buttons */}
//         <View style={styles.buttonRow}>
//           <TouchableOpacity>
//             <Text style={styles.skipText}>Skip Now</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.startButton}>
//             <Text style={styles.startText}>Get Started ➜</Text>
//           </TouchableOpacity>
//         </View>
//       </LinearGradient>
//     </SafeAreaView>
//   );
// };

// export default OnboardingScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   gradient: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingVertical: 40,
//   },
//   logoContainer: {
//     alignItems: "center",
//   },
//   logo: {
//     width: 70,
//     height: 70,
//     marginBottom: 5,
//   },
//   appName: {
//     fontSize: 26,
//     fontWeight: "700",
//     color: "#000",
//   },
//   appNameBlue: {
//     color: "#007BFF",
//   },
//   waveContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     marginVertical: 30,
//   },
//   wave: {
//     width: 200,
//     height: 100,
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: "600",
//     color: "#000",
//     marginBottom: 10,
//   },
//   subtitle: {
//     color: "#fff",
//     textAlign: "center",
//     fontSize: 14,
//     paddingHorizontal: 40,
//     lineHeight: 20,
//   },
//   pagination: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 15,
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: "#fff",
//     marginHorizontal: 5,
//   },
//   buttonRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     width: "80%",
//     marginTop: 20,
//   },
//   skipText: {
//     color: "#fff",
//     fontSize: 14,
//     fontWeight: "500",
//   },
//   startButton: {
//     backgroundColor: "#fff",
//     borderRadius: 30,
//     paddingVertical: 10,
//     paddingHorizontal: 25,
//   },
//   startText: {
//     color: "#007BFF",
//     fontSize: 14,
//     fontWeight: "600",
//   },
// });
