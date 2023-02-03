import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Sidebar from '../../components/sidebar'
import SortableTable from "../../components/sortableTable";
import HeaderButton from '../../components/headerButton';
import React, { useState } from "react";
import DraggableTable from "../../components/draggableTable2"
import DonutProgress from "../../components/donutProgress2";
import Counter from "../../components/counter";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from '../../components/AnimatedProgressProvider';
import { easeQuadInOut } from "d3-ease";
import AreaChart from "../../components/d3AreaGraph";
import LineGraph from '../../components/d3LineGraph';
import ScatterGraph from '../../components/d3ScatterGraph';
import DropdownMenu from '../../components/sortByDropdownMenu';
import { Item, useSelectState } from 'react-stately';
import Lottie from 'react-lottie';
import animationData from '../../components/circularAnimation.json';
import CircularAnimation from '../../components/circularAnimation';
import FormLayout from "../../components/formLayout";
import { VenueSidebarArray } from '../../components/venueSidebarArray';
import TabMenu from "../../components/TabMenu";
import { VenueProductsTabMenuArray } from '../../components/venueProductsTabMenuArray';
import { useRouter } from "next/router";
import Breadcrumbs from "../../components/breadcrumbs";

const Overview: NextPage = () => {
    const router = useRouter();
    const urlPath = router.pathname;

    const [showMenuText, setShowMenuText] = useState<string | null>(null);

    const handleHover = (tab: string | null) => {
        setShowMenuText(tab);
    }

    const data: {}[] = [
        {
            name: "Nick",
            delivered: 244443,
            collected: 122234,
            rate: 95,
            stream: 'Waste',
            test2: 2,
            test3: 3,
            test4: 4
        },
        {
            name: "Jack",
            delivered: 26345,
            collected: 222355,
            rate: 80,
            stream: 'Waste',
            test2: 2,
            test3: 3,
            test4: 4
        },
        {
            name: "Connor",
            delivered: 26445,
            collected: 1234455,
            rate: 70,
            stream: 'Waste',
            test2: 2,
            test3: 3,
            test4: 4
        },
        {
            name: "Nick1",
            delivered: 24666,
            collected: 123456,
            rate: 90,
            stream: 'Waste',
            test2: 2,
            test3: 3,
            test4: 4
        },
        {
            name: "Jack1",
            delivered: 2622,
            collected: 445666,
            rate: 80,
            stream: 'Waste',
            test2: 2,
            test3: 3,
            test4: 4
        },
        {
            name: "Connor1",
            delivered: 2622,
            collected: 5678,
            rate: 70,
            stream: 'Waste',
            test2: 2,
            test3: 3,
            test4: 4
        },
        {
            name: "Nick2",
            delivered: 24777,
            collected: 77777,
            rate: 90,
            stream: 'Waste',
            test2: 2,
            test3: 3,
            test4: 4
        },
        {
            name: "Jack2",
            delivered: 2654,
            collected: 8876,
            rate: 80,
            stream: 'Waste',
            test2: 2,
            test3: 3,
            test4: 4
        },
        {
            name: "Connor2",
            delivered: 26235,
            collected: 45532,
            rate: 70,
            stream: 'Waste',
            test2: 2,
            test3: 3,
            test4: 4
        }
    ];

    const first = data[0];

    const columnNames = Object.keys(data[0]!);

    const [openForm, setOpenForm] = React.useState(false);

    const [openSortBy, setOpenSortBy] = React.useState(false);

    const [sort, setSort] = React.useState({ column: '', order: '' });
    const [layout, setLayout] = useState('table');
    const [tableData, setTableData] = React.useState(data);
    const [topTableData, setTopTableData] = React.useState(data);
    const [bottomTableData, setBottomTableData] = React.useState(data);

    function hasKey(obj: object, key: string): obj is { [key: string]: any } {
        return key in obj;
    }

    const handleSort = (key: string) => {
        if (sort.order == "ascending") {
            let sortedData = [...tableData].sort((a, b) => {
                if (hasKey(a, key) && hasKey(b, key)) {
                    if (a[key] < b[key]) return -1;
                    if (a[key] > b[key]) return 1;
                }
                return 0;
            });
            let topSortedData = sortedData.slice(0, -1);
            let bottomSortedData = sortedData.slice(-1);
            setTableData(sortedData);
            setTopTableData(topSortedData);
            setBottomTableData(bottomSortedData);
        } else {
            let sortedData = [...tableData].sort((a, b) => {
                if (hasKey(a, key) && hasKey(b, key)) {
                    if (a[key] > b[key]) return -1;
                    if (a[key] < b[key]) return 1;
                }
                return 0;
            });
            let topSortedData = sortedData.slice(0, -1);
            let bottomSortedData = sortedData.slice(-1);
            setTableData(sortedData);
            setTopTableData(topSortedData);
            setBottomTableData(bottomSortedData);
        }
    };

    const toggleSort = (column: string) => {
        if (sort.column == column) {
            setSort({ column, order: sort.order == 'ascending' ? 'descending' : 'ascending' });
        } else {
            setSort({ column, order: 'descending' });
        }
        console.log(sort)
    }

    const handleLayoutChange = () => {
        if (layout === 'table') {
            setLayout('grid');
        } else {
            setLayout('table');
        }
    };

    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/Portal_Icon.png" />
            </Head>
            <div className="fixed bg-secondarygrey w-full h-full -z-10"></div>
            <div className="grid grid-cols-[auto_1fr]">
                <Sidebar data={VenueSidebarArray} />
                <div className="w-36"></div> {/* So that the main content lines up with the sidebar */}
                <main className="relative w-full bg-secondarygrey">
                    <header className="grid grid-cols-[auto_1fr] grid-rows-1 bg-white shadow-center-md z-50">
                        <Breadcrumbs title={'[Client Name] Products'} urlPath={urlPath} />
                        <TabMenu data={VenueProductsTabMenuArray} urlPath={urlPath} />
                    </header>
                    <div className="absolute flex justify-between p-5 rounded-2xl bg-primary inset-x-8 z-40">
                        <HeaderButton>
                            <div className="flex flex-wrap items-center text-lg select-none cursor-pointer" onClick={() => { handleLayoutChange() }}>
                                <p className="pr-4">
                                    Change View Style
                                </p>
                                <img className={(layout != "grid" ? "opacity-30 pl-5 scale-75" : "pl-5 scale-75")} src="/grid-four.svg" />
                                <img className={(layout != "table" ? "opacity-30 scale-75" : "scale-75")} src="/list.svg" />
                            </div>
                        </HeaderButton>
                        <HeaderButton>
                            <div className="flex flex-wrap items-center text-lg select-none cursor-pointer" onClick={() => setOpenForm(!openForm)}>
                                <p className="pr-4">
                                    Add Product
                                </p>
                                <img className="pl-1 scale-75" src="/add-three.svg" />
                            </div>
                        </HeaderButton>
                        {openForm && (
                            <div className='absolute modal left-0 top-0 z-50'>
                                <div className=' fixed grid place-content-center inset-0 z-50'>
                                    <div className=' inset-0 z-50 w-full h-full'>
                                        <FormLayout setOpenForm={setOpenForm} />
                                    </div>
                                    <div onClick={() => setOpenForm(false)} className='fixed inset-0 backdrop-blur-sm backdrop-brightness-75 z-10'></div>
                                </div>
                            </div>
                        )}
                        <HeaderButton>
                            <div className="flex flex-wrap items-center text-lg select-none cursor-pointer h-[35px]" onClick={() => setOpenSortBy(!openSortBy)}>
                                <DropdownMenu name="field2" label="Field 2" sort={sort}>
                                    {columnNames.map((col, index) => (
                                        <option onClick={() => { toggleSort(col); handleSort(col) }} value={col}>{col}</option>
                                    ))}
                                </DropdownMenu>
                            </div>
                        </HeaderButton>
                        <HeaderButton>
                            <div className="flex flex-wrap items-center text-lg select-none cursor-pointer">
                                <p className="pr-4">
                                    Download CSV
                                </p>
                                <img className="pl-1 scale-75" src="/download.svg" />
                            </div>
                        </HeaderButton>
                    </div>
                    <div className="p-8 mt-20">
                        <SortableTable data={tableData} layout={layout} onLayoutChange={setLayout} sort={sort} setSort={setSort} tableData={tableData} setTableData={setTableData} topTableData={topTableData} setTopTableData={setTopTableData} bottomTableData={bottomTableData} setBottomTableData={setBottomTableData} />
                    </div>
                </main>
            </div>
        </>
    )
}

export default Overview