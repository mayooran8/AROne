import { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

export default function Home() {
  const [search, setSearch] = useState("");

  // WORKING IMAGES
  const profilePic =
    "https://images.unsplash.com/photo-1688888745596-da40843a8d45?w=500&auto=format&fit=crop&q=60";
  const fallbackImg =
    "https://via.placeholder.com/400x200/cccccc/000000?text=No+Image";

  // BOOKINGS ONLY (VERTICAL)
  const bookings = [
    {
      id: "b1",
      name: "Hills in Srilanka",
      date: "2025-01-10",
      photo:
        "https://images.unsplash.com/photo-1586008481877-7dd7c8236d00?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: "b2",
      name: "Sigiriya 2 Days Trip",
      date: "2025-02-18",
      photo:
        "https://plus.unsplash.com/premium_photo-1730145749791-28fc538d7203?q=80&w=435&auto=format&fit=crop",
    },
    {
      id: "b3",
      name: "Hills in Srilanka",
      date: "2025-01-10",
      photo:
        "https://images.unsplash.com/photo-1586008481877-7dd7c8236d00?w=500&auto=format&fit=crop&q=60",
    },
  ];

  // IMAGE FALLBACK HANDLER
  const getImage = (img) => {
    if (!img || img.length < 5) return fallbackImg;
    return img;
  };

  // BOOKING CARD
  const renderBooking = ({ item }) => (
    <View style={styles.bookingCard}>
      <Image source={{ uri: getImage(item.photo) }} style={styles.bookingImage} />
      <Text style={styles.bookingTitle}>{item.name}</Text>
      <Text style={styles.bookingDate}>Booked on: {item.date}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* MAIN VERTICAL LIST */}
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        renderItem={renderBooking}
        contentContainerStyle={{ paddingBottom: 100 }}

        ListHeaderComponent={() => (
          <>
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
              value={search}
              onChangeText={setSearch}
            />

            {/* SECTION TITLE */}
            <Text style={styles.pageTitle}>Your Bookings</Text>
          </>
        )}
      />
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

  /* SEARCH */
  searchInput: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginTop: 15,
    marginHorizontal: 20,
    fontSize: 16,
    elevation: 5,
  },

  /* BOOKINGS (VERTICAL) */
  pageTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  bookingCard: {
    backgroundColor: "#fff",
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 15,
    elevation: 3,
  },
  bookingImage: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginBottom: 10,
  },
  bookingTitle: { fontSize: 18, fontWeight: "700" },
  bookingDate: { fontSize: 15, color: "#666", marginTop: 4 },
});
