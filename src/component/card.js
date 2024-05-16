import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

export default function Cardstudent({ nombreEstudiante, carnet, foto }) {
    return (
        <Card style={styles.card}>
            <View style={styles.container}>
                <Image src={foto} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{nombreEstudiante}</Text>
                    <Text style={styles.carnet}>{carnet}</Text>
                </View>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffc0cb',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        width:250,
        height:90
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    textContainer: {
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    carnet: {
        fontSize: 16,
        color: '#555',
    },
});
