import styled from 'styled-components';
import { terciaryText } from '../../styles/global';

export const Container = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

export const ImageContainer = styled.div`
    display:flex;
    width:100%;
    flex:1;
    flex-wrap:wrap;
`;

export const Texto = styled.text`
    ${terciaryText};
    color: var(--dark-green);
`;

export const InfoContainer = styled.div`
    display:flex;
    flex-direction:row;
    column-gap:16px;
    margin-bottom:34px;
`

export const Image = styled.img<{device:string}>`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: ${({device}) => device === 'desktop' ? '333px' : device === 'tablet' ? '250px' : '118px'};
    flex:1;
`