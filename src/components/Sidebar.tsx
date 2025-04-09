import React, { useState } from 'react';
import { File, Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

interface SidebarLinkProps {
    title: string;
    active?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ title, active }) => {
    return (
        <a href={'#'} className={`flex items-center my-2 p-1 pl-6 relative ${active ? 'bg-gray-800 text-white before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:h-full before:bg-white' : 'hover:bg-gray-800'}`}>
            <span>{title}</span>
        </a>
    );
};

const Sidebar: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const { t } = useTranslation();

    const toggleSidebar = (): void => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Sidebar */}
            <div
                className={`sidebar w-[220px] flex flex-col fixed md:relative h-screen md:h-auto bg-gray-900 text-white transition-all duration-300 z-40
                    ${isSidebarOpen ? 'left-0' : '-left-[220px]'} 
                    md:left-0`}
            >
                {/* Hamburger button for mobile */}
                <div className='md:hidden block z-50 absolute top-0 -right-[37px] '>
                    <button
                        className="p-2 rounded-md bg-sidebar transition-colors"
                        onClick={toggleSidebar}
                    >
                        {isSidebarOpen ?
                            <X className="font-black" />
                            :
                            <Menu className="font-black" />
                        }
                    </button>
                </div>
                <div className="p-6 flex items-center">
                    <File className="text-blue-400 mr-2" />
                    <h1 className="text-xl font-semibold">Form Builder</h1>
                </div>

                <nav className="ml-2">
                    <SidebarLink active title={t("sidebar.myForms")} />
                    <SidebarLink title={t("sidebar.analytics")} />
                    <SidebarLink title={t("sidebar.knowledgeBase")} />
                    <SidebarLink title={t("sidebar.helpSupport")} />
                </nav>

                <div className="mt-8">
                    <SidebarLink title={t("sidebar.myProfile")} />
                    <LanguageSelector />
                    <div className="text-gray-400 text-sm pl-8 mt-1">{t("sidebar.logout")}</div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;