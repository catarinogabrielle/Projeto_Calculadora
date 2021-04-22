//Projeto Calculadora de media.
//21/04/2021
// -------- Ainda em desenvolvimento --------

import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StatusBar, FlatList, Keyboard, Alert } from 'react-native';

import { Container, IdadeContainer, TextIdade, Input, Submit, List, BtnCalcular, Content, SubmitText, Calcular, CalcularText } from './styles';
import HistoricoList from '../../components/HistoricoList';

export default function ProjetoCalculadora() {
    const [input, setInput] = useState('');
    const [historico, setHistorico] = useState([{ key: '1', idade: 20 }]);


    //Component DidMount
    useEffect(() => {

        async function getStorage() {
            const idadeStorage = await AsyncStorage.getItem('idade');
            if (idadeStorage !== null) {
                setHistorico(idadeStorage);
            }
        }

    }, []);


    //Component DidUpdate
    useEffect(() => {

        async function saveStorage() {
            await AsyncStorage.setItem('idade', historico);

        }

        saveStorage();

    }, [historico])


    function handleSubmit() {
        Keyboard.dismiss();
        if (isNaN(parseFloat(input)) || input === null) {
            alert('Preencha o campo!');
            return;
        }

        Alert.alert(
            'Confirmando dados',
            `Idade: ${parseFloat(input)} `,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => { handleAdd() }
                }
            ]
        )
    }


    //Adiciona a idade
    //--- ele esta adicionando um numero de cada vez  --- resolver ---
    function handleAdd() {
        setInput();
        setHistorico(input);
    }


    //Função responsavel por calcular a media
    function CalcularMedia() {
        var idades = parseInt(historico);
        var vetor = new Array(idades);

        // Preenchendo o vetor
        for (let count = 0; count < idade; count++)
            vetor[count] = parseInt((count + 1))


        // Somando todos os elementos
        var soma = 0;
        for (let count in vetor)
            soma += vetor[count];

        var media = soma / idades;
        alert("Média de idade: " + media);
    }


    return (
        <Container>
            <StatusBar backgroundColor="#131313" barStyle="light-content" />

            <IdadeContainer>
                <TextIdade>Idades</TextIdade>
            </IdadeContainer>

            <Content>
                <Input
                    placeholder="Digite sua idade"
                    keyboardType="numeric"
                    returnKeyType="next"
                    underlineColorAndroid="transparent"
                    value={input}
                    onSubmitEditing={() => Keyboard.dismiss()}
                    onChangeText={(text) => setInput(text)}
                />

                <Submit onPress={handleSubmit}>
                    <SubmitText>Inserir</SubmitText>
                </Submit>
            </Content>

            <List>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={historico}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) => (<HistoricoList data={item} />)}
                />
            </List>

            /*CALCULAR A MEDIA  */
            <Calcular>
                <BtnCalcular onPress={CalcularMedia}>
                    <CalcularText>Calcular Média</CalcularText>
                </BtnCalcular>
            </Calcular>
        </Container>
    );
}


