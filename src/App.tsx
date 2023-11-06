import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CharactersPage } from './pages/CharactersPage';
import { ThemeProvider } from './Utils/contexts';
import { Header } from './components/Header';
import GlobalStyle from './Utils/styles/GlobalStyle';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <ThemeProvider>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path="/" element={<CharactersPage />} />
                </Routes>
            </ThemeProvider>
        </Router>
    );
}

export default App;
