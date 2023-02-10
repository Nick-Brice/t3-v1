import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Sidebar from "../../components/sidebar";
import SortableTable from "../../components/sortableTable";
import HeaderButton from "../../components/headerButton";
import React, { useState } from "react";
import DraggableTable from "../../components/draggableTable2";
import DonutProgress from "../../components/donutProgress2";
import Counter from "../../components/counter";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "../../components/AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import AreaChart from "../../components/d3AreaGraph";
import LineGraph from "../../components/d3LineGraph";
import ScatterGraph from "../../components/d3ScatterGraph";
import DropdownMenu from "../../components/sortByDropdownMenu";
import { Item, useSelectState } from "react-stately";
import Lottie from "react-lottie";
// import animationData from "../../components/circularAnimation.json";
import CircularAnimation from "../../components/circularAnimation";
import FormLayout from "../../components/formLayout";
import { VenueSidebarArray } from "../../components/venueSidebarArray";
import TabMenu from "../../components/tabMenu";
import { VenueTrackerTabMenuArray } from "../../components/venueTrackerTabMenuArray";
import { useRouter } from "next/router";
import Breadcrumbs from "../../components/breadcrumbs";


const Home: NextPage = () => {
    const router = useRouter();
    const urlPath = router.pathname;

    const data: {}[] = [
        {
            name: "Nick",
            delivered: 244443,
            collected: 122234,
            rate: 95,
            stream: "Waste",
            test2: 2,
            test3: 3,
            test4: 4,
        },
        {
            name: "Jack",
            delivered: 26345,
            collected: 222355,
            rate: 80,
            stream: "Waste",
            test2: 2,
            test3: 3,
            test4: 4,
        },
        {
            name: "Connor",
            delivered: 26445,
            collected: 1234455,
            rate: 70,
            stream: "Waste",
            test2: 2,
            test3: 3,
            test4: 4,
        },
        {
            name: "Nick1",
            delivered: 24666,
            collected: 123456,
            rate: 90,
            stream: "Waste",
            test2: 2,
            test3: 3,
            test4: 4,
        },
        {
            name: "Jack1",
            delivered: 2622,
            collected: 445666,
            rate: 80,
            stream: "Waste",
            test2: 2,
            test3: 3,
            test4: 4,
        },
        {
            name: "Connor1",
            delivered: 2622,
            collected: 5678,
            rate: 70,
            stream: "Waste",
            test2: 2,
            test3: 3,
            test4: 4,
        },
        {
            name: "Nick2",
            delivered: 24777,
            collected: 77777,
            rate: 90,
            stream: "Waste",
            test2: 2,
            test3: 3,
            test4: 4,
        },
        {
            name: "Jack2",
            delivered: 2654,
            collected: 8876,
            rate: 80,
            stream: "Waste",
            test2: 2,
            test3: 3,
            test4: 4,
        },
        {
            name: "Connor2",
            delivered: 26235,
            collected: 45532,
            rate: 70,
            stream: "Waste",
            test2: 2,
            test3: 3,
            test4: 4,
        },
    ];

    const columnNames = Object.keys(data[0]!);

    const [openForm, setOpenForm] = React.useState(false);

    const [openSortBy, setOpenSortBy] = React.useState(false);

    const [sort, setSort] = React.useState({ column: "", order: "" });
    const [layout, setLayout] = useState("table");
    const [tableData, setTableData] = React.useState(data);
    const [topTableData, setTopTableData] = React.useState(data);
    const [bottomTableData, setBottomTableData] = React.useState(data);

    function hasKey(obj: object, key: string): obj is { [key: string]: any } {
        return key in obj;
    }

    const handleSort = (key: string, order: string) => {
        if (order == "ascending") {
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
            setSort({
                column,
                order: sort.order === "ascending" ? "descending" : "ascending",
            });
        } else {
            setSort({ column, order: "descending" });
        }
    };

    const handleLayoutChange = () => {
        if (layout === "table") {
            setLayout("grid");
        } else {
            setLayout("table");
        }
    };

    const tableData2 = [
        {
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            n: 1400000,
            1500000: 15,
        },
        {
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            11: 12,
            12: 13,
            13: 14,
            n: 1500000,
            1500000: 16,
        },
    ];

    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData,

    //     isClickToPauseDisabled: true,
    // };

    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/Portal_Icon.png" />
            </Head>
            <div className="fixed -z-10 h-full w-full bg-secondarygrey"></div>
            <div className="grid grid-cols-[auto_1fr]">
                <Sidebar data={VenueSidebarArray} />
                {/* <div className="fixed">
                        <div className="flex flex-col bg-secondaryblack w-screen h-screen p-4"></div>
                    </div> */}
                <div className="w-36"></div>{" "}
                {/* So that the main content lines up with the sidebar */}
                <main className="relative w-full bg-secondarygrey">
                    <header className="z-50 grid grid-cols-[auto_1fr] grid-rows-1 bg-white shadow-center-md">
                        <Breadcrumbs title={"[Client Name] Products"} urlPath={urlPath} />
                        <TabMenu data={VenueTrackerTabMenuArray} urlPath={urlPath} />
                    </header>
                    <div className="absolute inset-x-8 z-50 flex justify-between items-center rounded-2xl bg-primary p-5">
                        <div className="w-[400px] text-xs text-white">
                            <p>
                                Welcome to your tracker insights! Here you can view specific stream or product stats from all time, or select a date window to filter your results.
                            </p>
                        </div>
                        <HeaderButton>
                            <div className="flex cursor-pointer select-none flex-wrap items-center text-lg">
                                <p className="pr-4">Product</p>
                                <img className="scale-75 pl-1" src="/download.svg" />
                            </div>
                        </HeaderButton>
                        <HeaderButton>
                            <div className="flex cursor-pointer select-none flex-wrap items-center text-lg">
                                <p className="pr-4">Example Product</p>
                                <img className="scale-75 pl-1" src="/download.svg" />
                            </div>
                        </HeaderButton>
                        <HeaderButton>
                            <div className="flex cursor-pointer select-none flex-wrap items-center text-lg">
                                <p className="pr-4">Date Filter</p>
                                <img className="scale-75 pl-1" src="/download.svg" />
                            </div>
                        </HeaderButton>
                    </div>
                    <div className="mt-20 p-8">
                        <div className="grid grid-cols-4 gap-4 auto-rows-[192.5px]">
                            <div className="flex flex-col rounded-2xl bg-white pt-12 px-4 col-span-1 row-span-2 justify-around">

                                <div className="flex flex-col justify-between w-full h-full rounded-2xl row-span-2">
                                    <div className='t text-center text font-semibold mb-4'>
                                        Average Capture Rate
                                    </div>
                                    <div className='flex place-content-center pb-20'>
                                        <DonutProgress data={90} duration={750} colour="#49cc73" backgroundColour="#ececec" size={200} />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                                <div className='text-center font-semibold mb-8'>
                                    Total Collections
                                </div>
                                <div className='flex place-content-center'>
                                    <Counter className='text-3xl' targetValue={15} duration={750} />
                                </div>
                            </div>
                            <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                                <div className='text-center font-semibold mb-8'>
                                    Total Collections
                                </div>
                                <div className='flex place-content-center'>
                                    <Counter className='text-3xl' targetValue={15} duration={750} />
                                </div>
                            </div>
                            <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                                <div className='text-center font-semibold mb-8'>
                                    Total Collections
                                </div>
                                <div className='flex place-content-center'>
                                    <Counter className='text-3xl' targetValue={15} duration={750} />
                                </div>
                            </div>
                            <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                                <div className='text-center font-semibold mb-8'>
                                    Total Collections
                                </div>
                                <div className='flex place-content-center'>
                                    <Counter className='text-3xl' targetValue={15} duration={750} />
                                </div>
                            </div>
                            <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                                <div className='text-center font-semibold mb-8'>
                                    Total Collections
                                </div>
                                <div className='flex place-content-center'>
                                    <Counter className='text-3xl' targetValue={15} duration={750} />
                                </div>
                            </div>
                            <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                                <div className='text-center font-semibold mb-8'>
                                    Total Collections
                                </div>
                                <div className='flex place-content-center'>
                                    <Counter className='text-3xl' targetValue={15} duration={750} />
                                </div>
                            </div>
                            <div className="grid place-content-center bg-white  col-span-2 row-span-2 rounded-2xl shadow-lg">
                                <div className="text-center font-semibold">Title</div>
                                <ScatterGraph
                                    data={[
                                        { x: 0, y: 20, label: "A" },
                                        { x: 40, y: 50, label: "B" },
                                        { x: 30, y: 70, label: "C" },
                                        { x: 60, y: 80, label: "D" },
                                        { x: 90, y: 10, label: "E" },
                                    ]}
                                    width={550}
                                    height={350}
                                />

                            </div>
                            <div className="grid place-content-center bg-white  col-span-2 row-span-2 rounded-2xl shadow-lg">
                                <div className="text-center font-semibold">Title</div>
                                <ScatterGraph
                                    data={[
                                        { x: 0, y: 20, label: "A" },
                                        { x: 40, y: 50, label: "B" },
                                        { x: 30, y: 70, label: "C" },
                                        { x: 60, y: 80, label: "D" },
                                        { x: 90, y: 10, label: "E" },
                                    ]}
                                    width={550}
                                    height={350}
                                />

                            </div>
                            <div className="flex flex-col rounded-2xl bg-white pt-12 px-4 col-span-1 row-span-2 justify-around">

                                <div className="flex flex-col justify-between w-full h-full rounded-2xl row-span-2">
                                    <div className='t text-center text font-semibold mb-4'>
                                        Average Capture Rate
                                    </div>
                                    <div className='flex place-content-center pb-20'>
                                        <DonutProgress data={90} duration={750} colour="#49cc73" backgroundColour="#ececec" size={200} />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                                <div className='text-center font-semibold mb-8'>
                                    Total Collections
                                </div>
                                <div className='flex place-content-center'>
                                    <Counter className='text-3xl' targetValue={15} duration={750} />
                                </div>
                            </div>
                            <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                                <div className='text-center font-semibold mb-8'>
                                    Total Collections
                                </div>
                                <div className='flex place-content-center'>
                                    <Counter className='text-3xl' targetValue={15} duration={750} />
                                </div>
                            </div>
                            <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                                <div className='text-center font-semibold mb-8'>
                                    Total Collections
                                </div>
                                <div className='flex place-content-center'>
                                    <Counter className='text-3xl' targetValue={15} duration={750} />
                                </div>
                            </div>
                            <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                                <div className='text-center font-semibold mb-8'>
                                    Total Collections
                                </div>
                                <div className='flex place-content-center'>
                                    <Counter className='text-3xl' targetValue={15} duration={750} />
                                </div>
                            </div>
                            <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                                <div className='text-center font-semibold mb-8'>
                                    Total Collections
                                </div>
                                <div className='flex place-content-center'>
                                    <Counter className='text-3xl' targetValue={15} duration={750} />
                                </div>
                            </div>
                            <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                                <div className='text-center font-semibold mb-8'>
                                    Total Collections
                                </div>
                                <div className='flex place-content-center'>
                                    <Counter className='text-3xl' targetValue={15} duration={750} />
                                </div>
                            </div>
                        </div>
                        <div className=" pt-12">
                            <div className="font-semibold text-center">
                                Deliveries
                            </div>
                            <SortableTable data={tableData} layout={layout} onLayoutChange={setLayout} sort={sort} setSort={setSort} tableData={tableData} setTableData={setTableData} topTableData={topTableData} setTopTableData={setTopTableData} bottomTableData={bottomTableData} setBottomTableData={setBottomTableData} />
                        </div>
                        <div className=" pt-12">
                            <div className="font-semibold text-center">
                                Collections
                            </div>
                            <SortableTable data={tableData} layout={layout} onLayoutChange={setLayout} sort={sort} setSort={setSort} tableData={tableData} setTableData={setTableData} topTableData={topTableData} setTopTableData={setTopTableData} bottomTableData={bottomTableData} setBottomTableData={setBottomTableData} />
                        </div>

                        {/* <SortableTable data={tableData} layout={layout} onLayoutChange={setLayout} sort={sort} setSort={setSort} tableData={tableData} setTableData={setTableData} topTableData={topTableData} setTopTableData={setTopTableData} bottomTableData={bottomTableData} setBottomTableData={setBottomTableData} />
                        
                        <DropdownMenu label="Favorite Color">
                            <Item>Red</Item>
                            <Item>Orange</Item>
                            <Item>Yellow</Item>
                            <Item>Green</Item>
                            <Item>Blue</Item>
                            <Item>Purple</Item>
                            <Item>Black</Item>
                            <Item>White</Item>
                            <Item>Lime</Item>
                            <Item>Fushsia</Item>
                        </DropdownMenu>
                        <AreaChart data={[10, 11, 9, 12, 8, 13]} width={300} height={150} />
                        <div className="p-4 bg-white w-fit mt-8">
                            <ScatterGraph data={[
                                { x: 0, y: 20, label: 'A' },
                                { x: 40, y: 50, label: 'B' },
                                { x: 30, y: 70, label: 'C' },
                                { x: 60, y: 80, label: 'D' },
                                { x: 90, y: 10, label: 'E' }
                            ]} width={300} height={150} />
                        </div>
                        <LineGraph data={[10, 11, 9, 12, 8, 13]} width={500} height={500} />

                        <div className="w-[250px] h-[250px] flex place-content-center bg-white rounded-2xl mt-8">
                            <DonutProgress data={90} duration={750} colour="#49cc73" backgroundColour="#ececec" size={250} />
                        </div>
                        <DonutProgress data={90} duration={750} colour="#49cc73" backgroundColour="#ececec" size={500} />
                        <DonutProgress data={90} duration={750} colour="#49cc73" backgroundColour="#ececec" size={50} />
                        <DonutProgress data={90} duration={750} colour="#49cc73" backgroundColour="#ececec" size={1000} />
                         */}
                    </div>
                </main>
            </div>
        </>
    );
};

export default Home;
