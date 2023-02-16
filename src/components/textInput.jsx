import React from "react";

export default function TextInput(props) {

    return (
        <div className='flex my-3'>
            <div className='flex  justify-between rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                <div className='px-8 py-2'>
                    <label htmlFor={props.label}>{props.label}</label>
                </div>
                <div className='min-w-[300px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                    <input className='b bg-transparent w-full h-full p-2 text-center appearance-none' type="text" name={props.label} />
                </div>
            </div>
        </div>
    )
}