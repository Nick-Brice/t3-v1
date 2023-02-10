import { Sort } from '@icon-park/react';
import React, { useState } from 'react';

const SortByDropdownMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (optionValue) => {
        setSelected(optionValue.value);
        setIsOpen(false);
        if (props.onChange) {
            props.onChange({
                target: {
                    name: props.name,
                    value: optionValue
                }
            });
        }
    }

    return (
        <div className='relative px-4'>
            <div className="dropdown-menu">
                <button className='w-full truncate' onClick={toggleMenu}>
                    {selected && (
                        <div className="flex flex-wrap items-center text-lg select-none cursor-pointer">
                            <p className="">
                                Sort By:&nbsp;
                                <span className='capitalize'>{props.sort.column}</span>
                                <span className={props.sort.order == 'ascending' ? 'up-chevron ml-1' : 'down-chevron ml-1'}></span>
                            </p>
                        </div>
                    )}
                    {!selected && (
                        <div className="flex flex-wrap items-center text-lg select-none cursor-pointer">
                            <p className="pr-4">
                                Sort By:

                            </p>

                            <img className="pl-1 scale-75" src="/sort-one.svg" />

                        </div>
                    )}

                    {/* {selected ? selected : 'Select an option'}
                    <span className={isOpen ? 'up-chevron ml-1' : 'down-chevron ml-1'}>

                    </span> */}
                </button>
            </div>
            {isOpen && (
                <div className='absolute rounded-md w-full left-0 top-8 px-4 py-1 bg-white opacity-90 max-h-40 z-10 overflow-y-auto text-black'>
                    <ul>
                        {React.Children.map(props.children, child => (
                            <li className='cursor-pointer text-center capitalize' onClick={() => handleOptionClick(child.props)}>
                                {child}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SortByDropdownMenu;