import React from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Language {
    code: string;
    label: string;
    flag: string;
}

const languages: Language[] = [
    { code: 'de', label: 'German', flag: 'de' },
    { code: 'en', label: 'English', flag: 'us' }
];

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();
    const selected = languages.find((lang) => lang.code === i18n.language) || languages[0];

    const handleChange = (lang: Language): void => {
        i18n.changeLanguage(lang.code);
    };

    return (
        <div className="flex items-center my-2 p-1 pl-6 relative">
            <Listbox value={selected} onChange={handleChange}>
                <div className="relative">
                    <ListboxButton className="relative w-full cursor-pointer rounded border border-gray-300 py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none sm:text-sm">
                        <span className="flex items-center gap-2">
                            <span className={`fi fi-${selected.flag}`} title={selected.label}></span>
                            <span>{selected.label}</span>
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronDown className="h-4 w-4 text-gray-400" />
                        </span>
                    </ListboxButton>

                    <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {languages.map((lang) => (
                            <ListboxOption
                                key={lang.code}
                                value={lang}
                                className={({ active }) =>
                                    `relative cursor-pointer select-none py-2 px-4 ${active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                                    }`
                                }
                            >
                                {({ selected }) => (
                                    <div className="flex items-center gap-2">
                                        <span className={`fi fi-${lang.flag}`} title={lang.label}></span>
                                        <span>{lang.label}</span>
                                    </div>
                                )}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </Listbox>
        </div>
    );
};

export default LanguageSelector;