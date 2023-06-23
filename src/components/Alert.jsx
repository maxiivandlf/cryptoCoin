import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import { colors } from '../constants/colors';

const Alert = () => {
  return (
    <View style={style.alertContainer}>
      <Ionicons name='warning' size={70} color={colors.secondary} />
      <Text style={style.alertText}>Moneda no encontrada</Text>
    </View>
  );
};
const style = StyleSheet.create({
  alertContainer: {
    alignItems: 'center',
    backgroundColor: colors.bgLigth,
    height: '100%',
    justifyContent: 'center',
    paddingBottom: '70%',
  },
  alertText: {
    color: colors.secondary,
    fontSize: 20,
  },
});
export default Alert;
