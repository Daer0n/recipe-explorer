import styled from 'styled-components';
import { COLORS } from '@constants';

export const Container = styled.div`
    background-color: ${COLORS.blueDark};
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${COLORS.white};
`;

export const Wrapper = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'SpaceGrotesk';
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 10px;
`;

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 60px;
`;

export const StyledLink = styled.div<{ isActive: boolean }>`
    cursor: pointer;
    margin-right: 20px; /* Отступ между ссылками */
    border-bottom: ${({ isActive }) => (isActive ? '2px solid white' : 'none')};
    transition: border-bottom 0.3s;

    &:hover {
        transform: translateY(-2px); /* Поднимаем текст вверх */
    }
`;
