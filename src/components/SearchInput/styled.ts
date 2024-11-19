import styled from 'styled-components';
import { COLORS } from '@constants';

export const Container = styled.div`
    width: 100%;
    position: relative;
`;

interface InputProps {
    hasError?: boolean;
}

export const Input = styled.input<InputProps>`
    width: 100%;
    box-sizing: border-box;
    border: 1px solid ${({ hasError }) => (hasError ? COLORS.red : COLORS.golden)};
    border-radius: 50px;
    padding: 12px 48px 12px 16px;
    margin-top: 65px;
    font-size: 24px;
    font-family: Inter;
    outline: none;
    color: ${COLORS.golden};

    @media (max-width: 860px) {
        font-size: 16px;
        padding: 12px 32px 12px 12px;
    }
`;

export const Button = styled.button`
    outline: none;
    background: transparent;
    border: none;
    position: absolute;
    top: 80%;
    right: 16px;
    transform: translateY(-50%);
    cursor: pointer;

    @media (max-width: 860px) {
        right: 8px;
    }
`;

export const ErrorMessage = styled.div`
    margin-top: 10px;
    color: ${COLORS.red};
    font-size: 24px;
    font-family: Inter;
`;
