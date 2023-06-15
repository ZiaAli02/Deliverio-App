import React,{useEffect, useRef,useState} from 'react';

import {View, Text,StyleSheet,FlatList, TouchableOpacity} from 'react-native';
import { colors } from '../global/Styles';
import { ProductData2 } from '../global/Data';
import MenuCard from '../components/MenuCard';

function Route1(){
    return(
        <View style={{flex:1}}> 
           <View style={styles.view2}>
              <FlatList
                style={{backgroundColor:colors.cardBackground}}
                data={ProductData2}
                keyExtractor={(item,index) => index.toString()}
                renderItem={({item,index})=>(
                    <TouchableOpacity>
                        <MenuCard
                         productName={item.name}
                         image={item.image}
                         price={item.price}
                         productDetails={item.details}
                        />
                    </TouchableOpacity>
                )}
              />
           </View>
        </View>
    );
}

const Route2=()=>(
    <View style={{flex:1}}> 
       <View style={styles.view2}>
          <FlatList
            style={{backgroundColor:colors.cardBackground}}
            data={ProductData2}
            keyExtractor={(item,index) => index.toString()}
            renderItem={({item,index})=>(
                <TouchableOpacity>
                    <MenuCard
                     productName={item.name}
                     image={item.image}
                     price={item.price}
                     productDetails={item.details}
                    />
                </TouchableOpacity>
            )}
          />
       </View>
    </View>
);

const Route3=()=>(
    <View style={{flex:1}}> 
       <View style={styles.view2}>
          <FlatList
            style={{backgroundColor:colors.cardBackground}}
            data={ProductData2}
            keyExtractor={(item,index) => index.toString()}
            renderItem={({item,index})=>(
                <TouchableOpacity>
                    <MenuCard
                     productName={item.name}
                     image={item.image}
                     price={item.price}
                     productDetails={item.details}
                    />
                </TouchableOpacity>
            )}
          />
       </View>
    </View>
);

const Route4=()=>(
    <View style={{flex:1}}> 
       <View style={styles.view2}>
          <FlatList
            style={{backgroundColor:colors.cardBackground}}
            data={ProductData2}
            keyExtractor={(item,index) => index.toString()}
            renderItem={({item,index})=>(
                <TouchableOpacity>
                    <MenuCard
                     productName={item.name}
                     image={item.image}
                     price={item.price}
                     productDetails={item.details}
                    />
                </TouchableOpacity>
            )}
          />
       </View>
    </View>
);

const Route5=()=>(
    <View style={{flex:1}}> 
       <View style={styles.view2}>
          <FlatList
            style={{backgroundColor:colors.cardBackground}}
            data={ProductData2}
            keyExtractor={(item,index) => index.toString()}
            renderItem={({item,index})=>(
                <TouchableOpacity>
                    <MenuCard
                     productName={item.name}
                     image={item.image}
                     price={item.price}
                     productDetails={item.details}
                    />
                </TouchableOpacity>
            )}
          />
       </View>
    </View>
);

const Route6=()=>(
    <View style={{flex:1}}> 
       <View style={styles.view2}>
          <FlatList
            style={{backgroundColor:colors.cardBackground}}
            data={ProductData2}
            keyExtractor={(item,index) => index.toString()}
            renderItem={({item,index})=>(
                <TouchableOpacity>
                    <MenuCard
                     productName={item.name}
                     image={item.image}
                     price={item.price}
                     productDetails={item.details}
                    />
                </TouchableOpacity>
            )}
          />
       </View>
    </View>
);

export {Route1, Route2, Route3, Route4, Route5,Route6};

const styles=StyleSheet.create({
    scene:{
        flex:1,
        backgroundColor:"#673ab7"
    },
    view2:{
        marginTop:5,
        paddingBottom:20
    },
    scene2:{
        backgroundColor:"#673ab7"
    }
})