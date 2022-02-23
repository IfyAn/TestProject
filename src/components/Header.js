import React from 'react'
import { TextInput, StyleSheet, Image, View } from 'react-native';

function Header() {
  return (
    <View style={styles.contain}>
        <Image source={require('../../assets/Logo.png')} style={styles.img} />
        <View style={styles.inputContainer}>
            <Image source={require('../../assets/search.png')} style={styles.imge} />
            <TextInput style={styles.input} placeholder="Search in basket" multiline={true}/>
        </View>
        <Image source={require('../../assets/menu.png')} style={styles.menu} />
    </View>
  )
}

const styles = StyleSheet.create({
    contain: {
        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 58,
        width: 411,
        backgroundColor: '#112D42'
      },
      img:{
          height:48,
          width:48,
          //marginLeft: 16,
        },
    inputContainer:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        width:240,
        height:32,
        borderWidth: 1,
        borderColor: "#112D42",
        borderRadius: 8,
        alignItems: 'center',
        marginRight: 15,
    },
    imge:{
        height:18,
        width:18,
        marginLeft: 8.5
      },
    input:{
        marginLeft: 4.5,
        height: 40,
        width:200,
    },
    menu:{
        height:16,
        width:30,
        marginRight: 66,
    }  
  });

export default Header