import React from 'react';
import { TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
  
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ff8137',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: "#FFF",
          //height: 56,
        },
      }}>
      <Tab.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => {
            return(
              <TouchableOpacity >
                  <AntDesign name="home" color={color} size={35}  />
              </TouchableOpacity>
            )
          },
        }}
      />
      <Tab.Screen
        name={'Saved'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <TouchableOpacity>
                <EvilIcons name="star" color={color} size={40}/>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name={'Account'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <TouchableOpacity>
                <AntDesign style={{color}} size={35} name='user' />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name={'Cart'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <TouchableOpacity>
                <AntDesign style={{color}} size={40} name='shoppingcart' />
                {/* <Image source={require('../../assets/Cart.png')} style={{color}} /> */}
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;