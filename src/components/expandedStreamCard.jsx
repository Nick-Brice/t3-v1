import Button from './button';
import DonutProgress from './donutProgress2';
import Counter from './counter';
import React from 'react';

export default function BaseExpandedCard(props) {

    const handleIsOpen = () => {
        props.setIsOpen(!props.isOpen);
    }

    // const allowScroll = () => document.body.style.overflow = null

    // React.useEffect(() => {
    //     props.isOpen && (document.body.style.overflow = 'hidden')
    //     return () => {
    //         allowScroll()
    //     }
    // }, [props.isOpen]);

    return (
        <div className='relative bg-white rounded-2xl h-full w-full p-8 shadow-lg'>
            <div className='cursor-pointer absolute right-4 top-2 text-lg text-grey font-semibold' onClick={handleIsOpen}>
                x
            </div>
            <div className=' grid grid-cols-4 grid-rows-1 gap-2 '>
                <div className='flex w-full h-full col-span-2 justify-between'>

                    <div className='flex flex-col mr-16 justify-between'>
                        <div className='flex font-bold '>
                            <div className=''>
                                rPET Cups and Bottles
                            </div>

                        </div>
                        <div className='overflow-auto scroll-p-[2px] scroll-m-1 text-sm  pr-1'>
                            This is the exa This mayaaaa include interesting insights such as the attendance and details about the even
                        </div>
                        <Button className='text-sm px-4 py-2 -mr-16  rounded-2xl bg-secondarygrey'>
                            Download as report
                        </Button>

                    </div>
                </div>
                <div className='flex flex-col col-span-2'>
                    <div className='cursor-pointer select-none relative rounded-3xl px-4 py-6 text-white text-center  bg-gradient-to-r from-[#00a2c3cc] to-[#7571e1cc] hover:from-[#00a2c3] hover:to-[#7571e1]'>
                        <div className='absolute pointer-events-none z-50 rounded-full -left-12 -top-4 border-4 border-primary bg-white'>
                            <div className='p-4'>
                                <img className=' w-[65px] h-[65px] self-center opacity-100' src={"/Stream_Icon_-11.png"}></img>
                            </div>
                        </div>
                        <div className='flex ml-16'>
                            <div>
                                Modify Stream
                            </div>
                            <div className='self-center ml-4'>
                                <img className=' w-[20px] h-[20px] self-center opacity-100' width="15" height="15" src={"/Edit_W_SQ.png"}></img>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 justify-between gap-2 mt-6 text-white'>

                        <Button className='text-sm p-4 bg-gradient-to-r from-[#00a2c3cc] to-[#7571e1cc] hover:from-[#00a2c3] hover:to-[#7571e1] rounded-2xl'>
                            <div>
                                Add Collection
                            </div>
                            <div className='grid place-content-center self-center'>
                                <img className=' w-[20px] h-[20px] self-center opacity-100' width="15" height="15" src={"/Add_W_SQ.png"}></img>
                            </div>
                        </Button>


                        <Button className='text-sm p-4 bg-gradient-to-r from-[#00a2c3cc] to-[#7571e1cc] hover:from-[#00a2c3] hover:to-[#7571e1] rounded-2xl'>
                            <div>
                                Request Collection
                            </div>
                            <div className='grid place-content-center self-center'>
                                <img className=' w-[20px] h-[20px] self-center opacity-100' width="15" height="15" src={"/Collection_W_SQ.png"}></img>
                            </div>
                        </Button>

                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 grid-rows-2 gap-2 mt-2'>


                <div className="relative flex flex-col justify-between w-full h-full border bg-white rounded-2xl row-span-2 shadow-lg p-4">
                    {/* <Button className='absolute top-2 left-2'>
                        <img className=' w-[15px] h-[15px] self-center opacity-100' width="15" height="15" src={"/Tracker_B_SQ.png"}></img>
                    </Button> */}
                    <Button className='absolute top-2 right-2' >
                        <img className=' w-[15px] h-[15px] self-center opacity-100' width="15" height="15" src={"/i_G_SQ.png"}></img>
                    </Button>
                    <div className='t text-center text-xs mb-2 mt-2 h-[35px]'>
                        Stream Capture Rate
                    </div>
                    <div className='flex place-content-center pb-6'>
                        <DonutProgress data={props.rate} duration={750} colour="#49cc73" backgroundColour="#ececec" size={80} />
                    </div>
                </div>
                <div className='relative flex flex-col place-content-center justify-end w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                    {/* <Button className='absolute top-2 left-2'>
                        <img className=' w-[15px] h-[15px] self-center opacity-100' width="15" height="15" src={"/Tracker_B_SQ.png"}></img>
                    </Button> */}
                    <Button className='absolute top-2 right-2' >
                        <img className=' w-[15px] h-[15px] self-center opacity-100' width="15" height="15" src={"/i_G_SQ.png"}></img>
                    </Button>
                    <div className='grid place-content-center text-center text-xs mb-2 mt-2 h-[35px]'>
                        Weight Delivered
                    </div>
                    <div className='flex place-content-center'>
                        <Counter targetValue={12} duration={750} />
                        <span className='font-semibold'>&nbsp;kg</span>
                    </div>
                </div>
                <div className='relative flex flex-col place-content-center justify-end w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                    {/* <Button className='absolute top-2 left-2'>
                        <img className=' w-[15px] h-[15px] self-center opacity-100' width="15" height="15" src={"/Tracker_B_SQ.png"}></img>
                    </Button> */}
                    <Button className='absolute top-2 right-2' >
                        <img className=' w-[15px] h-[15px] self-center opacity-100' width="15" height="15" src={"/i_G_SQ.png"}></img>
                    </Button>
                    <div className='grid place-content-center text-center text-xs mb-2 mt-2 h-[35px]'>
                        Weight Used
                    </div>
                    <div className='flex place-content-center'>
                        <Counter targetValue={12} duration={750} />
                        <span className='font-semibold'>&nbsp;kg</span>
                    </div>
                </div>
                <div className='relative flex flex-col place-content-center justify-end w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                    {/* <Button className='absolute top-2 left-2'>
                        <img className=' w-[15px] h-[15px] self-center opacity-100' width="15" height="15" src={"/Tracker_B_SQ.png"}></img>
                    </Button> */}
                    <Button className='absolute top-2 right-2' >
                        <img className=' w-[15px] h-[15px] self-center opacity-100' width="15" height="15" src={"/i_G_SQ.png"}></img>
                    </Button>
                    <div className='grid place-content-center text-center text-xs mb-2 mt-2 h-[35px]'>
                        Weight Collected
                    </div>
                    <div className='flex place-content-center'>
                        <Counter targetValue={12} duration={750} />
                        <span className='font-semibold'>&nbsp;kg</span>
                    </div>
                </div>
                <div className='relative flex flex-col place-content-center justify-end w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                    <Button className='absolute top-2 left-2'>
                        <img className=' w-[15px] h-[15px] self-center opacity-100' width="15" height="15" src={"/Tracker_B_SQ.png"}></img>
                    </Button>
                    <Button className='absolute top-2 right-2' >
                        <img className=' w-[15px] h-[15px] self-center opacity-100' width="15" height="15" src={"/i_G_SQ.png"}></img>
                    </Button>
                    <div className='grid place-content-center text-center text-xs mb-2 mt-2 h-[35px]'>
                        Total Collections
                    </div>
                    <div className='flex place-content-center'>
                        <Counter targetValue={12} duration={750} />
                        <span className='font-semibold'></span>
                    </div>
                </div>
                <div className='relative flex flex-col place-content-center justify-end w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                    {/* <Button className='absolute top-2 left-2'>
                        <img className=' w-[15px] h-[15px] self-center opacity-100' width="15" height="15" src={"/Tracker_B_SQ.png"}></img>
                    </Button> */}
                    <Button className='absolute top-2 right-2' >
                        <img className=' w-[15px] h-[15px] self-center opacity-100' width="15" height="15" src={"/i_G_SQ.png"}></img>
                    </Button>
                    <div className='grid place-content-center text-center text-xs mb-2 mt-2 h-[35px]'>
                        Weight Sorted
                    </div>
                    <div className='flex place-content-center'>
                        <Counter targetValue={2360} duration={750} />
                        <span className='font-semibold'>&nbsp;kg</span>
                    </div>
                </div>
                <div className='relative flex flex-col place-content-center justify-end w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                    {/* <Button className='absolute top-2 left-2'>
                        <img className=' w-[15px] h-[15px] self-center opacity-100' width="15" height="15" src={"/Tracker_B_SQ.png"}></img>
                    </Button> */}
                    <Button className='absolute top-2 right-2' >
                        <img className=' w-[15px] h-[15px] self-center opacity-100' width="15" height="15" src={"/i_G_SQ.png"}></img>
                    </Button>
                    <div className='grid place-content-center text-center text-xs mb-2 mt-2 h-[35px]'>
                        Stream Purity
                    </div>
                    <div className='flex place-content-center'>
                        <Counter targetValue={60} duration={750} />
                        <span className='font-semibold'>&nbsp;%</span>
                    </div>
                </div>


                {/* <div>
                    <button className="bg-white-50 hover:bg-white-100 rounded-full py-1 drop-shadow px-4 text-sm" onClick={handleIsOpen}>
                        <div className='flex'>
                            <div className='mr-2'>
                                Collapse
                            </div>
                            <img className='opacity-90 w-[10px] h-[10px] self-center' width="15" height="15" src={"/Collapse_B_SQ.png"}></img>
                        </div>
                    </button>
                </div> */}
            </div>
            <div className="pt-2">
                <div className='text-center text-sm mt-3'>
                    Products in Stream
                </div>
                <div className="flex overflow-auto pt-4 pb-2 px-2 -mx-2">

                    <div className="cursor-pointer hover:scale-105 duration-200  flex flex-col justify-between w-[500px] h-full border bg-white rounded-2xl row-span-2 shadow-lg p-4 mr-2">

                        <div className='flex  items-center'>

                            <div className="pr-4 w-[75px]">
                                <img className='' width="70px" height="70px" src={"/Product Icons-02.png"}></img>
                            </div>
                            <div className="flex flex-col text-xs pr-4">
                                <div className="whitespace-nowrap font-bold pb-2">Product 1</div>
                                <div className="whitespace-nowrap">1,123,232 Delivered </div>
                                <div className="whitespace-nowrap">1230123 Used</div>
                                <div className="whitespace-nowrap">1230123 Collected</div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer hover:scale-105 duration-200  flex flex-col justify-between w-[500px] h-full border bg-white rounded-2xl row-span-2 shadow-lg p-4 mr-2">

                        <div className='flex  items-center'>

                            <div className="pr-4 w-[75px]">
                                <img className='' width="70px" height="70px" src={"/Product Icons-02.png"}></img>
                            </div>
                            <div className="flex flex-col text-xs pr-4">
                                <div className="whitespace-nowrap font-bold pb-2">Product 1</div>
                                <div className="whitespace-nowrap">1,123,232 Delivered </div>
                                <div className="whitespace-nowrap">1230123 Used</div>
                                <div className="whitespace-nowrap">1230123 Collected</div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer hover:scale-105 duration-200  flex flex-col justify-between w-[500px] h-full border bg-white rounded-2xl row-span-2 shadow-lg p-4 mr-2">

                        <div className='flex  items-center'>

                            <div className="pr-4 w-[75px]">
                                <img className='' width="70px" height="70px" src={"/Product Icons-02.png"}></img>
                            </div>
                            <div className="flex flex-col text-xs pr-4">
                                <div className="whitespace-nowrap font-bold pb-2">Product 1</div>
                                <div className="whitespace-nowrap">1,123,232 Delivered </div>
                                <div className="whitespace-nowrap">1230123 Used</div>
                                <div className="whitespace-nowrap">1230123 Collected</div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer hover:scale-105 duration-200  flex flex-col justify-between w-[500px] h-full border bg-white rounded-2xl row-span-2 shadow-lg p-4 ">

                        <div className='flex  items-center'>

                            <div className="pr-4 w-[75px]">
                                <img className='' width="70px" height="70px" src={"/Product Icons-02.png"}></img>
                            </div>
                            <div className="flex flex-col text-xs pr-4">
                                <div className="whitespace-nowrap font-bold pb-2">Product 1</div>
                                <div className="whitespace-nowrap">1,123,232 Delivered </div>
                                <div className="whitespace-nowrap">1230123 Used</div>
                                <div className="whitespace-nowrap">1230123 Collected</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}