import React from "react";
import { Container, ImageContainer,Texto, InfoContainer, Image } from "./style";
import { Button } from "../Button";

import { getWindowSize } from '../../utils/getWindowSize';

import quarto1 from "../../assets/quarto1.png";
import quarto2 from "../../assets/quarto2.png";
import quarto3 from "../../assets/quarto3.png";
import quarto4 from "../../assets/quarto4.png";
import quarto5 from "../../assets/quarto5.png";
import quarto6 from "../../assets/quarto6.png";
import quarto7 from "../../assets/quarto7.png";
import quarto8 from "../../assets/quarto8.png";

const images1 = [
    quarto1,
    quarto2,
    quarto3,
    quarto4,
];

const images2 = [
    quarto5,
    quarto6,
    quarto7,
    quarto8,
];

const ImagesSection = () =>{
    const windowSize = getWindowSize();
    return(
        <Container>
            <InfoContainer>
                <Texto>@espacoverdevicosa</Texto>
                <Button type="tertiary"  text="seguir" onClick={() => console.log("Clicou")} size="xsmall" transparent />
            </InfoContainer>
            <ImageContainer>
                {
                    images1.map((image, index) => {
                        return(
                            windowSize === 'mobile' && index == 3?
                            null 
                            :<Image device={windowSize} src={image} />
                        )
                    })
                    
                }
            </ImageContainer>
            <ImageContainer>
                {
                    images2.map((image, index) => {
                        return(
                            windowSize === 'mobile' && index == 3?
                            null 
                            :<Image device={windowSize} src={image} />
                        )
                    })
                    
                }
            </ImageContainer>
        </Container>
    );
}

export default ImagesSection;