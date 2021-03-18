import React, { Component } from 'react'
import { View, Image, ScrollView, ImageBackground, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Title } from 'react-native-paper';
import BackButton from '../components/BackButton'
import Background from '../components/Background'
import Header from '../components/Header'
import FastImage from 'react-native-fast-image'

export default class Description extends React.Component {
    render() {
        const { img, color, marque, model, prix, imgLogo } = this.props.route.params.info


        return (
            <ImageBackground
                style={{
                    flex: 1,
                    width: '100%',
                    backgroundColor: color
                }}
            >
                <KeyboardAvoidingView style={styles.container} behavior="padding">

                    <BackButton goBack={this.props.navigation.goBack} />

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ width: '100%', flexDirection: 'row' }}>
                            <Image source={{ uri: img }} style={{
                                backgroundColor: 'transparent',
                                width: null,
                                resizeMode: 'contain',
                                height: 200,
                                width: '100%'
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


                    </ScrollView>
                </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    text: {
        color: 'white'
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