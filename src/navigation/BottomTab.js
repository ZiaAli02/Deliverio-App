import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import {colors,parameters} from '../global/Styles'
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import MyAccount from "../screens/MyAccount";
import MyOrder from "../screens/MyOrder";

const BottomTabs= createBottomTabNavigator();

const BottomTab=()=>
{
  return(
    <BottomTabs.Navigator
       screenOptions={{
        tabBarActiveTintColor:"#f03a3a",
        tabBarInactiveTintColor:"black"
       }}
     >
        <BottomTabs.Screen
           name="Home"
           component={HomeScreen}
           options={{
            headerShown: false,
            tabBarLabel: "Home",
            
            tabBarIcon: ({color})=>{
                <Icon
                  name="Home"
                  type="material"
                  color={color}
                  size={50}
                  onPress={()=>{navigation.navigate("HomeScreen")}}
                />
            }
           }}
        />

<BottomTabs.Screen
           name="SearchScreen"
           component={SearchScreen}
           options={{
            headerShown: false,
            tabBarLabel: "Search",
            showIcon: true ,
            tabBarIcon: ({color})=>{
                <Icon
                  name="Search"
                  type="material"
                  color={color}
                  size={50}
                  onPress={()=>{navigation.navigate("SearchScreen")}}
                />
            }
           }}
        />


<BottomTabs.Screen
           name="MyOrder"
           component={MyOrder}
           options={{
            headerShown: false,
               tabBarLabel: "MyOrder",
               showIcon: true ,
               tabBarIcon: ({color})=>{
                   <Icon
                   name="Shopping Bag"
                   type="material"
                   color={color}
                   size={50}
                   onPress={()=>{navigation.navigate("MyOrder")}}
                   />
                }
            }}
        />
            <BottomTabs.Screen
                       name="MyAccount"
                       component={MyAccount}
                       options={{
                        headerShown: false,
                        tabBarLabel: "Person",
                        showIcon: true ,
                        tabBarIcon: ({color})=>{
                            <Icon
                              name="Person"
                              type="material"
                              color={color}
                              size={50}
                              onPress={()=>{navigation.navigate("MyAccount")}}
                            />
                        }
                       }}
                    />
    </BottomTabs.Navigator>
  );
}

export default BottomTab