// Libs
import React from 'react';
import { Container, Title, Separator } from './styles';
import { Input } from '../Input';

// Assets
import { ReactComponent as Person } from '../../assets/person.svg';
import { ReactComponent as Mail } from '../../assets/mail.svg';
import { ReactComponent as WhatsappForms } from '../../assets/whatsappForms.svg';
import { ReactComponent as Message } from '../../assets/message.svg';
import { Button } from '../Button';
import { Contact } from '../Contact';

// Renderer
export function Forms(){
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [whatsapp, setWhatsapp] = React.useState('');
    const [message, setMessage] = React.useState('');

    return (
        <Container>
            <Title>
                Entre em contato conosco
            </Title>
            <Input
                placeholder="Nome"
                image={<Person/>}
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <Input
                placeholder="Email"
                image={<Mail/>}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <Input
                placeholder="Whatsapp"
                image={<WhatsappForms/>}
                value={whatsapp}
                onChange={(event) => setWhatsapp(event.target.value)}
            />
            <Input
                placeholder="Mensagem"
                image={<Message/>}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                multiline
            />
            <Separator/>
            <Button
                text='enviar'
                size='small'
                type='primary'
                onClick={() => {}}
                fullWidth
            />
            <Separator/>
            <Contact/>
        </Container>
    );
}