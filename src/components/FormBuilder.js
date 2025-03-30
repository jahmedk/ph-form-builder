
import React, { useState } from 'react';
import FormField from './FormField';
import AddFieldMenu from './AddFieldMenu';
import ColorPicker from './ColorPicker';
import Breadcrumb from './Breadcrumb';
import { ChevronDown } from 'lucide-react';

const FormBuilder = () => {
    const [formTitle, setFormTitle] = useState('Untitled Form');
    const [fields, setFields] = useState([
        { id: 1, type: 'text', label: 'First Name', placeholder: 'John' },
        { id: 2, type: 'text', label: 'Last Name', placeholder: 'Doe' }
    ]);
    const [formSettings, setFormSettings] = useState({
        backgroundColor: '#ffffff',
        fontFamily: 'Roboto',
        showLabels: true
    });

    const breadcrumbItems = [
        { label: 'My Forms', href: '#' },
        { label: 'Create New Form', href: '#' }
    ];

    const colors = ['#ffffff', '#a3e635', '#fde047', '#818cf8', '#f472b6', '#000000'];

    const addField = (fieldType) => {
        const newField = {
            id: Date.now(),
            type: fieldType,
            label: `New ${fieldType.charAt(0).toUpperCase() + fieldType.slice(1)}`,
            placeholder: ''
        };
        setFields([...fields, newField]);
    };

    const handleBackgroundColorChange = (color) => {
        setFormSettings({
            ...formSettings,
            backgroundColor: color
        });
    };

    const handleFontFamilyChange = (e) => {
        setFormSettings({
            ...formSettings,
            fontFamily: e.target.value
        });
    };

    const handleLabelToggle = () => {
        setFormSettings({
            ...formSettings,
            showLabels: !formSettings.showLabels
        });
    };

    return (
        <div className="content-area flex flex-col flex-1 md:px-16 md:py-12 px-12 py-8">
            <div className="flex flex-col md:flex-row md:justify-between pb-6">
                <div className="flex flex-col">
                    <div>
                        <h1 className="text-2xl text-gray-800 font-bold">Create New Form</h1>
                    </div>
                    <div className="mt-3">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                </div>
                <div className="flex justify-center md:justify-end mt-4 md:mt-0">
                    <div>
                        <button className="primary-button px-10 py-2 rounded hover:bg-blue-700 transition-colors">
                            Publish Form
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 pb-6">
                <div className="w-full md:w-7/12">
                    <div className="bg-white p-6 rounded shadow-xl">
                        <input
                            type="text"
                            value={formTitle}
                            onChange={(e) => setFormTitle(e.target.value)}
                            className="w-full mb-6 text-xl font-medium border-b border-gray-300 pb-2 focus:outline-none focus:border-blue-500"
                        />


                        {fields.map((field) => (
                            <FormField
                                key={field.id}
                                label={field.label}
                                placeholder={field.placeholder}
                            />
                        ))}

                        <div className="mt-6">
                            <AddFieldMenu onAddField={addField} />
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-5/12">
                    <div className="bg-white p-6 rounded shadow-xl">
                        <h2 className="text-lg font-medium mb-4">Background Color</h2>
                        <ColorPicker
                            colors={colors}
                            selectedColor={formSettings.backgroundColor}
                            onChange={handleBackgroundColorChange}
                        />

                        <h2 className="text-lg font-medium mt-6 mb-4">Font Family</h2>
                        <div className="relative">
                            <select
                                value={formSettings.fontFamily}
                                onChange={handleFontFamilyChange}
                                className="w-full p-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="Roboto">Roboto</option>
                                <option value="Arial">Arial</option>
                                <option value="Helvetica">Helvetica</option>
                                <option value="Times New Roman">Times New Roman</option>
                            </select>
                            <ChevronDown
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none text-gray-500"
                                size={18}
                            />
                        </div>

                        <h2 className="text-lg font-medium mt-6 mb-4">Form Labels</h2>
                        <div className="flex items-center">
                            <button
                                className={`w-12 h-6 rounded-full mr-3 flex items-center ${formSettings.showLabels ? 'bg-green-500 justify-end' : 'bg-gray-300 justify-start'
                                    }`}
                                onClick={handleLabelToggle}
                            >
                                <div className="bg-white w-5 h-5 rounded-full shadow-md mx-0.5"></div>
                            </button>
                            <span>{formSettings.showLabels ? 'Turned ON' : 'Turned OFF'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormBuilder;
