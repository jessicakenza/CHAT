import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import SendSMS from 'react-native-sms'

const Messages = ({navigation}) => {
  const [messages, setMessages] = useState([]);

  // someFunction() {
  //   SendSMS.send({
  //     body: 'The default body of the SMS!',
  //     recipients: ['697606274', '656862809'],
  //     successTypes: ['sent', 'queued'],
  //     allowAndroidSendWithoutReadPermission: true
  //   }, (completed, cancelled, error) => {
  
  //     console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
  
  //   });
  // }

  useEffect(() => {
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

    SendSMS.send({
      body: 'The default body of the SMS!',
      recipients: ['697606274', '656862809'],
      successTypes: ['sent', 'queued'],
      allowAndroidSendWithoutReadPermission: true
    }, (completed, cancelled, error) => {
  
      console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
  
    });

  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
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
