import React from 'react';

// Styles
import { GlobalStyle } from "./styles/global";
import { TopBar } from './components/TopBar';
import { NavBar } from './components/NavBar';
import { Section } from './components/Section';
import { Atractives } from './components/Atractives';
import { Amenities } from './components/Amenities';
import Description from './components/Description';
import { Advertising } from './components/Advertising';

// Assets
import atractives from './assets/atrativos.png';
import atractives2 from './assets/atrativos2.png';
import atractives3 from './assets/atrativos3.png';
import descricao from './assets/descricao.png';
import descricao2 from './assets/descricao2.png';
import { Footer } from './components/Footer';
import { Map } from './components/Map';
import { Forms } from './components/Forms';
import { InfosContainer } from './styles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TopBar/>
      <NavBar/>
      {/* Atrativos */}
      <Section>
        <Atractives
          image={atractives}
          imageSide='left'
          title='Atrativos locais que irão encantar sua estadia'
          firstParagraph='A cidade contém diversas atrações turísticas, como a Igreja do Céu, a Igreja Matriz de Nossa Senhora da Assunção, o Teatro Pedro II, a Cachoeira do Itarumã, a Cachoeira da Pirapora, a Cachoeira do Engenho Velho e a Pedra do Machado. '
          secondParagraph='Cada uma dessas atrações oferece algo único para os visitantes, desde vistas incríveis até experiências culturais emocionantes. Viçosa do Ceará é um destino turístico encantador que vale a pena visitar.'
          buttonText='reservar minha estadia agora'
          buttonOnClick={() => {}}
          buttonSize='xlarge'
        />
      </Section>
      {/* Description */}
      <Section>
        <Description
          image={descricao}
          imageSide='right'
          title='Confira nossas acomodações'
          firstParagraph='Aproveita as várias atrações turísticas, como a Igreja do Céu, a Igreja Matriz de Nossa Senhora da Assunção, o Teatro Pedro II, a Cachoeira do Itarumã, a Cachoeira da Pirapora, a Cachoeira do Engenho Velho e a Pedra do Machado. '
          secondParagraph='As igrejas possuem arquiteturas impressionantes, o teatro é um espaço cultural movimentado, enquanto as cachoeiras e a pedra atraem visitantes em busca de aventuras e vistas panorâmicas.'
          buttonText='reservar minha suíte'
          buttonOnClick={() => {}}
          buttonSize='large'
        />
      </Section>
      {/* Comodidades */}
      <Section>
        <Amenities/>
      </Section>
      {/* Propagandas */}
      <Section>
        <Advertising
          title='Serão momentos inesquecíveis'
          background_opacity
        />
      </Section>
      {/* Description */}
      <Section>
        <Description
          image={descricao2}
          imageSide='left'
          title='Descanse sua mente e corpo com beleza e conforto'
          firstParagraph='Aproveite nossas acomodações confortáveis e explore as maravilhas da cidade, incluindo a Igreja do Céu, a Cachoeira da Pirapora, o Teatro Pedro II e muito mais. '
          secondParagraph='Deixe-nos cuidar de sua estadia enquanto você desfruta de arquiteturas impressionantes, experiências culturais emocionantes e vistas deslumbrantes. Venha descobrir a beleza e aventura que Viçosa do Ceará tem para oferecer!'
          buttonText='descansar com conforto'
          buttonOnClick={() => {}}
          buttonSize='xlarge'
        />
      </Section>
      {/* Atrativos */}
      <Section>
        <Atractives
          image={atractives2}
          imageSide='left'
          title='Vistas e paisagens de tirar o fôlego'
          firstParagraph='Uma das principais atrações é a Pedra do Itagurussu, com sua beleza natural e vistas espetaculares. A Bica do Itacaranha é outra parada imperdível, com suas águas cristalinas e refrescantes, perfeitas para um mergulho em um dia quente. '
          secondParagraph='A Lagoa Pedro II é um local pitoresco e tranquilo, ideal para relaxar e desfrutar de uma tarde ensolarada.'
          buttonText='conhecer esses paraísos particulares'
          buttonOnClick={() => {}}
          buttonSize='xxlarge'
        />
      </Section>
      {/* Atrativos */}
      <Section>
        <Atractives
          image={atractives3}
          imageSide='right'
          title='Licor, doces, igrejas e muito mais'
          firstParagraph='Para quem gosta de explorar a cultura local, a Praça Clóvis Beviláqua é um ótimo lugar para começar, com seus monumentos históricos e ambiente agradável. A Igreja São Francisco é outra atração interessante, com sua arquitetura impressionante e atmosfera serena.'
          secondParagraph='A Casa dos Licores é uma visita obrigatória, para quem deseja experimentar o sabor autêntico dos licores regionais. Por fim, a Rampa do Voo Livre é um lugar emocionante para os amantes de aventura, com a possibilidade de apreciar uma vista panorâmica única da cidade.'
          buttonText='garantir meu refúgio nas férias'
          buttonOnClick={() => {}}
          buttonSize='xxlarge'
        />
      </Section>
      <Section>
        <InfosContainer>
          <Map/>
          <Forms/>
        </InfosContainer>
      </Section>
      {/* Footer */}
      <Advertising
        title='dias cheios de aventuras e emoções que ficarão na sua memória'
        children={
          <Footer/>
        }
      />
    </div>
  );
}

export default App;
