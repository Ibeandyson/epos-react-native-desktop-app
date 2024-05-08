import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { LobbyScreen } from '../screens/admin';
import { LoginOptions } from '../screens/auth';

type AuthScreenProps = {
  loginOptionScreen: undefined;
};

export type   LoginOptionScreenScreenProps = NativeStackScreenProps<AuthScreenProps, 'loginOptionScreen'>;

const Stack = createNativeStackNavigator<AuthScreenProps>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'loginOptionScreen'}
      screenOptions={{
        statusBarTranslucent: true,
        headerShown: false,
      }}
    >
      <Stack.Screen options={{ statusBarTranslucent: true, statusBarStyle: 'auto' }} name="loginOptionScreen" component={LoginOptions} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
