import styled from 'styled-components/native';

export const Container = styled.View`
padding: 5px;
margin-left: 12px;
background: #f1f1f1;
width: 35%;
margin-bottom: 15px;
align-items: center;
`;

export const IdadeText = styled.Text`
color: ${props => props.idade == 20 ? '#2BB1DB' : '#232323'};
font-size: 30px;
`;