import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const DevicePairing: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Device Pairing</Text>
          <Ionicons name="ellipsis-horizontal" size={22} color="#fff" />
        </View>

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          {/* ✅ When you click this, it navigates to DevicePairingScreen */}
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => navigation.navigate("DevicePairingScreen" as never)} // 👈 key change
          >
            <Ionicons name="scan" size={18} color="#fff" />
            <Text style={styles.btnText}>Scan Devices</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryBtn}>
            <Ionicons name="bluetooth" size={18} color="#fff" />
            <Text style={styles.btnText}>Bluetooth Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Bluetooth Devices */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Bluetooth Devices</Text>
            <Ionicons name="bluetooth" size={20} color="#3A86FF" />
          </View>

          {[
            { name: "iPhone 15 Pro", status: "Available" },
            { name: "Samsung Galaxy Buds", status: "Available" },
            { name: "Sony WH-1000XM5", status: "Available" },
          ].map((device, index) => (
            <View key={index} style={styles.deviceCard}>
              <View style={styles.deviceInfo}>
                <FontAwesome5 name="bluetooth-b" size={22} color="#3A86FF" />
                <View>
                  <Text style={styles.deviceName}>{device.name}</Text>
                  <Text style={styles.deviceStatus}>{device.status}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.connectBtn}>
                <Text style={styles.connectText}>Connect</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* WiFi Devices */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>WiFi Devices</Text>
            <Ionicons name="wifi" size={20} color="#3A86FF" />
          </View>

          {[
            { name: "MacBook Pro", status: "Available" },
            { name: "MacBook Pro 2", status: "Available" },
          ].map((device, index) => (
            <View key={index} style={styles.deviceCard}>
              <View style={styles.deviceInfo}>
                <Ionicons name="wifi" size={22} color="#00FF88" />
                <View>
                  <Text style={styles.deviceName}>{device.name}</Text>
                  <Text style={styles.deviceStatus}>{device.status}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.connectBtnGreen}>
                <Text style={styles.connectText}>Connect</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* ✅ Bottom Navigation Bar with Premium Crown */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Home" as never)}
        >
          <Ionicons name="home-outline" size={22} color="#999" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Transcript" as never)}
        >
          <MaterialIcons name="article" size={22} color="#999" />
          <Text style={styles.navText}>Transcripts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, styles.activeNav]}
          onPress={() => navigation.navigate("DevicePairing" as never)}
        >
          <Ionicons name="hardware-chip-outline" size={22} color="#3A86FF" />
          <Text style={styles.navTextActive}>Devices</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Premium" as never)}
        >
          <FontAwesome5 name="crown" size={20} color="#FFD700" />
          <Text style={[styles.navText, { color: "#FFD700" }]}>Premium</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Settings" as never)}
        >
          <Ionicons name="settings-outline" size={22} color="#999" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DevicePairing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  primaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3A86FF",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 18,
    flex: 1,
    marginRight: 10,
  },
  secondaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3A86FF",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 18,
    flex: 1,
  },
  btnText: {
    color: "#fff",
    marginLeft: 8,
    fontWeight: "600",
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  deviceCard: {
    backgroundColor: "#111",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#1A1A1A",
  },
  deviceInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  deviceName: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
  deviceStatus: {
    color: "#999",
    fontSize: 13,
  },
  connectBtn: {
    backgroundColor: "#3A86FF",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  connectBtnGreen: {
    backgroundColor: "#00C851",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  connectText: {
    color: "#fff",
    fontWeight: "600",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#222",
    backgroundColor: "#000",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    color: "#999",
    fontSize: 12,
  },

  navTextActive: {
    color: "#3A86FF",
    fontSize: 12,
    fontWeight: "bold",
  },
  activeNav: {
    borderTopWidth: 2,
    borderTopColor: "#3A86FF",
  },
});
