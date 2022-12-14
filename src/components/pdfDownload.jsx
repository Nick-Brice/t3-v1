import React from 'react';

const DownloadPdfButton = ({ pdfName, printAreaId }) => {
  const handleClick = () => {
    const printArea = document.getElementById(printAreaId);

    // Create a new Blob object containing the print area's HTML
    const pdfContent = new Blob([printArea.innerHTML], { type: 'application/pdf' });

    console.log(pdfContent); // Log the Blob object to the console

    // Create a link element to allow the user to download the PDF
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(pdfContent);
    downloadLink.download = pdfName;
    console.log(downloadLink); // Log the link element to the console

    // Append the link element to the document and click it to trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Remove the link element from the document to clean up
    document.body.removeChild(downloadLink);
  };

  return <button onClick={handleClick}>Download PDF</button>;
};

export default DownloadPdfButton;
