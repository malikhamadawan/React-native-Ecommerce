import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const LoggedIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You Logged In to Login Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={styles.touch}>
        <Text style={styles.touchtext}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginTop: 80,
  },
  touch: {
    alignSelf: 'center',
    marginTop: 50,
  },
  touchtext: {
    fontWeight: '500',
    color: 'blue',
  },
});
export default LoggedIn;
