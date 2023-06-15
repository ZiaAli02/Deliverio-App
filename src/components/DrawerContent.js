import {React, useRef,useState} from 'react'

import {View,Text,Linking,Pressable,Alert,Switch,StyleSheet} from 'react-native'
import {DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer'
import { Avatar,Icon,Button, AirbnbRating } from 'react-native-elements'
import {colors,parameters} from '../global/Styles'

const DrawerContent=({props})=>{
    return(
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
            <View style={{ backgroundColor:colors.button}}>
             <View style={{flexDirection:"row",alignItems:"center", paddingLeft:15,paddingVertical:10}}>
                <Avatar   
                 rounded
                 avatarStyle={styles.avatar}
                 size={75}
                 source= {require("../assests/fast_food.jpg")}
                 />
                  <View style={{marginLeft:10}}>
                    <Text style={{fontWeight:"bold", color:colors.cardBackground, fontSize:18}}>Bunny Developer</Text>
                    <Text style={{color:colors.cardBackground, fontSize:14}}>bunny@deliverio.com</Text>
                  </View>
             </View>
               <View style={{flexDirection:"row",justifyContent:"space-evenly",pageBackground:5}}>
               <View style={{flexDirection:"row",marginTop:10}}>
                  <View style={{marginLeft:10, justifyContent:"center", alignItems:"center"}}>
                   <Text style={{fontSize:18,fontWeight:"bold", color:colors.cardBackground}}>1</Text>
                    <Text style={{fontSize:14, color:colors.cardBackground}}>My Favoriates</Text>
                  </View>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                  <View style={{marginLeft:10, justifyContent:"center", alignItems:"center"}}>
                    <Text style={{fontSize:18,fontWeight:"bold", color:colors.cardBackground}}>0</Text>
                     <Text style={{fontSize:14, color:colors.cardBackground}}>Shopping Cart</Text>
                  </View>
                </View>
                </View>       
            </View>

            <DrawerItemList {...props}/>
               
              <DrawerItem
                label="Payment"
                icon={({color,size}) =>(
                 <Icon
                   type='material-communutiy'
                   name='credit-card-outline'
                   color={color}
                   size={size}
                 />
                )}
              />
            <DrawerItem
                label="Promotions"
                icon={({color,size}) =>(
                 <Icon
                   type='material-communutiy'
                   name='tag-heart'
                   color={color}
                   size={size}
                 />
                )}
              />
            <DrawerItem
                label="Setting"
                icon={({color,size}) =>(
                 <Icon
                   type='material-communutiy'
                   name='cog-outline'
                   color={color}
                   size={size}
                 />
                )}
              />
            <DrawerItem
                label="Help"
                icon={({color,size}) =>(
                 <Icon
                   type='material-communutiy'
                   name='lifebuoy'
                   color={color}
                   size={size}
                 />
                )}
              />

        <View style={{borderTopWidth:1,borderTopColor:colors.grey5}}>
          <Text style={styles.preferences}>Preferences</Text>
           <View style={styles.switchText}>
             <Text style={styles.darkThemeText}>Dark Theme</Text>
              <View style={{paddingRight:10}}>
                  <Switch 
                    trackColor={{false:"#767577", true:"#81b0ff"}}
                    thumbColor="f4f3f4"
                  />
              </View>
           </View>
        </View>

            </DrawerContentScrollView>

            <DrawerItem
                label="Sign Out"
                icon={({color,size}) =>(
                 <Icon
                   type='material-communutiy'
                   name='logout-variant'
                   color={color}
                   size={size}
                 />
                )}
              />
        </View>
    );
}

export default DrawerContent

const styles =StyleSheet.create({
    container:{
      flex:1
    },
      avatar:{
      borderWidth:4,
      borderColor:colors.pageBackground
    },
    preferences:{
      fontSize:16,
      color:colors.grey2,
      PaddingTop:10,
      paddingLeft:20
    },
    switchText:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      paddingLeft:20,
      paddingVertical:5,
      paddingRight:10
    },
    darkThemeText:{
      fontSize:16,
      color:colors.grey2,
      PaddingTop:10,
      marginLeft:0,
      fontWeight:"bold"
    }
})