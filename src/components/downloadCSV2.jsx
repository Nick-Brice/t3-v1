import React from 'react';

export default function DownloadCSV({ data }) {
    const handleDownload = () => {
        const keys = Object.keys(data[0]);
        const capitalizedKeys = keys.map(key => key.charAt(0).toUpperCase() + key.slice(1));
        const csvData = [
            capitalizedKeys.join(','),
            ...data.map(row => keys.map(key => row[key]).join(','))
        ];
        const blob = new Blob([csvData.join('\n')], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'data.csv';
        link.click();
    };

    return (
        <button onClick={handleDownload}>Download CSV</button>
    );
}
