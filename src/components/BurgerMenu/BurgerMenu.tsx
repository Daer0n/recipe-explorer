import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToggleSwitch } from '@components/ToggleSwitch';

import { StyledLink, Container, Menu } from './styled';

interface BurgerMenuProps {
    onClose: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClose }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const activeLink = location.pathname;

    const handleNavigation = (path: string) => () => {
        navigate(path);
        onClose();
    };

    return (
        <Container>
            <Menu>
                <StyledLink onClick={handleNavigation('/')} isActive={activeLink === '/'}>
                    Home
                </StyledLink>

                <StyledLink
                    onClick={handleNavigation('/favorites')}
                    isActive={activeLink === '/favorites'}
                >
                    Cooked
                </StyledLink>

                <ToggleSwitch />
            </Menu>
        </Container>
    );
};
