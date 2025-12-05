import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AccountScreen = () => {
    const profilePic = "https://images.unsplash.com/photo-1688888745596-da40843a8d45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww";
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Your Account</Text>
            <Text style={styles.headerSubText}>
              Discover your next adventure
            </Text>
          </View>
          <Image source={{ uri: profilePic }} style={styles.profilePic} />
        </View>

      {/* Contact Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <View style={styles.infoRow}>
          <Image
            source={{ uri: 'https://via.placeholder.com/20/ff0000' }} // Placeholder for phone icon
            style={styles.icon}
          />
          <Text style={styles.infoLabel}>Phone Number</Text>
          <Text style={styles.infoValue}>+94 765865658</Text>
        </View>
        <View style={styles.infoRow}>
          <Image
            source={{ uri: 'https://via.placeholder.com/20/0000ff' }} // Placeholder for email icon
            style={styles.icon}
          />
          <Text style={styles.infoLabel}>Email Address</Text>
          <Text style={styles.infoValue}>mayooq@gmail.com</Text>
        </View>
        <View style={styles.infoRow}>
          <Image
            source={{ uri: 'https://via.placeholder.com/20' }} // Placeholder for address icon
            style={styles.icon}
          />
          <Text style={styles.infoLabel}>Address</Text>
          <Text style={styles.infoValue}>Nalur Jaffa</Text>
        </View>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.buttonEdit}>
        <Text style={styles.buttonTextEdit}>Edit Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonHelp}>
        <Text style={styles.buttonText}>Help & Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLogout}>
        <Text style={styles.buttonTextLogout}>Log Out</Text>
      </TouchableOpacity>

   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
 
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

  section: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  infoValue: {
    fontSize: 14,
    color: '#333',
    textAlign: 'right',
  },
  buttonEdit: {
    backgroundColor: '#007A8C',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonTextEdit: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonHelp: {
    backgroundColor: '#e2e7e3ff',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonText: {
    color: '#201f1fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonLogout: {
    backgroundColor: '#007A8C',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonTextLogout: {
    color: '#fff',
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    fontSize: 14,
    color: '#888',
  },
  navItemActive: {
    fontSize: 14,
    color: '#00a8a8',
    fontWeight: 'bold',
  },
});

export default AccountScreen;