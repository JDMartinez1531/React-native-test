import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";

const image =  require("../assets/background.jpg");
const logo = require("../assets/logo-red.png")

const WelcomeScreen = () => (
    <ImageBackground source={image} style={styles.background}>
      <View style={styles.logoContainer}>
      <Image source={logo} style={styles.logo}></Image>
      <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: "#fc5c65"
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: "#4ecdc4"
  },
  logo: {
    width: 100,
    height: 100,
    
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: "center",
  }
  
});

export default WelcomeScreen;