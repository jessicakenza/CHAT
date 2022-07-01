import React, { useCallback, useEffect, useState } from 'react';
import { DeviceEventEmitter, PermissionsAndroid, SafeAreaView, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import SmsAndroid from 'react-native-get-sms-android';
import SmsListener from 'react-native-android-sms-listener'
import { Avatar, Icon, Image, Text, View } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Messages = ({route,navigation}) => {
  const [messages, setMessages] = useState([]);
  const {contact}=route.params;
  const phoneNumber = contact.item.phoneNumber;
  const [id,setId] = useState(1);
  // var id=2;
  const [inComMessages,setIncomMessages]=useState([
    {
      _id: id,
      text: 'New chat interface',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: contact.item.displayName,
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
  ]);
  
  console.log("contact : ", contact.item);

  useEffect(() => {
    requestReadSmsPermission();
    // _onSmsListenerPressed();
    // setMessages([
    //   {
    //     _id: 1,
    //     text: message.body,
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: contact.item.displayName,
    //       avatar: 'https://placeimg.com/140/140/any',
    //     },
    //   },
    // ])
    SmsListener.addListener(message => {
      
      setMessages([
        {
          _id: 1,
          text: message.body,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: contact.item.displayName,
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ])
      // console.info("message received:",message)
      // console.info("incoming messageas:",inComMessages);
    })
  }, []);


  async function requestReadSmsPermission() {
    try {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_SMS,
        {
          title: "Bonjour",
          message: "Why you're asking for...",
          buttonPositive: ''
        }
      );
    } catch (err) {}
  }

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
    <SafeAreaView style={{flex: 1,marginTop:25}} >
      <View style={{flexDirection:'row',alignItems:'center',height:70,backgroundColor:'white'}}>
        <Ionicons name="arrow-back" style={{marginLeft:16, marginRight:15}} size={30} onPress={()=> navigation.goBack()} />
        {contact.item.image == '' ? (
          <View
            style={{
              borderRadius: 50,
              borderWidth: 2,
              borderColor: 'green',
              height: 50,
              marginEnd: 30,
              width: 50,
              backgroundColor: 'aquamarine',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20}}>
              {contact?.item?.displayName?.charAt(0)?.toUpperCase() +
                '' +
                contact?.item?.familyName?.charAt(0)?.toUpperCase()}
            </Text>
          </View>
        ) : (
          <Image
            source={{uri: contact.item.image}}
            style={{
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'green',
              height: 50,
              marginEnd: 30,
            }}
            alt="avatar"
            width={50}
          />
        )}
        <Text style={{fontWeight:'bold',fontSize:20,}}>{contact.item.displayName}</Text>
      </View>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        alwaysShowSend
        user={{
          _id: 1,
        }}
      />
    </SafeAreaView>
  );
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
