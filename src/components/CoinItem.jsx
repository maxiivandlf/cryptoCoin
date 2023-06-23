import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

import { colors } from '../constants/colors';

const CoinItem = ({ coin }) => {
  return (
    <View style={style.container}>
      <View style={style.coin}>
        <Image style={style.image} source={{ uri: coin.image }} />
        <View>
          <Text style={style.text}>{coin.name}</Text>
          <Text style={style.symbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={style.priceText}>${coin.current_price}</Text>
        <Text
          style={[
            style.priceText,
            coin.price_change_percentage_24h > 0
              ? style.priceUp
              : style.priceDown,
          ]}>
          {coin.price_change_percentage_24h}
        </Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  coin: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  text: {
    color: '#fff',
  },

  priceText: {
    textAlign: 'right',
    color: '#fff',
  },
  priceUp: {
    color: colors.priceUp,
  },
  priceDown: {
    color: colors.priceDown,
  },
  symbol: {
    textTransform: 'uppercase',
    color: colors.secondary,
  },
  image: {
    width: 20,
    height: 20,
  },
});
export default CoinItem;
