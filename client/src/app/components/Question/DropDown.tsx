import langMap from '@/constants/languages';
import { useState, useRef, useEffect } from 'react';

const Dropdown = ({ selectedItem, setSelectedItem,code,setCode }: { selectedItem: string, setSelectedItem: React.Dispatch<React.SetStateAction<string>>,code:any,setCode:any }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {

      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', closeDropdown);
    } else {
      document.removeEventListener('click', closeDropdown);
    }

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, [isOpen]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setCode({...code,[selectedItem]:code[selectedItem]});
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleDropdown}
      >
        {selectedItem}
      </button>

      {isOpen && (
        <div className='absolute z-10 w-48 bg-white border rounded-md shadow-lg'>
          {Object.keys(langMap).map(lang => (
            <button className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white w-full" onClick={() => handleItemClick(lang)} key={lang}>{lang}</button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
