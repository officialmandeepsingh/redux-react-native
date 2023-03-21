import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Style from '../MyStyles';
import {useDispatch, useSelector} from 'react-redux';

export const CounterController = () => {
  const dispatch = useDispatch();

  const Increment = () => {
    dispatch({type: 'Increment'});
  };
  const Decrement = () => {
    dispatch({type: 'Decrement'});
  };
  return (
    <View style={Style.container}>
      <TouchableOpacity
        style={[Style.touchableButtonContainer, Style.error]}
        onPress={Decrement}>
        <Text style={[Style.title, Style.whiteTextColor]}>Decrement</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[Style.touchableButtonContainer, Style.primary]}
        onPress={Increment}>
        <Text style={[Style.title, Style.whiteTextColor]}>Increment</Text>
      </TouchableOpacity>
    </View>
  );
};

export const UpdateCountValue = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.CounterReducer);
  console.log(data);

  return (
    <View style={Style.secondaryContainer}>
      <Text style={Style.title}>Count Change By</Text>
      <TextInput
        style={Style.textInput}
        value={data.changeCountValue.toString()}
        onChangeText={text => dispatch({type: 'changeCount', value: text})}
      />
    </View>
  );
};
