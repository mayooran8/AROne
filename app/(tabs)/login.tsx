import { LinearGradient } from "expo-linear-gradient"; 
import { router } from "expo-router"; 
import { collection, getDocs, query, where } from 'firebase/firestore'; 
import React, { useState } from 'react'; 
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'; 
import { db } from "../../firebase"; 

// -- Type Definition for Firestore User --
type User = {
  userid: string;
  password: string;
  email?: string;
};

// -- Login logic -- 
export default function Login() {
   const [userId, setUserId] = useState(""); 
   const [password, setPassword] =useState(""); 
   const [loading , setLoading] = useState(false); 
   const handleLogin = async () => { 
    if ( !userId || !password) 
      {
         Alert.alert('Error', 'Please enter both UserID or Email and Password');
          return; 
        } 


        setLoading(true); 
        try {
           // -- checking UserID -- 
   const userRef = collection(db, 'users'); 
   let q = query(userRef, where('userId', '==', userId));
   let snap = await getDocs(q); 
   if (snap.empty) 
   {
    q = query(userRef,where("email", "==", userId));
    snap = await getDocs(q);
   }
   if (snap.empty)
    {
       Alert.alert('Error', 'user not found');
       setLoading(false); 
       return; 
      }
       const userDoc = snap.docs[0]; 
       const user = { id: userDoc.id, ...userDoc.data() as User 
      }; 
      // -- verify password -- 
      if (user.password !== password) 
      {
      Alert.alert('Error', 'Invalid password'); 
      setLoading(false); return; 
      }
          // -- For success login --
      Alert.alert("Success","Login Successfull!"); 
      router.push("/home"); 
       }
         catch (error:any) 
       {
           Alert.alert("Error",error.message); 
       }
            setLoading(false); 
       }
       // -- page structure -- 
  return ( 
    <LinearGradient colors={["#007A8C", "#4f89ecff"]} // top → bottom 
    start={{ x: 0, y: 0 }} 
    end={{ x: 0, y: 1 }} 
    style={styles.container} > 
    <ScrollView contentContainerStyle={styles.scroll}>
    <View style={styles.box}> 
    <Text style={styles.title}>Let's Travel You ! </Text> 
    <View style={styles.form}> 
    <Text style={styles.Label}>User Name or Email</Text> 
    <TextInput style={styles.input}
      placeholder="UserID or Email" 
      value={userId} 
      onChangeText={setUserId}/> 
    <Text style={styles.Label}>Password</Text> 
    <TextInput style={styles.input} 
    placeholder="UserID or Email" 
      value={password} 
      onChangeText={setPassword}/> 
    <Text style={styles.Label} onPress={() => router.push('/register')}>Don't have An Account!</Text> 
      </View> 
       </View> 
         <TouchableOpacity style={styles.button} onPress={handleLogin}> 
    <Text style={styles.buttonText}>Login</Text> 
         </TouchableOpacity> </ScrollView> </LinearGradient> ); 
        }

  // -- styles for login page -- 
 const styles = StyleSheet.create({
  
  container:{
    flex: 1,
  },

  scroll:{
    flexGrow:1,
    alignItems: "center",
    paddingVertical:40,
  },

  box:{
    width: "90%",
    backgroundColor: "#dae1e4ff",
    padding: 20,
    borderRadius: 15,
    elevation: 5, 
  },

  title:{
    fontSize:28,
    fontWeight:"bold",
    color:"#007A8C",
    textAlign:"center",
    marginBottom:20,
  },

  form:{
    width: "100%",
  },

  Label:{
    fontSize:16,
    color:"#007A8C",
    marginBottom:6,
  },

  input:{
    backgroundColor:"white",
    padding:14,
    borderRadius:8,
    marginBottom:15,
    fontSize:14,
  },

  button: {
    width:"90%",
    backgroundColor: "#dae1e4ff",
    paddingVertical: 14,
    borderRadius:12,
    alignItems:"center",
    marginTop:20,
    elevation:3,
  },

  buttonText: {
    fontSize: 18,
    color: "#007A8C",
    fontWeight:"bold",
  },

});