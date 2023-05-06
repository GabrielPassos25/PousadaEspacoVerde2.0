import styled from 'styled-components';

export const InfosContainer = styled.div<{device: string}>`
    display: flex;
    flex: 1;
    ${({device}) => `
        flex-direction: ${device === 'mobile' ? 'column' : 'row'};
        padding: ${device === 'desktop'? '64px 120px' : device === 'tablet' ? '40px 60px' : '20px 20px'};
        align-items: ${device === 'mobile' ? 'center' : null};

    `}
    justify-content:center;
`;