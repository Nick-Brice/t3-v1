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
import { VenueUploadTabMenuArray } from '../../components/venueUploadTabMenuArray';
import { useRouter } from "next/router";
import Breadcrumbs from "../../components/breadcrumbs";
import FormWrapper from "../../components/formWrapper";
import FormContainer from "../../components/formContainer";
import TextInput from "../../components/textInput";
import DropdownInput from "../../components/dropdownInput";
import FormSubmit from "../../components/formSubmit";
import SearchInput from "../../components/searchInput";
import { prisma } from '../../server/db/client';
import AddNewInput from "../../components/addNewInput";

const Home: NextPage = (props) => {
    const router = useRouter();
    const urlPath = router.pathname;

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
            setSort({ column, order: sort.order === 'ascending' ? 'descending' : 'ascending' });
        } else {
            setSort({ column, order: 'descending' });
        }
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

    const productsData = [
        {
            record_id: '1',
            name: 'rPET Cup 200ml',
            weight: '15'
        },
        {
            record_id: '2',
            name: 'rPET Cup 300ml',
            weight: '18'
        },
        {
            record_id: '3',
            name: 'A1234 rPET Cup',
            weight: '10'
        },
        {
            record_id: '4',
            name: 'b333 PET Cup',
            weight: '12'
        }
    ]

    const session = {
        venue: 'Example Venue'
    }

    const handleSubmit = async (event: any) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        const name = event.target['Product Name'].value;
        // const productWeight = productsData[`${name}`].weight;
        // @ts-expect-error
        const productWeight = parseInt(JSON.parse(props.productsData).find(item => item.name == name)?.weight);
        const venue = session.venue;

        // Get data from the form.
        const data = {
            name: name,
            venue: venue,
            product_weight: productWeight
        }

        console.log(data);

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        // API endpoint where we send form data.
        const endpoint = '/api/add-product'

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
                {/* <div className="fixed">
                        <div className="flex flex-col bg-secondaryblack w-screen h-screen p-4"></div>
                    </div> */}
                <div className="w-36"></div> {/* So that the main content lines up with the sidebar */}
                <main className="relative w-full bg-secondarygrey">
                    <header className="grid grid-cols-[auto_1fr] grid-rows-1 bg-white shadow-center-md z-50">
                        <Breadcrumbs title={'[Client Name] Products'} urlPath={urlPath} />
                        <TabMenu data={VenueUploadTabMenuArray} urlPath={urlPath} />
                    </header>

                    <div className="grid grid-cols-[1fr_2fr] relative px-8 ">
                        <div className="p-4">

                            {/* <SortableTable data={tableData} layout={layout} onLayoutChange={setLayout} sort={sort} setSort={setSort} tableData={tableData} setTableData={setTableData} topTableData={topTableData} setTopTableData={setTopTableData} bottomTableData={bottomTableData} setBottomTableData={setBottomTableData} /> */}
                        </div>
                        {// ts-expect-error
                            // props.productsData != null && (
                            //     <div className="bg-red text-black">
                            //         {// ts-expect-error
                            //             JSON.parse(props.productsData)[0].name}
                            //     </div>
                            // )
                        }

                        <div className="">
                            <form className="bg-gradient-to-b relative from-primary to-tertiary text-white rounded-lg" onSubmit={handleSubmit}>
                                <div className="text-xs absolute right-16 p-4">*Required</div>
                                <FormContainer className='pt-8'>
                                    <DropdownInput label='Product Type' options={[{ value: 'Plastic Cup' }, { value: 'Paper Cup' }]} />
                                    <SearchInput label='Product Name' options={// @ts-expect-error
                                        JSON.parse(props.productsData)} />
                                </FormContainer>
                                <FormContainer optional={true} className='bg-[#f6f6f640]'>
                                    <AddNewInput label='Stream' options={[{ value: 'Stream 1' }, { value: 'Stream 2' }]} router={router} urlPath='/upload/add-stream' />
                                    <DropdownInput label='Distributor' options={[{ value: 'Distributor 1' }, { value: 'Distributor 2' }]} />
                                    <TextInput label='Custom Product Name' />
                                    <TextInput label='Custom Product Manufacturer' />
                                    <TextInput label='Custom Product Weight' />
                                    <TextInput label='Custom Product Image' />
                                    <TextInput label='Custom Product Datasheet' />

                                </FormContainer>
                                <FormContainer className='pb-8'>
                                    <FormSubmit />
                                </FormContainer>
                            </form>
                        </div>
                    </div>

                </main>
            </div>
        </>
    )
}

export const getServerSideProps = async () => {
    const data = await prisma?.product_List.findMany({
        select: {
            record_id: true,
            name: true,
            weight: true
        },
    });
    const productsData = JSON.stringify(data);
    console.log(productsData);
    return {
        props: { productsData },
    };
};

export default Home