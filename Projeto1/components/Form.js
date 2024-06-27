import React, { useState } from 'react';
import {View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import InputField from './InputField';

export default Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [petName, setPetName] = useState('');
  const [petBirthday, setPetBirthday] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [favoriteToy, setFavoriteToy] = useState('');


  return (
    <ScrollView
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
      }}>
      <View>
        <InputField
          label="E-mail"
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
        />
        <InputField
          label="Senha"
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry = {true}
        />
        <InputField
          label="Confirme sua senha"
          placeholder="Digite sua senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry = {true}
        />
        <InputField
          label="Nome do Pet"
          placeholder="Digite o nome do seu pet"
          value={petName}
          onChangeText={setPetName}
        />
        <InputField
          label="Data de Aniversário do Pet"
          placeholder="Digite a data de aniversário do seu pet"
          value={petBirthday}
          onChangeText={setPetBirthday}
        />
        <InputField
          label="Raça do Pet"
          placeholder="Digite a raça do seu pet"
          value={petBreed}
          onChangeText={setPetBreed}
        />
        <InputField
          label="Brinquedo Favorito do Pet"
          placeholder="Digite o brinquedo favorito do seu pet"
          value={favoriteToy}
          onChangeText={setFavoriteToy}
        />
      </View>
    </ScrollView>
  );
};