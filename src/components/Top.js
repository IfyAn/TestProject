import React from 'react'
import { StyleSheet, StatusBar, Image, Text, View,} from 'react-native';

export default function Top() {
  return (
    <View style={styles.contain}>
        <Image source={require('../../assets/Logo.png')} style={styles.img} />
        <Text style={styles.text}>basket</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    contain: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
      },
      img:{
          height:45,
          width:45,
        },
      text:{
          fontSize: 30,
          lineHeight:40,
          fontWeight: '500',
          color:'#ff8137'
      }  
  });
