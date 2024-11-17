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
`;
