import React,{useRef,useState} from 'react';

import {ScrollView,View, Text, StyleSheet, TextInput} from 'react-native';
import {colors, parameters} from '../global/Styles';
import {Icon, withBadge} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeHeader= ({navigation,props}) =>
{
    const BadgeIcon = withBadge(0)(Icon)
    return(
 
        <View style={styles.header}>
          <View style={{alignItems:"center",justifyContent:"center",marginLeft:15}}>
           <Text style={{color:colors.cardBackground, fontSize:20, fontWeight:"bold"}}>Deliverio</Text>
          </View>

          <View style={{alignItems:"center",justifyContent:"center", marginRight:15}}>
            <BadgeIcon
            type="material-community"
            name="cart"
            size={30}
            color={colors.cardBackground}
            />
          </View>
        </View>
    );
}

export default HomeHeader

const styles=StyleSheet.create({

    header:{
        flexDirection:"row",
        backgroundColor:colors.button,
        height:parameters.headerHeight,
        justifyContent:"space-between"
    }
})