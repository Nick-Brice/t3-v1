import { Towel } from '@icon-park/react';
import React, { useCallback, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import ProductCard from './productcard';
import BaseExpandedCard from './baseExpandedCard';

const SortableTable = ({ data, layout, onLayoutChange, sort, setSort, tableData, setTableData, topTableData, setTopTableData, bottomTableData, setBottomTableData }) => {

    // const [tableData, setTableData] = React.useState(data);
    // const [topTableData, setTopTableData] = React.useState(data);
    // const [bottomTableData, setBottomTableData] = React.useState(data);
    const [columns, setColumns] = React.useState([]);
    // const [sort, setSort] = React.useState({ column: '', order: '' });
    const [showModal, setShowModal] = React.useState(false);
    const [selectedData, setSelectedData] = React.useState({});
    const [hoveredRow, setHoveredRow] = React.useState(null);

    const handleRowClick = (rowData) => {
        setSelectedData(rowData);
        setShowModal(true);
    };

    const [nameOrder, setNameOrder] = React.useState('descending');
    const [usedOrder, setUsedOrder] = React.useState('descending');
    const [capturedOrder, setCapturedOrder] = React.useState('descending');
    const [rateOrder, setRateOrder] = React.useState('descending');

    const handleSort = (key, order) => {
        if (order == "ascending") {
            let sortedData = [...tableData].sort((a, b) => {
                if (a[key] < b[key]) return -1;
                if (a[key] > b[key]) return 1;
                return 0;
            });
            let topSortedData = sortedData.slice(0, -1);
            let bottomSortedData = sortedData.slice(-1);
            setTableData(sortedData);
            setTopTableData(topSortedData);
            setBottomTableData(bottomSortedData);
        } else {
            let sortedData = [...tableData].sort((a, b) => {
                if (a[key] > b[key]) return -1;
                if (a[key] < b[key]) return 1;
                return 0;
            });
            let topSortedData = sortedData.slice(0, -1);
            let bottomSortedData = sortedData.slice(-1);
            setTableData(sortedData);
            setTopTableData(topSortedData);
            setBottomTableData(bottomSortedData);
        }
    };

    const toggleSort = (column) => {
        setSort({ column, order: sort.order === 'ascending' ? 'descending' : 'ascending' });
    }

    const handleLayoutChange = () => {
        if (layout === 'table') {
            onLayoutChange('grid');
        } else {
            onLayoutChange('table');
        }
    };



    // const toggleSort = (columnOrder, column) => {
    //     if (columnOrder == "ascending") {
    //         switch (column) {
    //             case "name":
    //                 setNameOrder("descending")
    //                 break;

    //             case "used":
    //                 setUsedOrder("descending")
    //                 break;

    //             case "captured":
    //                 setCapturedOrder("descending")
    //                 break;

    //             case "rate":
    //                 setRateOrder("descending")
    //                 break;

    //             default:
    //                 break;
    //         }
    //     } else {
    //         switch (column) {
    //             case "name":
    //                 setNameOrder("ascending")
    //                 break;

    //             case "used":
    //                 setUsedOrder("ascending")
    //                 break;

    //             case "captured":
    //                 setCapturedOrder("ascending")
    //                 break;

    //             case "rate":
    //                 setRateOrder("ascending")
    //                 break;

    //             default:
    //                 break;
    //         }
    //     }
    // }

    useEffect(() => {
        let topSortedData = data.slice(0, -1)
        let bottomSortedData = data.slice(-1)
        console.log(topSortedData, bottomSortedData)
        const columnNames = Object.keys(data[0]);
        setColumns(columnNames);
        setTopTableData(topSortedData);
        setBottomTableData(bottomSortedData);
    }, [data])

    return (
        <div className='relative'>
            {layout === 'table' && (
                <div className=' p-8 rounded-2xl w-full'>
                    <table className='w-full'>

                        <thead>
                            <tr className='cursor-pointer text-white'>
                                {columns.map((col, index) => (
                                    <th key={index} onClick={() => { toggleSort(col); handleSort(col, sort.order) }} className={index === columns.length - 1 ? 'hover:text-grey select-none text-left h-8 p-0 m-0 leading-7' : 'hover:text-grey select-none text-left border-r-2 border-grey h-8 p-0 m-0 leading-7'}>
                                        <div className={index === 0 ? 'bg-secondaryblack text-left rounded-l-full h-8 pl-4 m-0 leading-7 items-center capitalize' : index === columns.length - 1 ? 'bg-secondaryblack text-left rounded-r-full h-8 pl-4 m-0 leading-7 items-center capitalize' : 'bg-secondaryblack text-left h-8 pl-4 m-0 leading-7 items-center capitalize'}>{col}</div>
                                    </th>
                                ))}
                                {/* <th className='hover:text-grey select-none text-left border-r-2 border-grey h-8 p-0 m-0 leading-7' onClick={() => {
                                    toggleSort(nameOrder, "name");
                                    handleSort('name', nameOrder)
                                }}><div className='bg-secondaryblack text-left rounded-l-full h-8 pl-4 m-0 leading-7 items-center'>Name</div></th>
                                <th className='hover:text-grey select-none text-left border-r-2 border-grey h-8 p-0 m-0 leading-7' onClick={() => {
                                    toggleSort(usedOrder, "used");
                                    handleSort('used', usedOrder)
                                }}><div className='bg-secondaryblack text-left h-8 pl-4 m-0 leading-7 items-center'>Used</div></th>
                                <th className='hover:text-grey select-none text-left border-r-2 border-grey h-8 p-0 m-0 leading-7' onClick={() => {
                                    toggleSort(capturedOrder, "captured");
                                    handleSort('captured', capturedOrder)
                                }}><div className='bg-secondaryblack text-left h-8 pl-4 m-0 leading-7 items-center'>Captured</div></th>
                                <th className='hover:text-grey select-none text-left h-8 p-0 m-0 leading-7' onClick={() => {
                                    toggleSort(rateOrder, "rate");
                                    handleSort('rate', rateOrder)
                                }}><div className='bg-secondaryblack text-left rounded-r-full h-8 pl-4 m-0 leading-7 items-center'>Rate</div></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {topTableData.map((row) => (
                                <tr className=' cursor-pointer' key={row.name}>
                                    {columns.map((col, i) => (
                                        <td onClick={() => handleRowClick(row)} onMouseOver={() => setHoveredRow(row.name)} onMouseOut={() => setHoveredRow(null)} className={i === columns.length - 1 ? ' hover:animate-pulse select-none text-left h-8 p-0 m-0 leading-7' : 'hover:text-grey select-none text-left border-r-2 border-grey h-8 p-0 m-0 leading-7'} key={i}>
                                            <div className={hoveredRow == row.name ? i === 0 ? 'bg-primarylight text-white text-left rounded-l-full h-7 pl-4 m-0 leading-7 items-center mt-1 transition-all duration-300' : i === columns.length - 1 ? 'bg-primarylight text-white text-left rounded-r-full h-7 pl-4 m-0 leading-7 items-center mt-1 transition-all duration-300' : 'bg-primarylight text-white text-left h-7 pl-4 m-0 leading-7 items-center mt-1 transition-all duration-300' : i === 0 ? 'bg-white text-left rounded-l-full h-7 pl-4 m-0 leading-7 items-center mt-1 transition-all duration-300' : i === columns.length - 1 ? 'bg-white text-left rounded-r-full h-7 pl-4 m-0 leading-7 items-center mt-1 transition-all duration-300' : 'bg-white text-left h-7 pl-4 m-0 leading-7 items-center mt-1 transition-all duration-300'}>{row[col]}</div>
                                        </td>
                                    ))}
                                    {/* <td className='hover:text-grey select-none text-left border-r-2 border-grey h-8 p-0 m-0 leading-7'>
                                        <div className='bg-white text-left rounded-l-full h-7 pl-4 m-0 leading-7 items-center mt-1'>{row.name}</div>
                                    </td>
                                    <td className='hover:text-grey select-none text-left border-r-2 border-grey h-8 p-0 m-0 leading-7'>
                                        <div className='bg-white text-left h-7 pl-4 m-0 leading-7 items-center mt-1'>{row.used}</div>
                                    </td>
                                    <td className='hover:text-grey select-none text-left border-r-2 border-grey h-8 p-0 m-0 leading-7'>
                                        <div className='bg-white text-left h-7 pl-4 m-0 leading-7 items-center mt-1'>{row.captured}</div>
                                    </td>
                                    <td className='hover:text-grey select-none text-left h-8 p-0 m-0 leading-7'>
                                        <div className='bg-white text-left rounded-r-full h-7 pl-4 m-0 leading-7 items-center mt-1'>{row.rate}</div>
                                    </td> */}
                                </tr>
                            ))}
                            {bottomTableData.map((row) => (
                                <tr className='hover:animate-pulse cursor-pointer' key={row.name}>
                                    {columns.map((col, i) => (
                                        <td onClick={() => handleRowClick(row)} onMouseOver={() => setHoveredRow(row.name)} onMouseOut={() => setHoveredRow(null)} className={i === columns.length - 1 ? ' hover:animate-pulse select-none text-left h-8 p-0 m-0 leading-7' : 'hover:text-grey select-none text-left border-r-2 border-grey h-8 p-0 m-0 leading-7'} key={i}>
                                            <div className={hoveredRow == row.name ? i === 0 ? 'bg-primarylight text-white text-left rounded-l-full h-7 pl-4 m-0 leading-7 items-center mt-1 transition-all duration-300' : i === columns.length - 1 ? 'bg-primarylight text-white text-left rounded-r-full h-7 pl-4 m-0 leading-7 items-center mt-1 transition-all duration-300' : 'bg-primarylight text-white text-left h-7 pl-4 m-0 leading-7 items-center mt-1 transition-all duration-300' : i === 0 ? 'bg-white text-left rounded-l-full h-7 pl-4 m-0 leading-7 items-center mt-1 transition-all duration-300' : i === columns.length - 1 ? 'bg-white text-left rounded-r-full h-7 pl-4 m-0 leading-7 items-center mt-1 transition-all duration-300' : 'bg-white text-left h-7 pl-4 m-0 leading-7 items-center mt-1 transition-all duration-300'}>{row[col]}</div>
                                        </td>
                                    ))}
                                    {/* <td className='hover:text-grey select-none text-left border-r-2 border-grey h-8 p-0 m-0 leading-7'>
                                        <div className='bg-white text-left rounded-l-full h-7 pl-4 m-0 leading-7 items-center mt-1'>{row.name}</div>
                                    </td>
                                    <td className='hover:text-grey select-none text-left border-r-2 border-grey h-8 p-0 m-0 leading-7'>
                                        <div className='bg-white text-left h-7 pl-4 m-0 leading-7 items-center mt-1'>{row.used}</div>
                                    </td>
                                    <td className='hover:text-grey select-none text-left border-r-2 border-grey h-8 p-0 m-0 leading-7'>
                                        <div className='bg-white text-left h-7 pl-4 m-0 leading-7 items-center mt-1'>{row.captured}</div>
                                    </td>
                                    <td className='hover:text-grey select-none text-left h-8 p-0 m-0 leading-7'>
                                        <div className='bg-white text-left rounded-r-full h-7 pl-4 m-0 leading-7 items-center mt-1'>{row.rate}</div>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            )}
            {showModal && (
                <div className='absolute modal left-0 top-0 z-50'>
                    <div className=' fixed grid place-content-center inset-0 z-50'>
                        <div className='w-[620px] h-[575px] inset-0 z-50'>
                            <BaseExpandedCard {...selectedData} isOpen={showModal} setIsOpen={setShowModal} />
                        </div>
                        <div onClick={() => setShowModal(false)} className='fixed inset-0 backdrop-blur-sm backdrop-brightness-75 z-10'></div>
                    </div>
                </div>
            )}
            {layout === 'grid' && (
                <div className="grid grid-cols-4  gap-4 min-h-0">

                    {/* <ProductCard title={"test1"} img="/Cup_PET.png" used={22} captured={12} stream="Waste" rate={99} key={"test"}>
                    </ProductCard>

                    <ProductCard title={"test2"} img="/Cup_PET.png" used={22} captured={12} stream="Waste" rate={99} key={"test"}>
                    </ProductCard>

                    <ProductCard title={"test3"} img="/Cup_PET.png" used={22} captured={12} stream="Waste" rate={99} key={"test"}>
                    </ProductCard> */}
                    {tableData.map((row) => (

                        <ProductCard title={row.name} img="/Cup_PET.png" delivered={row.delivered} collected={row.collected} stream={row.stream} rate={row.rate} key={row.name}>
                        </ProductCard>

                    ))}
                </div>
            )}
        </div>
    );
};

export default SortableTable;
