import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HistoricoList() {
    return (
        <View style={styles.container}>
            <Text style={styles.idade}>24</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        marginLeft: 12,
        backgroundColor: '#f1f1f1',
        width: '35%',
        marginBottom: 15,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },

    idade: {
        color: '#000',
        fontSize: 30,
    }
});