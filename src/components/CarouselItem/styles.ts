import styled from 'styled-components';
import { primaryHeader, primaryText } from '../../styles/global';

export const Container = styled.div<{src: string, device: string}>`
    min-height: 615px;
    background-image: ${({src}) => `url(${src})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    padding: ${({device}) => device === 'desktop' ? '32px 80px' : device === 'tablet' ? '28px 40px' : '28px 20px'};
    `;
    
    export const Title = styled.p`
    ${primaryHeader}
    color: var(--gray)
`;

export const Description = styled.p`
    ${primaryText}
    color: var(--gray)
`;