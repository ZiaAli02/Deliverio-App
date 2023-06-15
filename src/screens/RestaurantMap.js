import React,{useRef,useState} from 'react';

import {View, Text, StyleSheet,alert,SafeAreaView,Dimensions } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const RestaurantMap = () => {
    return (
        <SafeAreaView style={{flex:1}}>
          <View style={styles.container}>
          <MapView
          style={styles.mapStyles}
          initialRegion={{
           latitude:31.5049347,
           longitude:74.3006965,
           latitudeDelta:0.5,
           longitudeDelta:0.5
          }}
          customMapStyle
          onRegionChange={x=>{console.log(x)}}>
            <Marker
              draggable
              coordinate={{
                latitude:31.5049347,
                longitude:74.3006965
              }}
              onDragEnd={e=>{alert(JSON.stringify(e.nativeEvent.coordinate))}}
              title={'Location'}
              description={'Your Current Location'}
            />
          </MapView>
          </View>
        </SafeAreaView>
    );
}

export default RestaurantMap

const styles=StyleSheet.create({

  container:{
   position:'absolute',
   top:0,
   left:0,
   right: 0,
   bottom:0,
   alignItems:'center',
   justifyContent:'flex-end'
  },
  mapStyles:{
    position:'absolute',
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').height
  }
})