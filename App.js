import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      alignItems: 'center'
    }}>
    <Text style={{marginTop: "20%"}}>Hellow World!</Text>
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }}>
      
<View style={{
        backgroundColor: "dodgerblue",
        width: 100,
        height: 100,
      }}
/>
<View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100,
      }}
/>
<View style={{
        backgroundColor: "purple",
        width: 100,
        height: 100,
      }}
/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
