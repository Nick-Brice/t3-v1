import * as React from 'react';
import DropdownMenu from '../components/newDropdownMenu';
import Button from './button';
import DateField from './dateField';
import SortByDropdownMenu from './sortByDropdownMenu';
import SearchDropdown from './searchDropdown';
import { Item, useComboBoxState } from 'react-stately';
import FileInput from './fileInput';
// import AddNewInput from './addNewInput';

export default function ModifyStockCheck(props) {

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
        props.setOpenForm(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col select-none gap-y-6 py-8 px-24 rounded-2xl bg-gradient-to-l from-primary to-secondary text-white'>
                    <h4 className='text-center text-xl font-semibold'>
                        Modify '{props.collected}'!!!
                    </h4>
                    <div className='flex justify-end'>
                        <div className='flex rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                            <div className='px-8 py-2'>
                                Product
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

                    <div className='flex justify-end'>
                        <div className='flex rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                            <div className='px-8 py-2'>
                                Quantity
                            </div>
                            <div className='min-w-[300px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                                <input className='b bg-transparent w-full h-full p-2 text-center' type="text" name="quantity" label="quantity" />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div className='flex rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                            <div className='px-8 py-2'>
                                Date
                            </div>
                            <div className='min-w-[300px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                                <input className='b bg-transparent w-full h-full p-2 text-center' type="text" name="date" label="date" />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end -mt-[11px]'>
                        <FileInput label='Another Document' />
                    </div>

                    <div>
                        <button type='submit' className='bg-white mb-12 drop-shadow-2xl text-black rounded-xl w-full h-16 font-semibold text-lg'>
                            Update Stock Check
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}