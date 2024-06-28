import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const SignInScreen = () => {
  
  const nav = useNavigation();

  return (


  <View style={styles.layout}>
    <Text style={styles.title}>Sign In</Text>
      <Button
      title="Go to Sign Up"
      onPress={() => nav.navigate('SignUp')}
      />
  </View>
)};

const SignUpScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Sign Up</Text>
      <Button
      title="Go to Main"
      onPress={() => nav.navigate('Main')}
      />
  </View>
);

// Add the new stack navigator above this line

export const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});
