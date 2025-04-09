import React from 'react';
import { ChevronsRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <ChevronsRight size={16} className="text-gray-400 mx-1" />
            )}
            <a
              href={index === items.length - 1 ? undefined : item.href}
              className={`inline-flex items-center text-sm ${index === items.length - 1
                ? 'text-gray-600 hover:text-gray-800'
                : 'text-blue-500 underline'
                }`}
              aria-current={index === items.length - 1 ? 'page' : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;