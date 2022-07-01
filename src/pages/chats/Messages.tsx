import React, { useCallback, useEffect, useState } from 'react';
import { DeviceEventEmitter, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import SmsAndroid from 'react-native-get-sms-android';

const Messages = ({route}) => {
  const [messages, setMessages] = useState([]);
  const[ message, setMessage]=useState([]);
  const {contact}=route.params;
  const phoneNumber = contact.item.phoneNumber;
  
  console.log("contact : ", contact.item.phoneNumber);

  useEffect(() => {
    // _onSmsListenerPressed();
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])

    
    
  }, [])

  
  
  DeviceEventEmitter.addListener('sms_onDelivery', (msg) => {
    console.log(msg);
  });

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    SmsAndroid.autoSend(
      phoneNumber,
      messages[0].text,
      (fail) => {
        console.log('Failed with this error: ' + fail);
      },
      (success) => {
        console.log(messages);
        
        console.log('SMS sent successfully');
      },
    );
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) =>onSend(messages)
      }
      user={{
        _id: 1,
      }}
    />
  )
};

export default Messages;

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
