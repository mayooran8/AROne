import React from 'react';
import {
  View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView,} from 'react-native';

// Placeholder images - replace with actual assets
const profilePic = { uri: 'https://via.placeholder.com/60x60/4CAF50/FFFFFF?text=User' };
const mountVeraImg = { uri: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=150&h=100&fit=crop' };
const riverSeaImg = { uri: 'https://images.unsplash.com/photo-1572492762274-22bf6a465c94?w=150&h=100&fit=crop' };
const sailingImg = { uri: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=150&h=100&fit=crop' };
const hotelImg = { uri: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=150&fit=crop' };

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>Hi, John</Text>
            <Text style={styles.points}>2,450 points</Text>
          </View>
          <Image source={profilePic} style={styles.profilePic} />
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Where to go?"
            placeholderTextColor="#666"
          />
          <View style={styles.dateChip}>
            <Text style={styles.dateText}>24 Mar 2026</Text>
          </View>
          <View style={styles.fromToContainer}>
            <Text style={styles.fromText}>Jaffna</Text>
            <Text style={styles.arrow}>→</Text>
            <Text style={styles.toText}>Vavuniya</Text>
          </View>
        </View>

        {/* Promo Banner */}
        <View style={styles.promoContainer}>
          <Text style={styles.promoText}>Serendib Travels 25% off</Text>
          <Text style={styles.promoTime}>08:30</Text>
        </View>

        {/* Booking ID */}
        <View style={styles.bookingContainer}>
          <Text style={styles.bookingTitle}>Booking ID</Text>
          <View style={styles.bookingDetails}>
            <Text style={styles.bookingId}>81236</Text>
            <Text style={styles.bookingType}>Economy Direct</Text>
          </View>
        </View>

        {/* Journey Together Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Journey together</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsContainer}>
            <View style={styles.card}>
              <Image source={mountVeraImg} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Mount Vera</Text>
                <View style={styles.ratingContainer}>
                  <Text style={styles.stars}>★★★★☆</Text>
                  <Text style={styles.rating}>4.8</Text>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <Image source={riverSeaImg} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>River Sea</Text>
                <View style={styles.ratingContainer}>
                  <Text style={styles.stars}>★★★★☆</Text>
                  <Text style={styles.rating}>4.7</Text>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <Image source={sailingImg} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Sailing</Text>
                <View style={styles.ratingContainer}>
                  <Text style={styles.stars}>★★★★★</Text>
                  <Text style={styles.rating}>4.9</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Hotel Recommendation */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Hotel recommendation for you</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.hotelCard}>
            <Image source={hotelImg} style={styles.hotelImage} />
            <View style={styles.hotelContent}>
              <Text style={styles.hotelTitle}>AJ Lanka</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.stars}>★★★★☆</Text>
                <Text style={styles.rating}>4.5</Text>
              </View>
              <Text style={styles.hotelPrice}>2,000 LKR</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>♥</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 80, // Space for bottom nav
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#E3F2FD',
  },
  greetingContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1976D2',
  },
  points: {
    fontSize: 14,
    color: '#666',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    backgroundColor: 'white',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  dateChip: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 14,
    color: '#1976D2',
    fontWeight: '500',
  },
  fromToContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fromText: {
    fontSize: 16,
    color: '#1976D2',
    fontWeight: 'bold',
  },
  arrow: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#666',
  },
  toText: {
    fontSize: 16,
    color: '#666',
  },
  promoContainer: {
    backgroundColor: '#FFF3E0',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  promoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#EF6C00',
  },
  promoTime: {
    fontSize: 14,
    color: '#666',
  },
  bookingContainer: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bookingTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  bookingDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bookingId: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1976D2',
  },
  bookingType: {
    fontSize: 16,
    color: '#333',
  },
  sectionContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    fontSize: 14,
    color: '#1976D2',
  },
  cardsContainer: {
    flexDirection: 'row',
  },
  card: {
    width: 120,
    marginRight: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 80,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stars: {
    marginRight: 5,
    color: '#FFD700',
  },
  rating: {
    fontSize: 14,
    color: '#666',
  },
  hotelCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
  },
  hotelImage: {
    width: 120,
    height: 100,
  },
  hotelContent: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  hotelTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  hotelPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1976D2',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navText: {
    fontSize: 12,
    color: '#666',
  },
});

export default HomeScreen;