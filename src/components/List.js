import React from 'react'
import { StyleSheet, Image, Text, View,} from 'react-native';

function List({icon, title}) {
  return (
    <View style={styles.item}>
        <View style={styles.thing}>
            <Image source={icon} style={styles.pic} /> 
            <Text style={styles.title}>{title}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    item:{
      //paddingVertical:20,  
      paddingLeft:60,
    },
    thing:{
      flexDirection: 'row',
      paddingTop:20,
    },
    title:{
        paddingLeft:53,
        paddingTop:7
    }
  });
  

export default List