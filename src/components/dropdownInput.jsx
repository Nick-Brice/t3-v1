import React from "react";

export default function DropdownInput(props) {

    const optionArray = [
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
    ]

    return (
        <div className='flex my-3'>
            <div className='flex justify-between rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                <div className='px-8 py-2'>
                    <label htmlFor={props.label}>{props.label}</label>
                </div>
                <div className='grid place-content-center min-w-[300px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                    <select className="appearance-none text-white bg-transparent text-center inline-block w-[300px] h-[40px]" name="cars" id="cars">
                        {/* <option disabled className="text-black text-left font-bold" value={'123'}>
                            Type 1
                        </option> */}
                        {props.options.map((choice) => (
                            <option className="text-black bg-transparent focus:text-red" value={choice.value}>
                                {choice.value}
                            </option>
                        ))}
                    </select>
                </div>

            </div>
        </div>
    )
}