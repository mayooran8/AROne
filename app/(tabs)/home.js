import { router } from "expo-router";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { db } from "../../firebase";

export default function Home() {
  const [packages, setPackages] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPackages, setFilteredPackages] = useState([]);

  // WORKING IMAGES
  const profilePic = "https://images.unsplash.com/photo-1688888745596-da40843a8d45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww";
  const fallbackImg =
    "https://via.placeholder.com/400x200/cccccc/000000?text=No+Image";

  // TEMPORARY DUMMY BOOKINGS
  const bookings = [
    {
      id: "b1",
      name: "Hills in Srilanka",
      date: "2025-01-10",
      photo:
        "https://images.unsplash.com/photo-1586008481877-7dd7c8236d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3JpbGFua2F8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "b2",
      name: "Sigiriya 2 Days Trip",
      date: "2025-02-18",
      photo:
        "https://plus.unsplash.com/premium_photo-1730145749791-28fc538d7203?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // fallback will be used
    },
     {
      id: "b3",
      name: "Hills in Srilanka",
      date: "2025-01-10",
      photo:
        "https://images.unsplash.com/photo-1586008481877-7dd7c8236d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3JpbGFua2F8ZW58MHx8MHx8fDA%3D",
    },
  ];

  useEffect(() => {
    fetchPackages();
  }, []);

  // Fetch data from Firestore
  const fetchPackages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "packages"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPackages(data);
      setFilteredPackages(data);
    } catch (error) {
      console.log("Error loading packages:", error);
    }
  };

  // Search filter logic
  const handleSearch = (text) => {
    setSearch(text);

    if (text.trim() === "") {
      setFilteredPackages(packages);
      return;
    }

    const filtered = packages.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredPackages(filtered);
  };

  // HELPER FUNCTION FOR IMAGE FALLBACK
  const getImage = (img) => {
    if (!img || img === "" || img.length < 5) return fallbackImg;
    return img;
  };

  // Package card
  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: getImage(item.photo) }} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subText}>{item.amount || 0} LKR</Text>
      <Text style={styles.subText}>{item.days || 0} Days</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push(`../details/${item.id}`)}
      >
        <Text style={styles.buttonText}>See Details</Text>
      </TouchableOpacity>
    </View>
  );

  // Booking card
  const renderBooking = ({ item }) => (
    <View style={styles.bookingCard}>
      <Image source={{ uri: getImage(item.photo) }} style={styles.bookingImage} />
      <Text style={styles.bookingTitle}>{item.name}</Text>
      <Text style={styles.bookingDate}>Booked on: {item.date}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
  <FlatList
    data={filteredPackages}
    keyExtractor={(item) => item.id}
    renderItem={renderCard}
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
          onChangeText={handleSearch}
        />

        {/* HORIZONTAL BOOKINGS */}
        <Text style={styles.sectionTitle}>Your Upcoming Tour</Text>
        <FlatList
          data={bookings}
          renderItem={renderBooking}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20, paddingBottom: 10 }}
        />

        {/* PACKAGE TITLE */}
        <Text style={styles.pageTitle}>Available Tour Packages</Text>
      </>
    )}
    contentContainerStyle={{ paddingBottom: 100 }}
  />
</SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#F7F9FC",
    
 },
  scrollContent: { flexGrow: 1, paddingBottom: 100 },

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
  profilePic: { width: 55, height: 55, borderRadius: 30, borderWidth: 2, borderColor: "#fff" },

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

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 8,
  },

  /* BOOKINGS */
  bookingCard: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginRight: 15,
    width: 180,
    elevation: 3,
  },
  bookingImage: { width: "100%", height: 100, borderRadius: 10, marginBottom: 10 },
  bookingTitle: { fontSize: 16, fontWeight: "700" },
  bookingDate: { fontSize: 14, color: "#666", marginTop: 4 },

  /* PACKAGE CARDS */
  pageTitle: { fontSize: 22, fontWeight: "700", marginHorizontal: 20, marginTop: 20, marginBottom: 10 },
  card: { backgroundColor: "#fff", marginHorizontal: 20, marginBottom: 20, borderRadius: 18, padding: 15, elevation: 4 },
  image: { width: "100%", height: 170, borderRadius: 15, marginBottom: 12 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 5 },
  subText: { fontSize: 15, color: "#555", marginBottom: 4 },
  button: { marginTop: 12, backgroundColor: "#007A8C", paddingVertical: 12, borderRadius: 12, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
