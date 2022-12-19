import * as React from 'react';
import Button from './button';

export default function ProductCard(props) {

    return (
        <div className='bg-white rounded-xl p-8 grid grid-cols-[7fr_3fr] grid-row-4 shadow-md'>
            <h5 className='my-4 col-start-1'>{props.title}</h5>
            <div className='col-start-2 row-span-2 place-self-center w-full h-3/4'><img className='shadow-sm' width="100%" src={props.img}></img></div>
            <div className='mb-4 col-start-1'>
                <p className='mb-1'>Products Used: {props.used}</p>
                <p className='mb-1'>Products Captured: {props.captured}</p>
                <p className='mb-1'>Stream: {props.stream}</p>
            </div>
            <div className='mb-4 col-span-2 w-full bg-secondary rounded-md border border-black'><p className='pl-4 py-1'>{props.rate}</p></div>
            <div className='flex justify-between col-span-2'>
                <Button intent="secondary">See More / Modify</Button>
            </div>
        </div>
    );
}