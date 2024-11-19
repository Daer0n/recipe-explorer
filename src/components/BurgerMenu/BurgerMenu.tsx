import React, { useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToggleSwitch } from '@components/ToggleSwitch';

import { StyledLink, Container, Menu } from './styled';

interface BurgerMenuProps {
    onClose: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClose }) => {
    const navigate = useNavigate();
    const menuRef = useRef<HTMLDivElement>(null);

    const handleNavigation = (path: string) => () => {
        navigate(path);
        onClose();
    };

    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose();
            }
        },
        [onClose],
    );
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <Container>
            <Menu ref={menuRef}>
                <StyledLink onClick={handleNavigation('/')}>Home</StyledLink>
                <StyledLink onClick={handleNavigation('/favorites')}>Cooked</StyledLink>
                <ToggleSwitch />
            </Menu>
        </Container>
    );
};
