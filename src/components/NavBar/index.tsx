// Libs
import React from 'react';

// Styles
import { Container, SectionsContainer, SectionButton } from './styles';

// Hooks
import { getWindowSize } from '../../utils/getWindowSize';

// Assets
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Menu } from '../../assets/menu.svg';
import { Button } from '../Button';
import { modules } from '../../utils/modules';

// Renderer
export function NavBar(){
    const windowSize = getWindowSize();
    return (
        <Container device={windowSize}>
            <Logo/>
            {
                windowSize !== 'mobile' ?
                <SectionsContainer>
                    {
                        modules.map((module, index) => {
                            return (
                                <SectionButton>
                                    {module.title}
                                </SectionButton>
                            );
                        })
                    }
                    <Button size='small' text='reservar' onClick={() => {}} type='primary'/>
                </SectionsContainer>
                :
                <Menu/>
            }
        </Container>
    );
}