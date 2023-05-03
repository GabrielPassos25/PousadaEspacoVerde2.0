import styled from 'styled-components';

export const Container = styled.div<{device: string}>`
    padding: ${({device}) => device === 'desktop' ? '100px 0px' : '60px 0'};
`;