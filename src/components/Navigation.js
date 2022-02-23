import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabNavigator from "./HomeTabNavigator";
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import OnboardingScreen1 from '../screens/OnboardingScreen1';
import OnboardingScreen2 from '../screens/OnboardingScreen2';
import {AuthContext} from '../context/AuthContext';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {userInfo, splashLoading} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        {splashLoading ? (
          <Stack.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : userInfo ? ( 
                
                  <Stack.Screen
                  name={"Home"}
                  component={HomeTabNavigator}
                  options={{
                    headerShown: false,
                  }}
                /> 
         ) : (
          <>
            <Stack.Screen
              name="Onboard1"
              component={OnboardingScreen1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Onboard2"
              component={OnboardingScreen2}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{headerShown: false}}
            />
          </>
        )} 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
