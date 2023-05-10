// Libs
import React from 'react';
import { Container, Title, Separator } from './styles';
import { Input } from '../Input';
import emailjs from 'emailjs-com';

// Assets
import { ReactComponent as Person } from '../../assets/person.svg';
import { ReactComponent as Mail } from '../../assets/mail.svg';
import { ReactComponent as WhatsappForms } from '../../assets/whatsappForms.svg';
import { ReactComponent as Message } from '../../assets/message.svg';
import { Button } from '../Button';
import { Contact } from '../Contact';
import { getWindowSize } from '../../utils/getWindowSize';

// Renderer
export function Forms(){
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [whatsapp, setWhatsapp] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [isSending, setIsSending] = React.useState(false);
    const windowSize = getWindowSize();

    const handleSubmit = () => {
        // event.preventDefault();
        setIsSending(true);
        const templateParams = {
            nome: name,
            email: email,
            telefone: whatsapp,
            message: message,
            to_email: 'gabrielurano30@gmail.com'
        };
    
        emailjs.send('service_xex35el', 'template_fzmjjnu', templateParams, 'KeQ-RwcqpLdJUe73R')
        .then((response) => {
            alert('Mensagem enviada com sucesso!');
        }, (error) => {
            alert('Ocorreu um erro ao enviar a mensagem, tente novamente mais tarde.');
        });
        setTimeout(() => {
            setIsSending(false);
        }, 4000);
      };

    return (
        <Container>
            <Title device={windowSize}>
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
                onClick={handleSubmit}
                fullWidth
                loading={isSending}
            />
            <Separator/>
            <Contact/>
        </Container>
    );
}