import {Text, View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import SmsRetriever from 'react-native-sms-retriever';

const Discussions = ({navigation}) => {
  const _onSmsListenerPressed = async () => {
    try {
      const registered = await SmsRetriever.startSmsRetriever();
      if (registered) {
        SmsRetriever.addSmsListener(event => {
          console.log(event.message);
          SmsRetriever.removeSmsListener();
        }); 
      }
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Discussions page</Text>
      <TouchableOpacity
        style={{flexDirection: 'row',alignItems:'center'}}
        onPress={() => navigation.navigate('Messages')}>
        <Text style={styles.button}>Go to messages page</Text>
        <Icon name="arrow-right" color="rgb(255,90,50)" size={16} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{flexDirection: 'row',alignItems:'center'}}
        onPress={() => _onSmsListenerPressed()}>
        <Text style={styles.button}>Add event listener</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Discussions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 16,
  },
  button: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 16,
    color: 'rgb(255,90,50)',
  },
});
