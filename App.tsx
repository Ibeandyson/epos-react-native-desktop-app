import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { CustomButton, CustomNumberKeyboard, CustomTillProductCard } from './src/components';
import { Provider } from 'react-redux';
import store from './src/global/appState/store';

function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#efeded' }}>
        <Provider store={store}>
          <ScrollView style={{ margin: 30 }}>
            <CustomTillProductCard />
            <CustomNumberKeyboard />
            <CustomButton bntType="secondary" text="Hello Press Me" mode="contained" onPress={() => {}} />
          </ScrollView>
        </Provider>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
