import * as React from 'react';
import DropdownMenu from '../components/newDropdownMenu';
import Button from './button';
import DateField from './dateField';

export default function FormLayout({setOpenForm}) {

    const handleSubmit = () => {
        setOpenForm(false);
    }

    return (
        <div className='flex flex-col select-none gap-y-6 py-8 px-24 rounded-2xl bg-gradient-to-l from-primary to-secondary text-white'>
            <div className='flex justify-end'>
                <div className='flex rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                    <div className='px-8 py-2'>
                        Collection Type
                    </div>
                    <div className='py-2 min-w-[300px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                        <DropdownMenu name="field2" label="Field 2">
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                            <option value="Option 4">Option 4</option>
                            <option value="Option 5">Option 5</option>
                            <option value="Option 6">Option 6</option>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
                <div className='flex rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                    <div className='px-8 py-2'>
                        Collection Type
                    </div>
                    <div className='py-2 min-w-[300px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                        <DateField/>
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
                <div className='flex rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                    <div className='px-8 py-2'>
                        Collection Type
                    </div>
                    <div className='min-w-[300px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                        <input className='b bg-transparent w-full h-full p-2 text-center' type="text" name="field1" label="Field 1" />
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
                <div className='flex rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                    <div className='px-8 py-2'>
                        Collection Type
                    </div>
                    <div className='py-2 min-w-[300px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                        <DropdownMenu name="field2" label="Field 2">
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                            <option value="Option 4">Option 4</option>
                            <option value="Option 5">Option 5</option>
                            <option value="Option 6">Option 6</option>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
                <div className='flex rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                    <div className='px-8 py-2'>
                        Collection Type
                    </div>
                    <div className='py-2 min-w-[300px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                        <DropdownMenu name="field2" label="Field 2">
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                            <option value="Option 4">Option 4</option>
                            <option value="Option 5">Option 5</option>
                            <option value="Option 6">Option 6</option>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
                <div className='flex rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                    <div className='px-8 py-2'>
                        Collection Type
                    </div>
                    <div className='py-2 w-[300px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                        <DropdownMenu name="field2" label="Field 2">
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                            <option value="Option 4">Option 4</option>
                            <option value="Option 5">Option 5</option>
                            <option value="A Long Piece Of Text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa">A Long Piece Of Text</option>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            <div>
                <button className='bg-white mb-12 drop-shadow-2xl text-black rounded-xl w-full h-16 font-semibold text-lg' onClick={() => {handleSubmit();}}>
                    Finish
                </button>
            </div>
        </div>
    )
}