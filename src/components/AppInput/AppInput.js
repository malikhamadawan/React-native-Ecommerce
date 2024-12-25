import {View, Text, Image} from 'react-native';
import React from 'react';
import {appIcons} from '../../assets';

const AppInput = () => {
  return (
    <View>
      <Text>AppInput</Text>
      <Image source={appIcons.google} resizeMode={'contain'} />
    </View>
  );
};

export {AppInput};
