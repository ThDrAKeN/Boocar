import React from 'react'
import { StyleSheet } from 'react-native'
import Background from '../components/Background'
import HeaderCenter from '../components/HeaderCenter'
import Button from '../components/Button'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { Paragraph } from 'react-native-paper'

const FinalScreen = ({ navigation, route }) => {
  
  const onExitPressed = () => {
   
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
      <Paragraph style={{fontWeight: 'bold'}}>{route.params.num}</Paragraph>

      <Paragraph style={{fontSize: 10, textAlign: 'center', marginTop: 20}}>Une conseiller prendra contact avec vous au plus vite. {"\n"} Un mail reprenant les informations de votre demande vous à été envoyé</Paragraph>
      
      <Button
        mode="contained"
        onPress={onExitPressed}
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
