import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const PremiumScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 15, paddingBottom: 100 }}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Premium Plans</Text>
          <Text style={styles.subtitle}>Unlock advanced features</Text>
        </View>

        {/* Free Plan Card */}
        <View style={styles.card}>
          <View style={styles.freeIconCircle}>
            <Ionicons name="person-outline" size={30} color="#fff" />
          </View>
          <Text style={styles.freeTitle}>Free Plan</Text>
          <Text style={styles.freeSubtitle}>
            You’re currently on the free plan
          </Text>

          <View style={styles.progressContainer}>
            <Text style={styles.progressLabel}>Conversations used</Text>
            <Text style={styles.progressCount}>3/5</Text>
          </View>

          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* Toggle Buttons */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity style={styles.toggleActive}>
            <Text style={styles.toggleTextActive}>Monthly</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggle}>
            <Text style={styles.toggleText}>Yearly</Text>
            <View style={styles.saveBadge}>
              <Text style={styles.saveText}>Save 33%</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Premium Card */}
        <View style={styles.premiumCard}>
          <View style={styles.crownCircle}>
            <FontAwesome5 name="crown" size={30} color="#fff" />
          </View>
          <Text style={styles.premiumTitle}>Premium</Text>
          <Text style={styles.price}>$9.99 /month</Text>

          <TouchableOpacity style={styles.upgradeBtn}>
            <Text style={styles.upgradeText}>Upgrade to Premium</Text>
          </TouchableOpacity>

          <Text style={styles.cancelText}>
            Cancel anytime • 7-day before free trial
          </Text>
        </View>

        {/* What's Included Section */}
        <View style={styles.includedSection}>
          <Text style={styles.includedTitle}>What’s Included</Text>

          <View style={styles.featureRow}>
            <Ionicons name="checkmark-circle" size={20} color="#16C784" />
            <Text style={styles.featureText}>Unlimited live transcripts</Text>
          </View>
          <View style={styles.featureRow}>
            <Ionicons name="checkmark-circle" size={20} color="#16C784" />
            <Text style={styles.featureText}>Advanced language support</Text>
          </View>
          <View style={styles.featureRow}>
            <Ionicons name="checkmark-circle" size={20} color="#16C784" />
            <Text style={styles.featureText}>Save and export audio</Text>
          </View>
          <View style={styles.featureRow}>
            <Ionicons name="checkmark-circle" size={20} color="#16C784" />
            <Text style={styles.featureText}>Early access to new tools</Text>
          </View>
        </View>
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
          <Ionicons name="hardware-chip-outline" size={22} color="#999" />
          <Text style={styles.navText}>Devices</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <FontAwesome5 name="crown" size={20} color="#3A86FF" />
          <Text style={styles.navTextActive}>Premium</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="settings-outline" size={22} color="#999" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PremiumScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },
  subtitle: {
    color: "#aaa",
    fontSize: 13,
    marginTop: 3,
  },
  card: {
    backgroundColor: "#111",
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#222",
  },
  freeIconCircle: {
    backgroundColor: "#3A86FF",
    padding: 15,
    borderRadius: 40,
    marginBottom: 10,
  },
  freeTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  freeSubtitle: {
    color: "#aaa",
    marginBottom: 15,
    fontSize: 13,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 5,
  },
  progressLabel: {
    color: "#999",
    fontSize: 13,
  },
  progressCount: {
    color: "#999",
    fontSize: 13,
  },
  progressBar: {
    backgroundColor: "#333",
    height: 6,
    width: "100%",
    borderRadius: 10,
  },
  progressFill: {
    backgroundColor: "#00FF7F",
    height: "100%",
    width: "60%",
    borderRadius: 10,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  toggle: {
    backgroundColor: "#111",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginHorizontal: 5,
    position: "relative",
  },
  toggleActive: {
    backgroundColor: "#3A86FF",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  toggleText: {
    color: "#fff",
    fontSize: 14,
  },
  toggleTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  saveBadge: {
    position: "absolute",
    top: -8,
    right: -10,
    backgroundColor: "#16C784",
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  saveText: {
    fontSize: 10,
    color: "#fff",
  },
  premiumCard: {
    backgroundColor: "#111",
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#222",
  },
  crownCircle: {
    backgroundColor: "#3A86FF",
    padding: 15,
    borderRadius: 40,
    marginBottom: 10,
  },
  premiumTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    color: "#3A86FF",
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 8,
  },
  upgradeBtn: {
    backgroundColor: "#3A86FF",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  upgradeText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cancelText: {
    color: "#888",
    fontSize: 12,
    marginTop: 10,
    textAlign: "center",
  },
  includedSection: {
    marginTop: 25,
  },
  includedTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  featureText: {
    color: "#ccc",
    fontSize: 14,
    marginLeft: 8,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: "#222",
    backgroundColor: "#000",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: { alignItems: "center" },
  navText: { fontSize: 12, color: "#999" },
  navTextActive: { fontSize: 12, color: "#3A86FF", fontWeight: "bold" },
});
