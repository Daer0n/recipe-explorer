import styled from 'styled-components';

export const Container = styled.footer`
    height: 160px;
    background-color: ${({ theme }) => theme.background};
    position: relative;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 100px;
`;
