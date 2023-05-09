// Libs
import React from 'react';
import { Container, Title, Description } from './styles';
import { getWindowSize } from '../../utils/getWindowSize';

// Props
interface CarouselItemProps {
    image: string;
    title: string;
    description: string;
}

// Renderer
export function CarouselItem({ image, title, description }: CarouselItemProps){
    const windowSize = getWindowSize();
    return (
        <Container src={image} device={windowSize}>
            <Title>
                {title}
            </Title>
            <Description>
                {description}
            </Description>
        </Container>
    );
}