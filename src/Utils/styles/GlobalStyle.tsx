import React, { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeContext } from '../contexts';

interface GlobalStyleProps {
    isDarkMode: boolean;
}

const StyledGlobalStyle = createGlobalStyle<GlobalStyleProps>`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
        background-color: ${({ isDarkMode }) => (isDarkMode ? '#2F2E41' : 'white')};
        color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
        margin: 0;
    }
`;

function GlobalStyle() {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <StyledGlobalStyle isDarkMode={theme === 'dark'} />
        </>
    );
}

export default GlobalStyle;
