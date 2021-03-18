import React, { Component } from 'react'
import { View, Image, ScrollView, ImageBackground, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { Title, Button, Text } from 'react-native-paper';
import BackButton from '../components/BackButton'
import Background from '../components/Background'
import Header from '../components/Header'
import FastImage from 'react-native-fast-image'

export default class Description extends React.Component {
    render() {
        const { img, color, marque, model, prix, imgLogo, specs } = this.props.route.params.info


        return (
            <ImageBackground
                style={{
                    flex: 1,
                    width: '100%',
                    backgroundColor: color
                }}
            >
                <KeyboardAvoidingView style={Platform.OS == 'ios' ? styles.backgroundIOS : styles.container} behavior="padding">

                    <BackButton goBack={this.props.navigation.goBack} color={lightOrDark(color) == 'dark' ? 'blanc' : ''} />

                    <TouchableOpacity style={styles.buttonBook} onPress={() => console.log('Pressed')}>
                        <View mode="contained" color={'white'} >
                            <Text>Booker Maintenant →</Text>
                        </View>
                    </TouchableOpacity>

                    <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={false}>

                        <View style={{ width: '100%', flexDirection: 'row' }}>
                            <Image source={{ uri: img }} style={{
                                backgroundColor: 'transparent',
                                width: null,
                                resizeMode: 'contain',
                                height: 200,
                                width: '100%',
                                transform: [{ rotateY: '180deg' }]
                            }} />
                        </View>

                        <View style={styles.infoNom}>
                            <View style={styles.zoneNom}>
                                <Title style={lightOrDark(color) == 'dark' ? { color: 'white' } : { color: 'black' }}>{marque}</Title>
                                <Title style={lightOrDark(color) == 'dark' ? { color: 'white' } : { color: 'black' }}>{model}</Title>
                            </View>
                            <View style={styles.imgZone}>
                                <Image
                                    style={styles.logoImg}
                                    source={{
                                        uri: imgLogo ? imgLogo : '',
                                    }}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                        </View>

                        <View style={styles.zonePrixBook}>
                            <View mode="contained" color={'white'} style={styles.prix} onPress={() => console.log('Pressed')}>
                                <Text style={lightOrDark(color) == 'dark' ? { color: 'white', fontWeight: 'bold' } : { color: 'black', fontWeight: 'bold' }} >{prix} €</Text>
                                <Text style={lightOrDark(color) == 'dark' ? { color: '#ababab' } : { color: 'black' }} >/mois</Text>
                            </View>
                        </View>


                        <View style={styles.statsVoiture}>

                            <View style={{ alignItems: 'center' }}>
                                <Image style={styles.ico} source={lightOrDark(color) == 'dark' ? require('../assets/speedometer.png') : require('../assets/speedometer_black.png')} />
                                <Text style={lightOrDark(color) == 'dark' ? { color: 'white', marginTop: 10 } : { color: 'black', marginTop: 10 }}>vitesse</Text>
                                <Text style={lightOrDark(color) == 'dark' ? { color: 'white', marginTop: 20, fontWeight: 'bold' } : { color: 'black', marginTop: 20, fontWeight: 'bold' }}>{specs.speed}</Text>
                                <Text style={lightOrDark(color) == 'dark' ? { color: '#ababab', marginTop: 2 } : { color: 'black', marginTop: 2 }}>km/h</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Image style={styles.ico} source={lightOrDark(color) == 'dark' ? require('../assets/engine.png') : require('../assets/engine_black.png')} />
                                <Text style={lightOrDark(color) == 'dark' ? { color: 'white', marginTop: 10 } : { color: 'black', marginTop: 10 }}>puissance</Text>
                                <Text style={lightOrDark(color) == 'dark' ? { color: 'white', marginTop: 20, fontWeight: 'bold' } : { color: 'black', marginTop: 20, fontWeight: 'bold' }}>{specs.hp}</Text>
                                <Text style={lightOrDark(color) == 'dark' ? { color: '#ababab', marginTop: 2 } : { color: 'black', marginTop: 2 }}>ch</Text>
                            </View>
                            <View style={{ alignItems: 'center', marginTop: 5 }}>
                                <Image style={styles.ico} source={lightOrDark(color) == 'dark' ? require('../assets/pedals.png') : require('../assets/pedals_black.png')} />
                                <Text style={lightOrDark(color) == 'dark' ? { color: 'white', marginTop: 10 } : { color: 'black', marginTop: 10 }}>accel</Text>
                                <Text style={lightOrDark(color) == 'dark' ? { color: 'white', marginTop: 20, fontWeight: 'bold' } : { color: 'black', marginTop: 20, fontWeight: 'bold' }}>{specs.acc}</Text>
                                <Text style={lightOrDark(color) == 'dark' ? { color: '#ababab', marginTop: 2 } : { color: 'black', marginTop: 2 }}>sec</Text>
                            </View>
                        </View>


                    </ScrollView>
                </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    textPrix: {
        fontWeight: 'bold'
    },
    ico: {
        width: 40,
        height: 40,

    },
    statsVoiture: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 70,
        marginBottom: 20,
        alignItems: 'center',
        alignItems: 'center'
    },

    zonePrixBook: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 33,
        marginBottom: 20,
        alignItems: 'center',

    },
    buttonBook: {
        zIndex: 1,
        position: 'absolute',
        left: '60%',
        backgroundColor: 'white',
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 25,
        paddingRight: 15,
        justifyContent: 'flex-end',
        width: 'auto',
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: -3,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    prix: {
        justifyContent: 'flex-start',
        marginTop: 20
    },

    infoNom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 10
    },
    zoneNom: {
        justifyContent: 'flex-start'
    },
    imgZone: {
        marginTop: -3,
        justifyContent: 'flex-end'
    },
    logoImg: {
        width: 50,
        height: 80,
        // aspectRatio: 0.3,

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

})



function lightOrDark(color) {

    var r, g, b, hsp;



    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

    r = color[1];
    g = color[2];
    b = color[3];



    hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );


    if (hsp > 127.5) {

        return 'light';
    }
    else {

        return 'dark';
    }
}