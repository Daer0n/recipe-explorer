import styled from 'styled-components';
import { COLORS } from '@constants';

export const Container = styled.div`
    width: 100%;
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    cursor: pointer;
    outline: none;
    border-radius: 28px;
    border: none;
    border-bottom: 1px solid ${COLORS.golden};
    font-family: Roboto, sans-serif;
    padding: 8px;
    box-sizing: border-box;
    font-size: 16px;
    color: ${COLORS.greyDark};
`;

export const Caret = styled.div<{ $dropped: boolean }>`
    position: absolute;
    top: 4px;
    right: 4px;
    width: 24px;
    height: 24px;
    cursor: pointer;
    transform: rotate(${(props) => (props.$dropped ? '0' : '180deg')});
    transition: transform 0.3s;
`;

export const OptionsBlock = styled.ul`
    box-sizing: border-box;

    margin-top: 20px;
    list-style: none;
    overflow-y: scroll;
    width: 100%;
    height: 188px;
    border: 1px solid ${COLORS.golden};
    border-radius: 20px;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &:-webkit-scrollbar {
        display: none;
    }
`;

export const Option = styled.li`
    padding: 14px;
    cursor: pointer;
    font-family: Roboto;
    transition: 0.3s;

    &:hover {
        background-color: ${COLORS.grey};
    }
`;
