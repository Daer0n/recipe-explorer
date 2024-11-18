import styled from 'styled-components';
import { COLORS } from '@constants';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
`;

export const Content = styled.div`
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    gap: 45px;
    font-family: 'Inter';
`;

export const StatusCode = styled.div`
    color: ${COLORS.orange};
    font-size: 122px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Title = styled.div`
    color: ${COLORS.black};
    font-size: 46px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;

export const Description = styled.div`
    color: ${COLORS.grey};
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const Button = styled.button`
    background-color: ${COLORS.green};
    font-family: 'Inter';
    color: ${COLORS.white};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 24px;
    box-shadow: 0px 8px 16px 0px rgba(0, 128, 85, 0.16);
    width: 226px;
    height: 48px;
    cursor: pointer;
    outline: none;

    &:hover {
        transform: scale(1.05);
    }
`;
