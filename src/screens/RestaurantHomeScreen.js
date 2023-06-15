import React, {useRef, useState} from 'react';

import { View, Text, StyleSheet, ImageBackground, Dimensions, ScrollView,TouchableOpacity,Modal} from 'react-native';
import {colors, fonts} from '../global/Styles';
import {Icon} from 'react-native-elements';
import RestaurantHeader from '../components/RestaurantHeader';
import {restaurantData} from '../global/Data';
import {TabBar, TabView} from 'react-native-tab-view';
import Menu from './RestaurantTabs/Menu';


const SCREEN_WIDTH = Dimensions.get('window').width;
const initialLayout = SCREEN_WIDTH;

const RestaurantHomeScreen = ({navigation, route}) => {
  const {id, restaurant} = route.params;

  const [routes] = useState([
    {key: 'first', title: 'MENU'},
    {key: 'second', title: 'INFO'},
    {key: 'third', title: 'REVIEWS'},
    {key: 'fourth', title: 'GALLERY'}
  ]);

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

  const menuPressed=()=>{
    navigation.navigate("MenuProduct")
  }

  const updateRoute1 = () => {
    return <View></View>;
  };

  

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <RestaurantHeader id={id} navigation={navigation} />
          {restaurantData[id].discount && (
            <View style={styles.view1}>
              <Text style={styles.text1}>
                GET {restaurantData[id].discount}% OFF ON TOTAL BILL
              </Text>
            </View>
          )}
          <View style={styles.view2}>
            <View style={styles.view3}>
              <Text style={styles.text2}>
                {restaurantData[id].restaurantName}
              </Text>
              <Text style={styles.text3}>{restaurantData[id].foodType}</Text>
              <View style={styles.view4}>
                <Icon
                  name="star"
                  type="material-community"
                  color={colors.grey3}
                  size={15}
                />
                <Text style={styles.text4}>
                  {restaurantData[id].averageReview}
                </Text>
                <Text style={styles.text5}>
                  {restaurantData[id].numberOfReview}
                </Text>
                <Icon
                  name="map-marker"
                  type="material-community"
                  color={colors.grey3}
                  size={15}
                />
                <Text style={styles.text6}>
                  {restaurantData[id].farAway} min away
                </Text>
              </View>
            </View>
            <View style={styles.view5}>
              <Text style={styles.text6}>Collect</Text>
              <View style={styles.view7}>
                <Text style={styles.text7}>
                  {restaurantData[id].collectTime}
                </Text>
                <Text style={styles.text8}>min</Text>
              </View>
            </View>
            <View style={styles.view8}>
              <Text style={styles.text6}>Delivery</Text>
              <View style={styles.view9}>
                <Text style={styles.text9}>
                  {restaurantData[id].deliveryTime}
                </Text>
                <Text style={styles.text11}>min</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.view10}>
          <TabView
            navigationState={{index, routes}}
            renderScene={updateRoute1}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            tabBarPosition="top"
          />
        </View>

           { index === 0 &&
             <Menu onPress={menuPressed}/>
             
           }
      </ScrollView>

      <TouchableOpacity onPress={()=>{navigation.navigate('MyOrder')}}>
          <View style={styles.view12}>
             <Text style={styles.text13}>View Cart</Text>
             <View style={styles.view13}>
               <Text style={styles.text13}>0</Text>
             </View>
          </View>
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    width: '100%',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 5,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  view3: {
    flex: 8,
  },
  view4: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  view5: {
    flex: 3,
    alignItems: 'center',
  },
  view6: {
    color: colors.grey1,
    fontSize: 15,
    fontWeight: 'bold',
  },
  view7: {
    width: 40,
    height: 40,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'space-around',
  },
  view8: {
    alignItems: 'center',
    flex: 3,
  },
  view9: {
    width: 40,
    height: 40,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'space-around',
    backgroundColor: colors.button,
  },
  view10: {
    elevation: 10,
    backgroundColor: colors.button,
    height: 50,
    alignItems: 'center',
    marginBottom: 0
  },
  view11: {
    paddingTop:10,
    height: 50,
    alignItems: 'center',
    justifyContent:'space-between',
    marginBottom: 0,
    backgroundColor:colors.button
  },
  view12: {
    flexDirection: 'row',
    paddingTop:10,
    height: 50,
    alignItems: 'center',
    justifyContent:'space-between',
    marginBottom: 0,
    backgroundColor:colors.button,
    paddingLeft:10
  },
  view13: {
    borderWidth: 1,
    borderColor: colors.cardBackground,
    borderRadius: 6,
    marginRight:10
  },
  view14: {
    flexDirection:"row",
    alignItems:"center",
    padding:10,
    backgroundColor:colors.button,
    top:0,
    left:0,
    right:0,
    paddingTop:25
  },
  view15: {
    paddingBottom:20,
    marginTop:5
  },
  text1: {
    color: 'green',
    fontSize: 12,
    fontWeight: 'bold',
  },
  text2: {
    color: colors.grey1,
    fontSize: 15,
    fontWeight: 'bold',
  },
  text3: {
    color: colors.grey3,
    fontSize: 12,
  },
  text4: {
    color: colors.grey3,
    fontSize: 10,
    fontFamily: fonts.android.bold,
    marginLeft: 2,
  },
  text5: {
    fontFamily: fonts.android.bold,
    color: colors.grey3,
    fontSize: 10,
    marginLeft: 2,
    marginRight: 5,
  },
  text6: {
    fontFamily: fonts.android.bold,
    color: colors.black,
    fontSize: 10,
    marginLeft: 0,
    fontWeight: 'bold',
  },
  text7: {
    color: colors.black,
    fontSize: 13,
    marginTop: 5,
    fontWeight: 'bold',
  },
  text8: {
    color: colors.black,
    fontSize: 10,
    marginBottom: 5,
  },
  text9: {
    fontWeight: 'bold',
    fontSize: 12,
    color: colors.cardBackground,
  },
  text10: {
    fontWeight: 'bold',
    fontSize: 13,
    color: colors.cardBackground,
    marginTop: 5,
  },
  text11: {
    color: colors.cardBackground,
    fontSize: 10,
    marginBottom: 5,
  },
  text12: {
    color: colors.cardBackground,
    fontSize: 15,
    padding: 10,
    fontWeight: 'bold',
  },
  text13: {  
    color: colors.cardBackground,
    fontSize: 15,
    paddingHorizontal: 3,
    fontWeight: 'bold',
  },
  text14: {
    color: colors.black,
    fontSize: 15,
    marginLeft:40,
    fontWeight: 'bold',
  },
  tab: {
    paddingTop: 0,
    backgroundColor: colors.button,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabContainer: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    color: colors.cardBackground,
  },
  tabLabel: {
    fontWeight: 'bold',
    color: colors.cardBackground,
  },
  tabStyle: {
    width: SCREEN_WIDTH / 4,
    maxHeight: 45,
  },
});
