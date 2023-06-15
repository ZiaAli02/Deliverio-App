import React,{useRef,useState} from 'react';
import {colors, parameters} from '../global/Styles';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, Pressable, FlatList } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import { Icon  } from 'react-native-elements';
import CountDown from 'react-native-countdown-component';
import {filterData, restaurantData} from '../global/Data'
import FoodCart from '../components/FoodCart';

const SCREEN_WIDTH= Dimensions.get('window').width

const HomeScreen = ({navigation}) =>{

    const [delivery,setDelivery]=useState(true)
    const [indexCheck, setIndexCheck]= useState("0")
return(
    <View style={styles.container}>
        <HomeHeader navigation={navigation}/>
<ScrollView
stickyHeaderIndices={[0]}
showsVerticalScrollIndicator={true}>
       <View style={{backgroundColor:colors.cardBackground,paddingBottom:5}}>
        <View style={{justifyContent:"space-evenly",marginTop:10,flexDirection:"row"}}>
            <TouchableOpacity
              onPress={()=>{
                setDelivery(true)
              }}>
                <View style={{...styles.deliveryButton,backgroundColor: delivery ? colors.button: colors.grey5}}>
                  <Text style={{...styles.deliveryButton,color: delivery ? colors.cardBackground: "black"}}>Delivery</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={()=>{
                setDelivery(false);
                navigation.navigate("RestaurantMap");
              }}>
                <View style={{...styles.deliveryButton,backgroundColor: delivery ? colors.grey5: colors.button}}>
                  <Text style={{...styles.deliveryButton,color: delivery ? "black":colors.cardBackground}}>Pick Up</Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
<View style={styles.filterView}>
<View style={styles.adressView}>
      <View style={{flexDirection:"row", alignItems:"center",paddingLeft:10}}> 
       <Icon
        type='material-community'
        name='map-marker'
        color={colors.grey1}
        size={20}
       />
       <Text style={{marginLeft:5,fontWeight:"bold",fontSize:11}}>Hali Rd, near Decent Bakers</Text>
      </View>

      <View style={styles.clockView}> 
       <Icon
        type='material-community'
        name='clock-time-four'
        color={colors.grey1}
        size={20}
       />
       <Text style={{marginLeft:5,fontWeight:"bold",fontSize:11}}>Now</Text>
      </View>
    </View>
    <View>
        <Icon
        type='material-community'
        name='tune'
        color={colors.grey1}
        size={25}
        />
    </View>
    </View>

    <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Categories</Text>
    </View>

    <View>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={filterData}
        keyExtractor={(item)=> item.id}
        extraData={indexCheck}
        renderItem= {({item,index})=>(
            <Pressable
                     onPress={()=>{setIndexCheck(item.id)}}>
                <View style={indexCheck === item.id ? {...styles.smallCardSelected}: {...styles.smartCard}}>
                  <Image
                  style={{height:50, width:50, borderRadius:30}}
                  source={item.image}
                  />
                  <View>
                    <Text style={indexCheck === item.id ? {...styles.smallCardTextSelected} : {...styles.smartCardText}}>{item.name}</Text>
                  </View>
                </View>
            </Pressable>
      )}
        />
    </View>

    <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Free Delivery Now</Text>
    </View>

    <View>

      <View style={{flexDirection:"row", alignItems:"center",marginBottom:2}}>
         <Text style={{marginLeft:15,marginTop:-10,marginRight:5,fontSize:16,fontWeight:"bold"}}>Options changing in</Text>
         <CountDown
           style={{paddingTop:5}}
           until={3600}
           size={15}
           digitStyle={{backgroundColor:colors.button}}
           digitTxtStyle={{color:colors.cardBackground}}
           timeToShow={['H','M','S']}
           timeLabels={{h:'Hr',m:'Min',s:'Sec'}}
         />
      </View>
      <FlatList
      style={{marginTop:10 , marginBottom:10}}
      horizontal={true}
      showsVerticalScrollIndicator={false}
      data={restaurantData}
      keyExtractor={(item,index)=> index.toString()}
      renderItem={({item})=>(
        <View style={{marginLeft:5}}>
          <FoodCart
           navigation={navigation}
           sceenWidth={SCREEN_WIDTH*0.8}
           images={item.images}
           restaurantName={item.restaurantName}
           farAway={item.farAway}
           buisnessAdress={item.buisnessAdress}
           averageReview={item.averageReview}
           numberOfReviews={item.numberOfReview}
          />
        </View>
      )}
      />
      
    </View>

    <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Promotion Available</Text>
    </View>

    <View>
      <FlatList
      style={{marginTop:10 , marginBottom:10}}
      horizontal={true}
      showsVerticalScrollIndicator={false}
      data={restaurantData}
      keyExtractor={(item,index)=> index.toString()}
      renderItem={({item})=>(
        <View style={{marginLeft:5}}>
          <FoodCart
           id= {item.id}
           navigation={navigation}
           sceenWidth={SCREEN_WIDTH*0.8}
           images={item.images}
           restaurantName={item.restaurantName}
           farAway={item.farAway}
           buisnessAdress={item.buisnessAdress}
           averageReview={item.averageReview}
           numberOfReviews={item.numberOfReview}
          />
        </View>
      )}
      />
    </View>

    <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Restaurants In Your Area</Text>
    </View>

    <View style={{width:SCREEN_WIDTH,paddingTop:10}}>
       {restaurantData.map(item =>(
        <View key={item.id} style={{paddingBottom:20}}>
           <FoodCart
              navigation={navigation}
              sceenWidth={SCREEN_WIDTH*0.95}
              images={item.images}
              restaurantName={item.restaurantName}
              farAway={item.farAway}
              buisnessAdress={item.buisnessAdress}
              averageReview={item.averageReview}
              numberOfReviews={item.numberOfReview}
           />
        </View>
       )
       )
       }
    </View>
</ScrollView>

{ delivery &&(
    <View style={styles.floatButton}>
       <TouchableOpacity
          onPress={()=> {navigation.navigate("RestaurantMap")}}
       >
          <Image 
          style={{height:30,width:30}}
           source= {require("../assests/placeholder.png")}
          />
           <Text style={{fontWeight:"bold",justifyContent:"flex-end"}}>Map</Text>
       </TouchableOpacity>
    </View>
 ) }
    </View>
);
}

export default HomeScreen

const styles=StyleSheet.create({

    container:{
     flex:1
    },
    deliveryButton:{
     paddingHorizontal:20,
     borderRadius:15,
     paddingVertical:5
    },
    deliveryText:{
     marginLeft:5,
     fontSize:16,
     fontWeight:"bold"
    },
    filterView:{
     flexDirection:"row", 
     justifyContent:"space-evenly", 
     alignItems:"center", 
     marginHorizontal:10, 
     marginVertical:10
    },
    clockView:{
    flexDirection:"row",
    alignItems:"center",
    marginLeft:20, 
    backgroundColor:colors.cardBackground,
    borderRadius:15,
    paddingHorizontal:5,
    marginRight:20
    },
    adressView:{
    flexDirection:"row", 
    backgroundColor:colors.grey5, 
    borderRadius:15, 
    paddingVertical:3, 
    justifyContent:"space-between",
    width:'85%',
    paddingVertical:10
    },
    headerText:{
    color:colors.grey2,
    fontSize:20,
    fontWeight:"bold",
    paddingLeft:10
    },
    headerTextView:{
        backgroundColor:colors.grey5,
        paddingVertical:3
    },
    smartCard:{
     borderRadius:30,
     justifyContent:"center",
     backgroundColor:colors.grey5,
     alignItems:"center",
     padding: 5,
     width: 80,
     margin: 10,
     height: 100
    }, 
    smallCardSelected:{
    borderRadius:30,
    justifyContent:"center",
    backgroundColor:colors.button,
    alignItems:"center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 100
    },
    smallCardTextSelected:{
      fontWeight:"bold",
      color:colors.cardBackground,
      fontSize:12
    },
    smartCardText:{
      fontWeight:"bold",
      color:colors.grey2,
      fontSize:12
    },
    floatButton:{
      position:"absolute",
      bottom:10,
      right:15,
      elevation:10,
      width:80,
      height:80,
      borderRadius:100,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:colors.cardBackground
    }
})