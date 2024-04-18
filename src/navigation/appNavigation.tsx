import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { CartScreen, RefundScreen } from '../screens/till';

type AppScreenProps = {
  cartScreen: undefined;
  refundScreen: undefined;
};

export type CartScreenProps = NativeStackScreenProps<AppScreenProps, 'cartScreen'>;
export type RefundScreenProps = NativeStackScreenProps<AppScreenProps, 'refundScreen'>;

const Stack = createNativeStackNavigator<AppScreenProps>();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'cartScreen'}
      screenOptions={{
        statusBarTranslucent: true,
        headerShown: false,
      }}
    >
      <Stack.Screen options={{ statusBarTranslucent: true, statusBarStyle: 'auto' }} name="cartScreen" component={CartScreen} />
      <Stack.Screen options={{ statusBarTranslucent: true, statusBarStyle: 'auto' }} name="refundScreen" component={RefundScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
