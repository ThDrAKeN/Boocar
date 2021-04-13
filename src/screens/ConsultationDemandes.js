import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { nameValidator } from '../helpers/nameValidator'
import { phoneValidator } from '../helpers/phoneValidator'
import { Paragraph } from 'react-native-paper'
import axios from 'axios'


const ConsultationDemandes = ({ navigation }) => {
  const [prenom, setPrenom] = useState({ value: '', error: '' })
  const [phone, setPhone] = useState({ value: '', error: '' })
  const [res, setRes] = useState({ value: '', error: false })

  const onLoginPressed = async () => {
    const prenomError = nameValidator(prenom.value)
    const phoneError = phoneValidator(phone.value)
    if (prenomError || phoneError) {
      setPrenom({ ...prenom, error: prenomError })
      setPhone({ ...phone, error: phoneError })
      return
    }

    // var data = JSON.stringify({
    //   "numeroTel": phone,
    //   "prenom": prenom
    // });

    // var config = {
    //   method: 'get',
    //   url: 'http://http://192.168.0.15:3000/getRes',
    //   headers: { 
    //     'Content-Type': 'application/json'
    //   },
    //   data : data
    // };

    // axios(config)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });


    // Recuperer les données d'un véhicule
    await axios.get('http://192.168.0.15:3000/getRes', {
      params: {
        numeroTel: phone.value,
        prenom: prenom.value
      }
    })
      .then(response => {

        response.data[0] != null ?
          navigation.navigate(
            'Reservation',
            { data: response.data }
          )
          :
          setRes({ value: 'Aucune demande ne correspond aux informations donner', error: true })
      })
      .catch(function (error) {
        console.log(error)
        setRes({ value: 'Aucune demande ne correspond aux informations donner', error: true })
      })



    // navigation.navigate(
    //   'Final',
    //   { num: randomNum }
    // )
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>Vous revoilà.</Header>
      <Paragraph>Renseigner les champs suivant pour consulter le status de votre demande</Paragraph>
      <TextInput
        label="Prenom"
        returnKeyType="next"
        value={prenom.value}
        onChangeText={(text) => setPrenom({ value: text, error: '' })}
        error={!!prenom.error}
        errorText={prenom.error}
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

      {res.error ? <Text style={styles.error}>{res.value}</Text> : null}
      <Button mode="contained" onPress={onLoginPressed}>
        Consulter
      </Button>

    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})

export default ConsultationDemandes
