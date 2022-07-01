import { Text, View } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Login Page</Text>
      <TouchableOpacity
        style={styles.login}
        onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.text}>Press to Login </Text>
      </TouchableOpacity> 
</View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    margin: 16,
    color:'rgb(255,90,50)'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 16,
    color:'white'
  },
  login:{
    backgroundColor:'red',
    borderRadius:20,
  }
});
