import styled from 'styled-components';
import foto from '../../assets/Foto.png'
import { secondaryHeader, secondaryText, terciaryHeader } from '../../styles/global';

export const Container = styled.div<{device: string}>`
    display: flex;
    flex-direction: ${({device}) => device !== 'mobile' ? 'row' : 'column'};
    padding: ${({device}) => device === 'desktop' ? '64px 0' : device === 'tablet' ? '60px 0' : '20xp 0'};
`;

export const Information = styled.div<{device: string}>`
    display: flex;
    flex-direction:column;
    flex:1;
    background: linear-gradient(0deg, rgba(34, 80, 25, 0.8), rgba(34, 80, 25, 0.8)), url(${foto});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    justify-content:center;
`;

export const Title = styled.p<{device: string}>`
    margin-bottom:24px;
    align-self:flex-start;
    font-size:${({device}) => device === 'desktop' ? '36px' : device === 'tablet' ? '28px' : '28px'};
    ${({device}) => device === 'desktop' ? secondaryHeader : terciaryHeader }
    color: var(--gray);
`;

export const Phrase = styled.p`
    margin-bottom:40px;
    ${secondaryText}
    color:#E8F2ED;
`;

export const Image = styled.div`
    display: flex;
    flex: 1;
    background-image: url(${foto});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 532px;
`;

export const InfoContainer = styled.div<{device: string}>`
    padding: ${({device}) => device === 'desktop' ? '40px 20px 40px 120px' : device === 'tablet' ? '40px 20px 40px 40px' : '40px 20px'};
`;

export const ButtonContainer = styled.div<{device: string}>`
    display: flex;
    ${({device}) => device === 'mobile' && `align-items: center; justify-content: center;`}
`;