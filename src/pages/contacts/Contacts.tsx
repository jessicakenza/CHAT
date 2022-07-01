import { Icon } from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  PermissionsAndroid,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Contacts, {getCount} from 'react-native-contacts';
import Search from '../../components/Search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CHeader from '../../components/Header';


const PContacts = ({navigation}) => {
  const [data, setData] = useState([]);
  const [secondData, setSecondData] = useState([]);
  const [onSearch, setOnSearch] = useState(true);
  const [value, setValue] = useState('');
  
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
    title: 'Contacts',
    message: 'This app would like to view your contacts.',
    buttonPositive: 'Please accept bare mortal',
  });

  useEffect(() => {
    Contacts.checkPermission().then(permission => {
      // Contacts.PERMISSION_AUTHORIZED || Contacts.PERMISSION_UNDEFINED || Contacts.PERMISSION_DENIED
      if (permission === 'undefined') {
        Contacts.requestPermission().then(permission => {
          console.log('permission: ', permission);
          // ...
        });
      }
      if (permission === 'authorized') {
        // yay!
        // alert("vous avez acces a l'application");
        getContacts();
        console.log('permission authorized: ', permission);
      }
      if (permission === 'denied') {
        // x.x
        console.log('permission denied: ', permission);
        // alert("vous n'avez pas acces a l'application");
      }
    });
  }, []);

  const getContacts = async () => {
    let contactsArr = [];
    // getting all contacts stored in the phone
    const result = await Contacts.getAll();
    // let's sort the result of the precedent Contacts.getAll instruction
    result.sort((a, b) => {
      if (a.displayName < b.displayName) {
        return -1;
      }
      if (a.displayName > b.displayName) {
        return 1;
      }
      return 0;
    });
    // console.log('Contact used data: ', result);
    result.forEach(item => {
      contactsArr = [
        ...contactsArr,
        {
          // contactId: item.rawContactId,
          displayName: item.displayName,
          image: item.thumbnailPath,
          familyName: item.familyName,
          phoneNumber: item.phoneNumbers[0]?.number,
        },
      ];
    });
    setData(contactsArr);
    setSecondData(contactsArr)
  };

  const filterData = (array, value) => {
    const filtered = [...array].filter((contact) => {
      if (contact?.displayName !== null) {
        return contact?.displayName?.toString().toLowerCase().includes(value.toLowerCase());
      }
    });
    setSecondData(filtered);
  };
  const onPress = () => {
    setOnSearch(!onSearch);
    // console.log('onPress ICon: ', onSearch);
  };

  const renderItem = item => {
    return (
      <TouchableOpacity
        style={{flexDirection: 'row', width: '100%', margin: 10}}
        onPress={() => navigation.navigate('Messages',{contact:item}) }
        >
        {item.item.image == '' ? (
          <View
            style={{
              borderRadius: 50,
              borderWidth: 2,
              borderColor: 'green',
              height: 50,
              marginEnd: 10,
              width: 50,
              backgroundColor: 'aquamarine',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20}}>
              {item?.item?.displayName?.charAt(0)?.toUpperCase() +
                '' +
                item?.item?.familyName?.charAt(0)?.toUpperCase()}
            </Text>
          </View>
        ) : (
          <Image
            source={{uri: item.item.image}}
            style={{
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'green',
              height: 50,
              marginEnd: 10,
            }}
            width={50}
          />
        )}
        <View style={{justifyContent: 'space-between'}}>
          <Text style={{fontSize: 20, fontWeight: '400'}}>
            {item.item.displayName}
          </Text>
          <Text>{item.item.phoneNumber}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{justifyContent: 'space-between'}}>
      {onSearch ? (
        <CHeader
          icon1="menu"
          label="Contact"
          icon2="search"
          onPress={onPress}
        />
      ) : (
        <View style={styles.searchContainer}>
          <Ionicons
            name="arrow-back"
            onPress={() => setOnSearch(!onSearch)}
            style={styles.icon}
          />
          <Search
            // value={value}
            placeholder="search Contact"
            onChangeText={val => {
              setValue(val);
              if (val !== '') {
                filterData(data, val);
              } else setData(data);
            }}
          />
          <Ionicons
            name="close"
            onPress={() => setValue('')}
            style={styles.icon}
          />
        </View>
      )}
      <FlatList
        data={secondData}
        keyExtractor={item => item.contactId}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor:"white",
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 57,
    width: '100%',
  },
  icon:{
    color: 'black', 
    paddingHorizontal: 16 ,
    fontSize:25
  }
});

export default PContacts;
