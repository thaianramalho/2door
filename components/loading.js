import * as React from 'react';
import { Image } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Loading() {
  return (
    <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 676767
    }}>
    <LinearGradient
      // Background Linear Gradient
      colors={['rgba(0,0,0,0.8)', 'black']}
      start={{ x: 0 , y: 0.25 }}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      }}
    />
    <Image 
    source={require('../img/2door_logo.png')} 
    style={{position:'absolute'}}
    />

    <Image 
    source={require('../img/2door.png')} 
    style={{position:'absolute', bottom:50}}
    />

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
  background:{
    backgroundGradient: "vertical",
    backgroundGradientTop: "#333333",
    backgroundGradientBottom: "#666666"
  }
});
