import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Slider from "@react-native-community/slider";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App"; // adjust path if needed
type SettingsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Settings"
>;
const SettingsScreen: React.FC = () => {
  const navigation = useNavigation<SettingsScreenNavigationProp>();
  const [fontSize, setFontSize] = useState(14);
  const [language, setLanguage] = useState("English");

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        {/* User Info */}
        <View style={styles.section}>
          <View style={styles.userBox}>
            <View style={styles.userIcon}>
              <Text style={styles.userInitial}>U</Text>
            </View>
            <View>
              <Text style={styles.userName}>Guest User</Text>
              <Text style={styles.userPlan}>Free Plan</Text>
            </View>
            <TouchableOpacity style={styles.signInButton}>
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Appearance Section */}
        <View style={styles.section}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Ionicons name="color-palette-outline" size={20} color="#3A82F7" />
              <Text style={styles.cardTitle}> Appearance</Text>
            </View>

            <Text style={styles.optionTitle}>Dark Mode</Text>
            <Text style={styles.optionSubtitle}>Always Enabled</Text>

            <Text style={[styles.optionTitle, { marginTop: 15 }]}>Font Size</Text>
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={10}
              maximumValue={20}
              value={fontSize}
              minimumTrackTintColor="#3A82F7"
              maximumTrackTintColor="#ccc"
              thumbTintColor="#3A82F7"
              onValueChange={(value) => setFontSize(value)}
            />
          </View>
        </View>

        {/* Language Section */}
        <View style={styles.section}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Ionicons name="language-outline" size={20} color="#3A82F7" />
              <Text style={styles.cardTitle}> Language</Text>
            </View>

            {["English", "اردو", "Español"].map((lang) => (
              <TouchableOpacity
                key={lang}
                style={[
                  styles.languageOption,
                  language === lang && styles.languageSelected,
                ]}
                onPress={() => setLanguage(lang)}
              >
                <Text
                  style={[
                    styles.languageText,
                    language === lang && { color: "#fff" },
                  ]}
                >
                  {lang}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

     {/* ✅ Bottom Navigation Bar */}
<View style={styles.bottomNav}>
  <TouchableOpacity
    style={styles.navItem}
    onPress={() => navigation.navigate("Home")}
  >
    <Ionicons name="home-outline" size={22} color="#999" />
    <Text style={styles.navText}>Home</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.navItem}
    onPress={() => navigation.navigate("Transcript")}
  >
    <Ionicons name="document-text-outline" size={22} color="#999" />
    <Text style={styles.navText}>Transcripts</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.navItem}
    onPress={() => navigation.navigate("DevicePairing")}
  >
    <Ionicons name="bluetooth-outline" size={22} color="#999" />
    <Text style={styles.navText}>Devices</Text>
  </TouchableOpacity>

  {/* 🟡 Premium Icon (Crown) */}
  <TouchableOpacity
    style={styles.navItem}
    onPress={() => navigation.navigate("Premium")}
  >
    <FontAwesome5 name="crown" size={20} color="#FFD700" />
    <Text style={[styles.navText, { color: "#FFD700" }]}>Premium</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={[styles.navItem, styles.activeNav]}
    onPress={() => navigation.navigate("Settings")}
  >
    <Ionicons name="settings" size={22} color="#3A82F7" />
    <Text style={[styles.navTextActive]}>Settings</Text>
  </TouchableOpacity>
</View>

    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  section: {
    margin: 10,
  },
  userBox: {
    backgroundColor: "#111",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#3A82F7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  userInitial: {
    color: "#fff",
    fontWeight: "bold",
  },
  userName: {
    color: "#fff",
    fontWeight: "600",
  },
  userPlan: {
    color: "#aaa",
    fontSize: 12,
  },
  signInButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6,
    marginLeft: "auto",
  },
  signInText: {
    color: "#000",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#111",
    borderRadius: 10,
    padding: 15,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  cardTitle: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
  optionTitle: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  optionSubtitle: {
    color: "#aaa",
    fontSize: 12,
  },
  languageOption: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },
  languageText: {
    color: "#ccc",
  },
  languageSelected: {
    backgroundColor: "#3A82F7",
    borderRadius: 6,
    marginVertical: 4,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  bottomNav: {
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#111",
  paddingVertical: 10,
  borderTopWidth: 1,
  borderTopColor: "#222",
},
navItem: {
  alignItems: "center",
},
navText: {
  fontSize: 12,
  color: "#999",
  marginTop: 4,
},
navTextActive: {
  fontSize: 12,
  color: "#3A82F7",
  marginTop: 4,
  fontWeight: "600",
},
activeNav: {
  alignItems: "center",
},

});