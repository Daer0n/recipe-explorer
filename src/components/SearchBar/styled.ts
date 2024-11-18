import styled from 'styled-components';
import { COLORS } from '@constants';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 150px;
`;

export const Wrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    font-family: Inter;
    font-size: 76px;
    font-style: normal;
    font-weight: 400;
    line-height: 98px;
    color: ${COLORS.blueDark};
    white-space: nowrap;
`;

export const SearchItemContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-top: 45px;
`;

export const Item = styled.div`
    width: 40%;
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
