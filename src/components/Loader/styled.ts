import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const StyledLoader = styled.div`
    margin-top: 100px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 6px dashed ${({ theme }) => theme.background};
    animation: ${rotate} 2s infinite linear;
`;
