import React from 'react';

interface ColorPickerProps {
  colors: string[];
  selectedColor: string;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ colors, selectedColor, onChange }) => {
  return (
    <div className="flex flex-wrap gap-4 mt-2">
      {colors.map((color) => (
        <button
          key={color}
          className={`w-4 h-4 rounded-full flex items-center justify-center border border-black ${
            selectedColor === color ? 'ring-2 ring-offset-2 ring-black' : ''
          }`}
          style={{ backgroundColor: color }}
          onClick={() => onChange(color)}
        >
        </button>
      ))}
    </div>
  );
};

export default ColorPicker;