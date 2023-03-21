import React from 'react';
import {View, Text} from 'react-native';
import Style from '../MyStyles';
import {useSelector} from 'react-redux';

const CounterText = () => {
  const data = useSelector(state => state.CounterReducer);
  console.log(data);

  return (
    <View style={Style.container}>
      <Text style={Style.title}> Counter: {data.count}</Text>
    </View>
  );
};

export default CounterText;
