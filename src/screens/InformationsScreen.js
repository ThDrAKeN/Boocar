import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { phoneValidator } from '../helpers/phoneValidator'
import { nameValidator } from '../helpers/nameValidator'
import { Paragraph } from 'react-native-paper'

const InformationsScreen = ({ navigation }) => {
  const [nom, setNom] = useState({ value: '', error: '' })
  const [prenom, setPrenom] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [phone, setPhone] = useState({ value: '', error: '' })

  const onSignUpPressed = () => {
    const nameError = nameValidator(prenom.value)
    const emailError = emailValidator(email.value)
    const phoneError = phoneValidator(phone.value)
    if (emailError || passwordError || nameError) {
      setPrenom({ ...prenom, error: nameError })
      setNom({ ...nom, error: nameError })
      setEmail({ ...email, error: emailError })
      setPhone({ ...phone, error: phoneError })
      return
    }
    navigation.navigate({
       name: 'Final'
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Vos informations de contact</Header>
      <TextInput
        label="Nom"
        returnKeyType="next"
        value={nom.value}
        onChangeText={(text) => setNom({ value: text, error: '' })}
        error={!!nom.error}
        errorText={nom.error}
      />
      <TextInput
        label="Prenom"
        returnKeyType="next"
        value={prenom.value}
        onChangeText={(text) => setPrenom({ value: text, error: '' })}
        error={!!prenom.error}
        errorText={prenom.error}
      />
      <TextInput
        label="Adresse email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Numéro de téléphone"
        returnKeyType="done"
        value={phone.value}
        onChangeText={(text) => setPhone({ value: text, error: '' })}
        error={!!phone.error}
        errorText={phone.error}
        
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Créer une demande
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})

export default InformationsScreen