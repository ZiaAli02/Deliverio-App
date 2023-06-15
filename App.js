import 'react-native-gesture-handler';
import React from "react";
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import {colors} from "./src/global/Styles";
import Routes from './src/navigation/Routes';


export default function App()
{
  return(
      <View style={styles.container}>
       <StatusBar
       barStyle= "light-content"     
       backgroundColor ={colors.statusbar}
       />
       <Routes/>
    </View>
  );
  };
  
const styles=StyleSheet.create({
  container:
  { 
    flex: 1
  }
});  