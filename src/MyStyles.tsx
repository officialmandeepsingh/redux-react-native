import React from 'react';
import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  secondaryContainer: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  title: {fontSize: 20, fontWeight: 'bold'},
  touchableButtonContainer: {
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    width: 150,
    alignItems: 'center',

    justifyContent: 'center',
  },
  primary: {
    backgroundColor: 'green',
  },
  error: {
    backgroundColor: 'red',
  },
  whiteTextColor: {
    color: 'white',
  },
  blackTextColor: {
    color: 'black',
  },
  textInput: {
    borderBottomColor: 'black',
    borderRadius: 15,
    borderWidth: 2,
    width: 250,
    padding: 10,
    margin: 10,
  },
});

export default Style;
