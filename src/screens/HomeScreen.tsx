import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";


type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const HomeScreen: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const navigation = useNavigation<HomeScreenNavigationProp>(); // ✅ typed navigation

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>ES</Text>
          </View>
          <Text style={styles.appName}>EchoSee</Text>
        </View>
        <Text style={styles.status}>● Stopped</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 15 }}>
        {/* Language Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Language</Text>
            <Ionicons name="language-outline" size={20} color="#00BFFF" />
          </View>
          <View style={styles.languageGrid}>
            {["English", "اردو", "汉语", "Español"].map((lang) => (
              <TouchableOpacity
                key={lang}
                style={[
                  styles.languageBtn,
                  selectedLanguage === lang && styles.selectedLanguage,
                ]}
                onPress={() => setSelectedLanguage(lang)}
              >
                <Text
                  style={[
                    styles.languageText,
                    selectedLanguage === lang && styles.selectedLanguageText,
                  ]}
                >
                  {lang}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Live Subtitles */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Live Subtitles</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="mic" size={20} color="#00BFFF" />
              <Text style={{ marginLeft: 5, color: "#fff" }}>EN</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.subtitleBox}>
            <Text style={{ color: "#999" }}>
              Press start to begin live subtitle
            </Text>
          </TouchableOpacity>
        </View>

        {/* Save & Font Size */}
        <View style={styles.optionsRow}>
          <TouchableOpacity style={styles.optionCard}>
            <Ionicons name="save-outline" size={28} color="#00BFFF" />
            <Text style={styles.optionText}>Save Last 5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionCard}>
            <FontAwesome name="font" size={28} color="#00BFFF" />
            <Text style={styles.optionText}>Font Size</Text>
          </TouchableOpacity>
        </View>

        {/* Play Button */}
       <TouchableOpacity
        style={styles.playBtn}
        onPress={() => navigation.navigate("HomeListening")} // ✅ now works fine
      >
        <Ionicons name="play" size={40} color="#fff" />
      </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={22} color="#00BFFF" />
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="article" size={22} color="#999" />
          <Text style={styles.navText}>Transcripts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="hardware-chip-outline" size={22} color="#999" />
          <Text style={styles.navText}>Devices</Text>
        </TouchableOpacity>

        {/* 👑 Premium Tab */}
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome5 name="crown" size={20} color="#FFD700" />
          <Text style={[styles.navText, { color: "#FFD700" }]}>Premium</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="settings-outline" size={22} color="#999" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#222",
  },
  headerLeft: { flexDirection: "row", alignItems: "center" },
  avatar: {
    backgroundColor: "#00BFFF",
    width: 35,
    height: 35,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  avatarText: { color: "#fff", fontWeight: "bold" },
  appName: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  status: { color: "red", fontWeight: "600" },

  // Section
  section: {
    backgroundColor: "#111",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#222",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 16, fontWeight: "bold", color: "#fff" },

  languageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  languageBtn: {
    backgroundColor: "#1a1a1a",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    width: "48%",
    marginVertical: 5,
  },
  selectedLanguage: { backgroundColor: "#00BFFF" },
  languageText: { color: "#ccc", fontWeight: "500" },
  selectedLanguageText: { color: "#fff" },

  // Card
  card: {
    backgroundColor: "#111",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#222",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  cardTitle: { fontSize: 16, fontWeight: "bold", color: "#fff" },
  subtitleBox: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },

  // Options
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  optionCard: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
  },
  optionText: { marginTop: 5, fontSize: 14, color: "#fff" },

  // Play Button
  playBtn: {
    backgroundColor: "#00BFFF",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 20,
  },

  // Bottom Navigation
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: "#222",
    backgroundColor: "#111",
  },
  navItem: { alignItems: "center" },
  navText: { fontSize: 12, color: "#999" },
  navTextActive: { fontSize: 12, color: "#00BFFF", fontWeight: "bold" },
});

