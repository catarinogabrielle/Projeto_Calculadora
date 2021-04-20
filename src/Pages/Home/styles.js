import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
background: #2C3E50;
padding-top: 15px;
`;

export const IdadeContainer = styled.View`
width: 50%;
height: 45px;
margin-left: 20px;
`;

export const TextIdade = styled.Text`
font-size: 35px;
color: #fff;
`;

export const Content = styled.View`
flex-direction: row;
margin-top: 5px;
`;

export const Input = styled.TextInput`
height: 50px;
width: 50%;
border-width: 1px;
border-color: #222;
font-size: 20px;
padding: 10px;
background: #fff;
margin-left: 20px;
`;

export const Submit = styled.TouchableOpacity`
height: 50px;
width: 35%;
border-width: 1px;
border-color: #222;
background-color: #1ABC9C;
justify-content: center;
align-items: center;
margin-left: 15px;
`;

export const SubmitText = styled.Text`
color: #353535;
font-Size: 25px;
`;

export const List = styled.View`
flex: 1;
padding-top: 15px;
background-color: #fff;
margin-left: 10px;
margin-right: 10px;
margin-top: 20px
`;

export const Calcular = styled.View`
height: 120px;
justify-content: center;
align-items: center;
`;

export const BtnCalcular = styled.TouchableOpacity`
justify-content: center;
align-items: center;
width: 90%;
height: 55px;
background: #3498DB;
`;

export const CalcularText = styled.Text`
color: #fff;
font-Size: 30px;
`;
