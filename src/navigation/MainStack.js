import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateNewPassword from '../screens/Auth/CreateNewPassword/CreateNewPassword';
import Login from '../screens/Auth/Login/Login';
import ForgetPassword from '../screens/Auth/ForgetPassword/ForgetPassword';
import SignUp from '../screens/Auth/SignUp/SignUp';
import LoggedIn from '../screens/LoggedIn/LoggedIn';
import SignedUpScreen from '../screens/Auth/SignedUpScreen/SignedUpScreen';

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="CreateNewPassword"
            component={CreateNewPassword}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignedUpScreen" component={SignedUpScreen} />
          <Stack.Screen name="LoggedIn" component={LoggedIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export {MainStack};
