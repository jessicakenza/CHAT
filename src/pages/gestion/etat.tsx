import React from "react";
import { Text, View } from "react-native";
import {StyleSheet,TouchableOpacity,} from 'react-native';


const Etat = ({navigation}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.etat}
          onPress={() => navigation.navigate('tabs')}>
          <Text style={styles.text}>BLUETOOTH </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.etat}
          onPress={() => navigation.navigate('tabs')}>
          <Text style={styles.text}>WIFI </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.etat}
          onPress={() => navigation.navigate('Messages')}>
          <Text style={styles.text}>MESSAGE</Text>
        </TouchableOpacity>
      </View>
    );
  }

export default Etat; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-evenly',
      paddingHorizontal:16,
    //   alignItems: 'center',
    },
    text: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign:'center'

    //   margin: 16,
    //   width:130,
    //   height:25,
    },
    // button: {
    //   fontWeight: 'bold',
    //   fontSize: 20,
    //   color: 'rgb(255,90,50)',
    // },

   etat:{
        backgroundColor:'tomato',
        borderRadius:20,
        marginHorizontal:50,
        width:"100%",
        alignSelf:"center",
        paddingVertical:12,
      }

     

    
  });
  