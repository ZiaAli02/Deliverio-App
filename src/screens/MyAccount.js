import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Switch,
  Alert,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const SECTIONS = [
  {
    items: [
      { icon: 'bell', color: '#007afe', label: 'Notification' , type: 'link'},
      { icon: 'grid', color: '#007afe', label: 'General' , type: 'link'},
      { icon: 'compass', color: '#32c759', label: 'Accessibility', type: 'link' },
      { icon: 'eye', color: '#fd2d54', label: 'Dark Mode', type: 'boolean',value:'true'},
      { icon: 'info', color: '#007afe', label: 'About Us', type: 'link' },
      { icon: 'log-out', color: 'red', label: 'Logout', type: 'link' }
    ],
  }
];


const MyAccount = ({navigation})=> {

  return (
      <ScrollView contentContainerStyle={styles.container}>
       <View style={{flexDirection:'row',paddingTop:20,borderBottomWidth:2,borderColor:'lightgray',paddingLeft:5}}>
       <TouchableOpacity onPress={()=>{navigation.goBack()}}>
       <FeatherIcon style={{paddingTop:5}} color="black" name='arrow-left' size={25} />
       </TouchableOpacity>
      <Text style={{...styles.text,fontSize:25,marginBottom:20,paddingLeft:20}}>Settings</Text>
       </View>
        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <Text style={styles.sectionHeader}>{header}</Text>
            {items.map(({icon ,label, type, value, color }, index) => {
              return (
                <TouchableOpacity
                  key={label}
                  style={{...styles.text,fontSize:15}}
                  onPress={() => {
                    if(index === 0)
                    {
                      Alert.alert('Notification Clicked')                     
                    }
                    if(index === 1)
                    {
                      Alert.alert('General Clicked')
                    }
                    if(index === 2)
                    {
                      Alert.alert('Accessibility Clicked')
                    }
                    if(index === 3)
                    {
                      Alert.alert('Dark Mode')
                    }
                    if(index === 4)
                    {
                      Alert.alert('About Us Clicked')
                    }
                    if(index === 5)
                    {
                      Alert.alert('Logout Successfully')
                    }
                  }}>
                  <View style={styles.row}>
                    <View style={[styles.rowIcon, { backgroundColor: color}]}>
                      <FeatherIcon color="#fff" name={icon} size={20} />
                    </View>

                    <Text style={{...styles.rowLabel, color: label === 'Logout' ? 'red': 'black'}}>{label}</Text>

                    <View style={styles.rowSpacer} />

                    {type === 'boolean' && <Switch value={value}/>}

                    {type === 'link' && (
                      <FeatherIcon color="#0c0c0c" name="chevron-right"  size={17}/>
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </ScrollView>
  );
}

export default MyAccount

const styles = StyleSheet.create({
  container: {
  },
  section: {
    paddingHorizontal: 24,
    fontSize:20,
    color:'black'
  },
  sectionHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'gray',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  profile: {
    padding: 24,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 9999,
  },
  profileAvatarWrapper: {
    position: 'relative',
  },
  profileAction: {
    position: 'absolute',
    right: -4,
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: '#007bff',
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '600',
    color: '#414d63',
    textAlign: 'center',
  },
  profileAddress: {
    marginTop: 5,
    fontSize: 16,
    color: '#989898',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  rowIcon: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: '#0c0c0c',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  text:{
    fontSize:15,
    fontWeight:"bold",
    color:"black"
  },
});