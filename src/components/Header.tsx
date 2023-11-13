import React from 'react';
import { useTheme } from '../Utils/contexts';
import { Link } from 'react-router-dom';

export function Header() {
    const { toggleTheme } = useTheme();

    return (
        <div>
            <button onClick={toggleTheme}>Change theme</button>
            <Link to="/">Characters</Link>
            <Link to="/inventory">Inventory</Link>
        </div>
    );
}
