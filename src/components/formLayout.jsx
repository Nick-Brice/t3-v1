import * as React from 'react';
import DropdownMenu from '../components/newDropdownMenu';
import Button from './button';
import DateField from './dateField';
import SortByDropdownMenu from './sortByDropdownMenu';
import SearchDropdown from './searchDropdown';
import { Item, useComboBoxState } from 'react-stately';

export default function FormLayout({ setOpenForm }) {

    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
        }

        console.log(data);

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        // API endpoint where we send form data.
        const endpoint = '/api/form'

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        }

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        alert(`Is this your name: ${result[0].name}`)
        setOpenForm(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col select-none gap-y-6 py-8 px-24 rounded-2xl bg-gradient-to-l from-primary to-secondary text-white'>
                <div className='flex justify-end'>
                    <div className='flex rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                        <div className='px-8 py-2'>
                            Collection Type
                        </div>
                        <div className='py-2 min-w-[300px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                            <DropdownMenu name="field2" label="Field 5">
                                <option onClick={() => handleClick('Option 1')} value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                                <option value="Option 4">Option 4</option>
                                <option value="Option 5">Option 5</option>
                                <option value="Option 6">Option 6</option>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
                {/* <div className='flex justify-end'>
                    <div className='flex rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                        <div className='px-8 py-2'>
                            Collection Type
                        </div>
                        <div className='py-2 min-w-[300px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                            <SearchDropdown label="Favorite Animal">
                                <Item key="red panda">Red Panda</Item>
                                <Item key="cat">Cat</Item>
                                <Item key="dog">Dog</Item>
                                <Item key="aardvark">Aardvark</Item>
                                <Item key="kangaroo">Kangaroo</Item>
                                <Item key="snake">Snake</Item>
                            </SearchDropdown>
                        </div>
                    </div>
                </div> */}
                <div className='flex justify-end'>
                    <div className='flex rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                        <div className='px-8 py-2'>
                            Collection Type
                        </div>
                        <div className='py-2 min-w-[300px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                            <DateField />
                        </div>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <div className='flex rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                        <div className='px-8 py-2'>
                            Collection Type
                        </div>
                        <div className='min-w-[300px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                            <input className='b bg-transparent w-full h-full p-2 text-center' type="text" name="email" label="email" />
                        </div>
                    </div>
                </div>
                {/* <div className='flex justify-end'>
                    <div className='flex rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                        <div className='px-8 py-2'>
                            Collection Type
                        </div>
                        <div className='py-2 min-w-[300px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                            <DropdownMenu name="field2" label="Field 1">
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
                            <DropdownMenu name="field2" label="Field 3">
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                                <option value="Option 4">Option 4</option>
                                <option value="Option 5">Option 5</option>
                                <option value="A Long Piece Of Text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa">A Long Piece Of Text</option>
                            </DropdownMenu>
                        </div>
                    </div>
                </div> */}
                <div>
                    <button type='submit' className='bg-white mb-12 drop-shadow-2xl text-black rounded-xl w-full h-16 font-semibold text-lg'>
                        Finish
                    </button>
                </div>
            </div>
        </form>
    )
}