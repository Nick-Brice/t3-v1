import { Towel } from '@icon-park/react';
import React from 'react';
import { Table, Button } from 'react-bootstrap';
import ProductCard from './productcard';

const SortableTable = ({ data }) => {

    const [tableData, setTableData] = React.useState(data);
    const [layout, setLayout] = React.useState('table');
    const [nameOrder, setNameOrder] = React.useState('descending');
    const [usedOrder, setUsedOrder] = React.useState('descending');
    const [capturedOrder, setCapturedOrder] = React.useState('descending');
    const [rateOrder, setRateOrder] = React.useState('descending');

    const handleSort = (key, order) => {
        if (order == "ascending") {
            const sortedData = [...tableData].sort((a, b) => {
                if (a[key] < b[key]) return -1;
                if (a[key] > b[key]) return 1;
                return 0;
            });
            setTableData(sortedData);
        } else {
            const sortedData = [...tableData].sort((a, b) => {
                if (a[key] > b[key]) return -1;
                if (a[key] < b[key]) return 1;
                return 0;
            });
            setTableData(sortedData);
        }
    };

    const handleLayoutChange = () => {
        if (layout === 'table') {
            setLayout('grid');
        } else {
            setLayout('table');
        }
    };

    const toggleSort = (columnOrder, column) => {
        if (columnOrder == "ascending") {
            switch (column) {
                case "name":
                    setNameOrder("descending")
                    break;

                case "used":
                    setUsedOrder("descending")
                    break;

                case "captured":
                    setCapturedOrder("descending")
                    break;

                case "rate":
                    setRateOrder("descending")
                    break;

                default:
                    break;
            }
        } else {
            switch (column) {
                case "name":
                    setNameOrder("ascending")
                    break;

                case "used":
                    setUsedOrder("ascending")
                    break;

                case "captured":
                    setCapturedOrder("ascending")
                    break;

                case "rate":
                    setRateOrder("ascending")
                    break;

                default:
                    break;
            }
        }
    }

    return (
        <div>
            <Button onClick={handleLayoutChange}>Change Layout</Button>
            {layout === 'table' && (
                <Table striped bordered hover>
                    <thead>
                        <tr className='cursor-pointer text-black'>
                            <th className='hover:text-black-500 select-none' onClick={() => {
                                toggleSort(nameOrder, "name");
                                handleSort('name', nameOrder)
                            }}>Name</th>
                            <th className='hover:text-black-500 select-none' onClick={() => {
                                toggleSort(usedOrder, "used");
                                handleSort('used', usedOrder)
                            }}>Used</th>
                            <th className='hover:text-black-500 select-none' onClick={() => {
                                toggleSort(capturedOrder, "captured");
                                handleSort('captured', capturedOrder)
                            }}>Captured</th>
                            <th className='hover:text-black-500 select-none' onClick={() => {
                                toggleSort(rateOrder, "rate");
                                handleSort('rate', rateOrder)
                            }}>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row) => (
                            <tr key={row.name}>
                                <td>{row.name}</td>
                                <td>{row.used}</td>
                                <td>{row.captured}</td>
                                <td>{row.rate}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
            {layout === 'grid' && (
                <div className="grid grid-cols-3 gap-4">
                    {tableData.map((row) => (
                        <div key={row.name}>
                            <ProductCard title={row.name} img="favicon.ico" used={row.used} captured={row.captured} stream="Waste" rate={row.rate}>
                            </ProductCard>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SortableTable;
