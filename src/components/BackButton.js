import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Icon from 'react-native-vector-icons/MaterialIcons';


const BackButton = ({ goBack, navigation }) => (
    <>
      <TouchableOpacity onPress={goBack} style={styles.container}>
        <Image style={styles.image} source={require('../assets/arrow_back.png')} />
      </TouchableOpacity>
    </>
)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: getStatusBarHeight() - 20,
    left: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
})

export default BackButton
