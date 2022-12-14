import * as React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faHouse, faUser, faBars, faBell} from '@fortawesome/free-solid-svg-icons';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';


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

        <LinearGradient
            // Menu Principal (do meio onde exibe as coisas)
            colors={['rgba(141,141,141,1)', 'rgba(218,218,218,0.4)']}
            start={{ x: 0.1 , y: 0.5 }}
            style={styles.mainMenu}
        />

        <Image 
            source={require('../img/2door_logo.png')} 
            style={{position:'absolute', top: 50, height:50, width: 50}}
        />

        <SafeAreaView style={styles.menuBar}>

            <TouchableOpacity onPress={() => console.log('Samir viadinho')}>
                <FontAwesomeIcon icon={faHouse} size={40} style={styles.iconesMenu} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('Paulo viadinho')}>
                <FontAwesomeIcon icon={faBars} size={40} style={styles.iconesMenu} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('Matheus viadinho')}>
                <FontAwesomeIcon icon={faBell} size={40} style={styles.iconesMenu} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('Iago viadinho')}>
                <FontAwesomeIcon icon={faUser} size={40} style={styles.iconesMenu} />
            </TouchableOpacity>
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
    left: -5,
    right: -5,
    height: '15%',
    bottom: -30,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 1
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
  mainMenu:{
    position: 'absolute',
    left: '5%',
    right: '5%',
    bottom: '15%',
    top: '15%',
    borderRadius: 16,
    borderColor: 'white',
    borderWidth: 1
  }
});
