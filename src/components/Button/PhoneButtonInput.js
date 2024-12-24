/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

const PHONE_NO_LENGTH = 10;

const PhoneButtonInput = (_props: any) => {
  const [focusedInput, setFocusedInput] = useState(false);
  const [phoneCode, setPhoneCode] = useState('+92');
  const [CCA2, setCCA2] = useState('PK');

  const submit = () => {
    setFocusedInput(false);
  };

  return (
    <View style={styles.phone}>
      {!_props.withFlag && (
        <CountryPicker
          onSelect={value => {
            setCCA2(value.cca2);
            setPhoneCode(value.callingCode);
          }}
          withFlag
          withEmoji
          withFilter
          withCallingCode={true}
          withCallingCodeButton={true}
          countryCode={CCA2}
          containerButtonStyle={styles.pickerInputTheme}
        />
      )}
      <Image
        style={{
          height: 12,
          width: 12,
          marginTop: 7,
          marginRight: 3,
          marginLeft: 3,
        }}
        resizeMode="cover"
        source={require('../../assets/icons/drop-down-43.png')}
      />
      <TextInput
        keyboardType="phone-pad"
        returnKeyType={_props.returnKeyType}
        placeholder={
          _props.placeholder ? _props.placeholder : 'Enter phone number'
        }
        onChangeText={_props.handleChange}
        ref={_props.reference}
        maxLength={PHONE_NO_LENGTH}
        placeholderTextColor="#696969"
        value={_props.phoneNumber}
        onBlur={submit}
        onFocus={() => setFocusedInput(true)}
        onSubmitEditing={_props.onSubmitEditing}
        editable={_props?.editable}
        style={styles.pickerInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  countryPickerNumber: {
    marginStart: 3,
  },
  pickerInput: {
    height: 50,
    fontSize: 16,
    paddingLeft: 10,
    color: '#000',
    borderLeftWidth: 0.3,
  },
  pickerInputTheme: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 48,
    borderTopLeftRadius: 8,
  },
  phone: {
    height: 49,
    fontSize: 16,
    fontFamily: 'System',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: 'black',
    width: '88%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
});

export {PhoneButtonInput};
