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
