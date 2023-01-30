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
import { PrismaClient } from '@prisma/client'
import { propTypes } from "react-bootstrap/esm/Image";

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


function Home(props:any) {

    const [posts, setPosts] = React.useState<any>(null)

    // React.useEffect(() => {
    //     const dummy = async () => {
    //         const posts = await prisma?.user.findMany({
    //             select: {
    //                 email: true,
    //                 name: true,
    //             }
    //         });
    //         setPosts(posts)
    //         console.log(posts)
    //     }
    //     dummy();
    // }, [])

    // const tableData = [
    //     {
    //         name: "Nick",
    //         used: 24,
    //         captured: "Bath",
    //         rate: 90
    //     },
    //     {
    //         name: "Jack",
    //         used: 26,
    //         captured: "Bristol",
    //         rate: 80
    //     },
    //     {
    //         name: "Connor",
    //         used: 26,
    //         captured: "Bristol",
    //         rate: 70
    //     },
    //     {
    //         name: "Nick1",
    //         used: 24,
    //         captured: "Bath",
    //         rate: 90
    //     },
    //     {
    //         name: "Jack1",
    //         used: 26,
    //         captured: "Bristol",
    //         rate: 80
    //     },
    //     {
    //         name: "Connor1",
    //         used: 26,
    //         captured: "Bristol",
    //         rate: 70
    //     },
    //     {
    //         name: "Nick2",
    //         used: 24,
    //         captured: "Bath",
    //         rate: 90
    //     },
    //     {
    //         name: "Jack2",
    //         used: 26,
    //         captured: "Bristol",
    //         rate: 80
    //     },
    //     {
    //         name: "Connor2",
    //         used: 26,
    //         captured: "Bristol",
    //         rate: 70
    //     },
    // ];

    var temp = new Date();
    var dd = String(temp.getDate()).padStart(2, '0');
    var mm = String(temp.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = temp.getFullYear();

    let todaysDate = `${yyyy}-${mm}-${dd}`;

    let [date, setDate] = useState(parseDate(todaysDate));
    let formatter = useDateFormatter({ dateStyle: 'full' });

    let now = today(getLocalTimeZone());
    let disabledRanges = [
        [now.add({ days: 4 }), now.add({ days: 5 })],
        [now.add({ days: 14 }), now.add({ days: 16 })],
        [now.add({ days: 23 }), now.add({ days: 24 })]
    ];

    let { locale } = useLocale();
    let isDateUnavailable = (date: any) =>
        isWeekend(date, locale) ||
        disabledRanges.some((interval) =>
            date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0
        );

    let [focusedDate, setFocusedDate] = useState(date);

    let [rangeDate, setRangeDate] = useState({
        start: today(getLocalTimeZone()),
        end: today(getLocalTimeZone()).add({ days: 1 })
    });
    let [focusedRangeDate, setFocusedRangeDate] = useState(date)

    const primary = "#00A2C3";
    const primaryWhite = "#FFFFFF60";
    const secondaryWhite = '#f6f6f6';
    const stroke = 4;
    const size = "200";
    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* {posts != null && posts.map((post:any) => (
                <div key={post.id} className="post">
                    {post}
                </div>
            ))} */}
            <div>
                {props.users[0].email}
            </div>

            {/* {posts != null && (
                <div>
                    {posts[0].name}
                </div>
            )} */}


            {/* <div>
        <MakeLissajour />
      </div>
      <div>
        <SortableTable data={tableData} />
      </div>
      
        <div className="top-0 left-0">

          <div>
            <Modal />
          </div>
          <div>
            <Counter targetValue={124455666} />
          </div>
          <div>
            <TextAnimator targetText={"Hello World asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd"} />
          </div>
        </div> */}

            {/* <main id="print-area" className="flex flex-col items-center justify-center min-h-screen">
                <div>

                    <DownloadPdfButton pdfName="my-pdf.pdf" printAreaId="print-area" />

                </div>
                <div>
                    <PrintButton printAreaId={"print-area"} />
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 w-3/4">
                    <div>
                        <ProductCard title="Product Name" img="favicon.ico" used="1234" captured="3333" stream="Waste" rate="95">
                        </ProductCard>
                    </div>
                    <div>
                        <Calendar
                            aria-label="Date (controlled)"
                            minValue={today(getLocalTimeZone())}
                            isDateUnavailable={isDateUnavailable}
                            focusedValue={focusedDate}
                            onFocusChange={setFocusedDate}
                            value={date}
                            onChange={setDate} />
                        <p>Selected date: {formatter.format(date.toDate(getLocalTimeZone()))}</p>
                        <p>Current date: {formatter.format(focusedDate.toDate(getLocalTimeZone()))}</p>
                        <div>{String(date)}</div>
                    </div>
                    <div>
                        <RangeCalendar
                            aria-label="Date (controlled)"
                            minValue={today(getLocalTimeZone())}
                            isDateUnavailable={isDateUnavailable}
                            value={rangeDate}
                            onChange={setRangeDate} />
                        <p>Selected date range: {formatter.formatRange(rangeDate.start.toDate(getLocalTimeZone()), rangeDate.end.toDate(getLocalTimeZone()))}  </p>
                        <div>{String(rangeDate.start)} to {String(rangeDate.end)}</div>
                    </div>
                    <Button intent="secondary" onPress={() => alert('Button pressed!')}>
                        Press me
                    </Button>
                    <ToggleButton>
                        Pin
                    </ToggleButton>
                    <List
                        aria-label="Example List"
                        selectionMode="multiple"
                        selectionBehavior="replace"
                    >
                        <Item textValue="Stream 1">
                            Stream 1
                            <div className="p-2">
                                <Button onPress={() => alert(`Info for Stream 1...`)}>Info</Button>
                            </div>
                        </Item>
                        <Item textValue="Stream 2">
                            Stream 2
                            <div className="p-2">
                                <Button onPress={() => alert(`Info for Stream 2...`)}>Info</Button>
                            </div>
                        </Item>
                        <Item textValue="Stream 3">
                            Stream 3
                            <div className="p-2">
                                <Button onPress={() => alert(`Info for Stream 3...`)}>Info</Button>
                            </div>
                        </Item>
                        <Item textValue="Stream 4">
                            Stream 4
                            <div className="p-2">
                                <Button onPress={() => alert(`Info for Stream 4...`)}>Info</Button>
                            </div>
                        </Item>
                    </List>
                </div>
                <div className="grid items-center justify-center grid-cols-3 gap-4 px-4 py-16 bg-white dark:bg-secondaryblack">
                    <div>
                        <Popover.Root>
                            <Popover.Trigger className="p-2 text-white bg-black dark:bg-white rounded-xl dark:text-black">More info</Popover.Trigger>
                            <Popover.Portal>
                                <Popover.Content className="p-2 text-white bg-primary dark:bg-primarydark rounded-xl">
                                    Some more info…
                                    <Popover.Arrow className="fill-primary dark:fill-primarydark" />
                                </Popover.Content>
                            </Popover.Portal>
                        </Popover.Root>
                    </div>
                    <div>
                        <Accordion.Root className="w-[300px] rounded-xl bg-black text-white w" type="single" defaultValue="item-1" collapsible>
                            <Accordion.Item className="p-4 border-b border-white" value="item-1">
                                <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
                                <Accordion.Content className="text-primary">Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
                            </Accordion.Item>

                            <Accordion.Item className="p-4 border-t border-b border-white" value="item-2">
                                <Accordion.Trigger>Is it unstyled?</Accordion.Trigger>
                                <Accordion.Content className="text-primary">
                                    Yes. It's unstyled by default, giving you freedom over the look and feel.
                                </Accordion.Content>
                            </Accordion.Item>

                            <Accordion.Item className="p-4 border-t border-white" value="item-3">
                                <Accordion.Trigger>Can it be animated?</Accordion.Trigger>
                                <Accordion.Content className="text-primary">
                                    <div className="AccordionContentText">
                                        Yes! You can animate the Accordion with CSS or JavaScript.
                                    </div>
                                </Accordion.Content>
                            </Accordion.Item>
                        </Accordion.Root>
                    </div>
                    <div>
                        <AlertDialog.Root>
                            <AlertDialog.Trigger asChild>
                                <button className="p-2 text-white bg-red-500 rounded-xl">Delete account</button>
                            </AlertDialog.Trigger>
                            <AlertDialog.Portal className="">
                                <AlertDialog.Overlay className="fixed" />
                                <AlertDialog.Content className="fixed p-4 text-white -translate-x-1/2 -translate-y-1/2 bg-black rounded-xl top-1/2 left-1/2">
                                    <AlertDialog.Title className="font-bold">Are you absolutely sure?</AlertDialog.Title>
                                    <AlertDialog.Description className="">
                                        This action cannot be undone. This will permanently delete your account and remove your
                                        data from our servers.
                                    </AlertDialog.Description>
                                    <div className="flex justify-around">
                                        <div className="w-[250px]"></div>
                                        <AlertDialog.Cancel asChild>
                                            <button className="pl-2 pr-2 font-semibold text-black rounded-full bg-secondarywhite">Cancel</button>
                                        </AlertDialog.Cancel>
                                        <AlertDialog.Action asChild>
                                            <button className="pl-2 pr-2 font-semibold text-white bg-red-500 rounded-full">Yes, delete account</button>
                                        </AlertDialog.Action>
                                    </div>
                                </AlertDialog.Content>
                            </AlertDialog.Portal>
                        </AlertDialog.Root>
                    </div>
                    <div>
                        <form>
                            <div className="flex items-center text-white bg-black w-fit">
                                <Checkbox.Root className="" defaultChecked id="c1">
                                    <Checkbox.Indicator className="">
                                        <CheckIcon className="" />
                                    </Checkbox.Indicator>
                                </Checkbox.Root>
                                <label className="" htmlFor="c1">
                                    Accept terms and conditions.
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 bg-gradient-to-b from-white to-secondarywhite dark:from-secondaryblack dark:to-black">
                    <button>
                        <Moon className="w-fit" theme="two-tone" size={size} fill={[primary, primaryWhite]} strokeWidth={stroke} onClick={() => document.getElementById('main')?.classList.toggle("dark")} /></button>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="p-6 transition duration-500 ease-in-out delay-300 drop-shadow-xl rounded-3xl w-fit h-fit bg-primarylight bg-gradient-to-br from-primarylight to-primarylight-700 dark:from-secondarylight dark:to-secondary hover:from-red-500 hover:to-accent">
                            <Camera className="w-fit" theme="two-tone" size={size} fill={[secondaryWhite, primaryWhite]} strokeWidth={stroke} onClick={() => console.log("Clicked")} />
                        </div>
                        <div className="drop-shadow-xl rounded-3xl w-fit h-fit bg-primarylight bg-gradient-to-br from-primarylight to-primarylight-700">
                            <HamburgerButton className="w-fit" theme="two-tone" size={size} fill={[primary, primaryWhite]} strokeWidth={stroke} onClick={() => console.log("Clicked")} />
                        </div>
                        <div className="drop-shadow-xl rounded-3xl w-fit h-fit bg-primarylight bg-gradient-to-br from-primarylight to-primarylight-700">
                            <More className="w-fit" theme="two-tone" size={size} fill={[primary, primaryWhite]} strokeWidth={stroke} onClick={() => console.log("Clicked")} />
                        </div>
                        <div className="drop-shadow-xl rounded-3xl w-fit h-fit bg-primarylight">
                            <Search className="w-fit" theme="two-tone" size={size} fill={[primary, primaryWhite]} strokeWidth={stroke} onClick={() => console.log("Clicked")} />
                        </div>
                        <div className="drop-shadow-xl rounded-3xl w-fit h-fit bg-primarylight">
                            <Refresh className="w-fit" theme="two-tone" size={size} fill={[primary, primaryWhite]} strokeWidth={stroke} onClick={() => console.log("Clicked")} />
                        </div>
                        <div className="drop-shadow-xl rounded-3xl w-fit h-fit bg-primarylight">
                            <Share className="w-fit" theme="two-tone" size={size} fill={[primary, primaryWhite]} strokeWidth={stroke} onClick={() => console.log("Clicked")} />
                        </div>
                        <div className="drop-shadow-xl rounded-3xl w-fit h-fit bg-primarylight">
                            <HomeIcon className="w-fit" theme="two-tone" size={size} fill={[primary, primaryWhite]} strokeWidth={stroke} onClick={() => console.log("Clicked")} />
                        </div>
                        <div className="drop-shadow-xl rounded-3xl w-fit h-fit bg-primarylight">
                            <Config className="w-fit" theme="two-tone" size={size} fill={[primary, primaryWhite]} strokeWidth={stroke} onClick={() => console.log("Clicked")} />
                        </div>
                        <div className="drop-shadow-xl rounded-3xl w-fit h-fit bg-primarylight">
                            <Equalizer className="w-fit" theme="two-tone" size={size} fill={[primary, primaryWhite]} strokeWidth={stroke} onClick={() => console.log("Clicked")} />
                        </div>
                        <div className="drop-shadow-xl rounded-3xl w-fit h-fit bg-primarylight">
                            <PreviewOpen className="w-fit" theme="two-tone" size={size} fill={[primary, primaryWhite]} strokeWidth={stroke} onClick={() => console.log("Clicked")} />
                        </div>
                        <div className="drop-shadow-xl rounded-3xl w-fit h-fit bg-primarylight">
                            <PreviewClose className="w-fit" theme="two-tone" size={size} fill={[primary, primaryWhite]} strokeWidth={stroke} onClick={() => console.log("Clicked")} />
                        </div>
                        <div className="drop-shadow-xl rounded-3xl w-fit h-fit bg-primarylight">
                            <ZoomIn className="w-fit" theme="two-tone" size={size} fill={[primary, primaryWhite]} strokeWidth={stroke} onClick={() => console.log("Clicked")} />
                        </div>
                        <div className="drop-shadow-xl rounded-3xl w-fit h-fit bg-primarylight">
                            <ZoomOut className="w-fit" theme="two-tone" size={size} fill={[primary, primaryWhite]} strokeWidth={stroke} onClick={() => console.log("Clicked")} />
                        </div>
                        <div className="drop-shadow-xl rounded-3xl w-fit h-fit bg-primarylight">
                            <AllApplication className="w-fit" theme="two-tone" size={size} fill={[primary, primaryWhite]} strokeWidth={stroke} onClick={() => console.log("Clicked")} />
                        </div>
                        <div className="drop-shadow-xl rounded-3xl w-fit h-fit bg-primarylight">
                            <BookmarkOne className="w-fit" theme="two-tone" size={size} fill={[primary, primaryWhite]} strokeWidth={stroke} onClick={() => console.log("Clicked")} />
                        </div>
                        <div className="w-fit h-fit animate-spin">
                            <LoadingFour className="w-fit" theme="two-tone" size={size} fill={[primary, primaryWhite]} strokeWidth={stroke} onClick={() => console.log("Clicked")} />
                        </div>
                    </div>
                    <table className="w-full text-sm bg-white border-collapse shadow-sm rounded-xl">
                        <thead className="text-white bg-secondaryblack">
                            <tr>
                                <th className="p-4 font-semibold text-left rounded-l-xl">State</th>
                                <th className="p-4 font-semibold text-left">City0000000000000000</th>
                                <th className="p-4 font-semibold text-left">City</th>
                                <th className="p-4 font-semibold text-left">City</th>
                                <th className="p-4 font-semibold text-left">City</th>
                                <th className="p-4 font-semibold text-left">City</th>
                                <th className="p-4 font-semibold text-left">City</th>
                                <th className="p-4 font-semibold text-left">City</th>
                                <th className="p-4 font-semibold text-left rounded-r-xl">City</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr className="rounded-full hover:bg-[#ECECEC]">
                                <td className="p-4 mb-8 font-semibold text-black border-r rounded-l-xl border-secondaryblack"><div className="rounded-l-xl">Indiana</div></td>
                                <td className="p-4 text-black border-r border-secondaryblack"><div className="">Indianapolis</div></td>
                                <td className="p-4 text-black border-r border-secondaryblack"><div className="">Indianapolis</div></td>
                                <td className="p-4 text-black border-r border-secondaryblack"><div className="">Indianapolis</div></td>
                                <td className="p-4 text-black border-r border-secondaryblack"><div className="">Indianapolis</div></td>
                                <td className="p-4 text-black border-r border-secondaryblack"><div className="">Indianapolis</div></td>
                                <td className="p-4 text-black border-r border-secondaryblack"><div className="">Indianapolis</div></td>
                                <td className="p-4 text-black border-r border-secondaryblack"><div className="">Indianapolis</div></td>
                                <td className="p-4 text-black rounded-r-xl"><div className="rounded-r-xl">Indianapolis</div></td>
                            </tr>
                            <tr className="hover:bg-[#ECECEC]">
                                <td className="p-4 font-semibold text-black border-r rounded-l-xl border-secondaryblack">Ohio</td>
                                <td className="p-4 text-black border-r border-secondaryblack">Columbus</td>
                                <td className="p-4 text-black border-r border-secondaryblack">Columbus</td>
                                <td className="p-4 text-black border-r border-secondaryblack">Columbus</td>
                                <td className="p-4 text-black border-r border-secondaryblack">Columbus</td>
                                <td className="p-4 text-black border-r border-secondaryblack">Columbus</td>
                                <td className="p-4 text-black border-r border-secondaryblack">Columbus</td>
                                <td className="p-4 text-black border-r border-secondaryblack">Columbus</td>
                                <td className="p-4 text-black rounded-r-xl">Columbus</td>
                            </tr>
                            <tr className="hover:bg-[#ECECEC]">
                                <td className="p-4 font-semibold text-black border-r rounded-l-xl border-secondaryblack">Michigan</td>
                                <td className="p-4 text-black border-r border-secondaryblack">Detroit</td>
                                <td className="p-4 text-black border-r border-secondaryblack">Detroit</td>
                                <td className="p-4 text-black border-r border-secondaryblack">Detroit</td>
                                <td className="p-4 text-black border-r border-secondaryblack">Detroit</td>
                                <td className="p-4 text-black border-r border-secondaryblack">Detroit</td>
                                <td className="p-4 text-black border-r border-secondaryblack">Detroit</td>
                                <td className="p-4 text-black border-r border-secondaryblack">Detroit</td>
                                <td className="p-4 text-black rounded-r-xl">Detroit</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <section className="text-gray-600 body-font">
                    <div className="container flex flex-wrap items-center px-5 py-24 mx-auto">
                        <div className="pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0">
                            <h1 className="text-3xl font-medium text-gray-900 title-font">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
                            <p className="mt-4 leading-relaxed">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                        </div>
                        <div className="flex flex-col w-full p-8 mt-10 bg-gray-100 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
                            <h2 className="mb-5 text-lg font-medium text-gray-900 title-font">Sign Up</h2>
                            <div className="relative mb-4">
                                <label htmlFor="full-name" className="text-sm leading-7 text-gray-600">Full Name</label>
                                <input type="text" id="full-name" name="full-name" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="text-sm leading-7 text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
                            </div>
                            <button className="px-8 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Button</button>
                            <p className="mt-3 text-xs text-gray-500">Literally you probably haven't heard of them jean shorts.</p>
                        </div>
                    </div>
                </section>
            </main> */}
            {/* </div> */}
        </>
    );
};

export default Home;
