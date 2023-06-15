import React,{useRef,useState} from 'react';

import {colors, parameters} from '../global/Styles';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, Pressable, FlatList } from 'react-native';
import { Icon  } from 'react-native-elements';

const BuisnessConsole=()=>
{
    return(

        <View style={styles.container}>
           <Text>Welcome To Buisness-Console</Text>
        </View>
    );
}

export default BuisnessConsole

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})