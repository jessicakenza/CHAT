import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {
  return (
    <View>
        <View style={styles.containt}>
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextText}>NEXT</Text>
            <Icon name="arrow-right" size={20} color="white" />
          </TouchableOpacity>
        </View>
      <View style={styles.container}>
        <Text style={styles.text}>Home page</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containt: {
    alignItems: 'flex-end',
    alignContent: 'flex-end',
  },
  nextButton: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'rgb(255,90,50)',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    padding: 20,
    width: 120,
  },
  nextText: {
    color: 'white',
    fontSize: 18,
  },
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 16,
  },
});

export default Home;
