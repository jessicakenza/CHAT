import { Button, Heading, Input, Spacer, Text, View } from "native-base";
import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { AppRegistry } from "react-native";


const register =({navigation})=>{
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title} >REGISTER</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.subTitle} >Name</Text>
          <Input style={styles.input} placeholder="enter your name" />
          <Text style={styles.subTitle}>Surname</Text>
          <Input style={styles.input} placeholder="enter your surname" />
          <Text style={styles.subTitle}>Phone</Text>
          <Input style={styles.input} placeholder="phone number" />
          <Text style={styles.subTitle}>Password</Text>
          <Input style={styles.input} placeholder="enter your password" />
        </View>
        <Button
          mt="2"
          colorScheme="rgb(255,90,50)"
          onPress={() => navigation.navigate('tabs')}>
          OK
        </Button>
      </SafeAreaView>
    );
}


export default register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'space-evenly',
    paddingHorizontal:12,
    // alignContent:'space-between'
    // alignItems: 'center',
  },
  title:{
    textAlign:'center',
    fontSize:22,
    fontWeight:'bold',
    marginTop:16,
  },
  input: {
    fontSize:14,
    backgroundColor:'rgba(255,90,50,0.1)',
    // borderBottomWidth: 1,
    // borderColor: 'blue',
    // marginBottom:16,
    
  },
  inputContainer:{
    // justifyContent:'space-between',
  },
  subTitle:{
    marginLeft:2,
    fontWeight:'bold',
    fontSize:16,
    marginBottom:5,
    marginTop:10
  }
});
