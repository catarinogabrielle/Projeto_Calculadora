import React from 'react';

import { Container, IdadeText } from './styles';

export default function HistoricoList({ data }) {
    return (
        <Container>
            <IdadeText>{data}</IdadeText>
        </Container>
    );
}
