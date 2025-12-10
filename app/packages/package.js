import { router } from "expo-router";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const PackageDetailsScreen = () => {
  const profilePic =
    "https://images.unsplash.com/photo-1688888745596-da40843a8d45?w=500&auto=format&fit=crop&q=60";

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Package Details</Text>
          <Text style={styles.headerSubText}>Discover your next adventure</Text>
        </View>

        <Image source={{ uri: profilePic }} style={styles.profilePic} />
      </View>

      {/* MAIN SCROLL CONTENT */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Package Image */}
        <Image
          source={{
            uri:
              "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?w=500&auto=format&fit=crop&q=60",
          }}
          style={styles.landscapeImage}
        />

        {/* Package Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sigiriya</Text>
          <Text style={styles.description}>
            Ancient rock fortress of Sri Lanka. A site of historical and
            archaeological significance.
          </Text>

          <Text style={styles.price}>50,000 LKR</Text>


  <TouchableOpacity style={styles.button}
         onPress={() => router.push("/packages/bookingForm")}><Text style={styles.buttonText}>Book Now</Text>
           </TouchableOpacity>

        </View>

        {/* MAP SECTION */}
        <View style={styles.mapSection}>
          <Text style={styles.sectionTitle}>Your Tour Locations</Text>

          <Image
            source={{
              uri:
                "https://images.unsplash.com/photo-1502920917128-1aa500764b8a?w=800&auto=format&fit=crop&q=60",
            }}
            style={styles.mapImage}
          />
        </View>

        {/* TOUR GUIDE SECTION */}
        <View style={styles.guideSection}>
          <Text style={styles.sectionTitle}>Your Tour Guide</Text>

          <View style={styles.guideProfile}>
            <Image
              source={{
                uri:
                  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60",
              }}
              style={styles.profileImage}
            />

            <View style={styles.guideInfo}>
              <Text style={styles.guideName}>Kovidu Fernando</Text>
              <Text style={styles.guideDetails}>
                Languages: English, Sinhala, Tamil
              </Text>
              <Text style={styles.rating}>Rating: 4.9 ★★★★★</Text>
            </View>
          </View>
        </View>

        {/* RECOMMENDATIONS */}
        <View style={styles.recommendations}>
          <Text style={styles.recTitle}>All The Restaurants</Text>
          <Text style={styles.recTitle}>What is Kovidu's experience?</Text>
          <Text style={styles.recTitle}>Hidden gems nearby.</Text>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },

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

  landscapeImage: { width: "100%", height: 220 },

  section: { padding: 16 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 8 },
  description: { fontSize: 14, color: "#666", marginBottom: 8 },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007A8C",
    marginBottom: 16,
  },

  mapSection: { padding: 16 },
  mapImage: { width: "100%", height: 150, borderRadius: 8 },

  guideSection: { padding: 16 },
  guideProfile: { flexDirection: "row", alignItems: "center" },

  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 28,
    marginRight: 16,
  },
  guideInfo: { flex: 1 },
  guideName: { fontSize: 18, fontWeight: "bold" },
  guideDetails: { fontSize: 14, color: "#666" },
  rating: { fontSize: 14, color: "#FFD700" },

  recommendations: { padding: 16 },
  recTitle: { fontSize: 16, marginBottom: 8, color: "#007A8C" },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFF",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    alignItems: "center",
  },
   button: { marginTop: 12, backgroundColor: "#007A8C", paddingVertical: 12, borderRadius: 12, alignItems: "center" },
    buttonText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});

export default PackageDetailsScreen;
