import { View, TextInput, Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors } from './src/constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import CoinItem from './src/components/CoinItem';
import Alert from './src/components/Alert';
import Constants from 'expo-constants';

import dataJson from './src/data/data.json';

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async () => {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
    );
    const data = await res.json();
    if (data.status) {
      setCoins(dataJson);
    } else {
      setCoins(data);
    }
  };

  const coinFilter = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  });

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.logo}>
          <Text style={style.title}>Crypto Market</Text>
          <Ionicons name='logo-bitcoin' size={25} color={colors.secondary} />
        </View>
        <View style={style.search}>
          <Ionicons name='search-outline' size={20} color={colors.secondary} />
          <TextInput
            style={style.textInput}
            placeholder='coin search'
            placeholderTextColor={colors.primary}
            onChangeText={(text) => {
              setSearch(text);
            }}
          />
        </View>
      </View>
      {coinFilter.length === 0 ? (
        <Alert />
      ) : (
        <FlatList
          data={coinFilter}
          renderItem={({ item }) => {
            return <CoinItem coin={item} />;
          }}
        />
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: colors.bg,
    height: '100%',
  },
  header: {
    margin: 15,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    color: colors.primary,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
  },
});

export default App;
