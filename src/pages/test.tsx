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
import FormWrapper from '../components/formWrapper';
import DropdownInput from "../components/dropdownInput";
import TextInput from "../components/textInput";
import SearchInput from '../components/searchInput';
import FormSubmit from '../components/formSubmit';
import FormContainer from '../components/formContainer';
import DownloadCSV from '../components/downloadCSV2';
import UploadCSV from '../components/uploadCSV';

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

function DummyInput(props: any) {
    return (
        <input type="text" id="name" name="name" required />
    )
}

function Home(props: any) {

    const [data, setData] = useState<any>(null);
    const [openCSV, setOpenCSV] = useState<any>(false);
    const [CSVData, setCSVData] = useState<any>(null);
    const [CSVSteps, setCSVSteps] = useState(1);
    const [CSVType, setCSVType] = useState(null);
    const [columnNames, setColumnNames] = useState(null);
    const [submitError, setSubmitError] = useState<any>(null);
    const [fileName, setFileName] = useState<any>(null);
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

    const handleSubmit = async (event: any) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            name: event.target['First Name'].value,
            email: event.target.Email.value,
        }

        console.log(data);

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        // API endpoint where we send form data.
        const endpoint = '/api/form'

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        }

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        alert(`Is this your name: ${result[0].name}`)
    }

    const handleCSVSubmit = async (event: any) => {
        event.preventDefault();

        // Get data from the form.

        const name = event.target['uploadType'].value;

        console.log(columnNames);

        setCSVType(name);
        setCSVSteps(2);
    }

    const handleCSVStep2 = async (event: any) => {
        event.preventDefault();

        // Get data from the form.

        const streamName = event.target['Stream Name'].value;
        const materials = event.target['Materials'].value;
        const linkedProducts = event.target['Linked Products'].value;
        const wasteCollector = event.target['Waste Collector'].value;

        console.log(streamName);
        console.log(materials);
        console.log(linkedProducts);
        console.log(wasteCollector);

        setSubmitError("Error")

        setCSVSteps(3);
    }

    const optionArray = [
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
        {
            value: 'A'
        },
        {
            value: 'AB'
        },
        {
            value: 'ABC'
        },
        {
            value: 'ABCD'
        },
    ]

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
                    <button onClick={() => { setOpenCSV(true); setCSVSteps(1); }} className="p-2 bg-black text-white rounded-full">Upload via CSV</button>
                    {CSVData != undefined && (
                        <ul>
                            {CSVData.map((row: any, index: any) => (
                                <li key={index}>{JSON.stringify(row)}</li>
                            ))}
                        </ul>
                    )}
                    {openCSV && CSVSteps == 1 && (
                        <div className='absolute modal left-0 top-0 z-50'>
                            <div className=' fixed grid place-content-center inset-0 z-50'>
                                <div className='w-[750px] inset-0 z-50 h-full'>
                                    <div className="flex flex-col bg-gradient-to-r from-primary to-tertiary text-white rounded-2xl p-12">
                                        <form className="" onSubmit={handleCSVSubmit}>
                                            <div className="font-bold text-lg mb-2">
                                                Upload via CSV
                                            </div>
                                            <div>
                                                Use this uploader to add bulk data from your spreadsheets quickly and easily. Make sure you check the layout matches the requirements in the <b>CSV uploader Manual</b>, or it will fail to submit the data.
                                            </div>
                                            <div className="flex mt-2">
                                                <div className="grid place-content-center mr-4">Select type to upload:</div>
                                                <div className='grid place-content-center min-w-[300px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                                                    <select className="appearance-none text-white bg-transparent text-center inline-block w-[300px] h-[40px]" name="uploadType" id="uploadType">
                                                        <option className="text-black bg-transparent focus:text-red" value='delivery'>
                                                            Delivery
                                                        </option>
                                                        <option className="text-black bg-transparent focus:text-red" value='collection'>
                                                            Collection
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="-my-4">
                                                <UploadCSV CSVData={CSVData} setCSVData={setCSVData} columnNames={columnNames} setColumnNames={setColumnNames} fileName={fileName} setFileName={setFileName} />
                                            </div>

                                            <button className="self-center relative my-3 bg-white text-black px-4 py-2 rounded-xl w-full " type="submit">
                                                <div>
                                                    Submit
                                                </div>
                                            </button>
                                            {submitError != null && (

                                                <div className="relative w-full bg-accent font-semibold text-white rounded-lg p-4  text-center">
                                                    Please select a file!
                                                </div>

                                            )}
                                        </form>

                                    </div>
                                </div>
                                <div onClick={() => setOpenCSV(false)} className='fixed inset-0 backdrop-blur-sm backdrop-brightness-75 z-10'></div>
                            </div>
                        </div>
                    )}
                    {openCSV && CSVSteps == 2 && (
                        <div className='absolute modal left-0 top-0 z-50'>
                            <div className=' fixed grid place-content-center inset-0 z-50'>
                                <div className='w-[850px] inset-0 z-50 h-full'>
                                    <div className="">
                                        <form className="bg-gradient-to-b relative from-primary to-tertiary text-white rounded-lg" onSubmit={handleCSVStep2}>
                                            <div className="text-xl font-semibold px-8 py-4">
                                                Upload delivery via CSV
                                            </div>
                                            <div className="text-xs absolute top-4 right-16 p-4">*Required</div>
                                            <div className='flex justify-between px-16'>
                                                <div className="pl-24">
                                                    Required Column
                                                </div>
                                                <div className="pl-16">
                                                    Your Column
                                                </div>
                                                <div className="pr-2">
                                                    Your Units
                                                </div>

                                            </div>
                                            <FormContainer className=''>
                                                <div className="flex">
                                                    <DropdownInput label='Stream Name' options={columnNames} />
                                                    <div className='my-3 ml-2'>

                                                        <div className='grid place-content-center min-w-[100px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                                                            <select className="appearance-none text-white bg-transparent text-center inline-block w-[100px] h-[40px]" name="uploadType" id="uploadType">
                                                                <option className="text-black bg-transparent focus:text-red" value='delivery'>
                                                                    KG
                                                                </option>
                                                                <option className="text-black bg-transparent focus:text-red" value='collection'>
                                                                    Tonnes
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <DropdownInput label='Materials' options={columnNames} />
                                                    <div className='my-3 ml-2'>

                                                        <div className='grid place-content-center min-w-[100px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                                                            <select className="appearance-none text-white bg-transparent text-center inline-block w-[100px] h-[40px]" name="uploadType" id="uploadType">
                                                                <option className="text-black bg-transparent focus:text-red" value='delivery'>
                                                                    KG
                                                                </option>
                                                                <option className="text-black bg-transparent focus:text-red" value='collection'>
                                                                    Tonnes
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </FormContainer>
                                            <FormContainer optional={true} className='bg-[#f6f6f640]'>
                                                <div className="flex">
                                                    <DropdownInput label='Linked Products' options={columnNames} />
                                                    <div className='my-3 ml-2'>

                                                        <div className='grid place-content-center min-w-[100px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <DropdownInput label='Waste Collector' options={columnNames} />
                                                    <div className='my-3 ml-2'>

                                                        <div className='grid place-content-center min-w-[100px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>

                                                        </div>
                                                    </div>
                                                </div>
                                            </FormContainer>
                                            <FormContainer className='pb-8'>
                                                <FormSubmit />
                                                {submitError != null && (

                                                    <div className="relative w-[80%] bg-accent text-white rounded-lg p-4  text-center">
                                                        There are errors on rows 12,14-17,22 in columns Name, Stream
                                                    </div>

                                                )}
                                            </FormContainer>
                                        </form>
                                    </div>
                                </div>
                                <div onClick={() => setOpenCSV(false)} className='fixed inset-0 backdrop-blur-sm backdrop-brightness-75 z-10'></div>
                            </div>
                        </div>
                    )}
                    {/* <DonutProgress data={70} duration={750} colour="#49cc73" backgroundColour="#ececec" size={80} /> */}
                    {data != null && data.map((user: any) => (
                        <div>
                            {user.email}
                        </div>
                    ))}
                    {/* {props.users.map((user: any) => (
                        <div>
                            {user.email}
                        </div>
                    ))} */}
                    {/* <UploadCSV /> */}
                    <DownloadCSV data={
                        dataArray
                        // [
                        //     {
                        //         name: 'Nick',
                        //         age: 25,
                        //         city: "Bath",
                        //         company: "The Rubbish Project"
                        //     },
                        //     {
                        //         name: 'Jack',
                        //         age: 27,
                        //         city: "Bristol",
                        //         company: "The Rubbish Project"
                        //     },
                        //     {
                        //         name: 'Connor',
                        //         age: 27,
                        //         city: "Bristol",
                        //         company: "The Rubbish Project"
                        //     }
                        // ]
                    } />
                    <div className="w-[60%]">
                        <FormWrapper OnSubmit={handleSubmit}>
                            <FormContainer className='pt-8'>
                                <TextInput label='First Name' />
                                <TextInput label='Last Name' />
                            </FormContainer>
                            <FormContainer optional={true} className='bg-[#f6f6f640]'>
                                <SearchInput options={optionArray} />
                                <TextInput label='Email' />
                                <DropdownInput label='Test' options={optionArray} />
                            </FormContainer>
                            <FormContainer className=''>
                                {/* <TextInput label='First Name' /> */}
                                <TextInput label='Last Name' />
                            </FormContainer>
                            <FormContainer className='pb-8'>
                                <FormSubmit />
                            </FormContainer>
                            {/* <DropdownInput label='Test2' options={optionArray} /> */}

                        </FormWrapper>
                    </div>

                    {/* <form onSubmit={handleSubmit} className='bg-gradient-to-l from-primary to-secondary text-white'>
                        <div className="">
                            <label className="" htmlFor="name">Name</label>
                            <DummyInput />
                        </div>

                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" defaultValue='default value' />
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" defaultValue='default value' />
                        <div className='flex'>
                            <div className='flex w-[500px] justify-between rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                                <div className='px-8 py-2'>
                                    Collection Type
                                </div>
                                <div className='min-w-[300px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                                    <input className='b bg-transparent w-full h-full p-2 text-center' type="text" name="email" />
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='flex w-[500px] justify-between rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                                <div className='px-8 py-2'>
                                    <label htmlFor="cars">Choose a car:</label>
                                </div>
                                <div className='grid place-content-center min-w-[300px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                                    <select className="text-white bg-transparent text-center inline-block w-[300px] h-[40px]" name="cars" id="cars">
                                        <option disabled className="text-black text-left font-bold" value={'123'}>
                                            Type 1
                                        </option>
                                        {optionArray.map((choice) => (
                                            <option className="text-black" value={choice.value}>
                                                {choice.value}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                            </div>
                        </div>
                        <label htmlFor="cars">Choose a car:</label>
                        <select className="text-black" name="cars" id="cars" form="carform">
                            {optionArray.map((choice) => (
                                <option value={choice.value}>{choice.value}</option>
                            ))}
                        </select>

                        <button type="submit">Submit</button>
                    </form> */}
                    {/* {data != null ? data.email : ''} */}
                </main>

            </div>
        </>
    );
};

export default Home;
