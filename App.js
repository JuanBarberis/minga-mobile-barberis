import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </NavigationContainer>
  );
}