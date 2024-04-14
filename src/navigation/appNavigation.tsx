import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { CartScreen } from '../screens/till';

type AppScreenProps = {
  cartScreen: undefined;
};

export type CartScreenProps = NativeStackScreenProps<AppScreenProps, 'cartScreen'>;

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
    </Stack.Navigator>
  );
};

export default AppNavigation;
