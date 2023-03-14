import * as React from 'react'

export default function FileInput(props) {

    const [fileName, setFileName] = React.useState(null);

    const handleFileChange = event => {
        const file = event.target.files[0];
        // const reader = new FileReader();
        // reader.onload = event => {
        //     const text = event.target.result;
        //     const rows = text.split('\n');
        //     const keys = rows[0].split(',');
        //     const parsedData = rows.slice(1).map(row => {
        //         const values = row.split(',');
        //         return keys.reduce((obj, key, index) => ({ ...obj, [key]: values[index] }), {});
        //     });
        //     setCSVData(parsedData);
        //     setColumnNames(keys);
        //     // perform your logic on the data here
        // };
        // reader.readAsText(file);

        // Set the file name to state
        setFileName(file.name);
    };

    return (
        <div className='flex relative my-3 h-[40px]'>
            <div className='flex  justify-between rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                <div className='px-8 py-2 capitalize select-none'>
                    Attach {props.label}
                </div>
                <div className='cursor-pointer min-w-[300px] relative rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                    <label htmlFor={props.label} className=" absolute grid place-content-center m-auto inset-0 w-full h-[40px] p-2  rounded-xl hover:text-red text-white">
                        {fileName == null && (
                            <>
                                Drop File Here
                            </>
                        )}
                        {fileName != null && (
                            <>
                                {fileName}
                            </>

                        )}
                    </label>
                    <input className=' cursor-pointer absolute m-auto inset-0 w-[300px]  opacity-0' type="file" accept={props.allowedTypes} onChange={handleFileChange} name={props.label} />
                    {/* <input className='b bg-transparent w-full h-full p-2 text-center appearance-none' type="text" name={props.label} /> */}
                </div>
            </div>
        </div>
    )
}