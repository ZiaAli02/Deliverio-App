import React,{useRef,useState} from 'react';

import {ScrollView,View, Text, StyleSheet, TextInput, Alert,ActivityIndicator} from 'react-native';
import Header from '../../components/Header';
import {colors, parameters} from '../../global/Styles';
import {Button, Icon, SocialIcon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable' 
import auth, { firebase } from '@react-native-firebase/auth';

const SignIn = ({navigation}) => {

    const [textInput1Focused,setTextInput1Focused]= useState(false)
    const [textInput2Focused,setTextInput2Focused]= useState(false)
    const [passVisibility,setPassVisibility]=useState(false)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [loading,setLoading]=useState(false)

    const userLogin = async () => {
      try {
        setLoading(true)
        if (!email && !password) {
          alert('Please Fill Email and Password Fields');
          setLoading(false)
          return;
        }
        if (!email) {
          alert('Please Fill Email Field');
          setLoading(false)
          return;
        }
        if (!password) {
          alert('Please Fill Password Field');
          setLoading(false)
          return;
        }
        await auth().signInWithEmailAndPassword(email,password);
         {
           setEmail('');
           setPassword('');
           setLoading(false)
           navigation.navigate('HomeScreen');
           alert('Welcome back!');
         }
         return;
      } 
      catch (error) 
       {
         Alert.alert(error.message)
         setLoading(false)
       }
    };

  return (
    <ScrollView keyboardShouldPersistTaps='always' style={styles.container}>
      <View>
      <Header title="MY ACCOUNT" navigation={navigation}/>
      </View>
      {loading && 
     <ActivityIndicator size="large" color={colors.button} />
      }
      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={{color:(colors.button), fontSize:28, fontWeight:"bold"}}>Sign-In</Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please Enter The Email and Password</Text>
        <Text style={styles.text1}>For Using This App</Text>
      </View>

      <View style={styles.TextInput1}>
      <Animatable.View style={{marginLeft:10}} animation={textInput1Focused ? "":"fadeInLeft"} duration={400}>
        <Icon
          name="mail"
          iconStyle={{color:colors.grey3,marginTop:12,marginRight:0}}
          type="material"
          />
      </Animatable.View>
        <TextInput style={{width:"80%"}} placeholder="Email" value={email}
              onChangeText={email => setEmail(email)}
              onFocus={()=>{setTextInput1Focused(false)}}
              onBlur={()=>{setTextInput1Focused(true)}}
              />
      </View>
      
      <View style={styles.TextInput2}>
        <Animatable.View style={{marginLeft:10}} animation={textInput2Focused ? "":"fadeInLeft"} duration={400}>
          <Icon
          name="lock"
          iconStyle={{color:colors.grey3}}
          type="material"
          />
        </Animatable.View>
        
        <TextInput 
        style={{width:"80%"}}
        placeholder="Password"
        secureTextEntry={passVisibility? false: true}
        value={password}
        onChangeText={password => setPassword(password)}
        onFocus={()=>{setTextInput2Focused(false)}}
        onBlur={()=>{setTextInput2Focused(true)}}
        />
        
        <Animatable.View style={{marginRight:10}} animation={textInput2Focused? "":"fadeInLeft"} duration={400}>
        <Icon
          name={passVisibility? "visibility":"visibility-off"}
          iconStyle={{color:colors.grey3}}
          type="material"
          style={{marginLeft: 10}}
          onPress={()=>{passVisibility? setPassVisibility(false): setPassVisibility(true)}}
          />  
        </Animatable.View>
      </View>

      <View style={{marginHorizontal:20, marginTop:30}}>
        <Button 
        title="Sign In"
        buttonStyle={parameters.styleButton}
        titleStyle={parameters.buttonTitle}
        onPress={()=>{userLogin()}}
        
        />
      </View>

      <View style={{alignItems:"center", marginTop:25}}>
        <Text style={{...styles.text1, textDecorationLine:"underline"}}> Forget Passwords ?</Text>
      </View>

      <View style={{alignItems:"center", marginTop:20,marginBottom:20}}>
        <Text style={{...styles.text1, color:colors.black,fontSize:17}}>OR</Text>
      </View>

      <View style={{marginHorizontal:10, marginTop:10}}>
        <SocialIcon
        title="Sign In With Facebook"
        button
        type="facebook"
        style={styles.SocialIcon}
        onPress={()=>{}}
        />
      </View>

      <View style={{marginHorizontal:10, marginTop:10}}>
        <SocialIcon
        title="Sign In With Google"
        button
        type="google"
        style={styles.SocialIcon}
        onPress={()=>{}}
        />
      </View>

      <View style={{marginTop:25, marginLeft:20}}>
      <Text style={{...styles.text1}}>New on Deliverio ?</Text>
      </View>

      <View style={{alignItems:"flex-end",marginHorizontal:20,marginBottom:5}}>
        <Button
        title="Create an account"
        buttonStyle={styles.createButton}
        titleStyle={styles.createButtonTitle}
        onPress={()=>{navigation.navigate("SignUpScreen")}}
        />
      </View>
    </ScrollView>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    fontSize: 12,
    fontWeight:"bold"
  },
  TextInput1: {
    borderWidth: 3,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    marginLeft: 15,
    flexDirection:"row"
  },
  TextInput2: {
    borderWidth: 3,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 15,
  },
  SocialIcon:
  {
    borderRadius:12,
    height:50,
    paddingBottom:13
  },
  createButton:
  {
    backgroundColor:colors.button,
    alignContent:"center",
    justifyContent:"center",
    borderRadius:12,
    borderWidth:3,
    borderColor:"#b00404",
    height:40,
    paddingHorizontal:20,
    paddingBottom:3
  },
  createButtonTitle:
  {
    color:colors.cardBackground,
    fontSize:16,
    fontWeight:"bold",
    alignItems:"center",
    justifyContent:"center",
    marginTop:-3
  }
});
