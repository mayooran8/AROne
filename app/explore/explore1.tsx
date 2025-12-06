import { router } from "expo-router";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Index() {
  return (
    <ImageBackground
    source={require("../../assets/images/explore1.jpg")}
    style={styles.background}
    resizeMode="cover">
      <View style={styles.centerContainer}>
        <Text style={[styles.mainText,styles.stroke]}>AR One Tours</Text>
        <Text style={styles.subText}>Your Travel {"\n"} Partner</Text>
      </View>

      <View style={styles.leftText}>
        <Text style={styles.subject1}>Plan Your</Text>
        <Text style={styles.subject2}>Luxurious {"\n"}Vacation </Text>
      </View>  
    
        <TouchableOpacity style={styles.button}
        onPress={() => router.push("/explore/explore2")}><Text style={styles.buttonText}>Explore</Text>
          </TouchableOpacity>
      
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    width: "100%",
    height: "100%"
  },

  centerContainer:{
    flex: 1,
    alignItems: "center",
    marginTop:180,
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
  subText: {
    fontSize: 28,
    fontWeight:"bold",
    color:"#4A4C4E",
    marginLeft:206
  },

  leftText:{
    position:"absolute",
    left:20,
    top:"70%",
    transform: [{ translateY: -20 }],
  },

  subject1:{
       fontSize: 20,
       fontWeight:"bold",
       color:"#eef0f1ff",
       textAlign:"left",
  },

  subject2:{
       fontSize: 28,
       fontWeight:"bold",
       color:"#eef0f1ff",
       textAlign: "left",
       lineHeight:34,
  },

  button: {
    position:"absolute",
    bottom:60,
    alignSelf:"center",
    backgroundColor: "#007A8C",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    elevation: 5,
    marginTop: 300
  },

   buttonText: {
    fontSize: 18,
    color: "white",
  },
});