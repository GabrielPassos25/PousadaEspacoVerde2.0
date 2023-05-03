// Libs
import React from 'react';
import { Container } from './styles';
import { getWindowSize } from '../../utils/getWindowSize';

// Props
interface Props {
    children: React.ReactNode;
}

// Renderer
export function Section({ children }: Props){
    const windowSize = getWindowSize();
    return (
        <Container device={windowSize}>
            {children}
        </Container>
    );
}