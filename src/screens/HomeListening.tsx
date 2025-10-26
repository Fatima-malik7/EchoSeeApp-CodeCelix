import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App"; // adjust path if needed


const HomeListening: React.FC = () => {
  const [language, setLanguage] = useState("English");
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>ES</Text>
            </View>
            <Text style={styles.appName}>EchoSee</Text>
          </View>
          <View style={styles.statusRow}>
            <View style={styles.statusDotListening} />
            <Text style={styles.statusTextListening}>Listening</Text>
          </View>
        </View>

        {/* Language Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Language</Text>
            <Ionicons name="language-outline" size={20} color="#4da6ff" />
          </View>
          <View style={styles.languageGrid}>
            {["English", "اردو", "汉语", "Español"].map((lang) => (
              <TouchableOpacity
                key={lang}
                style={[
                  styles.languageBtn,
                  language === lang && styles.selectedLanguage,
                ]}
                onPress={() => setLanguage(lang)}
              >
                <Text
                  style={[
                    styles.languageText,
                    language === lang && styles.selectedLanguageText,
                  ]}
                >
                  {lang}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Live Subtitles Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Live Subtitles</Text>
            <Ionicons name="mic-outline" size={20} color="#4da6ff" />
          </View>
          <TouchableOpacity style={styles.subtitleBox}>
            <Text style={styles.subtitleText}>Listening for speech...</Text>
          </TouchableOpacity>
        </View>

        {/* Options Section */}
        <View style={styles.optionRow}>
          <TouchableOpacity style={styles.optionCard}>
            <Ionicons name="save-outline" size={28} color="#4da6ff" />
            <Text style={styles.optionText}>Save Last 5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionCard}>
            <FontAwesome name="font" size={28} color="#4da6ff" />
            <Text style={styles.optionText}>Font Size</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

     {/* Recording Button */}
<View style={styles.recordBtnContainer}>
  <TouchableOpacity
    style={styles.recordBtn}
    onPress={() => navigation.navigate("Transcript")}
  >
    <MaterialIcons name="stop" size={35} color="#fff" />
  </TouchableOpacity>
</View>


        {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Home" as never)}
        >
          <Ionicons name="home" size={22} color="#4da6ff" />
          <Text style={styles.navLabelActive}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Transcript" as never)}
        >
          <Ionicons name="document-text-outline" size={22} color="#4da6ff" />
          <Text style={styles.navLabelActive}>Transcripts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("DevicePairing" as never)}
        >
          <Ionicons name="bluetooth-outline" size={22} color="#888" />
          <Text style={styles.navLabel}>Devices</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Premium" as never)}
        >
          <FontAwesome5 name="crown" size={20} color="#FFD700" />
          <Text style={[styles.navLabel, { color: "#FFD700" }]}>Premium</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Settings" as never)}
        >
          <Ionicons name="settings-outline" size={22} color="#888" />
          <Text style={styles.navLabel}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HomeListening;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  scrollContainer: { padding: 20, paddingBottom: 100 },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  profileRow: { flexDirection: "row", alignItems: "center" },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#4da6ff",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: { color: "#fff", fontWeight: "bold" },
  appName: { fontSize: 18, fontWeight: "bold", marginLeft: 8, color: "#fff" },
  statusRow: { flexDirection: "row", alignItems: "center" },
  statusDotListening: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#00e676",
    marginRight: 5,
  },
  statusTextListening: { color: "#00e676", fontSize: 13 },

  // Sections
  section: {
    backgroundColor: "#111",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: { fontWeight: "bold", fontSize: 16, color: "#fff" },

  // Language Grid
  languageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  languageBtn: {
    backgroundColor: "#222",
    width: "48%",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  selectedLanguage: { backgroundColor: "#4da6ff" },
  languageText: { color: "#ccc", fontWeight: "500" },
  selectedLanguageText: { color: "#fff" },

  // Subtitles
  subtitleBox: {
    backgroundColor: "#222",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
  },
  subtitleText: { color: "#aaa" },

  // Options
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  optionCard: {
    backgroundColor: "#111",
    width: "48%",
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 10,
  },
  optionText: { marginTop: 8, color: "#fff" },

  // Record Button
  recordBtnContainer: {
    position: "absolute",
    bottom: 75,
    alignSelf: "center",
  },
  recordBtn: {
    backgroundColor: "#FF3B30",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },

  // Bottom Nav
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#111",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#222",
  },
  navItem: { alignItems: "center" },
  navLabel: { color: "#888", fontSize: 12, marginTop: 2 },
  navLabelActive: { color: "#4da6ff", fontSize: 12, marginTop: 2 },
});

