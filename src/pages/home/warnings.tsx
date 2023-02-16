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
// import animationData from '../../components/circularAnimation.json';
import CircularAnimation from '../../components/circularAnimation';
import FormLayout from "../../components/formLayout";
import { VenueSidebarArray } from "../../components/venueSidebarArray";
import TabMenu from "../../components/tabMenu";
import { VenueHomeTabMenuArray } from '../../components/venueHomeTabMenuArray';
import { useRouter } from "next/router";
import Breadcrumbs from "../../components/breadcrumbs";
import WarningTable from "../../components/warningTable";

const Test: NextPage = () => {
    const router = useRouter();
    const urlPath = router.pathname;

    const [showMenuText, setShowMenuText] = useState<string | null>(null);

    const handleHover = (tab: string | null) => {
        setShowMenuText(tab);
    }

    const data: {}[] = [
        {
            name: "22002sjc",
            Date: '12.12.21',
            Reason: 'No deliveries logged for your latest event',
            Status: 'Dismissed'
        },
        {
            name: "22001sjc",
            Date: '12.12.21',
            Reason: 'No deliveries logged for your latest event',
            Status: 'Pending'
        },
        {
            name: "22003sjc",
            Date: '12.12.21',
            Reason: 'No deliveries logged for your latest event',
            Status: 'Dismissed'
        },
        {
            name: "22004sjc",
            Date: '12.12.21',
            Reason: 'No deliveries logged for your latest event',
            Status: 'Pending'
        }
    ];

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

    const tableData2 = [
        { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 11: 11, 12: 12, 13: 13, 'n': 1400000, 1500000: 15 },
        { 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7, 7: 8, 8: 9, 9: 10, 10: 11, 11: 12, 12: 13, 13: 14, 'n': 1500000, 1500000: 16 }
    ]

    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData,

    //     isClickToPauseDisabled: true
    // };

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
                        <TabMenu data={VenueHomeTabMenuArray} urlPath={urlPath} />

                    </header>

                    <div className="px-8 mt-0">
                        <WarningTable data={tableData} layout={layout} onLayoutChange={setLayout} sort={sort} setSort={setSort} tableData={tableData} setTableData={setTableData} topTableData={topTableData} setTopTableData={setTopTableData} bottomTableData={bottomTableData} setBottomTableData={setBottomTableData} />
                    </div>

                </main>
            </div>
        </>
    )
}

export default Test