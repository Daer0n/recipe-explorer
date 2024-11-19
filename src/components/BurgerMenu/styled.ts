import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: ${({ theme }) => theme.background};
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    right: 0;
    width: 60%;
    height: 100vh;
    z-index: 10;
    font-size: 24px;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 50px 0px 0px 50px;
    gap: 50px;
`;

export const StyledLink = styled.div`
    cursor: pointer;
    margin-right: 20px;
`;
