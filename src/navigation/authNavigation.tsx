import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { LobbyScreen } from '../screens/admin';

type AuthScreenProps = {
  lobbyScreen: undefined;
};

export type lobbyScreenProps = NativeStackScreenProps<AuthScreenProps, 'lobbyScreen'>;

const Stack = createNativeStackNavigator<AuthScreenProps>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'lobbyScreen'}
      screenOptions={{
        statusBarTranslucent: true,
        headerShown: false,
      }}
    >
      <Stack.Screen options={{ statusBarTranslucent: true, statusBarStyle: 'auto' }} name="lobbyScreen" component={LobbyScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
