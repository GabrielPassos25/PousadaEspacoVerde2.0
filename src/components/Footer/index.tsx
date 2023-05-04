// Libs
import React from 'react';
import { Container, FirstLine, SocialMediasContainer, SectionButton, ModulesContainer, SecondLine, Infos, Title, Description, Separator } from './styles';
import { SocialMedias } from '../SocialMedias';
import { Button } from '../Button';
import { modules } from '../../utils/modules';

import { ReactComponent as WhiteLogo } from '../../assets/whiteLogo.svg';
import { getWindowSize } from '../../utils/getWindowSize';

// Renderer
export function Footer(){
    const windowSize = getWindowSize();
    return (
        <Container device={windowSize}>
            {
                windowSize !== 'mobile' ?
                <>
                    <FirstLine>
                        <SocialMediasContainer>
                            <SocialMedias image='whatsappFooter'/>
                            <SocialMedias image='instagramFooter'/>
                            <SocialMedias image='facebookFooter'/>
                        </SocialMediasContainer>
                        <ModulesContainer>
                            {
                                modules.map((module, index) => {
                                    return (
                                        <SectionButton>
                                                {module.title}
                                            </SectionButton>
                                        );
                                    })
                                }
                        </ModulesContainer>
                        <Button onClick={()=>{}} size='large' text='reservar agora' type='tertiary'/>
                    </FirstLine>
                    <SecondLine>
                        <WhiteLogo/>
                        <Infos>
                            <Title>
                                © Pousada Espaço Verde 2023
                            </Title>
                            <Description>
                                Rua Silva Jardim, números 644, 648, 656 e 660
                            </Description>
                            <Description>
                                Viçosa do Ceará - Ceará
                            </Description>
                        </Infos>
                    </SecondLine>
                </>
                :
                <>
                    <FirstLine device={windowSize}>
                        <WhiteLogo/>
                    </FirstLine>
                    <SecondLine device={windowSize}>
                        <SocialMediasContainer>
                            <SocialMedias image='whatsappFooter'/>
                            <SocialMedias image='instagramFooter'/>
                            <SocialMedias image='facebookFooter'/>
                        </SocialMediasContainer>
                        <Separator/>
                        <ModulesContainer device={windowSize}>
                            {
                                modules.map((module, index) => {
                                    return (
                                        <SectionButton>
                                                {module.title}
                                            </SectionButton>
                                        );
                                    })
                                }
                        </ModulesContainer>
                        <Separator/>
                        <Button onClick={()=>{}} size='large' text='reservar agora' type='tertiary'/>
                        <Separator/>
                        <Infos device={windowSize}>
                            <Title>
                                © Pousada Espaço Verde 2023
                            </Title>
                            <Description>
                                Rua Silva Jardim, números 644, 648, 656 e 660
                            </Description>
                            <Description>
                                Viçosa do Ceará - Ceará
                            </Description>
                        </Infos>
                    </SecondLine>
                </>
            }
        </Container>
    );
}