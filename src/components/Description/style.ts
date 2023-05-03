import styled from 'styled-components';
import foto from '../../assets/Foto.png'

export const Container = styled.div<{device: string}>`
    display: flex;
    ${({device}) => device === 'desktop' ? 
        { 
            flexDirection:'row',
            height: 532,
        }   
        : device === 'tablet' ?
        {
            flexDirection:'row',
            height: 546,
        }
        :
        {
            flexDirection:'column',
            height: 1092,
        }
    }
    padding: ${({device}) => device === 'desktop' ? '64px 0' : device === 'tablet' ? '60px 0' : '20xp 0'};
`;

export const Information = styled.div<{device: string}>`
    display: flex;
    flex-direction:column;
    padding: ${({device}) => device === 'desktop' ? '93px 20px 93px 120px' : device === 'tablet' ? '40px 20px 40px 40px' : '40px 20px 40px 20px'};
    flex:1;
    background: linear-gradient(0deg, rgba(34, 80, 25, 0.8), rgba(34, 80, 25, 0.8)), url(${foto});
    background-size:100%;
    background-repeat: no-repeat;
    align-items:flex-start;
    justify-content:center;
    background-color:red;
`;

export const Title = styled.p<{device: string}>`
    color: #fff;
    margin-bottom:24px;
    font-weight:bold;
    align-self:flex-start;
    font-size:${({device}) => device === 'desktop' ? '36px' : device === 'tablet' ? '28px' : '28px'};
`;

export const Phrase = styled.p`
    margin-bottom:40px;
    font-size:16px;
    font-weight:400px;
    color:#E8F2ED;
`;