import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, View, TouchableOpacity } from 'react-native'


const VehiculeCard = (vhInfo) => (
    <Card style={{ width: '100%', borderRadius: 40, backgroundColor: vhInfo.vhInfo.color }} >


        <TouchableOpacity style={{ paddingTop: 10, paddingBottom: 10 }} onPress={vhInfo.etatRes ? null :() => vhInfo.callback('Description', { info: vhInfo.vhInfo })}>
            <Card.Content style={styles.card}>

                <Card.Cover style={{
                    backgroundColor: 'transparent',
                    width: null,
                    resizeMode: 'contain',
                    height: 118
                }}
                    source={{ uri: vhInfo.vhInfo.img }} />

                <View style={styles.carInfo}>
                    <View style={styles.carname}>
                        <Title style={lightOrDark(vhInfo.vhInfo.color) == 'dark' ? { color: 'white' } : { color: 'black' }}>{vhInfo.vhInfo.marque}</Title>
                        <Paragraph style={lightOrDark(vhInfo.vhInfo.color) == 'dark' ? { color: 'white' } : { color: 'black' }}>{vhInfo.vhInfo.model}</Paragraph>
                        {vhInfo.etatRes ? <Paragraph style={lightOrDark(vhInfo.vhInfo.color) == 'dark' ? { color: 'white', position: 'absolute', top: 98, fontSize: 10 } : { color: 'black', position: 'absolute', top: 100, fontSize: 10 }}>{vhInfo.vhInfo.id_attente}</Paragraph> :null}
                    </View>
                    <View style={styles.carprice}>
                        {vhInfo.etatRes ? <Paragraph style={lightOrDark(vhInfo.vhInfo.color) == 'dark' ? { color: 'white' } : { color: 'black' }}>{vhInfo.vhInfo.dateHeure}</Paragraph> :<Paragraph style={lightOrDark(vhInfo.vhInfo.color) == 'dark' ? { color: 'white' } : { color: 'black' }}>{vhInfo.vhInfo.prix} €/j</Paragraph>}
                    </View>
                </View>
            </Card.Content>
        </ TouchableOpacity >

        <Card.Actions style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end', }}>
            <TouchableOpacity onPress={vhInfo.etatRes ? null : () => vhInfo.book('InfoUser', { info: vhInfo.vhInfo })} activeOpacity={.9}>
                <Button color="black" style={styles.buttonR}>{vhInfo.etatRes ? vhInfo.etatRes : 'Book →'}</Button>
            </TouchableOpacity>
        </Card.Actions>
    </Card >

);

export default VehiculeCard;



const styles = StyleSheet.create({
    buttonR: {

        backgroundColor: 'white',
        width: 120,
        marginRight: -8,
        marginBottom: -7.9995,
        borderRadius: 0,
        justifyContent: 'center',
        height: 50,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 39
    },
    carInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 10
    },
    carprice: {
        justifyContent: 'flex-end'
    },
    carname: {
        justifyContent: 'flex-start'
    },
    card: {
        paddingLeft: 30,
        paddingRight: 30,
    },
})

// Fonction pour couleur text par rapport au background
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