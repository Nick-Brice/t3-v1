import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Camera, Home as HomeIcon, Config, Equalizer, HamburgerButton, More, Search, Refresh, Share, PreviewOpen, PreviewClose, ZoomIn, ZoomOut, AllApplication, BookmarkOne, LoadingFour, Moon } from "@icon-park/react";
import * as Popover from '@radix-ui/react-popover';
import * as Accordion from '@radix-ui/react-accordion';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import Button from '../components/button';
import ToggleButton from '../components/toggleButton';
import { Item } from 'react-stately';
import List from '../components/gridList';
import Calendar from '../components/calendar';
import { useEffect, useState } from "react";
import { parseDate, getLocalTimeZone, today, isWeekend } from '@internationalized/date';
import { useDateFormatter, useLocale } from 'react-aria';
import RangeCalendar from '../components/rangerCalendar';
import ProductCard from '../components/productcard';
// import BarGraph from '../components/barGraph';
import DownloadPdfButton from '../components/pdfDownload';
import PrintButton from '../components/printButton';
// import Counter from '../components/counter';
// import TextAnimator from '../components/textcounter';
// import AreaChart from '../components/d3AreaGraph';
// import DifferentCounter from '../components/differentCounter';
// import DifferentTextAnimator from '../components/differentTextAnimator';
// import Modal from '../components/modal';
// import MakeLissajour from '../components/d3animation';
// import SortableTable from '../components/sortableTable';
import React from "react";
import { GetServerSideProps } from "next";
// import Layout from "../components/Layout";
// import Post, { PostProps } from "../components/Post";
// import { useSession, getSession } from "next-auth/react";
import DonutProgress from "../components/donutProgress2";
import { PrismaClient } from '@prisma/client'
import { propTypes } from "react-bootstrap/esm/Image";
import TabMenu from '../components/tabMenu';
import { useRouter } from 'next/router';
import Sidebar from "../components/sidebar";
import BreadCrumbs from '../components/breadcrumbs';
import { prisma } from '../server/db/client';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const users = await prisma?.user.findMany({
        select: {
            email: true,
            name: true,
        }
    });
    // console.log(users);
    return {
        props: { users },
    };
};


function Home(props: any) {

    const [data, setData] = useState<any>(null);

    const router = useRouter();
    const urlPath = router.pathname;

    const dataArray: any = [
        {
            title: "Test 1",
            page: "/test",
            imgB: "/Stock_B_SQ.png",
            imgW: "/Stock_W_SQ.png"
        },
        {
            title: "Test 2",
            page: "/products/stock-checks",
            imgB: "/Stock_B_SQ.png",
            imgW: "/Stock_W_SQ.png"
        },
        {
            title: "Test 3",
            page: "/products/stock-checks",
            imgB: "/Stock_B_SQ.png",
            imgW: "/Stock_W_SQ.png"
        }
    ]

    const sidebarArray = [
        {
            title: "Home",
            path: "/home",
            icon: "/Dash_W.png"
        }
    ]

    const handleDeleteClick = async () => {
        const res = await fetch('/api/test', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                key: 'value'
            })
        });
        const json = await res.json();
        console.log(json)
        setData(null);
        // console.log(data)
    };

    const handlePostClick = async () => {
        const res = await fetch('/api/test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                key: 'value'
            })
        });
        const json = await res.json();
        setData(json);
        // console.log(data)
    };

    const handlePutClick = async () => {
        const res = await fetch('/api/test', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                key: 'value'
            })
        });
        console.log(res)
        const json = await res.json();
        setData(json);
        // console.log(data)
    };

    const handleGetClick = async () => {
        const res = await fetch('/api/test');
        const json = await res.json();
        setData(json);
    };

    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="fixed -z-10 h-full w-full bg-secondarygrey"></div>
            <div className="grid grid-cols-[auto_1fr]">
                <Sidebar data={sidebarArray} />
                <div className="w-36"></div>
                <main className="relative w-full bg-secondarygrey">
                    <header className="grid grid-cols-[auto_1fr] grid-rows-1 bg-white px-8 py-4 shadow-md">
                        <BreadCrumbs title={'Test Title'} urlPath={urlPath} />
                        <TabMenu data={dataArray} urlPath={urlPath} />
                    </header>
                    <button onClick={handlePostClick} className="p-2 bg-black text-white rounded-full">Add User</button>
                    <button onClick={handleDeleteClick} className="p-2 bg-black text-white rounded-full">Delete All Users</button>
                    <button onClick={handlePutClick} className="p-2 bg-black text-white rounded-full">Update User</button>
                    <button onClick={handleGetClick} className="p-2 bg-black text-white rounded-full">Get All Users</button>
                    <DonutProgress data={70} duration={750} colour="#49cc73" backgroundColour="#ececec" size={80} />
                    {data != null && data.map((user: any) => (
                        <div>
                            {user.email}
                        </div>
                    ))}
                    {props.users.map((user: any) => (
                        <div>
                            {user.email}
                        </div>
                    ))}
                    {/* {data != null ? data.email : ''} */}
                </main>

            </div>
        </>
    );
};

export default Home;
