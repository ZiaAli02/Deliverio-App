import React,{useRef,useState} from 'react';

import { colors, parameters } from '../global/Styles';
import {View, Text, TextInput,StyleSheet,FlatList, TouchableWithoutFeedback, ImageBackground, Dimensions } from 'react-native';
import { filterData, filterData2 } from '../global/Data';
import { createStackNavigator, TransitionPresets } from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import SearchResult from '../screens/SearchResult';

const ClientSearch= createStackNavigator();

const ClientStack = () => {
    return (
     <ClientSearch.navigator>

         <ClientSearch.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={()=>({
                headerShown: false
            })}
         />
         <ClientSearch.Screen
            name="SearchResult"
            component={SearchResult}
            options={()=>({
                headerShown: false
            })}
         />
     </ClientSearch.navigator>
    
    )}

    export default ClientStack

    const styles=StyleSheet.create({

        container:{
            flex:1
        }
    })