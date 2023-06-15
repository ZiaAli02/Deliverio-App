import React,{useRef,useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import { ProductData2 } from '../global/Data';

const MyOrder = () => {
    return (
      <View style={styles.container}>
      <FlatList
        data={ProductData2}
        renderItem={({item, index}) => {
          return (
            <View style={styles.itemView}>
              <View>
              <Image
               source={URL=item.image}
                style={styles.itemImage}
              />
              </View>
              <View style={{alignItems:'center',marginLeft:30}}>
              <View style={styles.nameView}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.descText}>{item.details}</Text>
              </View>
                <View style={styles.priceView}>
                  <Text style={styles.priceText}>
                    {`RS: +${item.discountPrice}`}
                  </Text>
                  <Text style={styles.discountText}>
                    {`RS: +${item.price}`}
                  </Text>
                </View>
              <View style={styles.addRemoveView}>
                <TouchableOpacity
                  style={[
                    styles.addToCartBtn,
                    {
                      width: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 15,
                    },
                  ]}
                  onPress={() => {}}>
                  <Text
                    style={{color: '#fff', fontSize: 20, fontWeight: '700'}}>
                    -
                  </Text>
                </TouchableOpacity>
                <Text style={{fontSize: 16, fontWeight: '600'}}>
                  {item.qty}
                </Text>
                <TouchableOpacity
                  style={[
                    styles.addToCartBtn,
                    {
                      width: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 15,
                    },
                  ]}
                  onPress={() => {
                    // addItem(item);
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 20,
                      fontWeight: '700',
                    }}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
              </View>
            </View>
          );
        }}
      />
      </View>
    );
}

export default MyOrder

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    elevation: 4,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  itemImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    margin: 5,
  },
  nameView: {
    width:'100%',
    alignItems:'center'
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-evenly',
  },
  nameText: {
    fontSize: 15,
    fontWeight: '700',
  },
  descText: {
    fontSize: 12,
    fontWeight: '600',
  },
  priceText: {
    fontSize: 15,
    color: 'green',
    fontWeight: '700',
  },
  discountText: {
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'line-through',
    marginLeft: 5,
  },
  addRemoveView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems:'center',
    marginBottom:5
  },
  addToCartBtn: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
  },
  
});