import styled from 'styled-components';
import { terciaryText } from '../../styles/global';

export const Container = styled.div`
    flex: 1;
    border: 1px solid var(--green);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 16px 0px;
`;

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Text = styled.p`
    ${terciaryText}
    color: var(--green);
    text-align: center;
    margin-left: 8px;
    margin-right: 32px;
`;

export const ContainerContactRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;