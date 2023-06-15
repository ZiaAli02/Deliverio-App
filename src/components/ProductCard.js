import React,{useRef,useState} from 'react';

import {View, Text,StyleSheet,FlatList, Image } from 'react-native';
import { colors } from '../global/Styles';
import { Icon } from 'react-native-elements';

const ProductCard = ({productName,image,price}) => {
    return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
            <Text style={styles.text1}>{productName}</Text>
            <Text style={styles.text2}>Rs:{price}</Text>
        </View>
        <View style={styles.view4}>
            <Image style={styles.image} source={URL=image}/>
        </View>
       </View>
     </View>
    )}

    export default ProductCard

    const styles=StyleSheet.create({
        
        view1:{
            backgroundColor:"white",
            elevation:4,
            shadowOpacity:0.4,
            shadowColor:"black",
            margin:5,
            width:210,
            padding:10
        },
        view2:{
            flexDirection:"row",
            padding:0,
            justifyContent:"space-between"
        },
        view3:{
            justifyContent:"space-between",
            width:110
        },
        view4:{
            width:75,
            height:65
        },
        
        image:{
            width:75,
            height:65
        },
        text1:{
            color:colors.grey1,
            fontSize:15,
            fontWeight:"bold"
        },
        text2:{
            color:colors.grey1,
            fontSize:12,
            fontWeight:"bold"
        }
    })