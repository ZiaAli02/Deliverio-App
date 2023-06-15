import React from "react"

import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import {colors, parameters} from '../global/Styles'
import {Icon} from 'react-native-elements'

export default function Header({title,navigation}) 
{
  return(
   <View style={styles.header}>
    <TouchableOpacity style={{marginLeft:15,marginTop:7}} onPress={()=>{navigation.goBack()}}> 
    <Icon 
    type="material-community"
    name= "arrow-left"
    color={colors.headerText}
    size= {28}
    />
    </TouchableOpacity>
   <View>
     <Text style={styles.headerText}>{title}</Text>
   </View>
   </View>
  );
};

const styles= StyleSheet.create({
    header:
    {
      flexDirection:"row",
      backgroundColor: colors.button,
      height: parameters.headerHeight
    },
    headerText:
    {
        color: colors.headerText,
        fontSize: 18,
        fontWeight: "bold",
        margin: 5,
        marginLeft:30
    }
});