import { router } from "expo-router";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View,ScrollView, SafeAreaView,ScrollView } from "react-native";
import { db } from "../../firebase";

export default function Home() {
  const [packages, setPackages] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPackages, setFilteredPackages] = useState([]);

  // TEMPORARY DUMMY BOOKINGS
  const bookings = [
    { 
      id: "b1",
      name: "Kashmir Honeymoon Tour", 
      date: "2025-01-10",
      photo: require("../../assets/images/explore1.jpg"), 
    },

    { id: "b2", 
      name: "Rajasthan 4 Days Trip", 
      date: "2025-02-18",
      photo:"",  
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

  // Package card
  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.photo }} style={styles.image} />

      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subText}>₹ {item.amount}</Text>
      <Text style={styles.subText}>{item.days} Days</Text>

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
      <Image source={{ uri: item.photo }} style={styles.bookingImage} />
      <Text style={styles.bookingTitle}>{item.name}</Text>
      <Text style={styles.bookingDate}>Booked on: {item.date}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
         {/* Header */}
        <View style={styles.header}>
          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>Hi, John</Text>
          </View>
          <Image source={profilePic} style={styles.profilePic} />
        </View>
      {/* SEARCH BAR */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search Packages..."
        value={search}
        onChangeText={handleSearch}
      />

      {/* USER BOOKINGS */}
      <Text style={styles.sectionTitle}>Your Up Coming Tours</Text>
      <FlatList
        data={bookings}
        renderItem={renderBooking}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 20 }}
      />

      {/* PACKAGE LIST */}
      <Text style={styles.pageTitle}>Available Tour Packages</Text>

      <FlatList
        data={filteredPackages}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        
      />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 15,
  },

   scrollContent: {
    flexGrow: 1,
    paddingBottom: 80, // Space for bottom nav
  },

  searchInput: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    elevation: 3,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

 bookingCard: {
  backgroundColor: "#fff",
  padding: 12,
  borderRadius: 12,
  marginRight: 12,
  elevation: 3,
  width: 220,
},

bookingImage: {
  width: "100%",
  height: 110,
  borderRadius: 10,
  marginBottom: 10,
},

bookingTitle: {
  fontSize: 16,
  fontWeight: "bold",
},

bookingDate: {
  fontSize: 14,
  color: "#666",
  marginTop: 4,
},


  pageTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#fff",
    marginBottom: 18,
    borderRadius: 15,
    padding: 15,
    elevation: 5,
  },

  image: {
    width: "100%",
    height: 160,
    borderRadius: 12,
    marginBottom: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  subText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 4,
  },

  button: {
    marginTop: 10,
    backgroundColor: "#007A8C",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
