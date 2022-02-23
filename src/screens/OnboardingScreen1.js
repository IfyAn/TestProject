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
        <Text style={styles.firstText}>Start Shopping</Text>
        <Text style={styles.bigText}>Stay Happy.</Text>
        <Text style={styles.bigText}>Anytime.</Text>
        <View style={styles.smallContainer}>
          <Text style={styles.smallText}>Basket Online Marketplace</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity  onPress={() => navigation.navigate('Login')} >
            <Text style={styles.buttonText}>skip</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate('Onboard2')} >
            <Text style={styles.buttonText}>next</Text>
          </TouchableOpacity>
        </View>
          
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
      fontSize: 23,
      fontWeight: '400',
      color:'#fff',
      marginTop: 12
    },
    bigText:{
      textAlign:'center',
      fontSize: 23,
      fontWeight: '400',
      color:'#fff',
      marginTop: 20
    },
    smallContainer:{
      marginTop: 120,
      alignSelf:'center',
      width: 200,
    },
    smallText:{
      textAlign:'center',
      fontSize: 14,
      fontWeight: 'bold',
      color:'#ff8137',
    },
    button:{
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems: 'center',
      marginTop: 30,
      paddingLeft: 20,
      paddingRight: 20,
    },
    buttonText:{
      fontSize:17,
      fontWeight: '600',
      color: '#ff8137',
      textTransform: 'capitalize',

    },
   
  });
  
  
 

export default OnboardingScreen1;