import { ScrollView } from 'native-base';
import { Box } from 'native-base';
import { VStack } from 'native-base';
import { Link } from 'native-base';
import { Text } from 'native-base';
import { HStack } from 'native-base';
import { FormControl } from 'native-base';
import { Heading } from 'native-base';
import {
  Button, 
  Input,
} from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Profile = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{alignItems: 'center'}}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}>
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link
              _text={{
                fontSize: 'xs',
                fontWeight: '500',
                color: 'indigo.500',
              }}
              alignSelf="flex-end"
              mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={() => navigation.navigate('tabs')}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              I'm a new user.{' '}
            </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('register') } >
              <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default Profile;

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
    color: 'rgb(255,90,50)',
  },
  input: {
    borderWidth: 1,
    borderColor: 'blue'
  },
  text:{
    color: 'blue',
  }
});
