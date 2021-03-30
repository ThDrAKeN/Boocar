import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import HeaderCenter from '../components/HeaderCenter'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator' 
import { nameValidator } from '../helpers/nameValidator'
import { Paragraph } from 'react-native-paper'

const FinalScreen = ({ navigation }) => {
  const [nom, setNom] = useState({ value: '', error: '' })
  const [prenom, setPrenom] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onSignUpPressed = () => {
   
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      {/* <Logo /> */}
      <HeaderCenter>Votre demande à été enregistrée</HeaderCenter>

      <Paragraph>Référence de votre demande</Paragraph>
      <Paragraph style={{fontWeight: 'bold'}}>148439</Paragraph>

      <Paragraph style={{fontSize: 10, textAlign: 'center', marginTop: 20}}>Une conseiller prendra contact avec vous au plus vite. {"\n"} Un mail reprenant les informations de votre demande vous à été envoyé</Paragraph>
      
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Accueil
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

export default FinalScreen
