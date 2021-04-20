import React, { useState } from 'react';
import { View, Text, StatusBar, FlatList, Keyboard } from 'react-native';

import { Container, IdadeContainer, TextIdade, Input, Submit, List, BtnCalcular, Content, SubmitText, Calcular, CalcularText } from './styles';
import HistoricoList from '../../components/HistoricoList';

export default function ProjetoCalculadora() {
    const [historico, setHistorico] = useState([
        { key: '1', idade: 28 },
        { key: '2', idade: 18 },
        { key: '3', idade: 12 },
        { key: '4', idade: 42 },
        { key: '5', idade: 50 },
        { key: '6', idade: 71 },
        { key: '7', idade: 34 },
        { key: '8', idade: 16 },
        { key: '9', idade: 80 },
    ]);

    return (
        <Container>
            <StatusBar backgroundColor="#131313" barStyle="light-content" />

            <IdadeContainer>
                <TextIdade>Idades</TextIdade>
            </IdadeContainer>

            <Content>
                <Input
                    placeholder="Digite sua idade"
                    underlineColorAndroid="transparent"
                    onSubmitEditing={() => Keyboard.dismiss()}
                />

                <Submit>
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
                <BtnCalcular>
                    <CalcularText>Calcular Média</CalcularText>
                </BtnCalcular>
            </Calcular>
        </Container>
    );
}


