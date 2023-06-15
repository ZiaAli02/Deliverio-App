import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack';
import React from 'react';
import SignIn from "../screens/authScreens/SignIn"
import WelcomeScreen from "../screens/authScreens/WelcomeScreen"
import RestaurantMap from '../screens/RestaurantMap';
import BottomTab from './BottomTab';
import SearchScreen from '../screens/SearchScreen';
import SearchResult from '../screens/SearchResult';
import Drawer from '../navigation/Drawer';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';
import MenuProduct from '../screens/MenuProduct';
import SignUpScreen from '../screens/authScreens/SignUpScreen'

const stack = createNativeStackNavigator();

const Routes = () => {
  return (
      <NavigationContainer>
        <stack.Navigator initialRouteName="WelcomeScreen" >
          <stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
          <stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false  }}/>
          <stack.Screen name="RestaurantMap" component={RestaurantMap} options={{ headerShown: false  }}/>
          <stack.Screen name="HomeScreen" component={BottomTab} options={{ headerShown: false  }}/>
          <stack.Screen name="SearchResult" component={SearchResult} options={{ headerShown: false  }}/>
          <stack.Screen name="Drawer" component={Drawer} options={{ headerShown: false  }}/>
          <stack.Screen name="MenuProduct" component={MenuProduct} options={{ headerShown: false  }}/>
          <stack.Screen name="RestaurantHomeScreen" component={RestaurantHomeScreen} options={{ headerShown: false  }}/>
          <stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false  }}/>
        </stack.Navigator>
      </NavigationContainer>
  );
};

export default Routes;