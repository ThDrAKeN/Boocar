import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, View } from 'react-native'


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const VehiculeCard = (vhInfo) => (

    <Card style={{ width: '100%', borderRadius: 40, backgroundColor: vhInfo.vhInfo.color }}>

        <Card.Content style={styles.card}>

            <Card.Cover style={{
                backgroundColor: 'transparent',
                width: null,
                resizeMode: 'contain',
                height: 100
            }}
                source={{ uri: vhInfo.vhInfo.img }} />

            <View style={styles.carInfo}>
                <View style={styles.carname}>
                    <Title style={lightOrDark(vhInfo.vhInfo.color) == 'dark' ? { color: 'white' } : { color: 'black' }}>{vhInfo.vhInfo.marque}</Title>
                    <Paragraph style={lightOrDark(vhInfo.vhInfo.color) == 'dark' ? { color: 'white' } : { color: 'black' }}>{vhInfo.vhInfo.model}</Paragraph>
                </View>
                <View style={styles.carprice}>
                    <Paragraph style={lightOrDark(vhInfo.vhInfo.color) == 'dark' ? { color: 'white' } : { color: 'black' }}>{vhInfo.vhInfo.prix}/j</Paragraph>
                </View>
            </View>
        </Card.Content>
        <Card.Actions style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end', }}>
            <Button color="black" style={styles.buttonR}>Book →</Button>
        </Card.Actions>
    </Card>
);

export default VehiculeCard;

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

const styles = StyleSheet.create({
    buttonR: {

        backgroundColor: 'white',
        width: 120,
        marginRight: -8,
        marginBottom: -8.00009,
        borderRadius: 0,
        justifyContent: 'center',
        height: 50,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 39
    },
    carInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
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