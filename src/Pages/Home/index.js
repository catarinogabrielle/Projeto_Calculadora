import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import HistoricoList from '../../components/HistoricoList';

export default function ProjetoCalculadora() {
    const [historico, setHistorico] = useState([
        { key: '1', idade: 28 },
        { key: '2', idade: 18 },
        { key: '3', idade: 12 },
        { key: '4', idade: 42 },
        { key: '5', idade: 50 },
        { key: '6', idade: 71 },
    ]);

    return (
        <View style={styles.container}>

            <StatusBar
                backgroundColor="#000"
                barStyle="light-content"
                translucent={true} />

            <View style={styles.idadeContainer}>
                <Text style={styles.textIdade}>Idades</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua idade"
                    underlineColorAndroid="transparent"
                />

                <TouchableOpacity style={styles.submit}>
                    <Text style={{ color: '#353535', fontSize: 25 }}>Inserir</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.lista}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={historico}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) => (<HistoricoList />)}
                />
            </View>

            <View style={{ height: 120, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={styles.btnCalcular}>
                    <Text style={{color: '#fff', fontSize: 30}}>Calcular Média</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C3E50',
        paddingTop: 15 + getStatusBarHeight(),
    },

    idadeContainer: {
        width: '50%',
        height: 45,
        marginLeft: 20,
    },

    textIdade: {
        fontSize: 35,
        color: '#fff',
    },

    input: {
        height: 50,
        width: '50%',
        borderWidth: 1,
        borderColor: '#222',
        fontSize: 20,
        padding: 10,
        backgroundColor: '#fff',
        marginLeft: 20
    },

    submit: {
        height: 50,
        width: '35%',
        borderWidth: 1,
        borderColor: '#222',
        backgroundColor: '#1ABC9C',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    },

    lista: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20
    },

    btnCalcular: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 55,
        backgroundColor: '#3498DB'
    }
});

