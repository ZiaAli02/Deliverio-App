import 'react-native-gesture-handler';
import React from 'react';
import {colors,parameters} from '../global/Styles'
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from './BottomTab';
import { Icon } from 'react-native-elements';
import BuisnessConsole from '../screens/BuisnessConsole';
import DrawerContent from '../components/DrawerContent'

const drawer = createDrawerNavigator();
 
const Drawer = ({props}) => {
    return (
        <drawer.Navigator drawerContent={props=>{<DrawerContent {...props}/>}}>
          <drawer.Screen
           name="BottomTab" 
           component={BottomTab} 
           options={{
            headerShown:false,
            title:'client',
            drawerIcon:({focused, size})=>(
              <Icon
                type='material-community'
                name='home'
                color={focused ? '#7cc': colors.grey2}
              />
            )
           }}
           />  
           <drawer.Screen
           name="BuisnessConsole" 
           component={BuisnessConsole} 
           options={{
            headerShown:false,
            title:'Buisness console',
            drawerIcon:({focused, size})=>(
              <Icon
                type='material'
                name='buisness'
                color={focused ? '#7cc': colors.grey2}
              />
            )
           }}
           />        
          
        </drawer.Navigator>
     );
    };
    
export default Drawer;