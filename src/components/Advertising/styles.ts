import styled from 'styled-components';

import propaganda from '../../assets/propaganda.png'
import { terciaryHeader } from '../../styles/global';

export const Container = styled.div`
    background: linear-gradient(0deg, rgba(34, 80, 25, 0.4), rgba(34, 80, 25, 0.4)), url(${propaganda});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 548px;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TitleContainer = styled.div<{device: string}>`
    padding: 16px 32px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 2px 4px 32px rgba(0, 0, 0, 0.15);
    ${({device}) => device === 'mobile' && `width: 90%`}
`;

export const Title = styled.p`
    ${terciaryHeader}
    color: var(--green);
    text-transform: uppercase;
    text-align: center;
`;