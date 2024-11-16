import styled from 'styled-components';
import { COLORS } from '@constants';

export const Container = styled.div`
    width: 100%;
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
`;

export const Button = styled.button`
    outline: none;
    background: transparent;
    border: none;
    position: absolute;
    top: 52%;
    right: 400px;
    transform: translateY(-50%);
    cursor: pointer;
`;

export const ErrorMessage = styled.div`
    margin-top: 10px;
    color: ${COLORS.red};
    font-size: 24px;
    font-family: Inter;
`;
