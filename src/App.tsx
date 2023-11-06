import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { CharactersPage } from './pages/CharactersPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CharactersPage />} />
            </Routes>
        </Router>
    );
}

export default App;
