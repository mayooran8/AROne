import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { db } from "../../firebase";

// Type definition for Firestore User
type User = {
  userid: string;
  password: string;
  email?: string;
};

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!userId || !password) {
      Alert.alert("Error", "Please enter both UserID/Email and Password");
      return;
    }

    setLoading(true);

    try {
      const userRef = collection(db, "users");

      // First try matching by userid
      let q = query(userRef, where("userid", "==", userId));
      let snap = await getDocs(q);

      // If not found, try matching by email
      if (snap.empty) {
        q = query(userRef, where("email", "==", userId));
        snap = await getDocs(q);
      }

      if (snap.empty) {
        Alert.alert("Error", "User not found");
        setLoading(false);
        return;
      }

      const userDoc = snap.docs[0];
      const user = userDoc.data() as User;

      // Check password
      if (user.password !== password) {
        Alert.alert("Error", "Invalid password");
        setLoading(false);
        return;
      }

      // Login success
     
      router.push("/(tabs)/home");

    } catch (error: any) {
      console.error("Login Error:", error);
      Alert.alert("Error", "Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <LinearGradient
      colors={["#0099A8", "#005F6B"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.box}>
          <Text style={styles.title}>Let's Travel You!</Text>

          <View style={styles.form}>
            <Text style={styles.label}>User Name or Email</Text>
            <TextInput
              style={styles.input}
              placeholder="UserID or Email"
              value={userId}
              onChangeText={setUserId}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholderTextColor="#999"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholderTextColor="#999"
            />

            <Text style={styles.registerLink} onPress={() => router.push("/login/register")}>
              Don't have an account? Register here!
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
          <Text style={styles.buttonText}>{loading ? "Logging in..." : "Login"}</Text>
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
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  box: {
    width: "90%",
    backgroundColor: "#dae1e4ff",
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
  registerLink: {
    fontSize: 14,
    color: "#007A8C",
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 10,
  },
  button: {
    width: "90%",
    backgroundColor: "#007A8C",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
