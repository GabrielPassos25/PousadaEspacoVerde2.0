import { Container,Information,Title, Phrase } from "./style";

import { getWindowSize } from '../../utils/getWindowSize';
import { Button } from "../Button";

import foto from '../../assets/Foto.png'

const Description = () =>{
    const windowSize = getWindowSize();
    return(
        <Container device={windowSize}>
            <Information  device={windowSize}>
                <Title device={windowSize}>
                    Confira nossas acomodações
                </Title>
                <Phrase>
                    Aproveita as várias atrações turísticas, como a Igreja do Céu, a Igreja Matriz de Nossa Senhora da Assunção, o Teatro Pedro II, a Cachoeira do Itarumã, a Cachoeira da Pirapora, a Cachoeira do Engenho Velho e a Pedra do Machado.
                    <br/>
                    <br/>
                    As igrejas possuem arquiteturas impressionantes, o teatro é um espaço cultural movimentado, enquanto as cachoeiras e a pedra atraem visitantes em busca de aventuras e vistas panorâmicas.
                </Phrase>
                <Button type="secondary" text="Reservar minha suíte" onClick={()=>console.log("Clicou")} size={windowSize === 'mobile'? 'xlarge':'large'} />
            </Information >
            <img src={foto} alt="foto" style={{flex:1}}/>
        </Container>
    )
}

export default Description;