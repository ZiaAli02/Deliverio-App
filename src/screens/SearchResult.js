import React,{useRef,useState} from 'react';

import {View, Text, TouchableOpacity,StyleSheet,FlatList, TouchableWithoutFeedback, ImageBackground, Dimensions } from 'react-native';
import SearchResultCard from '../components/SearchResultCard';
import {restaurantData} from '../global/Data'
import {colors} from '../global/Styles'
import {Icon} from 'react-native-elements'

const SCREEN_WIDTH=Dimensions.get("window").width;

const SearchResult = ({navigation,route}) => {
    return (
    <View style={styles.container}>

<FlatList
      style={{marginTop:10 , marginBottom:10}}
    
      data={restaurantData}
      keyExtractor={(item,index)=> index.toString()}
      renderItem={({item})=>(
        <View style={{marginLeft:5}}>
          <SearchResultCard
           sceenWidth={SCREEN_WIDTH*0.8}
           images={item.images}
           restaurantName={item.restaurantName}
           farAway={item.farAway}
           buisnessAdress={item.buisnessAdress}
           averageReview={item.averageReview}
           numberOfReviews={item.numberOfReview}
           onPressRestaurantCard={()=> {navigation.navigate("RestaurantHomeScreen",{id:item.id,restaurant:item.restaurantName})}}
          />
        </View>
      )}

        ListHeaderComponent={
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{marginLeft:15,marginTop:10}} onPress={()=>{navigation.goBack()}}> 
          <Icon 
          type="material-community"
          name= "arrow-left"
          color={colors.button}
          size= {28}
          />
          </TouchableOpacity>
          <View>
          <Text style={styles.listHeader}>{restaurantData.length} Results For {route.params.item}</Text>
          </View>
          </View>
        }
      />
        
    </View>
    
    )}

    export default SearchResult

    const styles=StyleSheet.create({

        container:{
            flex:1
        },
        listHeader:{
            fontSize:17,
            paddingHorizontal:10,
            paddingVertical:10,
            fontWeight:"bold",
            color:colors.button
        }
    })