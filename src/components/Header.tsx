import { Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CHeader = ({ icon1,label,icon2,onPress }) => {
  return (
    // <SafeAreaView>
    <Header style={{backgroundColor: 'orange'}}>
      {/* <Left> */}
        <Ionicons name={icon1} style={styles.icons} />
      {/* </Left> */}

      {/* <Body> */}
        <Text style={styles.label}>{label}</Text>
      {/* </Body> */}

      {/* <Right> */}
        {/* <Icon name="search" style={styles.icons} /> */}
        <Ionicons name={icon2} style={styles.icons} onPress={onPress} />
      {/* </Right> */}
    </Header>
    // </SafeAreaView>
  );
};

const styles=StyleSheet.create({
  icons:{
    color: "black",
    fontSize:25
  },
  label:{
    fontSize:25,
  }
})

export default CHeader;