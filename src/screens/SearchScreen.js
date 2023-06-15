import React,{useRef,useState} from 'react';

import { colors, parameters } from '../global/Styles';
import {View, Text, TextInput,StyleSheet,FlatList, TouchableWithoutFeedback, ImageBackground, Dimensions } from 'react-native';
import Search from '../components/Search';
import { filterData, filterData2 } from '../global/Data';

const SCREEN_WIDTH=Dimensions.get('window').width;

const SearchScreen = ({navigation}) => {
    return (
        <View style={{flex:1,marginHorizontal:10,marginBottom:10}}>
          <Search/>

          <View>
            <FlatList
              style={{marginBottom:15}}
              data={filterData2}
              keyExtractor={item=> item.id}
              renderItem={({item})=>(
                <TouchableWithoutFeedback
                onPress={()=>{navigation.navigate("SearchResult",{item:item.name})}}
                >
                   <View style={styles.imageView}>
                     <ImageBackground style={styles.image} source={URL=item.image}>
                       <View>
                         <Text style={{color:colors.button,paddingLeft:5,paddingTop:5,fontWeight:"bold"}}>{item.name}</Text>
                       </View>
                     </ImageBackground>
                   </View>
                </TouchableWithoutFeedback>
              )}

              horizontal={false}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              ListHeaderComponent={<Text style={styles.listHeader}>Top Categories</Text>}
              ListFooterComponent={<Footer navigation={navigation}/>}
            />
          </View>
        </View>
    
    );
}

 
const Footer=({navigation})=>{
  
  return(
    
         <View style={{marginBottom:20}}>
            <FlatList
              style={{marginBottom:15}}
              data={filterData}
              keyExtractor={item=> item.id}
              renderItem={({item})=>(
                <TouchableWithoutFeedback
                  onPress={()=>{navigation.navigate("SearchResult",{item:item.name})}}
                >
                   <View style={styles.imageView}>
                     <ImageBackground style={styles.image} source={URL=item.image}>
                       <View>
                         <Text style={{color:colors.button,paddingLeft:5,paddingTop:5,fontWeight:"bold"}}>{item.name}</Text>
                       </View>
                     </ImageBackground>
                   </View>
                </TouchableWithoutFeedback>
              )}

              horizontal={false}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              ListHeaderComponent={<Text style={styles.listHeader}>More Categories</Text>}
             
            />
          </View>
  )
}

export default SearchScreen

const styles=StyleSheet.create({
    imageView:{
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
      width:SCREEN_WIDTH*0.4200,
      height:SCREEN_WIDTH*0.4200,
      marginLeft:SCREEN_WIDTH*0.035,
      marginBottom:SCREEN_WIDTH*0.035,
      backgroundColor:colors.cardBackground,
      borderWidth:1,
      borderColor:colors.button
    },
    image:{
      height:SCREEN_WIDTH*0.4000,
      width:SCREEN_WIDTH*0.3900,
      borderRadius:10,
      borderColor:colors.button      
    },
    listHeader:{
      fontSize:16,
      color:colors.grey2,
      paddingBottom:10,
      marginLeft:12,
      fontWeight:"bold"
    },
    textView:{
      height:SCREEN_WIDTH*0.4475,
      width:SCREEN_WIDTH*0.4475,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:'rgba(52,52,52,0.3)'
    }
})