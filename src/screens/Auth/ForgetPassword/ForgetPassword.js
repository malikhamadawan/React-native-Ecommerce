import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const ForgetPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Forget Password Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('CreateNewPassword')}>
        <Text>Create New Password</Text>
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
export default ForgetPassword;