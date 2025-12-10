import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const BookingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Book Your Tour</Text>
        <Text style={styles.headerPoints}>ⓘ 200 points</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Personal Information Section */}
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Full Name</Text>
          <TextInput style={styles.input} placeholder='Your Name'  />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput style={styles.input}  placeholder='Your Address'/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput style={styles.input} placeholder='Your Phone No'/>
        </View>

        {/* Booking Details Section */}
        <Text style={styles.sectionTitle}>Booking Details</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Number of Persons</Text>
          <TextInput style={styles.input} placeholder='No of persons' />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Travel Date</Text>
          <TextInput style={styles.input} placeholder="Your travel date" placeholderTextColor="#888" />
        </View>

        {/* Payment Method Section */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Payment Method</Text>
          <TextInput style={styles.input} placeholder="Select Payment Method" placeholderTextColor="#888" />
        </View>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm Booking - 50.00 LKR</Text>
      </TouchableOpacity>

      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#00a8a8',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerPoints: {
    color: '#fff',
    fontSize: 14,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
  },
  confirmButton: {
    backgroundColor: '#00a8a8',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  navItem: {
    fontSize: 14,
    color: '#333',
  },
});

export default BookingScreen;