import styled from 'styled-components';
import { COLORS } from '@constants';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 150px;

    @media (max-width: 860px) {
        margin-top: 50px;
    }
`;

export const Wrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1440px) {
        width: 80%;
    }
`;

export const Title = styled.div`
    font-family: Inter;
    font-size: 76px;
    font-style: normal;
    font-weight: 400;
    line-height: 98px;
    color: ${COLORS.blueDark};
    white-space: nowrap;

    @media (max-width: 1440px) {
        font-size: 66px;
        line-height: 68px;
    }

    @media (max-width: 1024px) {
        font-size: 56px;
        line-height: 68px;
    }

    @media (max-width: 860px) {
        display: none;
    }
`;

export const SearchItemContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-top: 45px;

    @media (max-width: 860px) {
        width: 100%;
        flex-direction: column;
        gap: 30px;
    }
`;

export const Item = styled.div`
    width: 40%;
    min-height: 55px;

    @media (max-width: 1024px) {
        width: 45%;
    }

    @media (max-width: 860px) {
        width: 100%;
    }
`;

export const ShowMoreButton = styled.button`
    width: 250px;
    height: 50px;
    filter: drop-shadow(0px 4px 10px rgba(104, 109, 224, 0.5));
    background-color: ${({ theme }) => theme.background};
    border-radius: 50px;
    color: ${COLORS.white};
    cursor: pointer;
    margin-top: 40px;
    outline: none;
    border: none;
    font-family: Roboto;
    font-size: 16px;
`;

export const EmptyResponse = styled.div`
    font-family: Inter;
    font-size: 46px;
    font-style: normal;
    font-weight: 400;
    line-height: 98px;
    color: ${COLORS.blueDark};

    @media (max-width: 860px) {
        font-size: 26px;
    }

    @media (max-width: 425px) {
        font-size: 20px;
    }
`;
