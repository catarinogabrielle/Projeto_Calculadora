import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StatusBar, FlatList, Keyboard, Alert } from 'react-native';

import { Container, IdadeContainer, TextIdade, Input, Submit, List, BtnCalcular, Content, SubmitText, Calcular, CalcularText } from './styles';
import HistoricoList from '../../components/HistoricoList';

export default function ProjetoCalculadora() {
    const [idades, setIdades] = useState('');
    const [historico, setHistorico] = useState([]);

    function handleSubmit() {
        Keyboard.dismiss();
        if (isNaN(parseFloat(idades)) || idades === null) {
            alert('Preencha o campo!');
            return;
        }

        Alert.alert(
            'Confirmando dados',
            `Idade: ${parseFloat(idades)} `,
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

    function handleAdd() {
        alert('aqui ele deveria adicionar a idade');
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
                    value={idades}
                    onSubmitEditing={() => Keyboard.dismiss()}
                    onChangeText={(text) => setIdades(text)}
                />

                <Submit onPress={handleSubmit}>
                    <SubmitText>Inserir</SubmitText>
                </Submit>
            </Content>

            <List>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={historico}
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


