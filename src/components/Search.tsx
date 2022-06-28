import {Input, View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

const Search = props => {
  return (
    <View>
      <Input style={styles.input} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 10,
  },
});

export default Search;
