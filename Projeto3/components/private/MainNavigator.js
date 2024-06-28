import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './HomeScreen'

const Stack = createStackNavigator();

export const MainNavigator = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name="Main" component={HomeScreen} />
  </Stack.Navigator>
);
