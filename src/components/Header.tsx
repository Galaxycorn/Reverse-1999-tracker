import React from 'react';
import { useTheme } from '../Utils/contexts';

export function Header() {
    const { toggleTheme } = useTheme();

    return (
        <div>
            <button onClick={toggleTheme}>Change theme</button>
        </div>
    );
}
