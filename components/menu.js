import * as React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faHouse, faUser, faBars, faBell} from '@fortawesome/free-solid-svg-icons';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './home';

let width = Dimensions.get('window').width;

const Stack = createStackNavigator();


const Menu = () => (

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
      
        <Text 
          maxFontSizeMultiplier={1.5}
          minFontSizeMultiplier={0.75}
          numberOfLines={1}
          style={styles.textoWelcome}>
            JOGOS DO DIA
        </Text>

        <Text 
          maxFontSizeMultiplier={1.5}
          minFontSizeMultiplier={0.75}
          numberOfLines={1}
          style={styles.textoComum}>
            abaixo os jogos
        </Text>


        <SafeAreaView style={styles.menuBar}>
            
            <TouchableOpacity title='Home' onPress={() => console.log('Home pressionado')}>
                <FontAwesomeIcon icon={faHouse} size={40} style={styles.iconesMenu} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('Menu pressionado')}>
                <FontAwesomeIcon icon={faBars} size={40} style={[styles.iconesMenu, styles.iconSelected]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('Notificações pressionado')}>
                <FontAwesomeIcon icon={faBell} size={40} style={styles.iconesMenu} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('Usuário pressionado')}>
                <FontAwesomeIcon icon={faUser} size={40} style={styles.iconesMenu} />
            </TouchableOpacity>

        </SafeAreaView>

    </View>
);



export default Menu;


const styles = StyleSheet.create({
  menuBar:{
    position: 'absolute',
    flexDirection:'row',
    bottom: '4.5%',
  },

  iconesMenu:{
    height:50,
    width:50,
    marginRight: 30,
    marginLeft: 30
  },

  iconSelected:{
    color: 'rgb(230,230,230)'
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
    bottom: '14%',
    top: '24%',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    opacity: .4,
  },
  textoWelcome:{
    position:'absolute',
    textAlign:'center',
    top:'15.5%',
    fontSize: width / 15,
    fontWeight:'bold',
    color: 'rgba(250,250,250,1)'
  },
  textoComum:{
    position:'absolute',
    textAlign:'center',
    top:'25%',
    fontSize: width / 20,
    color: 'rgba(250,250,250,1)'
  }
});
