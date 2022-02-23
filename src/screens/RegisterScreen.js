import React, {useContext, useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar, 
  StyleSheet,
} from 'react-native';
import Top from '../components/Top';
import {AuthContext} from '../context/AuthContext';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [barStyle, setBarStyle] = useState('dark-content');

  const {isLoading, register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
    <StatusBar barStyle={barStyle} animated={true}  backgroundColor="#fff"  />
    <Top />
    <Text style={styles.bigText}>Register your account</Text>
    <View style={styles.smallContainer}>
      <Text style={styles.smallText}>Enter your name, email and password to create an account</Text>
    </View>
    <View style={styles.wrapper}>
      <View style={styles.firstInput}>
        <Image source={require('../../assets/mail.png')} style={styles.img} />
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Enter name"
          onChangeText={text => setName(text)}
        />
      </View>
      <View style={styles.firstInput}>
        <Image source={require('../../assets/mail.png')} style={styles.img} />
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter email"
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.secondInput}>
        <Image source={require('../../assets/Vector.png')} style={styles.img} />
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <Image source={require('../../assets/eyeo.png')} style={styles.icon} />
      </View>
      <TouchableOpacity onPress={() => {register(name, email, password);}} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.sign}>
          <Text>Already have an accoutn? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  bigText:{
    textAlign:'center',
    fontSize: 22,
    fontWeight: '600',
    color:'#112d42',
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
    color:'#112d42',
  },
  wrapper: {
    width: 300,
    marginTop: 10,
    marginHorizontal: 20
  },
  firstInput:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderColor: "#ff8137",
    borderRadius: 10,
  },
  secondInput:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: "#ff8137",
    borderRadius: 10,
  },
  img:{
    top:15,
    width: 17,
    height: 17
  },
  input:{
    paddingLeft: 10,
    width: 210
    },
  icon:{
    width: 17,
    height: 17,
    top:15,
    left:20
  },
  read:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 30,
  },
  block:{
    width:15,
    height: 15,
    borderWidth: 1,
    borderColor: "gray",
  },
  textt:{
    paddingLeft:15,
    color: "gray",
  },
  button:{
    backgroundColor:'#112d42',
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
    fontWeight: '500',
    color: '#fff',
    textTransform: 'uppercase'
  },
  justText:{
    textAlign:'center',
    fontSize: 17,
    fontWeight: '400',
    color:'#ff8137',
    marginTop: 25
  },
  littleText:{
    marginTop: 20,
    textAlign:'center',
    fontSize: 12,
    fontWeight: '400',
    color:'#112d42',
  },
  socialContainer:{
    marginTop:22,
    flexDirection:'row',
  },
  facebook:{
    width:140,
    height: 35,
    borderWidth: 0.9,
    borderColor: "#778899",
    borderRadius: 5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
  },
  google:{
    marginLeft:20,
    width:140,
    height: 35,
    borderWidth: 0.9,
    borderColor: "#778899",
    borderRadius: 5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
  },
  socialImg:{
    width:25,
    height: 25,
  },
  socialText:{
    paddingLeft:5,
    fontSize:12,
    fontWeight: '600',
    color:'#112d42'
  },
  sign:{
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 25,
  },
  link:{
    fontSize: 14,
    fontWeight: '500',
    color:'#ff8137',
    paddingLeft: 30
  }
});


export default RegisterScreen;
// import React, {useContext, useState} from 'react';
// import {
//   Button,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   StyleSheet,
// } from 'react-native';
// import Spinner from 'react-native-loading-spinner-overlay';
// import {AuthContext} from '../context/AuthContext';

// const RegisterScreen = ({navigation}) => {
//   const [name, setName] = useState(null);
//   const [email, setEmail] = useState(null);
//   const [password, setPassword] = useState(null);

//   const {isLoading, register} = useContext(AuthContext);

//   return (
//     <View style={styles.container}>
//       <Spinner visible={isLoading} />
//       <View style={styles.wrapper}>
//         <TextInput
//           style={styles.input}
//           value={name}
//           placeholder="Enter name"
//           onChangeText={text => setName(text)}
//         />

//         <TextInput
//           style={styles.input}
//           value={email}
//           placeholder="Enter email"
//           onChangeText={text => setEmail(text)}
//         />

//         <TextInput
//           style={styles.input}
//           value={password}
//           placeholder="Enter password"
//           onChangeText={text => setPassword(text)}
//           secureTextEntry
//         />

//         <Button
//           title="Register"
//           onPress={() => {
//             register(name, email, password);
//           }}
//         />

//         <View style={{flexDirection: 'row', marginTop: 20}}>
//           <Text>Already have an accoutn? </Text>
//           <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//             <Text style={styles.link}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   wrapper: {
//     width: '80%',
//   },
//   input: {
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: '#bbb',
//     borderRadius: 5,
//     paddingHorizontal: 14,
//   },
//   link: {
//     color: 'blue',
//   },
// });

// export default RegisterScreen;