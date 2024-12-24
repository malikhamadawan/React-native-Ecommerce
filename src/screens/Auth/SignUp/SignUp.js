import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {InputButton} from '../../../components/Button/InputButton';
import {PhoneButtonInput} from '../../../components/Button/PhoneButtonInput';
import {PasswordInputButton} from '../../../components/Button/PasswordInputButton';
import {Button} from '../../../components/Button/Button';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container1}>
      <Text style={styles.text1}>Welcome to SignUp Screen</Text>
      <InputButton
        label={'Name'}
        imageSrc={require('../../../assets/images/user.webp')}
        placeholder={'Enter Nmae'}
        margintop={30}
        marginleft={23}
        fontsize={17}
      />
      <InputButton
        label={'Email'}
        imageSrc={require('../../../assets/images/emailicon.png')}
        placeholder={'Enter Email'}
        margintop={10}
        marginleft={23}
        fontsize={17}
      />
      <Text style={styles.text2}>Phone</Text>
      <PhoneButtonInput />
      <PasswordInputButton
        label={'Enter Password'}
        imageSrc={require('../../../assets/images/lock.png')}
        placeholder={'Enter Password'}
        icon={true}
      />
      <PasswordInputButton
        label={'Confirm Password'}
        imageSrc={require('../../../assets/images/lock.png')}
        placeholder={'Enter Password'}
        icon={true}
      />
      <Button
        backgroundcolor={'blue'}
        Label={'Sign Up'}
        onpress={() => {
          navigation.navigate('SignedUpScreen');
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('ForgetPassword')}
        style={styles.touch}>
        <Text>Forget Password</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  text1: {
    fontSize: 20,
    marginTop: 70,
    alignSelf: 'center',
  },
  touch: {
    alignSelf: 'center',
  },
  text2: {
    fontSize: 17,
    marginLeft: 23,
    marginTop: 10,
  },
});
export default SignUp;
