import React from 'react';

import {View, Text,StyleSheet,Image} from 'react-native';
import { colors } from '../global/Styles';
import { Icon } from 'react-native-elements';
import ProdutCard from '../components/ProductCard'

function MenuCard({productName,price,image,productDetails}){
    return(
          <View style={styles.view2}>
            <View style={styles.view3}>
              <Text style={styles.text1}>{productName}</Text>
              <Text style={styles.text2}>{productDetails}</Text>
               <View>
              <Text style={styles.text3}>RS: {price}</Text>
               </View>
            </View>
             <View >
              <Image style={styles.image} source={URL=image}/>
             </View>
          </View>
    );
}

export default MenuCard

const styles=StyleSheet.create({
    view1:{
        backgroundColor:colors.cardBackground,
        margin:5,
        padding:10,
        shadowColor:colors.black,
        shadowOpacity:0.4,
        elevation:4
    },
    view2:{
        flex:2,
        padding:0,
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:colors.cardBackground,
        margin:5,
        padding:10,
        shadowColor:colors.black,
        shadowOpacity:0.4,
        elevation:4
    },
    view3:{
        flex:6,
        justifyContent:"space-between"
    },
    text1:{
        fontSize:15,
        color:colors.grey1,
        fontWeight:"bold"
    },
    text2:{
        fontSize:15,
        color:colors.grey3,
        marginRight:2
    },
    text3:{
        fontSize:15,
        color:colors.black,
    },
    image:{
        height:80,
        width:80
    }
})