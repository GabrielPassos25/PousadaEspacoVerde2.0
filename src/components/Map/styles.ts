import styled from 'styled-components';
import { secondaryHeaderSemiBold } from '../../styles/global';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const Title = styled.p`
    ${secondaryHeaderSemiBold}
    color: var(--green)
`;