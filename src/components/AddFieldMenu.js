
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Search, Plus } from 'lucide-react';

const fieldOptions = [
    { name: 'Text field', value: 'text' },
    { name: 'Button', value: 'button' },
    { name: 'Dropdown', value: 'dropdown' },
    { name: 'Radio button', value: 'radio' },
    { name: 'Checkbox', value: 'checkbox' },
    { name: 'Switch option', value: 'switch' },
];

const AddFieldMenu = ({ onAddField }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const menuRef = useRef();
    const btnRef = useRef();

    const handleClickOutside = useCallback((event) => {
        const isButtonClicked = btnRef.current?.contains(event.target);
        const isMenuClicked = menuRef.current?.contains(event.target);

        // Close menu only if:
        // 1. The button wasn't clicked (to allow toggle behavior)
        // 2. The menu is currently open
        // 3. The click was outside the menu
        if (!isButtonClicked && isOpen && !isMenuClicked) {
            setIsOpen(false);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;


        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const filteredOptions = fieldOptions.filter(option =>
        option.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="relative">
            <button
                ref={btnRef}
                onClick={toggleMenu}
                className="w-48 border border-dashed border-blue-400 text-blue-500 p-3 rounded flex items-center justify-center hover:bg-blue-50"
            >
                <Plus size={18} className="mr-2" />
                Add New Field
            </button>

            {isOpen && (
                <div ref={menuRef} className="relative top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded shadow-lg z-10">
                    <div className="p-2 border-b border-gray-200">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full p-2 pl-8 border border-gray-300 rounded"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Search className="absolute left-2 top-2.5 text-gray-400" size={18} />
                        </div>
                    </div>
                    <div className="max-h-60 overflow-y-auto">
                        {filteredOptions.map((option) => (
                            <div
                                key={option.value}
                                className="p-3 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    onAddField(option.value);
                                    setIsOpen(false);
                                }}
                            >
                                {option.name}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddFieldMenu;
