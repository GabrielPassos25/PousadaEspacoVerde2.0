// Libs
import React from 'react';
import { Container, Image, InfoContainer, Title, Description, Separator, ImageSeparator } from './styles';

// Assets
import atractives from '../../assets/atrativos.png';
import { Button } from '../Button';
import { getWindowSize } from '../../utils/getWindowSize';

// Renderer
export function Atractives(){
    const windowSize = getWindowSize();
    return (
        <Container device={windowSize}>
            <Image src={atractives} device={windowSize}/>
            <ImageSeparator device={windowSize}/>
            <InfoContainer device={windowSize}>
                <Title device={windowSize}>
                    Atrativos locais que irão encantar sua estadia
                </Title>
                <Separator/>
                <Description>
                    A cidade contém diversas atrações turísticas, como a Igreja do Céu, a Igreja Matriz de Nossa Senhora da Assunção, o Teatro Pedro II, a Cachoeira do Itarumã, a Cachoeira da Pirapora, a Cachoeira do Engenho Velho e a Pedra do Machado. 
                    <br/>
                    <br/>
                    Cada uma dessas atrações oferece algo único para os visitantes, desde vistas incríveis até experiências culturais emocionantes. Viçosa do Ceará é um destino turístico encantador que vale a pena visitar.
                </Description>
                <Separator/>
                <Button onClick={() => {}} size='xlarge' text='reservar minha estadia agora' type='primary'/>
            </InfoContainer>
        </Container>   
    );
}