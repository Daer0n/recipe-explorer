import styled from 'styled-components';
import { COLORS } from '@constants';

export const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 250px;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
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

export const Content = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 40px;
    margin-top: 100px;
`;
