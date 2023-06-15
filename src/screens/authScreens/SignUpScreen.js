import React,{useRef,useState} from 'react';

import {ScrollView,View, Text, StyleSheet, TextInput, Alert,TouchableOpacity,ActivityIndicator} from 'react-native';
import Header from '../../components/Header';
import {colors, parameters} from '../../global/Styles';
import {Button, Icon, SocialIcon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable' 
import auth from '@react-native-firebase/auth';

const SignIn = ({navigation}) => {

    const [textInput1Focused,setTextInput1Focused]= useState(false)
    const [textInput2Focused,setTextInput2Focused]= useState(false)
    const [textInput3Focused,setTextInput3Focused]= useState(false)
    const [passVisibility,setPassVisibility]=useState(false)
    const [loading,setLoading]=useState(false)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [phone,setPhone]=useState('')
    const [name,setName]=useState('')

    const userLogin = async () => {
      try {
        setLoading(true);
        const phonePattern = /^(3)[0-4]{1}[0-9]{1}\d{7}$/;
      if (!phonePattern.test(phone)) {
        Alert.alert('Invalid Phone Number', 'Please enter a valid phone number.');
        setLoading(false)
        return;
      }
      else{
        setPhone(phone)
        
      }
      const namePattern = /^[a-zA-Z\s]*$/;
      if (!namePattern.test(name)) {
        Alert.alert('Invalid Name Pattern', 'Please enter a valid Name.');
        setLoading(false)
        return;
      }
      else{
        setName(name)
      
      }
        if (!email && !password && phone && name) {
          alert('Please Fill All The Fields');
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
        if (!name) {
          alert('Please Fill Family-Name Field');
          setLoading(false)
          return;
        }
        if (!phone) {
          alert('Please Fill Phone-Number Field');
          setLoading(false)
          return;
        }
        await auth().createUserWithEmailAndPassword(email,password,name,phone);
         {
           setEmail('');
           setPassword('');
           setName('');
           setPhone('');
           setLoading(false)
           navigation.navigate('SignIn');
           Alert.alert(`Thank you ${name} for registration!`);
         }
         return;
      } 
      catch (error) 
       {
         if(error.code ==='auth/email-already-in-use')
         {
          Alert.alert('That Email Adress Is Already Inuse')
          setLoading(false)
         }
         else if(error.code ==='auth/invalid-email')
         {
          Alert.alert('That Email Adress Is Invalid');
          setLoading(false)
         }
         else
         {
          Alert.alert(error.code)
          setLoading(false)
         }
       }
    };

  return (
    <ScrollView keyboardShouldPersistTaps='always' style={styles.container}>
      <View>
      <Header title="MY ACCOUNT" navigation={navigation}/>
      </View>
      {loading && 
    <ActivityIndicator size="large" color="#f03a3a" />
    }
      <View style={{marginLeft: 18, marginTop: 10}}>
        <Text style={{color:(colors.button), fontSize:28, fontWeight:"bold"}}>Sign-Up</Text>
      </View>

      <View style={{margin: 10,marginLeft:18}}>
        <Text style={styles.text1}>New on Deliverio ?</Text>
      </View>

      <View style={styles.TextInput2}>
        <Animatable.View style={{marginLeft:10}} animation={textInput3Focused ? "":"fadeInLeft"} duration={400}>
          <Icon
          name="flag"
          iconStyle={{color:"green"}}
          type="material"
          />
        </Animatable.View>
        <Text style={{...styles.text1,color:colors.black,fontSize:18}}>{`  +92 `}</Text>
        <TextInput 
        style={{width:"80%"}}
        placeholder="Mobile Number"
        value={phone}
        maxLength={10}
        keyboardType='phone-pad'
        onChangeText={phone => setPhone(phone)}
        onFocus={()=>{setTextInput3Focused(false)}}
        onBlur={()=>{setTextInput3Focused(true)}}
        />
        </View>

      <View style={{marginTop: 20}}>
        <TextInput style={{...styles.TextInput1,paddingLeft:10}} placeholder="Name" value={name}
              onChangeText={name => setName(name)}/>
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
        value={password}
        secureTextEntry={passVisibility? false: true}
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

      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={{...styles.text1,justifyContent:"center",alignItems:"center"}}>By creating or logging an account</Text>
        <Text style={{...styles.text1,justifyContent:"center",alignItems:"center"}}>you are agreeing with our </Text>
        <TouchableOpacity onPress={()=>{}}>
            <Text style={{...styles.text1,color:"green"}}>Terms & Conditions</Text>
        </TouchableOpacity>
        <Text style={styles.text1}>Privacy Statement</Text>
      </View>

      <View style={{marginHorizontal:20, marginTop:30}}>
        <Button 
        title="Create my account"
        buttonStyle={parameters.styleButton}
        titleStyle={parameters.buttonTitle}
        onPress={()=>{userLogin()}}
        />
      </View>

      <View style={{alignItems:"center", marginTop:10,marginBottom:5}}>
        <Text style={{...styles.text1, color:colors.black,fontSize:20}}>OR</Text>
      </View>
      <View style={{marginTop:5, marginLeft:20}}>
      <Text style={{...styles.text1,marginBottom:5}}>Already have an account with Deliverio ?</Text>
      </View>

      <View style={{alignItems:"flex-end",marginHorizontal:20,paddingBottom:5}}>
        <Button
        title="Sign-In"
        buttonStyle={styles.createButton}
        titleStyle={styles.createButtonTitle}
        onPress={()=>{navigation.navigate("SignIn")}}
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
    fontSize: 16,
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
    height:50
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
