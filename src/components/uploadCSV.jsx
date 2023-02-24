import React, { useState } from 'react';

export default function UploadCSV() {
    const [data, setData] = useState([]);

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
            setData(parsedData);
            // perform your logic on the data here
        };
        reader.readAsText(file);
    };

    return (
        <div>
            <input type="file" accept=".csv" onChange={handleUpload} />
            {data.length > 0 && (
                <ul>
                    {data.map((row, index) => (
                        <li key={index}>{JSON.stringify(row)}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
