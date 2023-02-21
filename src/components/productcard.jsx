import * as React from 'react';
import Button from './button';
import classNames from 'classnames';
import DonutProgress from './donutProgress2';
import Counter from './counter';
import BaseExpandedCard from './baseExpandedCard';

export default function ProductCard(props) {

    const barRef = React.useRef();

    const [isOpen, setIsOpen] = React.useState(false);

    let className = classNames(
        isOpen == false
            ? 'col-span-1 row-span-1'
            : "col-span-2 row-span-2",
        'min-h-0'
    );

    function toggleIsOpen() {
        setIsOpen(!isOpen);
    }


    React.useEffect(() => {
        if (barRef.current != undefined) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    const progressbar = entry.target.querySelector('.progressbar');
                    console.log('entry', entry)

                    if (entry.isIntersecting) {
                        progressbar.classList.add('progressbar-animate');
                        return; // if we added the class, exit the function
                    }

                    // We're not intersecting, so remove the class!
                    progressbar.classList.remove('progressbar-animate');
                });
            });
            // observer.observe(document.querySelector('.progressbar-wrapper'));
            observer.observe(barRef.current);
        }
    }, [barRef.current])


    return (
        <div className={className}>
            {!isOpen && (

                // <div className='bg-white rounded-2xl h-full w-full p-8 grid grid-cols-[7fr_3fr] grid-row-4 shadow-lg'>
                //     <h5 className='my-4 col-start-1'>{props.title}</h5>
                //     <div className='col-start-2 row-span-2 place-self-center w-full h-3/4'><img className='' width="100%" src={props.img}></img></div>
                //     <div className='mb-4 col-start-1'>
                //         <p className='mb-1'>Products Used: {props.used}</p>
                //         <p className='mb-1'>Products Captured: {props.captured}</p>
                //         <p className='mb-1'>Stream: {props.stream}</p>
                //     </div>
                //     <div className='mb-4 col-span-2 w-full bg-secondary rounded-md border border-black'><p className='pl-4 py-1'>{props.rate}</p></div>
                //     <div className='flex justify-between col-span-2'>
                //         <Button onClick={() => toggleIsOpen()} intent="secondary">See More / Modify</Button>
                //     </div>
                // </div>
                <div className='bg-white rounded-2xl h-full w-full p-4 flex flex-col justify-between shadow-lg hover:scale-105 transition duration-200'>
                    <div className='text-center font-bold'>
                        {props.title}
                    </div>
                    <div className='flex  self-center my-4'>
                        <div className='basis-16'>
                            <img className='' height="100%" src={props.img}></img>
                        </div>
                        <div className='flex flex-col basis-3/4 place-content-center'>
                            <div className='flex h-[24px]'>

                                <img className='opacity-30' width="24" src={"/Delivery_B_SQ.png"}></img>
                                <div className='ml-2'>
                                    <span className='f text-lg font-[450]'>
                                        {props.delivered}
                                    </span>
                                    <span className='f text-xs'>
                                        &nbsp;Delivered
                                    </span>
                                </div>

                            </div>
                            <div className='flex h-[24px]'>
                                <img className='opacity-30' width="24" src={"/Collection_B_SQ.png"}></img>
                                <div className='ml-2'>
                                    <span className='f text-lg font-[450]'>
                                        {props.collected}
                                    </span>
                                    <span className='f text-xs'>
                                        &nbsp;Collected
                                    </span>
                                </div>
                            </div>
                            <div className='flex h-[24px]'>
                                <img className='opacity-30' width="24" src={"/Streams_B_SQ.png"}></img>
                                <div className='ml-2'>
                                    <span className='f text-lg font-[450]'>
                                        {props.stream}
                                    </span>
                                    <span className='f text-xs'>
                                        &nbsp;Stream
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='flex place-content-center relative'>
                        <div className='r rounded-lg border bg-grey-200 w-full'>
                            <div ref={barRef} className='absolute progressbar-wrapper left-0 top-0 h-full bg-gradient-to-r rounded-lg ' style={{ 'width': props.rate + '%' }}>
                                <div className='absolute progressbar left-0 top-0 h-full bg-gradient-to-r from-emerald to-secondary rounded-lg transition-[width] duration-[1.25s] w-0'></div>
                            </div>
                            <div className='relative z-10 pl-2 text-white'>
                                <span className='text-lg font-[450]'>
                                    {props.rate}%
                                </span>
                                <span className='text-xs text-white'>
                                    &nbsp;Capture Rate
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex place-content-center mt-4'>
                        <Button className="bg-white hover:bg-white-100 rounded-full py-1 drop-shadow px-4 text-sm" onClick={() => toggleIsOpen()} intent="secondary">
                            <div className='flex place-content-center'>
                                <div className='mr-2 self-center'>
                                    More
                                </div>
                                <div className='self-center'>
                                    <img className='opacity-60 w-[10px] h-[10px] self-center' width="15" height="15" src={"/Expand_B_SQ.png"}></img>
                                </div>
                            </div>
                        </Button>
                    </div>
                </div>


            )}
            {isOpen && (
                <BaseExpandedCard {...props} isOpen={isOpen} setIsOpen={setIsOpen} />
                // <div className='bg-white rounded-2xl h-full w-full p-8 shadow-lg grid grid-cols-4 grid-rows-4 gap-2 '>
                //     <div className='flex w-full h-full col-span-3'>
                //         <div className='flex flex-col basis-1/4'>
                //             <img className=' w-[90px] h-[90px] self-center' src={"/Cup_PET.png"}></img>

                //         </div>
                //         <div className='flex flex-col basis-3/4'>
                //             <div className='flex font-bold justify-between'>
                //                 <div className=''>
                //                     rPET Cup [500ml] R67123
                //                 </div>
                //                 <Button className="bg-white hover:bg-white-100 rounded-full py-1 drop-shadow px-4 text-sm" onClick={() => toggleIsOpen()} intent="secondary">
                //                     <div className='flex place-content-center'>
                //                         <div className='mr-2 self-center text-xs'>
                //                             Edit
                //                         </div>
                //                         <div className='self-center'>
                //                             <img className='opacity-60 w-[10px] h-[10px] self-center' width="15" height="15" src={"/Edit_B_SQ.png"}></img>
                //                         </div>
                //                     </div>
                //                 </Button>
                //             </div>
                //             <div className='overflow-auto scroll-p-[2px] scroll-m-1 text-sm max-h-[60px] pr-1'>
                //                 This is the exa This may include interesting insights such as the attendance and details about the even
                //             </div>

                //         </div>
                //     </div>
                //     <div className='flex flex-col justify-between w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                //         <div className='text-center text-xs mb-4'>
                //             Products Used
                //         </div>
                //         <div className='flex place-content-center'>
                //             <Counter targetValue={props.used} duration={750} className="" />
                //         </div>
                //     </div>
                //     <div className="flex flex-col justify-between w-full h-full border bg-white rounded-2xl row-span-2 shadow-lg p-4">
                //         <div className='t text-center text-xs mb-4'>
                //             Product Capture Rate
                //         </div>
                //         <div className='flex place-content-center pb-6'>
                //             <DonutProgress data={90} duration={750} colour="#49cc73" backgroundColour="#ececec" size={80} />
                //         </div>
                //     </div>
                //     <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                //         <div className='text-center text-xs mb-4'>
                //             Total Collections
                //         </div>
                //         <div className='flex place-content-center'>
                //             <Counter targetValue={15} duration={750} />
                //         </div>
                //     </div>
                //     <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                //         <div className='text-center text-xs mb-4'>
                //             Weight Sorted
                //         </div>
                //         <div className='flex place-content-center'>
                //             <Counter targetValue={1960} duration={750} />
                //             <span className='font-semibold'>&nbsp;kg</span>
                //         </div>
                //     </div>
                //     <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                //         <div className='text-center text-xs mb-4'>
                //             Total Deliveries
                //         </div>
                //         <div className='flex place-content-center'>
                //             <Counter targetValue={25} duration={750} />
                //         </div>
                //     </div>
                //     <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                //         <div className='text-center text-xs mb-4'>
                //             Weight Used
                //         </div>
                //         <div className='flex place-content-center'>
                //             <Counter targetValue={2360} duration={750} />
                //             <span className='font-semibold'>&nbsp;kg</span>
                //         </div>
                //     </div>
                //     <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                //         <div className='text-center text-xs mb-4'>
                //             Weight Collected
                //         </div>
                //         <div className='flex place-content-center'>
                //             <Counter targetValue={2080} duration={750} />
                //             <span className='font-semibold'>&nbsp;kg</span>
                //         </div>
                //     </div>
                //     <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                //         <div className='text-center text-xs mb-4'>
                //             Weight Collected
                //         </div>
                //         <div className='flex place-content-center'>
                //             <Counter targetValue={2080} duration={750} />
                //             <span className='font-semibold'>&nbsp;kg</span>
                //         </div>
                //     </div>
                //     <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                //         <div className='text-center text-xs mb-4'>
                //             Weight Collected
                //         </div>
                //         <div className='flex place-content-center'>
                //             <Counter targetValue={2080} duration={750} />
                //             <span className='font-semibold'>&nbsp;kg</span>
                //         </div>
                //     </div>
                //     <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                //         <div className='text-center text-xs mb-4'>
                //             Weight Collected
                //         </div>
                //         <div className='flex place-content-center'>
                //             <Counter targetValue={2080} duration={750} />
                //             <span className='font-semibold'>&nbsp;kg</span>
                //         </div>
                //     </div>
                //     <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                //         <div className='text-center text-xs mb-4'>
                //             Weight Collected
                //         </div>
                //         <div className='flex place-content-center'>
                //             <Counter targetValue={2080} duration={750} />
                //             <span className='font-semibold'>&nbsp;kg</span>
                //         </div>
                //     </div>
                //     <div className='flex flex-col place-content-center w-full h-full border bg-white rounded-2xl row-span-1 shadow-lg p-4'>
                //         <div className='text-center text-xs mb-4'>
                //             Weight Collected
                //         </div>
                //         <div className='flex place-content-center'>
                //             <Counter targetValue={2080} duration={750} />
                //             <span className='font-semibold'>&nbsp;kg</span>
                //         </div>
                //     </div>
                //     <div>
                //         <button className="bg-white-50 hover:bg-white-100 rounded-full py-1 drop-shadow px-4 text-sm" onClick={() => toggleIsOpen()}>
                //             <div className='flex'>
                //                 <div className='mr-2'>
                //                     Collapse
                //                 </div>
                //                 <img className='opacity-90 w-[10px] h-[10px] self-center' width="15" height="15" src={"/Collapse_B_SQ.png"}></img>
                //             </div>
                //         </button>
                //     </div>

                // </div>
            )}
        </div>
    );
}