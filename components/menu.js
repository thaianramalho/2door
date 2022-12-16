import * as React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import BoxJogos from './boxJogos';


let width = Dimensions.get('window').width;



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
            // Menu Principal (do meio onde exibe as coisas)
            colors={['rgba(141,141,141,1)', 'rgba(218,218,218,0.4)']}
            start={{ x: 0.1 , y: 0.5 }}
            style={styles.mainMenu}
        >
          <ScrollView>
          <BoxJogos></BoxJogos>
          <BoxJogos></BoxJogos>
          <BoxJogos></BoxJogos>
          <BoxJogos></BoxJogos>
          <BoxJogos></BoxJogos>
          <BoxJogos></BoxJogos>
          <BoxJogos></BoxJogos>
          <BoxJogos></BoxJogos>
          
          </ScrollView>
        </LinearGradient>

 
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

    </View>
);



export default Menu;


const styles = StyleSheet.create({

  backgroundLinearGradient:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    width: '100%'
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
    bottom: '3%',
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
