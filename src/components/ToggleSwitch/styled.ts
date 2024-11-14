import styled from 'styled-components';
import { COLORS } from '@constants';

export const StyledLabel = styled.label<{ checked: boolean }>`
    cursor: pointer;
    text-indent: -9999px;
    width: 100px;
    height: 50px;
    background: ${({ checked }) => (checked ? COLORS.white : COLORS.black)};
    display: block;
    border-radius: 100px;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        left: ${({ checked }) => (checked ? '14px' : 'calc(55% - 5px)')};
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        background: ${({ checked }) => (checked ? COLORS.orange : COLORS.blue)};
        border-radius: 90px;
        transition:
            left 0.3s,
            background 0.3s;
    }
`;
