import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

export default function Home() {

  const profilePic =
    "https://images.unsplash.com/photo-1688888745596-da40843a8d45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww";

  return (
    <SafeAreaView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hi, Mayoo</Text>
          <Text style={styles.headerSubText}>
            Discover your next adventure
          </Text>
        </View>
        <Image source={{ uri: profilePic }} style={styles.profilePic} />
      </View>

      {/* SEARCH BAR */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search destinations..."
      />

      {/* EMPTY MESSAGE */}
      <Text style={styles.emptyMessage}>No Saved Packages</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7F9FC" },

  /* HEADER */
  header: {
    backgroundColor: "#007A8C",
    paddingVertical: 28,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 4,
  },
  greeting: { fontSize: 22, color: "#fff", fontWeight: "700" },
  headerSubText: { color: "#E6EEFF", marginTop: 3 },
  profilePic: {
    width: 55,
    height: 55,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#fff",
  },

  /* SEARCH BAR */
  searchInput: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
    marginHorizontal: 20,
    fontSize: 16,
    elevation: 5,
  },

  /* EMPTY TEXT */
  emptyMessage: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 50,
    color: "#666",
  },
});
