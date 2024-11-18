import styled from 'styled-components';
import { COLORS } from '@constants';

export const Container = styled.div`
    width: 330px;
    height: 435px;
    border-radius: 20px;
    background-color: rgba(204, 204, 204, 0.5);
    gap: 20px;
    position: relative;

    @media (max-width: 425px) {
        height: 370px;
    }
`;

export const RecipeImage = styled.img`
    width: 100%;
    height: 320px;

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
    color: ${({ theme }) => theme.background};
    margin-top: 15px;

    @media (max-width: 425px) {
        font-size: 18px;
        width: 60%;
        margin: 0;
    }
`;

export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 10px;
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media (max-width: 425px) {
        bottom: 1px;
    }
`;

export const InfoContainer = styled.div`
    @media (max-width: 425px) {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }
`;
