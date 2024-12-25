import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {AppButton, AppInput} from './src/components';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <AppButton width={'10%'} backgroundColor={'red'} marginTop={10} />
      <AppInput />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 70,
  },
});
export default App;
