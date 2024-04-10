import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

type AppScreenProps = {
  appHome: undefined;
  todayScreen: undefined;
  weeklyScreen: undefined;
  monthlyScreen: undefined;
  yearlyScreen: undefined;
};

const Stack = createNativeStackNavigator<AppScreenProps>();

const AppNavigation = () => {
  return <></>;
};

export default AppNavigation;
