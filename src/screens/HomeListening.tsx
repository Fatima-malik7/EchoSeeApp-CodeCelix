import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const HomeListening: React.FC = () => {
  const [language, setLanguage] = useState("English");

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
            <Ionicons name="language-outline" size={20} color="#007BFF" />
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
            <Ionicons name="mic-outline" size={20} color="#007BFF" />
          </View>
          <TouchableOpacity style={styles.subtitleBox}>
            <Text style={styles.subtitleText}>Listening for speech...</Text>
          </TouchableOpacity>
        </View>

        {/* Options Section */}
        <View style={styles.optionRow}>
          <TouchableOpacity style={styles.optionCard}>
            <Ionicons name="save-outline" size={28} color="#007BFF" />
            <Text style={styles.optionText}>Save Last 5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionCard}>
            <FontAwesome name="font" size={28} color="#007BFF" />
            <Text style={styles.optionText}>Font Size</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Recording Button */}
      <View style={styles.recordBtnContainer}>
        <TouchableOpacity style={styles.recordBtn}>
          <MaterialIcons name="stop" size={35} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={22} color="#007BFF" />
          <Text style={styles.navLabelActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="document-text-outline" size={22} color="#999" />
          <Text style={styles.navLabel}>Transcripts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="bluetooth-outline" size={22} color="#999" />
          <Text style={styles.navLabel}>Devices</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="star-outline" size={22} color="#999" />
          <Text style={styles.navLabel}>Premium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="settings-outline" size={22} color="#999" />
          <Text style={styles.navLabel}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeListening;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
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
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: { color: "#fff", fontWeight: "bold" },
  appName: { fontSize: 18, fontWeight: "bold", marginLeft: 8 },
  statusRow: { flexDirection: "row", alignItems: "center" },
  statusDotListening: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#00C851",
    marginRight: 5,
  },
  statusTextListening: { color: "#00C851", fontSize: 13 },

  // Sections
  section: {
    backgroundColor: "#f9f9f9",
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
  sectionTitle: { fontWeight: "bold", fontSize: 16, color: "#333" },

  // Language Grid
  languageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  languageBtn: {
    backgroundColor: "#f0f0f0",
    width: "48%",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  selectedLanguage: { backgroundColor: "#007BFF" },
  languageText: { color: "#333", fontWeight: "500" },
  selectedLanguageText: { color: "#fff" },

  // Subtitles
  subtitleBox: {
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
  },
  subtitleText: { color: "#555" },

  // Options
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  optionCard: {
    backgroundColor: "#f5f5f5",
    width: "48%",
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 10,
  },
  optionText: { marginTop: 8, color: "#333" },

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
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  navItem: { alignItems: "center" },
  navLabel: { color: "#999", fontSize: 12, marginTop: 2 },
  navLabelActive: { color: "#007BFF", fontSize: 12, marginTop: 2 },
});
