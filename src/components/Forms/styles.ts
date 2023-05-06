import styled from 'styled-components';
import { secondaryHeaderSemiBold } from '../../styles/global';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.p`
    ${secondaryHeaderSemiBold}
    color: var(--green)
`;

export const Separator = styled.div`
    height: 12px;
`;