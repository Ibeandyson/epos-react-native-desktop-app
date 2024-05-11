import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginOptions, AdminLogin, TillLogin } from '../screens/auth';

type AuthScreenProps = {
  loginOptionScreen: undefined;
  adminLoginScreen: undefined;
  tillLoginScreen: undefined;
};

export type LoginOptionScreenScreenProps = NativeStackScreenProps<AuthScreenProps, 'loginOptionScreen'>;
export type AdminLoginScreenScreenProps = NativeStackScreenProps<AuthScreenProps, 'adminLoginScreen'>;
export type TillLoginScreenScreenProps = NativeStackScreenProps<AuthScreenProps, 'tillLoginScreen'>;

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
      <Stack.Screen
        options={{ statusBarTranslucent: true, statusBarStyle: 'auto' }}
        name="loginOptionScreen"
        component={LoginOptions}
      />
      <Stack.Screen
        options={{ statusBarTranslucent: true, statusBarStyle: 'auto' }}
        name="adminLoginScreen"
        component={AdminLogin}
      />
      <Stack.Screen
        options={{ statusBarTranslucent: true, statusBarStyle: 'auto' }}
        name="tillLoginScreen"
        component={TillLogin}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
