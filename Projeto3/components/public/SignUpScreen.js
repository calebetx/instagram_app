import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { geralStyles } from '../../assets/css/geralStyles';

export const SignUpScreen = () => {
  const nav = useNavigation();

  return (
    <View style={geralStyles.layout}>
      <Text style={geralStyles.title}>Sign Up</Text>
        <Button
        title="Go to Main"
        onPress={() => nav.navigate('Main')}
        />
    </View>
  );
};
