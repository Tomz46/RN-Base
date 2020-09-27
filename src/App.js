import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet } from 'react-native';

import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sc: {
    backgroundColor: '#fff',
  },
});

export default App;
