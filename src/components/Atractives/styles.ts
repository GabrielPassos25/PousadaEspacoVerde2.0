import styled from 'styled-components';
import { secondaryHeader, terciaryHeader } from '../../styles/global';
import { secondaryText } from '../../styles/global';

export const Container = styled.div<{device: string}>`
    padding: 64px 120px;
    display: flex;
    padding: ${({device}) => device === 'desktop' ? '64px 120px' : device === 'tablet' ? '60px 40px' : '20px 20px'};
    flex-direction: ${({device}) => device !== 'mobile' ? 'row' : 'column'};
    align-items: center;
`;

export const Image = styled.img<{device: string}>`
    ${({device}) => `
        width: ${device === 'desktop' ? '560px' : '330px'};
        height: ${device === 'desktop' ? '560px' : '392px'};
    `}
    border-radius: 5%;
    object-fit: cover;
    box-shadow: 2px 4px 32px rgba(0, 0, 0, 0.15);;
`;

export const InfoContainer = styled.div<{device: string}>`
    display: flex;
    flex-direction: column;
    padding: 24px 0;
    ${({device}) => device === 'mobile' && `align-items: center; justify-content: center;`};
`; 

export const Title = styled.div<{device: string}>`
    ${({device}) => device === 'desktop'  ? 
        `
            ${secondaryHeader}
            `
        : device === 'tablet' ?
        `
            ${terciaryHeader}
        `
        : `
            ${terciaryHeader}
            text-align: center
        `
    };
`; 

export const Description = styled.div`
    ${secondaryText}
    text-align: justify;
    padding: 24px 0;
`;

export const Separator = styled.div`
    height: 24px;
`;

export const ImageSeparator = styled.div<{device: string}>`
    width: ${({device}) => device === 'desktop' ? '80px' : '40px'};
`;