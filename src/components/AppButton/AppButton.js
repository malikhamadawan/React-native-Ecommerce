import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const AppButton = ({width, marginTop, backgroundColor}) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: width,
          marginTop: marginTop,
          backgroundColor: backgroundColor,
        },
      ]}>
      <Text style={styles.text}>Button</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  text: {},
});
export {AppButton};
