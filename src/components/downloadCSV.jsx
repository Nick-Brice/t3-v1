import React from 'react';

export default function DownloadCSV() {
    const handleDownload = async () => {
        const response = await fetch('/api/csvgenerator');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'data.csv';
        link.click();
    };

    return (
        <button onClick={handleDownload}>Download CSV</button>
    );
}
