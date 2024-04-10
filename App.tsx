import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { CustomButton } from './src/components';

function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#efeded' }}>
        <View style={{ margin: 30 }}>
          <CustomButton bntType="secondary" text="Hello Press Me" mode="contained" onPress={() => {}} />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
