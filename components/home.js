import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faHouse, faUser, faBars, faBell} from '@fortawesome/free-solid-svg-icons';


export default function Home() {
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

        <LinearGradient
            // Menu Linear Gradient
            colors={['rgba(141,141,141,0.9)', 'rgba(240,240,240,0.25)']}
            start={{ x: 0.5 , y: 0.5 }}
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                height: '12%',
                bottom: 0,
                borderRadius: 40/2,
                borderColor: 'white'
            }}
            />


        <View style={styles.menuBar}>
            <FontAwesomeIcon id='user' icon={faHouse} />
            <FontAwesomeIcon id='menu' icon={faBars}  />
            <FontAwesomeIcon id='bell' icon={faBell} />
            <FontAwesomeIcon id='user' icon={faUser} />
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
  background:{
    backgroundGradient: "vertical",
    backgroundGradientTop: "#333333",
    backgroundGradientBottom: "#666666"
  },
  menuBar:{
    justifyContent:'space-between',
    // flex: 1,
    flexDirection:'row',
  }
});
