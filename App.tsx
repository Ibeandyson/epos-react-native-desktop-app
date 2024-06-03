import React, { useMemo } from 'react';
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './src/global/appState/store';
import AppNavigator from './src/navigation';
import CustomSpinner from './src/components/CustomSpinner';
import useSpinner from './src/hooks/useSpinner';

function App(): React.JSX.Element {
  const {spinnerState} = useSpinner()

  return (
    <>
      <PaperProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#efeded' }}>
          <Provider store={store}>
            <AppNavigator />
           <CustomSpinner />
          </Provider>
        </SafeAreaView>
      </PaperProvider>
    </>
  );
}

export default App;
