import React from 'react';
import CounterText from './src/components/CounterText';
import {
  CounterController,
  UpdateCountValue,
} from './src/components/CounterController';
import store from './src/Redux/State';
import {Provider} from 'react-redux';
import {View} from 'react-native';
import Style from './src/MyStyles';

const App = () => {
  return (
    <View style={Style.secondaryContainer}>
      <Provider store={store}>
        <CounterText />
        <CounterController />
        <UpdateCountValue />
      </Provider>
    </View>
  );
};

export default App;
