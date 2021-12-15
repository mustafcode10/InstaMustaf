import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import firebase from './../../firebase'
import "firebase/compat/auth";
const auth = firebase.auth();

const Header = ({navigation}) => {
  const handleSignOut = async ()=> {
  try {
   await firebase.auth().signOut();
   console.log('Firebase Successfully signed out 😎 ')
  }catch (err) {
    console.log(err);
  }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignOut}>
        <Image
          style={styles.logo}
          source={require("../../assets/Header-Logo.png")}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer} >
      <TouchableOpacity onPress={()=> navigation.push('NewPostScreen')}>
        <Image   source={require("../../assets/add.png")}
        style={styles.icon}
       />
      </TouchableOpacity>
       <TouchableOpacity  onPress={()=> navigation.push('LoginScreen')}>
        <Image   source={require("../../assets/heart.png")}
        style={styles.icon}
       />
      </TouchableOpacity>
       <TouchableOpacity>
       <View style={styles.unreadBadge}>
       <Text style={styles.unreadBadgeText}>10</Text>
       </View>
        <Image   source={require("../../assets/message.png")}
        style={styles.icon}
       />
      </TouchableOpacity>
    
     
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    margin: 2,
    marginTop: 30,
    // backgroundColor: 'yellow'
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  iconsContainer: {
    color: "white",
    flexDirection: 'row'
  },
  icon:{
      width: 30,
      height: 30,
      resizeMode: "contain",
  },
  unreadBadge: {
      backgroundColor: '#FF3250',
      position: 'absolute',
      width: 25,
      height: 20,
      left: 10,
      bottom: 18,
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100
  },
  unreadBadgeText: {
      color: 'white',
      fontWeight: '600'

  }
});
