import React,{useEffect, useRef,useState} from 'react';

import {View, Text, TextInput,StyleSheet,FlatList, TouchableWithoutFeedback, ImageBackground,Animated } from 'react-native';
import { colors } from '../global/Styles';
import { restaurantData } from '../global/Data';
import { Icon } from 'react-native-elements';

const RestaurantHeader = ({navigation,id}) => {
  
   const currentValue=new Animated.Value(1)
   const index2=10; 
   const [liked,setLiked]=useState(false)
   const [counter,setCounter]=useState(-2)
   const [visible,setVisible]=useState(false)
  
   const likeHandler=()=>{
      if(liked==false)
         setVisible(true)

      setLiked(!liked)
      setCounter(index2)
   }
  
    useEffect(()=>{
      if(liked == true)
      {
        Animated.spring(currentValue,{toValue:3,friction:2,useNativeDriver:true}).start(()=>{
            Animated.spring(currentValue,{toValue:1,friction:2,useNativeDriver:true}).start(()=>{
                setVisible(false)
            }) 
        })
      }
    },[liked])
     
    return (
        <View style={styles.container}>
          <ImageBackground 
          style={styles.container}
          source={URL=restaurantData[id].images}
          imageStyle={styles.image}
          >
            <View style={styles.view1}>
                <View style={styles.view2}>
                    <Icon
                      name='arrow-left'
                      type='material-community'
                      color='black'
                      size={25}
                      onPress={()=>{navigation.goBack()}}
                    />
                </View>
                 <View style={styles.view3}>
                 <Icon
                      name={liked && (index2 == counter) ? 'favorite': 'favorite-border'}
                      type='material'
                      color='red'
                      size={25}
                      onPress={()=>{likeHandler()}}
                    />
                 </View>
            </View>
            <View style={styles.view4}>{visible && (index2 ==counter) &&
               <Animated.View style={{transform:[{scale:currentValue}]}}>
                  <Icon name='favorite' size={40} color='red' type='material'/>
               </Animated.View>
            } 
            </View>
          </ImageBackground>
        </View>
    )}

    export default RestaurantHeader

    const styles=StyleSheet.create({
        container:{
            height:150
        },
        image:{
            borderTopLeftRadius:5,
            borderTopRightRadius:5
        },
        view1:{
            flexDirection:"row",
            alignItems:"baseline",
            justifyContent:"space-between"
        },
        view2:{
            margin:10,
            height:40,
            width:40,
            backgroundColor:colors.cardBackground,
            borderRadius:20,
            justifyContent:"center",
            alignItems:"center"
        },
        view3:{
            margin:10,
            marginTop:0,
            height:40,
            width:40,
            backgroundColor:colors.cardBackground,
            borderRadius:20,
            justifyContent:"center",
            alignItems:"center"
        },
        view4:{
            marginTop:0,
            alignItems:"center",
            justifyContent:"center"
        },

    })