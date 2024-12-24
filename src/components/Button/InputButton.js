/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import React from 'react';

const InputButton = ({
  label,
  imageSrc,
  placeholder,
  margintop,
  marginleft,
  fontsize,
}) => {
  return (
    <View style={{marginTop: margintop}}>
      <Text style={{marginLeft: marginleft, fontSize: fontsize}}>{label}</Text>
      <View style={styles.inputContainer}>
        <Image
          source={imageSrc}
          resizeMode={'contain'}
          style={{
            height: 22,
            width: 22,
            alignSelf: 'center',
          }}
        />
        <TextInput
          style={styles.input1}
          placeholder={placeholder}
          placeholderTextColor={'gray'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 10,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
    width: '88%',
  },
  input1: {
    height: 48,
    width: '80%',
    marginLeft: 10,
  },
});

export {InputButton};
