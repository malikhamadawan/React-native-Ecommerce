import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const SignedUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Successfully Signed Up Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
  },
});
export default SignedUpScreen;
