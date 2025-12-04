import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { collection, getDocs, addDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,  } from "react-native";
import { db } from "../../firebase";

// -- Type Definition for Firestore User --
type User = {
  id?: string;
  userid: string;
  email: string;
  DOB: string;
  phone: string;
  password: string;
  name: string;
};

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [DOB, setDOB] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showcPassword, setShowcPassword] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch users from firebase
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const usersData: User[] = [];
        querySnapshot.forEach((doc) => {
          usersData.push({ id: doc.id, ...doc.data() } as User);
        });
        setUsers(usersData);
      } catch (err) {
        console.error("Error fetching users: ", err);
      }
    };
    fetchUsers();
  }, []);

  // Validate form - SIMPLIFIED FOR DEBUGGING
  const handleRegister = async () => {
    console.log("Register button clicked!"); // Debug log
    
    // Basic validation
    if (!name || !email || !DOB || !phone || !password || !cPassword) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    // Email validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      Alert.alert("Error", "Please enter a valid email");
      return;
    }

    // Phone validation
    if (!/^\d{7,15}$/.test(phone)) {
      Alert.alert("Error", "Please enter a valid phone number (7-15 digits)");
      return;
    }

    // Password validation
    if (password.length < 6) {
      Alert.alert("Error", "Password should be at least 6 characters long");
      return;
    }

    if (password !== cPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    // If all validations pass
    Alert.alert("Success", "Registration Form Validated!");
    
    // Here you can add the Firebase registration logic later
    // For now, let's just test if validation works
  };

  return (
    <LinearGradient
      colors={["#0099A8", "#005F6B"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <ScrollView 
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.box}>
          <Text style={styles.title}>Let's Travel You!</Text>

          <View style={styles.form}>
            <Text style={styles.label}>User Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Name"
              value={name}
              onChangeText={setName}
              placeholderTextColor="#999"
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholderTextColor="#999"
            />

            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              style={styles.input}
              placeholder="YYYY-MM-DD"
              value={DOB}
              onChangeText={setDOB}
              placeholderTextColor="#999"
            />

            <Text style={styles.label}>Phone No</Text>
            <TextInput
              style={styles.input}
              placeholder="Your Phone No"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              placeholderTextColor="#999"
            />

            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Enter Password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="#999"
              />
              <TouchableOpacity 
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              >
                <Ionicons
                  name={showPassword ? "eye-off" : "eye"}
                  size={24}
                  color="#007A8c"
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Confirm Password"
                secureTextEntry={!showcPassword}
                value={cPassword}
                onChangeText={setcPassword}
                placeholderTextColor="#999"
              />
              <TouchableOpacity 
                onPress={() => setShowcPassword(!showcPassword)}
                style={styles.eyeIcon}
              >
                <Ionicons
                  name={showcPassword ? "eye-off" : "eye"}
                  size={24}
                  color="#007A8c"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity 
              onPress={() => router.push('/login')}
              style={styles.loginLink}
            >
              <Text style={styles.linkText}>Already have an account? Login here!</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* SUBMIT BUTTON - MOVED INSIDE THE BOX */}
        <TouchableOpacity 
          style={[styles.submitBtn, loading && styles.submitBtnDisabled]} 
          onPress={handleRegister}
          disabled={loading}
        >
          <Text style={styles.submitText}>
            {loading ? "Registering..." : "Submit"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: "center",
    paddingVertical: 20,
  },
  box: {
    width: "90%",
    backgroundColor: "#dae1e4",
    padding: 20,
    borderRadius: 15,
    elevation: 5,
    marginBottom: 20, // Space between box and button
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007A8C",
    textAlign: "center",
    marginBottom: 20,
  },
  form: {
    width: "100%",
  },
  label: {
    fontSize: 16,
    color: "#007A8C",
    marginBottom: 6,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "white",
    padding: 14,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 14,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 5,
  },
  loginLink: {
    marginTop: 10,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 16,
    color: "#007A8C",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  submitBtn: {
    backgroundColor: "#007A8C",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: "center",
    width: "90%",
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  submitBtnDisabled: {
    backgroundColor: "#005F6B",
    opacity: 0.6,
  },
  submitText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});