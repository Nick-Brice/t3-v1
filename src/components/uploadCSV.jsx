import React, { useState } from 'react';

export default function UploadCSV({ CSVData, setCSVData, columnNames, setColumnNames, fileName, setFileName }) {
    // const [CSVData, setCSVData] = useState([]);

    const handleUpload = event => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = event => {
            const text = event.target.result;
            const rows = text.split('\n');
            const keys = rows[0].split(',');
            const parsedData = rows.slice(1).map(row => {
                const values = row.split(',');
                return keys.reduce((obj, key, index) => ({ ...obj, [key]: values[index] }), {});
            });
            setCSVData(parsedData);
            setColumnNames(keys);
            // perform your logic on the data here
        };
        reader.readAsText(file);

        // Set the file name to state
        setFileName(file.name);
    };

    return (

        <div className='relative h-60'>

            <label htmlFor="CSVfile" className=" absolute grid place-content-center m-auto inset-0 w-full h-40 p-2 bg-white rounded-xl hover:text-red text-black">
                {fileName == null && (
                    <div className='flex items-center'>
                        <span className='mr-2 inline-block bg-secondarygrey p-2 rounded-full'>Choose a File</span> or drag it here <span className='inline-block ml-6'><img className='w-[100px]' src='/Upload_B_SQ.png' /></span>
                    </div>
                )}
                {fileName != null && (
                    <div className='flex items-center'>
                        {fileName}
                    </div>
                )}
            </label>
            <input className='cursor-pointer absolute m-auto inset-0 w-full h-40 opacity-0' id='CSVfile' type="file" accept=".csv" title="" onChange={handleUpload} />
        </div>

    );
}
