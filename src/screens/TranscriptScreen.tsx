import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const transcripts = [
  {
    id: "1",
    title: "Team Meeting",
    time: "Today, 2:45 PM",
    duration: "25 min",
    description: "Let's discuss the quarterly results and upcoming project deadlines...",
    speakers: 3,
  },
  {
    id: "2",
    title: "Coffee Chat",
    time: "Today, 11:35 PM",
    duration: "12 min",
    description: "How was your weekend? I went hiking in the mountains...",
    speakers: 2,
  },
  {
    id: "3",
    title: "Client Call",
    time: "Yesterday, 5:10 PM",
    duration: "18 min",
    description: "Client feedback and next steps for the project...",
    speakers: 1,
  },
];

const TranscriptScreen: React.FC = () => {
  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <TouchableOpacity>
          <Icon name="download-outline" size={20} color="#16C784" />
        </TouchableOpacity>
      </View>
      <Text style={styles.cardTime}>
        {item.time}  •  <Text style={styles.cardDuration}>{item.duration}</Text>
      </Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
      <View style={styles.speakersRow}>
        <View style={styles.avatars}>
          <View style={[styles.avatar, { backgroundColor: "#007BFF" }]}>
            <Text style={styles.avatarText}>J</Text>
          </View>
          <View style={[styles.avatar, { backgroundColor: "#8B5CF6" }]}>
            <Text style={styles.avatarText}>S</Text>
          </View>
          <View style={[styles.avatar, { backgroundColor: "#F79E1B" }]}>
            <Text style={styles.avatarText}>M</Text>
          </View>
        </View>
        <Text style={styles.speakersCount}>{item.speakers} speakers</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Transcripts</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-horizontal" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={18} color="#888" style={{ marginRight: 6 }} />
        <TextInput
          placeholder="Search transcripts..."
          placeholderTextColor="#888"
          style={styles.searchInput}
        />
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Total</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={[styles.statNumber, { color: "#16C784" }]}>2h{"\n"}20m</Text>
          <Text style={styles.statLabel}>Duration</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={[styles.statNumber, { color: "#F79E1B" }]}>3</Text>
          <Text style={styles.statLabel}>Today</Text>
        </View>
      </View>

      {/* List */}
      <FlatList
        data={transcripts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home-outline" size={22} color="#fff" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.activeNav]}>
          <Icon name="document-text-outline" size={22} color="#007BFF" />
          <Text style={[styles.navText, { color: "#007BFF" }]}>Transcripts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="mic-outline" size={22} color="#fff" />
          <Text style={styles.navText}>Devices</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="star-outline" size={22} color="#fff" />
          <Text style={styles.navText}>Premium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="settings-outline" size={22} color="#fff" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TranscriptScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    color: "#fff",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  statBox: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 15,
    marginHorizontal: 5,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
  statLabel: {
    fontSize: 13,
    color: "#A0A0A0",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#1C1C1E",
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  cardTime: {
    color: "#A0A0A0",
    fontSize: 13,
  },
  cardDuration: {
    color: "#F79E1B",
  },
  cardDescription: {
    color: "#ccc",
    fontSize: 13,
    marginVertical: 5,
  },
  speakersRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatars: {
    flexDirection: "row",
  },
  avatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 4,
  },
  avatarText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  speakersCount: {
    color: "#A0A0A0",
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#2C2C2E",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: "center",
  },
  activeNav: {
    borderTopWidth: 2,
    borderTopColor: "#007BFF",
    paddingTop: 5,
  },
  navText: {
    color: "#A0A0A0",
    fontSize: 12,
    marginTop: 2,
  },
});
