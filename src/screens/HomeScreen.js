import React, { useState,useContext } from 'react';
import { StyleSheet, StatusBar, Image, Text, FlatList, View,} from 'react-native';
//import Spinner from 'react-native-loading-spinner-overlay';
import Center from '../components/Center';
import Header from '../components/Header';
import List  from '../components/List';
// import {AuthContext} from '../context/AuthContext';
const DATA = [
  {
    id:1,
    icon: require('../../assets/Bell.png'),
    title: 'Notification',
  },
  {
    id:2,
    icon: require('../../assets/Registration.png'),
    title: 'Edit Profile',
  },
  {
    id:3,
    icon: require('../../assets/StarFilled.png'),
    title: 'WishList',
  },
  {
    id:4,
    icon: require('../../assets/ActivityHistory.png'),
    title: 'Order history',
  },
  {
    id:5,
    icon: require('../../assets/Tracking.png'),
    title: 'Track order',
  },
  {
    id:6,
    icon: require('../../assets/cardPayment.png'),
    title: 'Payment Option',
  },
 {
    id:7,
    icon: require('../../assets/Gear.png'),
    title: 'Settings',
  },  
 {
    id:8,
    icon: require('../../assets/Export.png'),
    title: 'Log out',
  },  
];


const HomeScreen = () => {
  // const {userInfo, isLoading, logout} = useContext(AuthContext);
  const [barStyle, setBarStyle] = useState('light-content');

  return (
    <View style={styles.container}>
       <StatusBar barStyle={barStyle} animated={true}  backgroundColor="#112D42"  />
      <Header />
      <Center />
      <View style={styles.flat}>
        <View style={{margin:20}} />
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
              <List
                title={item.title} 
                icon={item.icon}
              />
          )}
        />
      </View>
      {/* <Spinner /> */}
      {/* <Text style={styles.welcome}>Welcome {userInfo.user.name}</Text>
      <Button title="Logout" color="red" onPress={logout} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  flat:{
      position: 'absolute',
      height:450,
      width:320,
      marginTop: 180,
      marginLeft: 20,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: "#cecece",
      borderRadius: 10,  
  },
  // welcome: {
  //   fontSize: 18,
  //   marginBottom: 8,
  // },
});

export default HomeScreen;