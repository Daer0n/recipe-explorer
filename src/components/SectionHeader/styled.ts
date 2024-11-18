import styled from 'styled-components';
import { COLORS } from '@constants';

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-top: 150px;

    @media (max-width: 1024px) {
        margin-top: 120px;
    }

    @media (max-width: 860px) {
        margin-top: 80px;
    }
`;

export const Title = styled.div`
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${COLORS.black};

    @media (max-width: 1440px) {
        font-size: 30px;
    }

    @media (max-width: 1024px) {
        font-size: 25px;
    }

    @media (max-width: 860px) {
        font-size: 20px;
    }
`;

export const Line = styled.div`
    width: 2px;
    height: 44px;
    background-color: ${COLORS.yellow};
    margin-right: 15px;

    @media (max-width: 1024px) {
        height: 35px;
    }

    @media (max-width: 860px) {
        height: 30px;
    }
`;
