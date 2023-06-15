import React,{useEffect, useRef,useState} from 'react';

import {View, Text,StyleSheet,FlatList, TouchableOpacity, Dimensions} from 'react-native';
import { colors } from '../global/Styles';
import { Icon } from 'react-native-elements';
import {menu} from '../global/Data';
import {TabBar, TabView} from 'react-native-tab-view';
import { Route1, Route2, Route3, Route4, Route5, Route6 } from './MenuTabs';

const SCREEN_WIDTH = Dimensions.get('window').width;
const initialLayout = SCREEN_WIDTH;

const MenuProduct = ({navigation,route}) => {

  const [routes] = useState(menu);
  const [index, setIndex] = useState(0);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: colors.cardBackground}}
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
      style={styles.tab}
      labelStyle={styles.tabLabel}
      contentContainerStyle={styles.tabContainer}
    />
  );

    const renderScene=({route})=>{
        switch(route.key){
         case 1:
            return <Route1 name={navigation}/> 
         case 2:
            return <Route2 name={navigation}/> 
         case 3:
            return <Route3 name={navigation}/>
         case 4:
            return <Route4 name={navigation}/> 
         case 5:
            return <Route5 name={navigation}/> 
         case 6:
            return <Route6 name={navigation}/>  
         default:
           return null
        }
     }

    return(
      <View style={styles.container}>
         <View style={styles.view1}>
         <Icon
          name='arrow-left'
          type='material-community'
          color={colors.cardBackground}
          size={25}
          onPress={()=> navigation.goBack()}
         />
         <Text style={styles.text1}>Menu</Text>
         </View>
         <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            tabBarPosition="top"
            navigation={navigation}
            route={route}
          />
      </View>
    );
}

export default MenuProduct

const styles=StyleSheet.create({
    scene:{
        flex:1
    },
    container:{
        flex:1,
        top:0,
        left:0,
        right:0
    },
    view1: {
        flexDirection: 'row',
        alignItems:"center",
        padding:10,
        backgroundColor:colors.button,
        top:0,
        left:0,
        right:0,
        paddingTop:25
      },
      text1: {
        color: colors.cardBackground,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:40
      },
      view2:{
        marginTop:5,
        paddingBottom:20
      },
      tab:{
        paddingTop: 0,
        backgroundColor: colors.button,
        justifyContent: 'space-between'
      },
      tabContainer: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
      },
      tabLabel: {
        color: colors.cardBackground,
        fontSize:15
      },
      tabStyle: {
        width: SCREEN_WIDTH / 4,
        maxHeight: 45,
      },
      scene2:{
        backgroundColor:"#673ab7"
    }
})