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
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 0;
    align-items: center;
`; 

export const Title = styled.div<{device: string}>`
    ${({device}) => device === 'desktop' ? 
        `
            ${secondaryHeader}
        `
        : 
        `
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