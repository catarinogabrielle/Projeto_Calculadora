import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StatusBar, FlatList, Keyboard, Alert } from 'react-native';

import { Container, IdadeContainer, TextIdade, Input, Submit, List, BtnCalcular, Content, SubmitText, Calcular, CalcularText } from './styles';
import HistoricoList from '../../components/HistoricoList';

export default function ProjetoCalculadora() {
    const [input, setInput] = useState();
    const [historico, setHistorico] = useState();

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

    //ele esta adicionando um numero de cada vez  --- resolver --
    function handleAdd() {
        setInput();
        setHistorico(input);
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

            <Calcular>
                <BtnCalcular onPress={() => { alert('Fazer o calculo das medias') }}>
                    <CalcularText>Calcular Média</CalcularText>
                </BtnCalcular>
            </Calcular>
        </Container>
    );
}


