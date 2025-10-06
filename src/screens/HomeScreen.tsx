// src/screens/HomeScreen.tsx
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

const HomeScreen: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

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
            <Ionicons name="language-outline" size={20} color="#007BFF" />
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
              <Ionicons name="mic" size={20} color="#007BFF" />
              <Text style={{ marginLeft: 5 }}>EN</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.subtitleBox}>
            <Text style={{ color: "#999" }}>Press start to begin live subtitle</Text>
          </TouchableOpacity>
        </View>

        {/* Save & Font Size */}
        <View style={styles.optionsRow}>
          <TouchableOpacity style={styles.optionCard}>
            <Ionicons name="save" size={28} color="#007BFF" />
            <Text style={styles.optionText}>Save Last 5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionCard}>
            <FontAwesome name="text-height" size={28} color="#007BFF" />
            <Text style={styles.optionText}>Font Size</Text>
          </TouchableOpacity>
        </View>

        {/* Play Button */}
        <TouchableOpacity style={styles.playBtn}>
          <Ionicons name="play" size={40} color="#fff" />
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#007BFF" />
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="article" size={24} color="#666" />
          <Text style={styles.navText}>Transcripts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="hardware-chip" size={24} color="#666" />
          <Text style={styles.navText}>Devices</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="star" size={24} color="#666" />
          <Text style={styles.navText}>Premium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="settings" size={24} color="#666" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  headerLeft: { flexDirection: "row", alignItems: "center" },
  avatar: {
    backgroundColor: "#007BFF",
    width: 35,
    height: 35,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  avatarText: { color: "#fff", fontWeight: "bold" },
  appName: { fontSize: 18, fontWeight: "bold" },
  status: { color: "red", fontWeight: "600" },

  // Section
  section: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#eee",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 16, fontWeight: "bold" },

  languageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  languageBtn: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    width: "48%",
    marginVertical: 5,
  },
  selectedLanguage: { backgroundColor: "#007BFF" },
  languageText: { color: "#333", fontWeight: "500" },
  selectedLanguageText: { color: "#fff" },

  // Card
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#eee",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  cardTitle: { fontSize: 16, fontWeight: "bold" },

  subtitleBox: {
    borderWidth: 1,
    borderColor: "#ddd",
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
    backgroundColor: "#f5f5f5",
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
  },
  optionText: { marginTop: 5, fontSize: 14, color: "#333" },

  // Play Button
  playBtn: {
    backgroundColor: "#007BFF",
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
    borderColor: "#eee",
  },
  navItem: { alignItems: "center" },
  navText: { fontSize: 12, color: "#666" },
  navTextActive: { fontSize: 12, color: "#007BFF", fontWeight: "bold" },
});
