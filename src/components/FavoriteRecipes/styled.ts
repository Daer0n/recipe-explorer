import styled from 'styled-components';
import { COLORS } from '@constants';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.div`
    width: 80%;
`;

export const Content = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 40px;
    margin-top: 100px;

    @media (max-width: 1024px) {
        margin-top: 80px;
    }

    & > :only-child {
        grid-column: 1 / -1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const EmptyContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${COLORS.black};
    gap: 40px;
`;
