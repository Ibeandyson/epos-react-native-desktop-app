import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { CartScreen, RefundScreen } from '../screens/till';
import { LobbyScreen } from '../screens/admin';

type AppScreenProps = {
  cartScreen: undefined;
  refundScreen: undefined;
  lobbyScreen: undefined;
};

export type CartScreenProps = NativeStackScreenProps<AppScreenProps, 'cartScreen'>;
export type RefundScreenProps = NativeStackScreenProps<AppScreenProps, 'refundScreen'>;
export type LobbyScreenProps = NativeStackScreenProps<AppScreenProps, 'lobbyScreen'>;

const Stack = createNativeStackNavigator<AppScreenProps>();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'lobbyScreen'}
      screenOptions={{
        statusBarTranslucent: true,
        headerShown: false,
      }}
    >
      <Stack.Screen options={{ statusBarTranslucent: true, statusBarStyle: 'auto' }} name="cartScreen" component={CartScreen} />
      <Stack.Screen options={{ statusBarTranslucent: true, statusBarStyle: 'auto' }} name="refundScreen" component={RefundScreen} />
      <Stack.Screen options={{ statusBarTranslucent: true, statusBarStyle: 'auto' }} name="lobbyScreen" component={LobbyScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
