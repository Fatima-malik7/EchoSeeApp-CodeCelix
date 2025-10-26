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
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App"; // ✅ adjust path if needed

type DevicePairingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "DevicePairingScreen"
>;

const DevicePairingScreen: React.FC = () => {
  const navigation = useNavigation<DevicePairingScreenNavigationProp>();

  const bluetoothDevices = [
    { id: 1, name: "iPhone 15 Pro", status: "Available" },
    { id: 2, name: "Samsung Galaxy Buds", status: "Available" },
    { id: 3, name: "Sony WH-1000XM5", status: "Available" },
  ];

  const wifiDevices = [{ id: 1, name: "MacBook Pro", status: "Available" }];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Device Pairing</Text>
        <Ionicons name="ellipse-outline" size={20} color="#fff" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Connected Device */}
        <View style={styles.connectedCard}>
          <View style={styles.connectedInfo}>
            <Ionicons name="phone-portrait-outline" size={28} color="#fff" />
            <View>
              <Text style={styles.deviceName}>iPhone 15 Pro</Text>
              <Text style={styles.connectedStatus}>Connected</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.connectButtonActive}>
            <Text style={styles.connectText}>Connect</Text>
          </TouchableOpacity>
          <Ionicons
            name="checkmark-circle"
            size={22}
            color="#fff"
            style={styles.checkIcon}
          />
        </View>

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="search-outline" size={20} color="#fff" />
            <Text style={styles.actionText}>Scan Devices</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="bluetooth-outline" size={20} color="#fff" />
            <Text style={styles.actionText}>Bluetooth Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Bluetooth Devices */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Bluetooth Devices</Text>
          <Ionicons name="bluetooth-outline" size={18} color="#3A86FF" />
        </View>

        {bluetoothDevices.map((device) => (
          <View key={device.id} style={styles.deviceCard}>
            <View style={styles.deviceInfo}>
              <Ionicons
                name="phone-portrait-outline"
                size={24}
                color="#3A86FF"
              />
              <View>
                <Text style={styles.deviceName}>{device.name}</Text>
                <Text style={styles.deviceStatus}>{device.status}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.connectButton}>
              <Text style={styles.connectText}>Connect</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* WiFi Devices */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>WiFi Devices</Text>
          <Ionicons name="wifi-outline" size={18} color="#3A86FF" />
        </View>

        {wifiDevices.map((device) => (
          <View key={device.id} style={styles.deviceCard}>
            <View style={styles.deviceInfo}>
              <Ionicons name="laptop-outline" size={24} color="#3A86FF" />
              <View>
                <Text style={styles.deviceName}>{device.name}</Text>
                <Text style={styles.deviceStatus}>{device.status}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.connectButtonWifi}>
              <Text style={styles.connectText}>Connect</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* ✅ Bottom Navigation */}
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
          <MaterialIcons name="article" size={22} color="#999" />
          <Text style={styles.navText}>Transcripts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, styles.activeNav]}
          onPress={() => navigation.navigate("DevicePairing")}
        >
          <Ionicons name="hardware-chip-outline" size={22} color="#3A86FF" />
          <Text style={styles.navTextActive}>Devices</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Premium")}
        >
          <FontAwesome5 name="crown" size={20} color="#FFD700" />
          <Text style={[styles.navText, { color: "#FFD700" }]}>Premium</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Settings")}
        >
          <Ionicons name="settings-outline" size={22} color="#999" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DevicePairingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  connectedCard: {
    backgroundColor: "#111",
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#1A1A1A",
  },
  connectedInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  connectedStatus: {
    color: "#999",
    fontSize: 13,
  },
  connectButtonActive: {
    backgroundColor: "#3A86FF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  connectButton: {
    backgroundColor: "#3A86FF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  connectButtonWifi: {
    backgroundColor: "#00C851",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  connectText: {
    color: "#fff",
    fontWeight: "600",
  },
  checkIcon: {
    marginLeft: 8,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3A86FF",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 18,
    flex: 1,
    marginRight: 10,
  },
  actionText: {
    color: "#fff",
    marginLeft: 8,
    fontWeight: "600",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  deviceCard: {
    backgroundColor: "#111",
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
