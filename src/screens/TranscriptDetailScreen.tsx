import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRoute, useNavigation } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";
import type { RootStackParamList } from "../../App";

const TranscriptDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, "TranscriptDetail">>();
  const { transcript } = route.params;

  const handleDownload = () => {
    Alert.alert("Download", `Downloading transcript: ${transcript.title}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>{transcript.title}</Text>
        <Text style={styles.time}>
          {transcript.time} • {transcript.duration}
        </Text>
        <Text style={styles.description}>{transcript.description}</Text>

        <TouchableOpacity style={styles.downloadBtn} onPress={handleDownload}>
          <Ionicons name="download-outline" size={20} color="#fff" />
          <Text style={styles.downloadText}>Download Transcript</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TranscriptDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  time: {
    color: "#aaa",
    marginBottom: 10,
  },
  description: {
    color: "#ccc",
    fontSize: 15,
    marginBottom: 20,
  },
  downloadBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3A86FF",
    padding: 12,
    borderRadius: 10,
    justifyContent: "center",
  },
  downloadText: {
    color: "#fff",
    marginLeft: 8,
    fontWeight: "600",
  },
});
