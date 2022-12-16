import * as React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native';

const BoxJogos = () => (
<SafeAreaView>
    <LinearGradient
        // Menu Linear Gradient
        colors={['white', 'grey']}
        start={{ x: 0.5 , y: 0.5 }}
        style={styles.menuLinearGradient}
    >
        <Text style={{textAlign:'center', paddingTop:10}}>Horário</Text>
        <Text style={{textAlign:'center', marginVertical:37.5, fontSize:30, fontWeight:'bold'}}>X</Text>
        <Text style={{textAlign:'left', fontSize:20, fontWeight:'bold'}}>Team 1</Text>

    </LinearGradient>
</SafeAreaView>
);

export default BoxJogos;

const styles = StyleSheet.create({
    menuLinearGradient:{
        position: 'relative',
        borderRadius: 20,
        borderColor: 'white',
        height: 150,
        marginHorizontal: 20,
        marginVertical: 20
    }
});
    