import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputField = (props) => {
  return (
    <View style={inputStyles.container}>
      <Text style={inputStyles.label}>{props.label}</Text>
      <TextInput
        style={inputStyles.input}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

const inputStyles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    fontSize: 14,
  },
});

export default InputField;
