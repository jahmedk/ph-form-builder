import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import 'flag-icons/css/flag-icons.min.css';
import './i18n/i18n';

const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
        </Routes>
    </BrowserRouter>
);

export default App;