import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { CartScreen, RefundScreen } from '../screens/till';
import {
  LobbyScreen,
  UsersScreen,
  CreateUserScreen,
  ProductScreen,
  CategoryScreen,
  ProductNameScreen,
} from '../screens/admin';

type AppScreenProps = {
  cartScreen: undefined;
  refundScreen: undefined;
  lobbyScreen: undefined;
  usersScreen: undefined;
  createUserScreen: undefined;
  productScreen: undefined;
  categoryScreen: undefined;
  productNameScreen: undefined;
};

export type CartScreenProps = NativeStackScreenProps<AppScreenProps, 'cartScreen'>;
export type RefundScreenProps = NativeStackScreenProps<AppScreenProps, 'refundScreen'>;
export type LobbyScreenProps = NativeStackScreenProps<AppScreenProps, 'lobbyScreen'>;
export type UsersScreenProps = NativeStackScreenProps<AppScreenProps, 'usersScreen'>;
export type CreateUserScreenProps = NativeStackScreenProps<AppScreenProps, 'createUserScreen'>;
export type ProductScreenProps = NativeStackScreenProps<AppScreenProps, 'productScreen'>;
export type CategoryScreenProps = NativeStackScreenProps<AppScreenProps, 'categoryScreen' >;
export type ProductNameScreenProps = NativeStackScreenProps<AppScreenProps, 'productNameScreen'>;

const Stack = createNativeStackNavigator<AppScreenProps>();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarTranslucent: true,
        headerShown: false,
      }}
    >
      <Stack.Screen
        options={{ statusBarTranslucent: true, statusBarStyle: 'auto' }}
        name="cartScreen"
        component={CartScreen}
      />
      <Stack.Screen
        options={{ statusBarTranslucent: true, statusBarStyle: 'auto' }}
        name="refundScreen"
        component={RefundScreen}
      />
      <Stack.Screen
        options={{ statusBarTranslucent: true, statusBarStyle: 'auto' }}
        name="lobbyScreen"
        component={LobbyScreen}
      />
      <Stack.Screen
        options={{ statusBarTranslucent: true, statusBarStyle: 'auto' }}
        name="usersScreen"
        component={UsersScreen}
      />
      <Stack.Screen
        options={{ statusBarTranslucent: true, statusBarStyle: 'auto' }}
        name="createUserScreen"
        component={CreateUserScreen}
      />
      <Stack.Screen
        options={{ statusBarTranslucent: true, statusBarStyle: 'auto' }}
        name="productScreen"
        component={ProductScreen}
      />
      <Stack.Screen
        options={{ statusBarTranslucent: true, statusBarStyle: 'auto' }}
        name="categoryScreen"
        component={CategoryScreen}
      />
      <Stack.Screen
        options={{ statusBarTranslucent: true, statusBarStyle: 'auto' }}
        name="productNameScreen"
        component={ProductNameScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
