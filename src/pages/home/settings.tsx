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
import TextInput from "../../components/textInput";

const Test: NextPage = () => {
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
        },
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

                    <div className="pl-8 pr-12 mt-0">
                        <div className="bg-white h-full w-full rounded-2xl p-12 my-16">
                            <div className="flex justify-between items-center bg-gradient-to-r from-primary to-tertiary rounded-full -mt-20 -mx-12 py-4 px-12 text-2xl text-white font-light">
                                <div className="flex items-center">
                                    <img className="mr-4" src="/Settings_W_SQ.png" width="50px"></img>
                                    My Account Settings
                                </div>
                                <p className="text-base w-[400px]">
                                    These are settings for your personal account and will not impact other members of your venue.
                                </p>
                            </div>
                            <div className=" grid grid-cols-2 pt-4">
                                <div className='flex flex-col justify-between rounded-lg mr-16 my-2'>
                                    <div className=' py-2 text-left font-semibold'>
                                        <label htmlFor="First Name">First Name</label>
                                    </div>
                                    <div className='min-w-[300px] rounded-lg shadow-[inset_0_0px_4px_0px_#B2B2B2]'>
                                        <input className='b bg-transparent w-full h-full px-4 py-4 text-left appearance-none' type="text" name="First Name" />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-between rounded-lg my-2'>
                                    <div className=' py-2 text-left font-semibold'>
                                        <label htmlFor="Username">Username</label>
                                    </div>
                                    <div className='min-w-[300px] rounded-lg shadow-[inset_0_0px_4px_0px_#B2B2B2]'>
                                        <input className='b bg-transparent w-full h-full px-4 py-4 text-left appearance-none' type="text" name="Username" />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-between rounded-lg mr-16 my-2'>
                                    <div className=' py-2 text-left font-semibold'>
                                        <label htmlFor="Last Name">Last Name</label>
                                    </div>
                                    <div className='min-w-[300px] rounded-lg shadow-[inset_0_0px_4px_0px_#B2B2B2]'>
                                        <input className='b bg-transparent w-full h-full px-4 py-4 text-left appearance-none' type="text" name="Last Name" />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-between rounded-lg my-2'>
                                    <div className=' py-2 text-left font-semibold'>
                                        <label htmlFor="Dark/Light Mode">Dark/Light Mode</label>
                                    </div>
                                    <div className='min-w-[300px] rounded-lg shadow-[inset_0_0px_4px_0px_#B2B2B2]'>
                                        <input className='b bg-transparent w-full h-full px-4 py-4 text-left appearance-none' type="text" name="Dark/Light Mode" />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-between rounded-lg mr-16 my-2'>
                                    <div className=' py-2 text-left font-semibold'>
                                        <label htmlFor="Email Address">Email Address</label>
                                    </div>
                                    <div className='min-w-[300px] rounded-lg shadow-[inset_0_0px_4px_0px_#B2B2B2]'>
                                        <input className='b bg-transparent w-full h-full px-4 py-4 text-left appearance-none' type="text" name="Email Address" />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-between rounded-lg my-2'>
                                    <div className=' py-2 text-left font-semibold'>
                                        <label htmlFor="Notifications">Notifications</label>
                                    </div>
                                    <div className='min-w-[300px] rounded-lg shadow-[inset_0_0px_4px_0px_#B2B2B2]'>
                                        <input className='b bg-transparent w-full h-full px-4 py-4 text-left appearance-none' type="text" name="Notifications" />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-between rounded-lg mr-16 my-2'>
                                    <div className=' py-2 text-left font-semibold'>
                                        <label htmlFor="Phone Number">Phone Number</label>
                                    </div>
                                    <div className='min-w-[300px] rounded-lg shadow-[inset_0_0px_4px_0px_#B2B2B2]'>
                                        <input className='b bg-transparent w-full h-full px-4 py-4 text-left appearance-none' type="text" name="Phone Number" />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-between rounded-lg my-2'>
                                    <div className=' py-2 text-left font-semibold'>
                                        <label htmlFor="User Role">User Role</label>
                                    </div>
                                    <div className='min-w-[300px] rounded-lg shadow-[inset_0_0px_4px_0px_#B2B2B2]'>
                                        <input className='b bg-transparent w-full h-full px-4 py-4 text-left appearance-none' type="text" name="User Role" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white h-full w-full rounded-2xl p-12 my-16">
                            <div className="flex justify-between items-center bg-gradient-to-r from-primary to-tertiary rounded-full -mt-20 -mx-12 py-4 px-12 text-2xl text-white font-light">
                                <div className="flex items-center">
                                    <img className="mr-4" src="/Settings_W_SQ.png" width="50px"></img>
                                    Venue Settings
                                </div>
                                <p className="text-base w-[400px]">
                                    These are settings for your venue, and will effect all users that are members of the venue.
                                </p>
                            </div>
                            <div className=" grid grid-cols-2 pt-4">
                                <div className='flex flex-col justify-between rounded-lg mr-16 my-2'>
                                    <div className=' py-2 text-left font-semibold'>
                                        <label htmlFor="Venue Name">Venue Name</label>
                                    </div>
                                    <div className='min-w-[300px] rounded-lg shadow-[inset_0_0px_4px_0px_#B2B2B2]'>
                                        <input className='b bg-transparent w-full h-full px-4 py-4 text-left appearance-none' type="text" name="Venue Name" />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-between rounded-lg my-2'>
                                    <div className=' py-2 text-left font-semibold'>
                                        <label htmlFor="Venue Users">Venue Users</label>
                                    </div>
                                    <div className='min-w-[300px] rounded-lg shadow-[inset_0_0px_4px_0px_#B2B2B2]'>
                                        <input className='b bg-transparent w-full h-full px-4 py-4 text-left appearance-none' type="text" name="Venue Users" />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-between rounded-lg mr-16 my-2'>
                                    <div className=' py-2 text-left font-semibold'>
                                        <label htmlFor="Venue Logo">Venue Logo</label>
                                    </div>
                                    <div className='min-w-[300px] rounded-lg shadow-[inset_0_0px_4px_0px_#B2B2B2]'>
                                        <input className='b bg-transparent w-full h-full px-4 py-4 text-left appearance-none' type="text" name="Venue Logo" />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-between rounded-lg my-2'>
                                    <div className=' py-2 text-left font-semibold'>
                                        <label htmlFor="Auto Report Generation">Auto Report Generation</label>
                                    </div>
                                    <div className='min-w-[300px] rounded-lg shadow-[inset_0_0px_4px_0px_#B2B2B2]'>
                                        <input className='b bg-transparent w-full h-full px-4 py-4 text-left appearance-none' type="text" name="Auto Report Generation" />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-between rounded-lg mr-16 my-2'>
                                    <div className=' py-2 text-left font-semibold'>
                                        <label htmlFor="Stakeholders">Stakeholders</label>
                                    </div>
                                    <div className='min-w-[300px] rounded-lg shadow-[inset_0_0px_4px_0px_#B2B2B2]'>
                                        <input className='b bg-transparent w-full h-full px-4 py-4 text-left appearance-none' type="text" name="Stakeholders" />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-between rounded-lg my-2'>
                                    <div className=' py-2 text-left font-semibold'>
                                        <label htmlFor="Venue Type">Venue Type</label>
                                    </div>
                                    <div className='min-w-[300px] rounded-lg shadow-[inset_0_0px_4px_0px_#B2B2B2]'>
                                        <input className='b bg-transparent w-full h-full px-4 py-4 text-left appearance-none' type="text" name="Venue Type" />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-between rounded-lg mr-16 my-2'>
                                    <div className=' py-2 text-left font-semibold'>
                                        <label htmlFor="Service Provider">Service Provider</label>
                                    </div>
                                    <div className='min-w-[300px] rounded-lg shadow-[inset_0_0px_4px_0px_#B2B2B2]'>
                                        <input className='b bg-transparent w-full h-full px-4 py-4 text-left appearance-none' type="text" name="Service Provider" />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-between rounded-lg my-2'>
                                    <div className=' py-2 text-left font-semibold'>
                                        <label htmlFor="API Access">API Access</label>
                                    </div>
                                    <div className='min-w-[300px] rounded-lg shadow-[inset_0_0px_4px_0px_#B2B2B2]'>
                                        <input className='b bg-transparent w-full h-full px-4 py-4 text-left appearance-none' type="text" name="API Access" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div >
        </>
    )
}

export default Test