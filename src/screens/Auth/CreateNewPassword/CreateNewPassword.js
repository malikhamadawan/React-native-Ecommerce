import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const CreateNewPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Create New Password Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
export default CreateNewPassword;
