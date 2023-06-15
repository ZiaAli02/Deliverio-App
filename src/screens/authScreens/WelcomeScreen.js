import React, {useRef, useState} from 'react';

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import {colors, parameters} from '../../global/Styles';
import {Button, Icon, SocialIcon} from 'react-native-elements';
// import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 2,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text style={{fontSize: 20, color: colors.button, fontWeight: 'bold'}}>
          DISCOVER RESTURANTS
        </Text>
        <Text style={{fontSize: 20, color: colors.button, fontWeight: 'bold'}}>
          IN YOUR AREA
        </Text>
      </View>

      <View style={{flex: 4, justifyContent: 'center'}}>
        <Swiper autoplay={true} dotColor={colors.grey4} activeDotColor={colors.button}>
          <View style={styles.slide1}>
            <Image
              source={require('../../assests/res.png')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide1}>
            <Image
              source={require('../../assests/res1.jpg')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide1}>
            <Image
              source={require('../../assests/res2.jpg')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </Swiper>
      </View>
      <View style={{flex: 4}}>
        <View style={{marginHorizontal: 20, marginTop: 80}}>
          <Button
            title="Sign In"
            buttonStyle={{...parameters.styleButton,marginBottom:5}}
            titleStyle={parameters.buttonTitle}
            onPress={()=> {navigation.navigate("SignIn")}}
          />
        </View>

        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
            onPress={()=>{navigation.navigate("SignUpScreen")}}
          />
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderColor: '#f03a3a',
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 20,
    width: '100%',
    marginBottom:10
  },
  createButtonTitle: {
    color: '#f03a3a',
    fontSize: 17,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
