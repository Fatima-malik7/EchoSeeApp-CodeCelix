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

const DevicePairingScreen: React.FC = () => {
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

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={22} color="#999" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="article" size={22} color="#999" />
          <Text style={styles.navText}>Transcripts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="hardware-chip-outline" size={22} color="#3A86FF" />
          <Text style={styles.navTextActive}>Devices</Text>
        </TouchableOpacity>

        {/* 👑 Premium Crown Icon */}
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

export default DevicePairingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollContainer: {
    paddingBottom: 100,
  },

  connectedCard: {
    backgroundColor: "#3A86FF",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    position: "relative",
  },
  connectedInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  connectedStatus: {
    color: "#E0E0E0",
    fontSize: 13,
  },
  connectButtonActive: {
    position: "absolute",
    right: 15,
    top: 18,
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 6,
  },
  checkIcon: {
    position: "absolute",
    right: 20,
    bottom: 15,
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E90FF",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    gap: 6,
  },
  actionText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  deviceCard: {
    backgroundColor: "#111",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginBottom: 10,
  },
  deviceInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  deviceName: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  deviceStatus: {
    color: "#aaa",
    fontSize: 12,
  },
  connectButton: {
    backgroundColor: "#3A86FF",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 6,
  },
  connectButtonWifi: {
    backgroundColor: "#00C851",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 6,
  },
  connectText: {
    color: "#fff",
    fontSize: 13,
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
});
