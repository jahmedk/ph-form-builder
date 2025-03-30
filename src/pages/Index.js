import React from 'react';
import Sidebar from '../components/Sidebar';
import FormBuilder from '../components/FormBuilder';

const Index = () => {
    return (
        <div className="flex min-h-screen w-full">
            <Sidebar />
            <FormBuilder />
        </div>
    );
};

export default Index;