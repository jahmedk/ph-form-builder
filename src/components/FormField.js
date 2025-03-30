
import React from 'react';
import { MoreVertical } from 'lucide-react';

const FormField = ({ label, type = "text", showLabel = true, placeholder }) => {
  return (
    <div className="mb-5">
      {showLabel && (
        <label className="block mb-2">{label}</label>
      )}
      <div className="flex">
        <input
          type={type}
          placeholder={placeholder}
          className="form-field w-full p-2 border border-gray-300 rounded"
        />
        <button className="ml-2 p-2 text-gray-500 hover:bg-gray-100 rounded">
          <MoreVertical size={20} />
        </button>
      </div>
    </div>
  );
};

export default FormField;
