// Libs
import React from 'react';
import { Container, Content } from './styles';
import { Button } from '../Button';

// Props
interface Props {
    image: string;
    onClose: () => void;
}


// Renderer
export function Modal({ image, onClose }: Props){
    return (
      <Container>
        <Content>
          <img src={image} alt="" style={{width: '100%', height: '100%', marginBottom: 10}}/>
          <Button
            onClick={onClose}
            text='fechar'
            size='small'
            type='primary'
          />
        </Content>
    </Container>
    );
}