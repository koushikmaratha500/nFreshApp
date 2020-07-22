/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar, useColorScheme, StyleSheet } from 'react-native';
import Router from './src/Router';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Router />
    </>
  );
};

const styles = StyleSheet.create({

});


export default App;
