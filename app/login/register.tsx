import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { db } from "../../firebase";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [DOB, setDOB] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showcPassword, setShowcPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // DatePicker
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onDateChange = (event: any, selectedDate: any) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
      const formatted = selectedDate.toISOString().split("T")[0]; // YYYY-MM-DD
      setDOB(formatted);
    }
  };

  // REGISTER FUNCTION
  const handleRegister = async () => {
    console.log("Register button clicked!");

    // Name validation
    if (!name || name.length < 3) {
      Alert.alert("Error", "Name must be at least 3 letters");
      return;
    }

    // Email validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      Alert.alert("Error", "Please enter a valid email");
      return;
    }

    // DOB validation
    if (!DOB) {
      Alert.alert("Error", "Please select your date of birth");
      return;
    }

    // Phone validation
    if (!/^\d{10}$/.test(phone)) {
      Alert.alert("Error", "Phone number must be exactly 10 digits");
      return;
    }

    // Password validation
    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long");
      return;
    }

    if (password !== cPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "users"), {
        name,
        email,
        DOB,
        phone,
        password, // stored as plain text (you asked to skip encryption)
        userid: Date.now().toString(),
        createdAt: new Date(),
      });

      Alert.alert("Success", "Registration Successful!");
      router.push("/login/login");

      // Clear fields
      setName("");
      setEmail("");
      setDOB("");
      setPhone("");
      setPassword("");
      setcPassword("");

    } catch (error) {
      console.error("Error saving user:", error);
      Alert.alert("Error", "Failed to save user");
    }

    setLoading(false);
  };

  return (
    <LinearGradient
      colors={["#0099A8", "#005F6B"]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scroll}>

        <View style={styles.box}>
          <Text style={styles.title}>Let's Travel You!</Text>

          {/* NAME */}
          <Text style={styles.label}>User Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Name"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#999"
          />

          {/* EMAIL */}
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#999"
          />

          {/* DOB */}
          <Text style={styles.label}>Date of Birth</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={{ color: DOB ? "#000" : "#999" }}>
              {DOB || "Select Date of Birth"}
            </Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={onDateChange}
            />
          )}

          {/* PHONE */}
          <Text style={styles.label}>Phone No</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Phone No"
            value={phone}
            onChangeText={setPhone}
            keyboardType="number-pad"
            maxLength={10}
            placeholderTextColor="#999"
          />

          {/* PASSWORD */}
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

          {/* CONFIRM PASSWORD */}
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
            onPress={() => router.push("/login/login")}
            style={styles.loginLink}
          >
            <Text style={styles.linkText}>Already have an account? Login here!</Text>
          </TouchableOpacity>
        </View>

        {/* SUBMIT BUTTON */}
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
  container: { flex: 1 },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  box: {
    width: "90%",
    backgroundColor: "#dae1e4",
    padding: 20,
    borderRadius: 15,
    elevation: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007A8C",
    textAlign: "center",
    marginBottom: 20,
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
  eyeIcon: { padding: 5 },
  loginLink: { marginTop: 10, alignItems: "center" },
  linkText: {
    fontSize: 16,
    color: "#007A8C",
    textDecorationLine: "underline",
  },
  submitBtn: {
    backgroundColor: "#dae1e4ff",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
    width: "90%",
    elevation: 3,
  },
  submitBtnDisabled: {
    backgroundColor: "#007A8C",
    opacity: 0.6,
  },
  submitText: {
    color: "#007A8C",
    fontSize: 18,
    fontWeight: "bold",
  },
});
