import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Button = ({Label, backgroundcolor, onpress, margintop}) => {
  return (
    <View style={{marginTop: margintop}}>
      <TouchableOpacity
        style={[styles.container2, {backgroundColor: backgroundcolor}]}
        activeOpacity={0.5}
        onPress={onpress}>
        <Text style={styles.text4}>{Label}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container2: {
    height: 50,
    width: '88%',
    alignSelf: 'center',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text4: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export {Button};
