import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView, Platform  } from 'react-native'
import { theme } from '../core/theme'

const Background = ({ children }) => (
  <ImageBackground
    source={require('../assets/background_dot.png')}
    resizeMode="repeat"
    style={styles.background}
  >
    <KeyboardAvoidingView style={Platform.OS == 'ios' ? styles.backgroundIOS : styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>
)


const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  backgroundIOS: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Background
