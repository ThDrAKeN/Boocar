import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Icon from 'react-native-vector-icons/MaterialIcons';


const BackButton = ({ goBack, navigation, color }) => (
  <>
    <TouchableOpacity onPress={goBack} style={styles.container}>
      {
        color == 'blanc' ?
          <Image style={styles.image} source={require('../assets/arrow_back_white.png')} />
          :
          <Image style={styles.image} source={require('../assets/arrow_back.png')} />
      }
    </TouchableOpacity>
  </>
)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: getStatusBarHeight() - 20,
    left: 4,
   
    paddingRight: 20,
    paddingBottom: 20
  },
  image: {
    width: 30,
    height: 30,
  },
})

export default BackButton
