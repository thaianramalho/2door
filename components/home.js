import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faHouse, faUser, faBars, faBell} from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  return (
    <View
        style={styles.backgroundPrincipal}>
        
        <LinearGradient
            // Background Linear Gradient
            colors={['rgba(0,0,0,0.8)', 'black']}
            start={{ x: 0 , y: 0.25 }}
            style={styles.backgroundLinearGradient}
        />

        <LinearGradient
            // Menu Linear Gradient
            colors={['rgba(141,141,141,0.9)', 'rgba(240,240,240,0.25)']}
            start={{ x: 0.5 , y: 0.5 }}
            style={styles.menuLinearGradient}
        />


        <SafeAreaView style={styles.menuBar}>
            <FontAwesomeIcon icon={faHouse} size={40} style={styles.iconesMenu} />
            <FontAwesomeIcon icon={faBars} size={40} style={styles.iconesMenu} />
            <FontAwesomeIcon icon={faBell} size={40} style={styles.iconesMenu} />
            <FontAwesomeIcon icon={faUser} size={40} style={styles.iconesMenu} />
        </SafeAreaView>

    </View>
  );
}

const styles = StyleSheet.create({
background:{
    backgroundGradient: "vertical",
    backgroundGradientTop: "#333333",
    backgroundGradientBottom: "#666666"
  },

  menuBar:{
    position: 'absolute',
    flexDirection:'row',
    bottom: 40,
  },

  iconesMenu:{
    height:50,
    width:50,
    marginRight: 30,
    marginLeft: 30
  },

  menuLinearGradient:{
    position: 'absolute',
    left: 0,
    right: 0,
    height: '12%',
    bottom: 0,
    borderRadius: 40/2,
    borderColor: 'white'
  },

  backgroundLinearGradient:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },

  backgroundPrincipal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 676767
  },
  
});
