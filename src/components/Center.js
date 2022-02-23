import React from 'react'
import {StyleSheet, Image, View, ImageBackground, Text } from 'react-native';

function Center() {
  return (
    <ImageBackground style={styles.container} source={require('../../assets/rect.png')}  resizeMode="cover" >
        <View style={styles.inputContainer}>
            <Image source={require('../../assets/obi.png')} style={styles.imge} />
            <View style={styles.textContainer}>
                <Text style={styles.first}>Daviel Obi</Text>
                <Text style={styles.second}>danielobi@gmail.com</Text>
            </View>
        </View>
        
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container:{
      height: 217,
    },
    inputContainer:{
        flexDirection: 'row',
        marginLeft: 16,
        marginTop: 40,
    },
    imge:{
        height:65,
        width:65,
      },
    textContainer:{
        paddingTop:4,
        paddingLeft:16
    },
    first:{
        fontWeight: '600',
        fontSize: 21,
        color: '#112D42'
    },
    second:{
        fontWeight: '400',
        fontSize: 14,
        color: '#112D42',
        paddingTop: 1
    },
    
  });

export default Center