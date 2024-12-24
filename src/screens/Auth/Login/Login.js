import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button} from '../../../components/Button/Button';
import {InputButton} from '../../../components/Button/InputButton';
import {PasswordInputButton} from '../../../components/Button/PasswordInputButton';

const Login = ({navigation}) => {
  return (
    <View style={styles.container1}>
      <Text style={styles.text1}>Welcome to Login Screen</Text>
      <InputButton
        margintop={150}
        label={'Email'}
        imageSrc={require('../../../assets/images/emailicon.png')}
        placeholder={'Enter Email'}
        marginleft={23}
        fontsize={17}
      />
      <PasswordInputButton
        label={'Password'}
        icon={true}
        imageSrc={require('../../../assets/images/lock.png')}
        placeholder={'Enter Password'}
      />
      <Button
        margintop={50}
        Label={'Login'}
        backgroundcolor={'blue'}
        onpress={() => {
          navigation.navigate('LoggedIn');
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
        style={styles.touch}>
        <Text style={styles.text2}>SignUp</Text>
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
    alignSelf: 'center',
    marginTop: 90,
  },
  text2: {
    alignSelf: 'center',
    fontWeight: '500',
    color: 'blue',
  },
  touch: {
    // backgroundColor: 'Lightblue',
    alignSelf: 'center',
    width: 50,
    marginTop: 200,
  },
});
export default Login;
