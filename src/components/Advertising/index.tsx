// Libs
import React from 'react';
import { Container, TitleContainer, Title } from './styles';
import { getWindowSize } from '../../utils/getWindowSize';

// Renderer
export function Advertising(){
    const windowSize = getWindowSize();
    return (
        <Container>
            <TitleContainer device={windowSize}>
                <Title>
                    Serão momentos inesquecíveis
                </Title>
            </TitleContainer>
        </Container>
    );
}
