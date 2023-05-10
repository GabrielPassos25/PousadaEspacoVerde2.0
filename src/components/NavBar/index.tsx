// Libs
import React from 'react';
import { Link } from 'react-scroll';

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
                                <Link to={module.title} smooth={true} duration={800} key={index} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <SectionButton>
                                        {module.title}
                                    </SectionButton>
                                </Link>
                            );
                        })
                    }
                    <Button size='small' text='reservar' onClick={() => {}} type='primary' redirect/>
                </SectionsContainer>
                :
                <Menu/>
            }
        </Container>
    );
}