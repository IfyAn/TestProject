import React, {useState} from 'react';
import {
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  View,
  StatusBar, 
  StyleSheet,
} from 'react-native';
import Top from '../components/Top';
  
  const OnboardingScreen1 = ({navigation}) => {
    const [barStyle, setBarStyle] = useState('dark-content');
  
    return (
      <ImageBackground style={styles.container} source={require('../../assets/cloth.jpg')} >
        <StatusBar barStyle={barStyle} animated={true}  backgroundColor="#112D42"  />
        <Image source={require('../../assets/basket.png')} style={styles.img} />
        <Text style={styles.firstText}>Welcome to</Text>
        <Text style={styles.bigText}>basket online store</Text>
        <View style={styles.smallContainer}>
          <Text style={styles.smallText}>basket is the online store for both new and old product</Text>
        </View>
        
          <TouchableOpacity  onPress={() => navigation.navigate('Login')} style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
            <Image source={require('../../assets/arrow.png')} style={styles.icon} />
          </TouchableOpacity>
      </ImageBackground>
    );
  };
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      opacity: 0.9
    },
    img:{
      alignSelf:'center',
      marginTop: 180
    },
    firstText:{
      textAlign:'center',
      fontSize: 18,
      fontWeight: '400',
      color:'#fff',
      marginTop: 30
    },
    bigText:{
      textAlign:'center',
      fontSize: 29,
      fontWeight: '600',
      color:'#fff',
      marginTop: 30
    },
    smallContainer:{
      marginTop: 10,
      alignSelf:'center',
      width: 200,
    },
    smallText:{
      textAlign:'center',
      fontSize: 14,
      fontWeight: '400',
      color:'#fff',
    },
  
    icon:{
      width: 25,
      height: 22,
      left:20
    },
    button:{
      backgroundColor:'#ff8137',
      width: 250,
      height: 45,
      borderWidth: 1,
      borderColor: "#112d42",
      borderRadius: 5,
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent:'center',
      alignItems: 'center',
      marginTop: 30
    },
    buttonText:{
      fontSize:17,
      fontWeight: '400',
      color: '#fff',
      textTransform: 'uppercase'
    },
   
  });
  
  
 

export default OnboardingScreen1;