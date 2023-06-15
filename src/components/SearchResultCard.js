import React,{useRef,useState} from 'react';

import {View, Text, TextInput,StyleSheet,FlatList, ImageBackground,TouchableOpacity } from 'react-native';
import { colors } from '../global/Styles';
import {ProductData1} from '../global/Data'
import { Icon } from 'react-native-elements';
import ProductCard from '../components/ProductCard';


const SearchResultCard = ({
    onPressRestaurantCard,
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
}) => {
    return (
    <View style={{borderRadius:5}}>
        <TouchableOpacity onPress={onPressRestaurantCard}>
      <View style={styles.view1}>
        <View style={{height:150}}>
          <ImageBackground
            style={{height:160}}
            source={URL=images}
            imageStyle={styles.imageStyle}
          />
          <View style={styles.image}>
             <Text style={styles.text1}>{averageReview}</Text>
             <Text style={styles.text2}>{numberOfReviews} reviews</Text>
          </View>
        </View>
         <View style={styles.view3}>
           <View style={{paddingTop:5}}>
             <Text style={styles.text5}>{restaurantName}</Text>
           </View>
           <View style={{flexDirection:"row"}}>
             <View style={styles.view4}>
                <Icon
                 name='place'
                 type='material'
                 color={colors.cardComment}
                 size={18}
                 iconStyle={{marginTop:3, marginLeft:-3}}
                />
                <Text style={styles.view5}>{farAway} min</Text>
             </View>
             <View style={{flex:9}}>
                <Text style={styles.text6}>{buisnessAdress}</Text>
             </View>
           </View>
         </View>
      </View>
      </TouchableOpacity>

        <View style={{marginTop:5, paddingBottom:20}}>

            <FlatList
             style={{backgroundColor:colors.cardBackground,marginLeft:5, marginRight:5}}
             data={ProductData1}
             keyExtractor={(item,index)=>index.toString()}
             renderItem={({item,index})=>(
                <ProductCard
                   image={item.image}
                   productName={item.name}
                   price={item.price}
                />
             )}
             horizontal={true}
            />
        </View>

    </View>
    )}

    export default SearchResultCard

    const styles=StyleSheet.create({
        
        view1:{
            marginHorizontal:9,
            borderTopRightRadius:5,
            borderTopLeftRadius:5
        },
        view2:{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            marginTop:-5
        },
        view3:{
            flexDirection:"column",
            marginBottom:10,
            marginLeft:0,
            marginHorizontal:5,
            marginTop:5
        },
        view4:{
            flex:4,
            flexDirection:"row",
            borderRightWidth:1,
            borderRightColor:colors.grey4,
            paddingHorizontal:5
        },
        view5:{
            color:colors.grey3,
            fontSize:12,
            fontWeight:"bold",
            paddingTop:5
        },
        image:{
            position:"absolute",
            top:0,
            right:0,
            backgroundColor:'rgba(52,52,52,0.4)',
            padding:2,
            justifyContent:"center",
            alignItems:"center",
            borderTopRightRadius:5,
            borderBottomLeftRadius:12
        },
        imageStyle:{
            borderTopRightRadius:5,
            borderTopLeftRadius:5
        },
        text1:{
            color:"white",
            fontSize:15,
            fontWeight:"bold",
            marginTop:-3
        },
        text2:{
            color:"white",
            fontSize:13,
            marginRight:0,
            marginLeft:0
        },
        text3:{
            fontSize:10,
            fontWeight:"bold",
            color:colors.grey2
        },
        text4:{
            fontSize:10,
            fontWeight:"bold",
            color:colors.grey2
        },
        text5:{
            fontSize:13,
            fontWeight:"bold",
            color:colors.grey1
        },
        text6:{
            fontSize:12,
            color:colors.grey2,
            paddingTop:5,
            paddingHorizontal:10
        }
    })