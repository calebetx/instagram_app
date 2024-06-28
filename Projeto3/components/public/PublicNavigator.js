import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen } from "./SignInScreen";
import { SignUpScreen } from "./SignUpScreen";
import { MainNavigator } from "../private/MainNavigator";

const Stack = createStackNavigator();

export const PublicNavigator = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="Main" component={MainNavigator}/>
  </Stack.Navigator>
);
