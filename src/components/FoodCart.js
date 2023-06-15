import React,{useRef,useState} from 'react';

import {colors, parameters} from '../global/Styles';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image } from 'react-native';
import { Icon } from 'react-native-elements';

const FoodCart = ({
    navigation,
    id,
    onPressFoodCard,
    restaurantName,
    deliveryAvailable,
    discountAvailable,
    discountPercent,
    numberOfReviews,
    buisnessAdress,
    farAway,  
    averageReview,
    images,
    sceenWidth
}) =>{
    return(
        <TouchableOpacity onPress={()=>{}}>
        <View style={{...styles.cardView, width:sceenWidth}}>
             <Image style={{...styles.image, width:sceenWidth}}
              source={URL=images}
              />
            
            <View>
            <View>
                <Text style={styles.restaurantName}>{restaurantName}</Text>
            </View>
            <View style={{flex:1,flexDirection:"row"}}>
                <View style={styles.distance}>
                    <Icon
                     name="place"
                     type="material"
                     color={colors.grey2}
                     size={18}
                     iconStyle={{marginTop:3}}
                    />
                    <Text style={styles.Min}>{farAway} Min</Text>
                </View>
                <View styl={{flex:9, flexDirection:"row"}}>
                    <Text style={styles.address}>{buisnessAdress}</Text>
                </View>
            </View>
        </View>

        </View>

        <View style={styles.review}>
            <Text style={styles.average}>{averageReview}</Text>
            <Text style={styles.numberOfReview}>{numberOfReviews} reviews</Text>
        </View>
        </TouchableOpacity>
    );
}
export default FoodCart

const styles=StyleSheet.create({
    cardView:{
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderWidth:1,
        borderColor:colors.grey4,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
    },
    image:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height:150
    },
    restaurantName:{
        fontSize:15,
        fontWeight:"bold",
        color:colors.grey1,
        marginTop:5,
        marginLeft:10
    },
    distance:{
        flex:4,
        flexDirection:"row",
        borderColor:colors.grey4,
        borderRightWidth:1,
        paddingHorizontal:5
    },
    Min:{
        fontSize:10,
        fontWeight:"bold",
        paddingTop:5,
        color:colors.grey2
    },
    address:{
        fontSize:10,
        paddingTop:5,
        color:colors.grey2,
        paddingHorizontal:10,
        fontWeight:"bold"
    },
    review:{
        position:"absolute",
        top:0,
        right:10,
        backgroundColor:'rgba(52, 52, 52, 0.3)',
        padding:2,
        alignItems:"center",
        justifyContent:"center",
        borderTopRightRadius:5,
        borderBottomLeftRadius:12
    },
    average:{
        color:"white",
        fontSize:15,
        fontWeight:"bold",
        marginTop:-3
    },
    numberOfReview:{
        color:"white",
        fontSize:11,
        marginRight:0,
        marginLeft:0
    }
})