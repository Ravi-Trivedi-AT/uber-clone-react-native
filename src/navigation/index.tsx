import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootNativeStackParamList} from '../types/navigation';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import Onboarding from '../screens/Onboarding';
import HomeTabs from './HomeBottomTabs';

const Navigation = () => {
  const AuthStack = createNativeStackNavigator<RootNativeStackParamList>();

  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <AuthStack.Screen name="Onboarding" component={Onboarding} />
        <AuthStack.Screen name="SignIn" component={SignIn} />
        <AuthStack.Screen name="SignUp" component={SignUp} />
        <AuthStack.Screen name="MainTabs" component={HomeTabs} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
