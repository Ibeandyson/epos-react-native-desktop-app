import React from 'react';
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
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
