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
import { VenueHomeTabMenuArray } from '../../components/venueHomeTabMenuArray';
import { useRouter } from "next/router";
import Breadcrumbs from "../../components/breadcrumbs";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Test: NextPage = () => {
    const router = useRouter();
    const urlPath = router.pathname;

    const [showMenuText, setShowMenuText] = useState<string | null>(null);

    const handleHover = (tab: string | null) => {
        setShowMenuText(tab);
    };

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
            setSort({
                column,
                order: sort.order == "ascending" ? "descending" : "ascending",
            });
        } else {
            setSort({ column, order: "descending" });
        }
        console.log(sort);
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
                        <Breadcrumbs title={'[Client Name] Products'} urlPath={urlPath} />
                        <TabMenu data={VenueHomeTabMenuArray} urlPath={urlPath} />

                    </header>

                    {/* <Player
                        autoplay
                        loop
                        src="/circularAnimation.json"
                        speed={0.5}
                    >
                    </Player> */}
                    {/* <iframe src="https://discord.com/widget?id=1072220379596197988&theme=dark" width="350" height="500" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe> */}

                    <div className="flex bg-gradient-to-b from-primary to-tertiary h-[300px] z-10 p-8 py-4">
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <div className="grid place-content-center bg-white rounded-full h-[120px] w-[120px]">
                                    <img width={60} src="/User_B_SQ.png" />
                                </div>
                                <div className="flex flex-col place-content-center justify-between w-fit h-fit bg-[#f6f6f620] text-white pr-6 py-4 pl-16 -ml-10 rounded-xl">
                                    <div className="font-bold">Example User</div>
                                    <div>Company Name</div>
                                    <div>Company Type</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="z-50 -mt-[250px]">
                        <img className="h-[210px] mt-12 object-cover" src="/Rubbish_Border_XL-07.svg" />
                    </div>
                    <div className="-mt-12 px-32 mr-4 max-w-[2000px]">
                        <CircularAnimation />
                    </div>

                </main>
            </div>
        </>
    );
};

export default Test;
