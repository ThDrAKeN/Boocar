import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { phoneValidator } from '../helpers/phoneValidator'
import { nameValidator } from '../helpers/nameValidator'

import axios from 'axios'

const InformationsScreen = ({ navigation, route }) => {
  const [nom, setNom] = useState({ value: '', error: '' })
  const [prenom, setPrenom] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [phone, setPhone] = useState({ value: '', error: '' })
  

  const onSignUpPressed = async () => {
    const nameError = nameValidator(prenom.value)
    const emailError = emailValidator(email.value)
    const phoneError = phoneValidator(phone.value)
    const randomNum = Math.floor(100000000 + Math.random() * 800000000)
    if (emailError || phoneError || nameError) {
      setPrenom({ ...prenom, error: nameError })
      setNom({ ...nom, error: nameError })
      setEmail({ ...email, error: emailError })
      setPhone({ ...phone, error: phoneError })
      return
    }

    axios.post('http://192.168.0.15:3000/createRes', {
      idV: route.params.info.idV,
      id_attente: randomNum,
      dateHeure: "2020",
      numeroTel: "062458464",
      adrMail: "test",
      nom: "test",
      prenom: "test"
    })
      .then((response) => {
        console.log(response.status);
        navigation.navigate(
          'Final',
          {num: randomNum}
        )
        return response.status
      }, (error) => {
        console.log(error);
      });


  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      {/* <Logo /> */}
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
        keyboardType="phone-pad"
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



export default InformationsScreen
