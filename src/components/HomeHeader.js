import React,{useRef,useState} from 'react';

import {ScrollView,View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, parameters} from '../global/Styles';
import {Icon, withBadge} from 'react-native-elements';

const HomeHeader= ({navigation,props}) =>
{
    const BadgeIcon = withBadge(0)(Icon)
    return(
 
        <View style={styles.header}>
          <View style={{alignItems:"center",justifyContent:"center",marginLeft:15}}>
           <Text style={{color:colors.cardBackground, fontSize:20, fontWeight:"bold"}}>Deliverio</Text>
          </View>

          <TouchableOpacity style={{alignItems:"center",justifyContent:"center", marginRight:15,marginTop:5}} 
          onPress={()=>{navigation.navigate('MyOrder')}}>
            <BadgeIcon
            type="material-community"
            name="cart"
            size={30}
            color={colors.cardBackground}
            />
          </TouchableOpacity>
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