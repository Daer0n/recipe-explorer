import styled from 'styled-components';
import { COLORS } from '@constants';

export const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
`;

export const Content = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 40px;
    margin-top: 100px;
    justify-items: center;

    @media (max-width: 1024px) {
        margin-top: 80px;
    }

    & > :only-child {
        grid-column: 1 / -1;
        display: flex;

        align-items: center;
        flex-direction: column;
    }
`;
