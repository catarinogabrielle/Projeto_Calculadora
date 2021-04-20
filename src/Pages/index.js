import React from 'react';
import { View, Text, StyleSheet, TextInput, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function ProjetoCalculadora() {

    return (
        <View style={styles.container}>

            <StatusBar
                backgroundColor="transparent"
                barStyle="light-content"
                translucent={true} />

            <View style={styles.idadeContainer}>
                <Text style={styles.textIdade}>Idades</Text>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Digite sua idade"
                underlineColorAndroid="transparent"
            />
            <Text style={styles.texto}></Text>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C3E50',
        paddingTop: 30 + getStatusBarHeight(),
    },

    idadeContainer: {
        width: '50%',
        height: 45,
        marginLeft: 10,
    },

    textIdade: {
        fontSize: 29,
        color: '#fff',
    },

    input: {
        height: 45,
        width: '50%',
        borderWidth: 1,
        borderColor: '#222',
        left: 10,
        fontSize: 20,
        padding: 10,
        backgroundColor: '#fff',
    },

    texto: {
        textAlign: 'center',
        fontSize: 15
    }
});

