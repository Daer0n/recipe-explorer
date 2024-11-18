import styled from 'styled-components';
import { COLORS } from '@constants';

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-top: 150px;
`;

export const Title = styled.div`
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${COLORS.black};
`;

export const Line = styled.div`
    width: 2px;
    height: 44px;
    background-color: ${COLORS.yellow};
    margin-right: 15px;
`;
