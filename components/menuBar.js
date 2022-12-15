import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faHouse, faUser, faBars, faBell} from '@fortawesome/free-solid-svg-icons';
import { StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native';

const MenuBar = () => (
    <View style={{flex: 1}}>

        <LinearGradient
            // Menu Linear Gradient
            colors={['rgba(141,141,141,0.9)', 'rgba(240,240,240,0.25)']}
            start={{ x: 0.5 , y: 0.5 }}
            style={styles.menuLinearGradient}
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

  export default MenuBar;

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
  menuLinearGradient:{
    position: 'absolute',
    left: -5,
    right: -5,
    height: '15%',
    bottom: -30,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 1
  }
});
