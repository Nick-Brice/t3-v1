import React from 'react';

const PrintButton = ({ printAreaId }) => {
  const handleClick = () => {
    const printArea = document.getElementById(printAreaId);
    const printWindow = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    printWindow.document.write(printArea.innerHTML);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  return <button onClick={handleClick}>Print</button>;
};

export default PrintButton;
