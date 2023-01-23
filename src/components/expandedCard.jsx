import Button from './button';
import DonutProgress from './donutProgress2';
import Counter from './counter';
import React from 'react';

export default function ExpandedCard(props) {

    const handleIsOpen = () => {
        props.setIsOpen(!props.isOpen);
    }

    const allowScroll = () => document.body.style.overflow = null

    React.useEffect(() => {
        props.isOpen && (document.body.style.overflow = 'hidden')
        return () => {
            allowScroll()
        }
    }, [props.isOpen]);

    return (
        <div className='bg-white rounded-2xl h-full w-full p-8 shadow-lg grid grid-cols-4 grid-rows-4 gap-2 '>
            <div className='flex w-full h-full col-span-3'>
                <div className='flex flex-col basis-1/4'>
                    <img className=' w-[90px] h-[90px] self-center' src={"/Cup_PET.png"}></img>

                </div>
                <div className='flex flex-col basis-3/4'>
                    <div className='flex font-bold justify-between'>
                        <div className=''>
                            rPET Cup [500ml] R67123
                        </div>
                        <Button className="bg-white hover:bg-white-100 rounded-full py-1 drop-shadow px-4 text-sm" intent="secondary">
                            <div className='flex place-content-center'>
                                <div className='mr-2 self-center text-xs'>
                                    Edit
                                </div>
                                <div className='self-center'>
                                    <img className='opacity-60 w-[10px] h-[10px] self-center' width="15" height="15" src={"/Edit_B_SQ.png"}></img>
                                </div>
                            </div>
                        </Button>
                    </div>
                    <div className='overflow-auto scroll-p-[2px] scroll-m-1 text-sm max-h-[60px] pr-1'>
                        This is the exa This may include interesting insights such as the attendance and details about the even
                    </div>

                </div>
            </div>
            <div className='flex flex-col justify-between w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                <div className='text-center text-xs mb-4'>
                    Products Used
                </div>
                <div className='flex place-content-center'>
                    <Counter targetValue={props.used} duration={750} className="" />
                </div>
            </div>
            <div className="flex flex-col justify-between w-full h-full border bg-white rounded-2xl row-span-2 shadow-lg p-4">
                <div className='t text-center text-xs mb-4'>
                    Product Capture Rate
                </div>
                <div className='flex place-content-center pb-6'>
                    <DonutProgress data={90} duration={750} colour="#49cc73" backgroundColour="#ececec" size={80} />
                </div>
            </div>
            <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                <div className='text-center text-xs mb-4'>
                    Total Collections
                </div>
                <div className='flex place-content-center'>
                    <Counter targetValue={15} duration={750} />
                </div>
            </div>
            <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                <div className='text-center text-xs mb-4'>
                    Weight Sorted
                </div>
                <div className='flex place-content-center'>
                    <Counter targetValue={1960} duration={750} />
                    <span className='font-semibold'>&nbsp;kg</span>
                </div>
            </div>
            <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                <div className='text-center text-xs mb-4'>
                    Total Deliveries
                </div>
                <div className='flex place-content-center'>
                    <Counter targetValue={25} duration={750} />
                </div>
            </div>
            <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                <div className='text-center text-xs mb-4'>
                    Weight Used
                </div>
                <div className='flex place-content-center'>
                    <Counter targetValue={2360} duration={750} />
                    <span className='font-semibold'>&nbsp;kg</span>
                </div>
            </div>
            <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                <div className='text-center text-xs mb-4'>
                    Weight Collected
                </div>
                <div className='flex place-content-center'>
                    <Counter targetValue={2080} duration={750} />
                    <span className='font-semibold'>&nbsp;kg</span>
                </div>
            </div>
            <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                <div className='text-center text-xs mb-4'>
                    Weight Collected
                </div>
                <div className='flex place-content-center'>
                    <Counter targetValue={2080} duration={750} />
                    <span className='font-semibold'>&nbsp;kg</span>
                </div>
            </div>
            <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                <div className='text-center text-xs mb-4'>
                    Weight Collected
                </div>
                <div className='flex place-content-center'>
                    <Counter targetValue={2080} duration={750} />
                    <span className='font-semibold'>&nbsp;kg</span>
                </div>
            </div>
            <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                <div className='text-center text-xs mb-4'>
                    Weight Collected
                </div>
                <div className='flex place-content-center'>
                    <Counter targetValue={2080} duration={750} />
                    <span className='font-semibold'>&nbsp;kg</span>
                </div>
            </div>
            <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                <div className='text-center text-xs mb-4'>
                    Weight Collected
                </div>
                <div className='flex place-content-center'>
                    <Counter targetValue={2080} duration={750} />
                    <span className='font-semibold'>&nbsp;kg</span>
                </div>
            </div>
            <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                <div className='text-center text-xs mb-4'>
                    Weight Collected
                </div>
                <div className='flex place-content-center'>
                    <Counter targetValue={2080} duration={750} />
                    <span className='font-semibold'>&nbsp;kg</span>
                </div>
            </div>
            <div>
                <button className="bg-white-50 hover:bg-white-100 rounded-full py-1 drop-shadow px-4 text-sm" onClick={handleIsOpen}>
                    <div className='flex'>
                        <div className='mr-2'>
                            Collapse
                        </div>
                        <img className='opacity-90 w-[10px] h-[10px] self-center' width="15" height="15" src={"/Collapse_B_SQ.png"}></img>
                    </div>
                </button>
            </div>
        </div>
    )
}