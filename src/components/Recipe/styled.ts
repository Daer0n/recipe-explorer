import styled from 'styled-components';
import { COLORS } from '@constants';

export const Container = styled.div`
    width: 330px;
    height: 435px;
    border-radius: 20px;
    background-color: ${COLORS.grey};
    gap: 20px;
    position: relative;
`;

export const RecipeImage = styled.img`
    width: 100%;
    min-height: 320px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const RecipeLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${COLORS.blue};
    margin-top: 15px;
`;

export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 10px;
    right: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Button = styled.div`
    cursor: pointer;
    display: flex;
`;
