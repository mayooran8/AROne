import { router } from "expo-router";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <ImageBackground
    source={require("../../assets/images/explore2.jpg")}
    style={styles.background}
    resizeMode="cover">

      <SafeAreaView style={styles.safe}>
      <View style={styles.topContent}>
        <Text style={[styles.mainText,styles.stroke]}>AR One Tours</Text>
      </View>

      
    <View style={styles.bottomOverlay}>
      <Text style={styles.subject}>Ready to explore {"\n"}beyond boundaries?</Text>
        <TouchableOpacity style={styles.button}
        onPress={() => router.push("/login/register")}>
          <Text style={styles.buttonText}>Your Journey Starts Here ✈️</Text>
          </TouchableOpacity>
          </View>
      
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    width: "100%",
    height: "100%"
  },

  safe:{
    flex:1,
    justifyContent:"space-between",
  },

  topContent:{
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
    paddingTop:40,
  },

  mainText: {
    fontSize: 42,
    fontWeight:"bold",
  },

   stroke: {
    color: "white",   
    textShadowColor: "black",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 1,
  },

  bottomOverlay: {
    backgroundColor:"white",
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    paddingVertical:40,
    alignItems:"center",
  },

  subject:{
    fontSize: 28,
    fontWeight:"bold",
    color:"#007A8C",
    textAlign: "center",
    lineHeight:34,
  },

  button: {
    width: "80%",
    backgroundColor: "#007A8C",
    paddingVertical: 8,
    borderRadius: 12,
    alignItems:"center",
    elevation: 5,
  },

   buttonText: {
    fontSize: 18,
    color: "white",
  },
});