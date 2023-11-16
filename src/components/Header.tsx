import React from 'react';
import { useTheme } from '../Utils/contexts';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export function Header() {
    const { toggleTheme } = useTheme();

    return (
        <NavContainer>
            <button onClick={toggleTheme}>Change theme</button>
            <Link to="/">Characters</Link>
            <Link to="/inventory">Inventory</Link>
        </NavContainer>
    );
}
