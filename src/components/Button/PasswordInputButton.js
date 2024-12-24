/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const PasswordInputButton = ({label, imageSrc, icon, placeholder}) => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View>
      <Text style={styles.text2}>{label}</Text>
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
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
        />
        {icon && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={{
              marginLeft: 15,
            }}>
            <Icon
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        )}
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
    alignSelf: 'center',
    paddingLeft: 7,
  },
  text2: {
    marginLeft: 23,
    marginTop: 18,
    fontSize: 17,
  },
});

export {PasswordInputButton};
