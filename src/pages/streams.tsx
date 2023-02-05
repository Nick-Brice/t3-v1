import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Sidebar from "../components/sidebar";
import SortableTable from "../components/sortableTable";
import HeaderButton from "../components/headerButton";
import React, { useState } from "react";
//import DraggableTable from "../components/draggableTable2";
import DonutProgress from "../components/donutProgress2";
//import Counter from "../components/counter";
//import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
//import AnimatedProgressProvider from "../components/AnimatedProgressProvider";
//import { easeQuadInOut } from "d3-ease";
import AreaChart from "../components/d3AreaGraph";
import LineGraph from "../components/d3LineGraph";
import ScatterGraph from "../components/d3ScatterGraph";
import DropdownMenu from "../components/sortByDropdownMenu";
import { Item, useSelectState } from "react-stately";
import Lottie from "react-lottie";
import animationData from "../components/circularAnimation.json";
import CircularAnimation from "../components/circularAnimation";
import FormLayout from "../components/formLayout";
import { GetServerSideProps } from "next";
import { VenueSidebarArray } from "../components/venueSidebarArray";
import { prisma } from "../server/db/client";

function Home(props: any) {
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

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,

        isClickToPauseDisabled: true,
    };

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
                    <header className="grid grid-cols-[auto_1fr] grid-rows-1 bg-white px-8 py-4 shadow-md">
                        <div>
                            <h5 className="text-2xl">[Client Name] Products</h5>
                            <h6>Portal / Products / Overview</h6>
                        </div>
                        {/* <div className="flex gap-16 place-self-center">
                            <h6>Overview</h6>
                            <h6>Deliveries</h6>
                            <h6>Stock Checks</h6>
                        </div> */}
                        {/* <div className="flex gap-12 place-self-center ">
                            <div className="relative z-20">
                            <h6 className="z-20 text-white">AAAAA</h6>
                            <div className="absolute z-10 -top-1/2 -left-1/2 bg-red pl-7 pr-12 py-7 border-8 rounded-t-2xl text-white">AAAAAAAAAAA</div>
                            </div>
                            <div className="relative z-10">
                            <h6 className="z-20 pl-4 pt-4 text-white">AA</h6>
                                <div className="absolute z-10 -top-1/2 -left-1/2 bg-red py-12 px-12 border-8 rounded-t-2xl text-transparent">AA</div>
                                </div>
                                <div className="relative z-10">
                                <h6 className="z-20 pl-4 pt-4 text-white">AA</h6>
                                <div className="absolute z-10 -top-1/2 -left-1/2 bg-red py-12 px-12 border-8 rounded-t-2xl text-transparent">AA</div>
                                </div>
                                <div className="relative z-10">
                                <h6 className="z-20 pl-4 pt-4 text-white">AA</h6>
                                <div className="absolute z-10 -top-1/2 -left-1/2 bg-red py-12 px-12 border-8 rounded-t-2xl text-transparent">AA</div>
                                </div>
                                <div className="relative z-10">
                                <h6 className="z-20 pl-4 pt-4 text-white">AA</h6>
                                <div className="absolute z-10 -top-1/2 -left-1/2 bg-red py-12 px-12 border-8 rounded-t-2xl text-transparent">AA</div>
                                </div>
                                
                            </div> */}
                        <div className="flex place-self-center ">
                            <div className="relative z-10 -mr-8">
                                <div className="z-10 rounded-t-2xl border-2 bg-red text-white shadow-md hover:bg-blue-500">
                                    <div className="grid h-[120px] max-w-[150px] place-items-center py-6 pl-6 pr-12 text-center">
                                        <h3>A</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10 -mr-8">
                                <div className="z-10 rounded-t-2xl border-2 bg-red text-white shadow-md hover:bg-blue-500">
                                    <div className="grid h-[120px] max-w-[150px] place-items-center py-6 pl-6 pr-12 text-center">
                                        <h3>A</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10 -mr-8">
                                <div className="z-10 rounded-t-2xl border-2 bg-red text-white shadow-md  hover:bg-blue-500">
                                    <div className="grid h-[120px] max-w-[150px] place-items-center py-6 pl-6 pr-12 text-center">
                                        <h3>Add sdfsadf</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10 -mr-8">
                                <div className="z-10 rounded-t-2xl border-2 bg-red text-white shadow-md hover:bg-blue-500">
                                    <div className="grid h-[120px] max-w-[150px] place-items-center py-6 pl-6 pr-6 text-center">
                                        <h3>A</h3>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="relative -mr-8 z-10">
                                <div className="z-10 bg-red hover:bg-blue-500 py-12 pl-6 pr-6 border-8 rounded-t-2xl text-white">AA</div>
                            </div> */}
                        </div>
                    </header>
                    <div className="absolute inset-x-8 z-50 flex justify-between rounded-2xl bg-gradient-to-br from-primary to-tertiary p-5">
                        <HeaderButton>
                            <div
                                className="flex cursor-pointer select-none flex-wrap items-center text-lg"
                                onClick={() => {
                                    handleLayoutChange();
                                }}
                            >
                                <p className="pr-4">Change View Style</p>
                                <img
                                    className={
                                        layout != "grid"
                                            ? "scale-75 pl-5 opacity-30"
                                            : "scale-75 pl-5"
                                    }
                                    src="/grid-four.svg"
                                />
                                <img
                                    className={
                                        layout != "table" ? "scale-75 opacity-30" : "scale-75"
                                    }
                                    src="/list.svg"
                                />
                            </div>
                        </HeaderButton>
                        <HeaderButton>
                            <div
                                className="flex cursor-pointer select-none flex-wrap  items-center text-lg"
                                onClick={() => setOpenForm(!openForm)}
                            >
                                <p className="pr-4">Add Product</p>
                                <img className="scale-75 pl-1" src="/add-three.svg" />
                            </div>
                        </HeaderButton>
                        {openForm && (
                            <div className="modal absolute left-0 top-0 z-50">
                                <div className=" fixed inset-0 z-50 grid place-content-center">
                                    <div className=" inset-0 z-50 h-full w-full">
                                        <FormLayout setOpenForm={setOpenForm} />
                                    </div>
                                    <div
                                        onClick={() => setOpenForm(false)}
                                        className="fixed inset-0 z-10 backdrop-blur-sm backdrop-brightness-75"
                                    ></div>
                                </div>
                            </div>
                        )}
                        <HeaderButton>
                            <div
                                className="flex h-[35px] cursor-pointer select-none flex-wrap items-center text-lg"
                                onClick={() => setOpenSortBy(!openSortBy)}
                            >
                                {/* <p className="pr-4">
                                            Sort By: 
                                            </p>
                                        <img className="pl-1 scale-75" src="/sort-one.svg" /> */}

                                <DropdownMenu name="field2" label="Field 2" sort={sort}>
                                    {columnNames.map((col, index) => (
                                        <option
                                            onClick={() => {
                                                toggleSort(col);
                                                handleSort(col, sort.order);
                                            }}
                                            value={col}
                                        >
                                            {col}
                                        </option>
                                    ))}
                                    {/* <option onClick={() => { toggleSort('used'); handleSort('used', sort.order) }} value="Option 1">Option 1</option>
                                    <option value="Option 2">Option 2</option>
                                    <option value="Option 3">Option 3</option>
                                    <option value="Option 4">Option 4</option>
                                    <option value="Option 5">Option 5</option>
                                <option value="Option 6">Option 6</option> */}
                                </DropdownMenu>
                            </div>
                        </HeaderButton>
                        <HeaderButton>
                            <div className="flex cursor-pointer select-none flex-wrap items-center text-lg">
                                <p className="pr-4">Download CSV</p>
                                <img className="scale-75 pl-1" src="/download.svg" />
                            </div>
                        </HeaderButton>
                    </div>
                    <div className="mt-20 p-8">
                        {/* <CircularAnimation /> */}
                        <div>{props.users[0].email}</div>
                        <SortableTable
                            data={tableData}
                            layout={layout}
                            onLayoutChange={setLayout}
                            sort={sort}
                            setSort={setSort}
                            tableData={tableData}
                            setTableData={setTableData}
                            topTableData={topTableData}
                            setTopTableData={setTopTableData}
                            bottomTableData={bottomTableData}
                            setBottomTableData={setBottomTableData}
                        />
                        {/* <SortableTable data={tableData2} layout={layout} onLayoutChange={setLayout} /> */}
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
                        <div className="mt-8 w-fit bg-white p-4">
                            <ScatterGraph
                                data={[
                                    { x: 0, y: 20, label: "A" },
                                    { x: 40, y: 50, label: "B" },
                                    { x: 30, y: 70, label: "C" },
                                    { x: 60, y: 80, label: "D" },
                                    { x: 90, y: 10, label: "E" },
                                ]}
                                width={300}
                                height={150}
                            />
                        </div>
                        <LineGraph data={[10, 11, 9, 12, 8, 13]} width={500} height={500} />

                        <div className="mt-8 flex h-[250px] w-[250px] place-content-center rounded-2xl bg-white">
                            <DonutProgress
                                data={90}
                                duration={750}
                                colour="#49cc73"
                                backgroundColour="#ececec"
                                size={250}
                            />
                        </div>
                        <DonutProgress
                            data={90}
                            duration={750}
                            colour="#49cc73"
                            backgroundColour="#ececec"
                            size={500}
                        />
                        <DonutProgress
                            data={90}
                            duration={750}
                            colour="#49cc73"
                            backgroundColour="#ececec"
                            size={50}
                        />
                        <DonutProgress
                            data={90}
                            duration={750}
                            colour="#49cc73"
                            backgroundColour="#ececec"
                            size={1000}
                        />
                        {/* <div className="w-[250px] h-[250px]">
                            <svg viewBox="0 0 100 100">
                            
                            <clipPath id="clip">
                            <path d="M 50 0 a 50 50 0 0 1 0 100 50 50 0 0 1 0 -100 v 8 a 42 42 0 0 0 0 84 42 42 0 0 0 0 -84" />
                            </clipPath>
                            
                            <foreignObject x="0" y="0" width="100" height="100" clip-path="url(#clip)">
                            <div className="gradient" />
                            </foreignObject>
                            </svg>
                        </div> */}
                        {/* <div className="w-[100px]">
                            <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={66}
                            duration={1.4}
                            easingFunction={easeQuadInOut}
                            repeat
                            >
                            {value => {
                                const roundedValue = Math.round(value);
                                return (
                                    <CircularProgressbar
                                    value={value}
                                    text={`${roundedValue}%`}
                                    
                                    
                                    />
                                    );
                                }}
                                </AnimatedProgressProvider>
                                <CircularProgressbar value={60} text={`${60}%`} />
                            </div> */}
                    </div>
                    <div>
                        {/* <DonutProgress data={100} colour="#49cc73" backgroundColour="#D0D0D0" /> */}
                    </div>
                </main>
            </div>
        </>
    );
}
export const getServerSideProps = async () => {
    const users = await prisma?.user.findMany({
        select: {
            email: true,
            name: true,
        },
    });
    // console.log(users);
    return {
        props: { users },
    };
};

export default Home;
