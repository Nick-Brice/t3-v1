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
        <div className='bg-white rounded-2xl h-full w-full p-12 shadow-lg flex flex-col justify-between'>
            <div className='flex flex-col w-full pb-12'>
                <div className='flex justify-between'>
                    <h3 className=' text-xl font-semibold pb-8'>
                        <span>
                            Warning&nbsp;
                        </span>
                        {props.name}
                    </h3>
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
                <p className='pb-6'>
                    {props.Reason}
                </p>
                <p>
                    This is an auto detected error which occurs when you create a stream which has more than one material type. It can also occur when you add a new product to an existing stream, if the new product is a different material type.
                </p>

            </div>
            <div className='grid grid-cols-3 auto-rows-[160px] justify-between gap-8'>

                <div className="grid place-content-center bg-gradient-to-r from-accent to-red text-white text-xl font-semibold hover:bg-white-100 rounded-2xl  p-4 drop-shadow" >



                    Pending


                </div>


                <button className="flex flex-col justify-start bg-grey-400 text-white hover:bg-grey-600 rounded-2xl  p-4 drop-shadow  text-sm" onClick={handleIsOpen}>

                    <div className='mr-2 text-center text-xl pb-2 font-semibold'>
                        Click to dismiss
                    </div>

                    <div className='text-xs'>
                        If the error occurs again we will send you another warning notification
                    </div>
                </button>


                <button className="flex flex-col justify-start bg-grey-400 text-white hover:bg-grey-600 rounded-2xl  p-4 drop-shadow  text-sm" onClick={handleIsOpen}>

                    <div className='mr-2 text-center text-xl pb-2 font-semibold'>
                        Click to ignore
                    </div>

                    <div className='text-xs'>
                        We wont send you another warning notification for this issue
                    </div>
                </button>

            </div>
        </div>
    )
}