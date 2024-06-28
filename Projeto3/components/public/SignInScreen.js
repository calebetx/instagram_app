import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { geralStyles } from '../../assets/css/geralStyles';

export const SignInScreen = () => {
  const nav = useNavigation();

  return (
    <View style={geralStyles.layout}>
      <Text style={geralStyles.title}>Sign In</Text>
        <Button
        title="Go to Sign Up"
        onPress={() => nav.navigate('SignUp')}
        />
    </View>
  );
};
