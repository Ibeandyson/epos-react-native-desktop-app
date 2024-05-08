import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import AuthNavigation from './authNavigation';
import AppNavigation from './appNavigation';

type AppNavigatorProps = {
  auth: undefined;
  app: undefined;
};

const Stack = createNativeStackNavigator<AppNavigatorProps>();
export type AppProps = NativeStackScreenProps<AppNavigatorProps, 'app'>;

const AppNavigator = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <NavigationContainer>
      {loading || isVisible ? (
        <View
          style={{
            marginTop: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <Image
            style={{height: 500, width: 500}}
            source={require('../assets/images/logoAnimation_2.gif')}
          /> */}
        </View>
      ) : (
        <Stack.Navigator
          initialRouteName={'auth'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="auth" component={AuthNavigation} />
          <Stack.Screen name="app" component={AppNavigation} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
