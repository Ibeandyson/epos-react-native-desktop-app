import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { CartScreen, RefundScreen } from '../screens/till';
import { LobbyScreen, UsersScreen } from '../screens/admin';

type AppScreenProps = {
  cartScreen: undefined;
  refundScreen: undefined;
  lobbyScreen: undefined;
  usersScreen: undefined;
};

export type CartScreenProps = NativeStackScreenProps<AppScreenProps, 'cartScreen'>;
export type RefundScreenProps = NativeStackScreenProps<AppScreenProps, 'refundScreen'>;
export type LobbyScreenProps = NativeStackScreenProps<AppScreenProps, 'lobbyScreen'>;
export type UsersScreenProps = NativeStackScreenProps<AppScreenProps, 'usersScreen'>;

const Stack = createNativeStackNavigator<AppScreenProps>();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'usersScreen'}
      screenOptions={{
        statusBarTranslucent: true,
        headerShown: false,
      }}
    >
      <Stack.Screen options={{ statusBarTranslucent: true, statusBarStyle: 'auto' }} name="cartScreen" component={CartScreen} />
      <Stack.Screen options={{ statusBarTranslucent: true, statusBarStyle: 'auto' }} name="refundScreen" component={RefundScreen} />
      <Stack.Screen options={{ statusBarTranslucent: true, statusBarStyle: 'auto' }} name="lobbyScreen" component={LobbyScreen} />
      <Stack.Screen options={{ statusBarTranslucent: true, statusBarStyle: 'auto' }} name="usersScreen" component={UsersScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
