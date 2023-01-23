import Lottie from 'react-lottie';
import React from 'react';
import animationData from './circularAnimation.json';
import Counter from './counter';

export default function CircularAnimation() {

    const lottieRef = React.useRef(null);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData
    };

    React.useEffect(() => {
        if (lottieRef.current) {
            console.log(lottieRef.current)
            // lottieRef.current.props.setSpeed(0.2)
        }
    }, [lottieRef]);

    return (
        <div className="relative pointer-events-none py-32">
            <div className='absolute px-8 top-6 flex justify-between w-full'>
                <div className='flex flex-col place-items-center place-content-center p-6 bg-white z-10 rounded-xl'>
                    <div className='mb-4'>
                        <Counter targetValue={100000} duration={750} className="t  text-5xl" />
                        <span className='font-semibold text-xl pl-1'>kg</span>
                    </div>
                    <div className='text-2xl font-light text-grey-600'>
                        Products Delivered
                    </div>
                </div>
                <div className='flex flex-col place-items-center place-content-center p-6 bg-white z-10 rounded-xl'>
                    <div className='mb-4'>
                        <Counter targetValue={100000} duration={750} className="t  text-5xl" />
                        <span className='font-semibold text-xl pl-1'>kg</span>
                    </div>
                    <div className='text-2xl font-light text-grey-600'>
                        Products Delivered
                    </div>
                </div>
                <div className='flex flex-col place-items-center place-content-center p-6 bg-white z-10 rounded-xl'>
                    <div className='mb-4'>
                        <Counter targetValue={100000} duration={750} className="t  text-5xl" />
                        <span className='font-semibold text-xl pl-1'>kg</span>
                    </div>
                    <div className='text-2xl font-light text-grey-600'>
                        Products Delivered
                    </div>
                </div>
                <div className='flex flex-col place-items-center place-content-center p-6 bg-white z-10 rounded-xl'>
                    <div className='mb-4'>
                        <Counter targetValue={100000} duration={750} className="t  text-5xl" />
                        <span className='font-semibold text-xl pl-1'>kg</span>
                    </div>
                    <div className='text-2xl font-light text-grey-600'>
                        Products Delivered
                    </div>
                </div>
            </div>
            <div className='-mr-8'>
                <Lottie ref={lottieRef} options={defaultOptions} />
            </div>
            <div className='absolute px-8 top-[425px] flex justify-around w-full'>
                <div className='flex flex-col place-items-center place-content-center p-6 bg-white z-10 rounded-xl'>
                    <div className='mb-4'>
                        <Counter targetValue={100000} duration={750} className="t  text-5xl" />
                        <span className='font-semibold text-xl pl-1'>kg</span>
                    </div>
                    <div className='text-2xl font-light text-grey-600'>
                        Products Delivered
                    </div>
                </div>
                <div className='flex flex-col place-items-center place-content-center p-6 bg-white z-10 rounded-xl'>
                    <div className='mb-4'>
                        <Counter targetValue={100000} duration={750} className="t  text-5xl" />
                        <span className='font-semibold text-xl pl-1'>kg</span>
                    </div>
                    <div className='text-2xl font-light text-grey-600'>
                        Products Delivered
                    </div>
                </div>
            </div>
        </div>
    )
}