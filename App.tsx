import React, { useEffect, useState } from 'react';
import { SafeAreaView, Dimensions, Alert } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { CustomButton, CustomNumberKeyboard, CustomTillProductCard, CustomCartProductCard, CustomNavButton } from './src/components';
import { Provider } from 'react-redux';
import store from './src/global/appState/store';
import AppNavigator from './src/navigation';

function App(): React.JSX.Element {
  
  return (
    <>
      <PaperProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#efeded' }}>
          <Provider store={store}>
            <AppNavigator />
          </Provider>
        </SafeAreaView>
      </PaperProvider>
    </>
  );
}

export default App;
