// import Lottie from 'react-lottie';
import React from 'react';
// import animationData from './circularAnimation.json';
import Counter from './counter';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function CircularAnimation() {

    const lottieRef = React.useRef(null);

    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData
    // };

    React.useEffect(() => {
        if (lottieRef.current) {
            console.log(lottieRef.current)
            // lottieRef.current.props.setSpeed(0.2)
        }
    }, [lottieRef]);

    return (
        <div className="relative flex flex-col justify-between pointer-events-none py-0">
            <div className='px-32 -mb-36 2xl:px-40 2xl:-mb-40 flex justify-between w-full'>
                <div className='relative flex items-center p-6 bg-white z-10 rounded-xl'>

                    <img className="h-[45px] z-20 pr-4" src='/Delivery_B_SQ.png' c />

                    <div className='flex flex-col place-items-center place-content-center'>
                        <div className='mb-2'>
                            <Counter targetValue={100000} duration={750} className="t  text-xl" />
                            <span className='font-semibold text-base pl-1'>kg</span>
                        </div>
                        <div className='text-xs font-semilight text-grey-600'>
                            Products Delivered
                        </div>
                    </div>
                </div>

                <div className='relative flex items-center p-6 bg-white z-10 rounded-xl'>

                    <img className="h-[45px] z-20 pr-4" src='/Delivery_B_SQ.png' c />

                    <div className='flex flex-col place-items-center place-content-center'>
                        <div className='mb-2'>
                            <Counter targetValue={100000} duration={750} className="t  text-xl" />
                            <span className='font-semibold text-base pl-1'>kg</span>
                        </div>
                        <div className='text-xs font-semilight text-grey-600'>
                            Products Delivered
                        </div>
                    </div>
                </div>

                <div className='relative flex items-center p-6 bg-white z-10 rounded-xl'>

                    <img className="h-[45px] z-20 pr-4" src='/Delivery_B_SQ.png' c />

                    <div className='flex flex-col place-items-center place-content-center'>
                        <div className='mb-2'>
                            <Counter targetValue={100000} duration={750} className="t  text-xl" />
                            <span className='font-semibold text-base pl-1'>kg</span>
                        </div>
                        <div className='text-xs font-semilight text-grey-600'>
                            Products Delivered
                        </div>
                    </div>
                </div>

            </div>
            <div className=''>
                <Player
                    autoplay
                    loop
                    src="/Loop_Animation.json"
                    speed={1}
                    ref={lottieRef}
                // style={{ height: x`'100px', width: '800px' }}
                >
                    {/* <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
                </Player>
                {/* <Lottie ref={lottieRef} options={defaultOptions} /> */}
            </div>
            <div className='px-32 -mt-36 2xl:px-40 2xl:-mt-40 flex justify-between w-full'>
                <div className='relative flex items-center p-6 bg-white z-10 rounded-xl'>

                    <img className="h-[45px] z-20 pr-4" src='/Delivery_B_SQ.png' c />

                    <div className='flex flex-col place-items-center place-content-center'>
                        <div className='mb-2'>
                            <Counter targetValue={100000} duration={750} className="t  text-xl" />
                            <span className='font-semibold text-base pl-1'>kg</span>
                        </div>
                        <div className='text-xs font-semilight text-grey-600'>
                            Products Delivered
                        </div>
                    </div>
                </div>

                <div className='relative flex items-center p-6 bg-white z-10 rounded-xl'>

                    <img className="h-[45px] z-20 pr-4" src='/Delivery_B_SQ.png' c />

                    <div className='flex flex-col place-items-center place-content-center'>
                        <div className='mb-2'>
                            <Counter targetValue={100000} duration={750} className="t  text-xl" />
                            <span className='font-semibold text-base pl-1'>kg</span>
                        </div>
                        <div className='text-xs font-semilight text-grey-600'>
                            Products Delivered
                        </div>
                    </div>
                </div>

                <div className='relative flex items-center p-6 bg-white z-10 rounded-xl'>

                    <img className="h-[45px] z-20 pr-4" src='/Delivery_B_SQ.png' c />

                    <div className='flex flex-col place-items-center place-content-center'>
                        <div className='mb-2'>
                            <Counter targetValue={100000} duration={750} className="t  text-xl" />
                            <span className='font-semibold text-base pl-1'>kg</span>
                        </div>
                        <div className='text-xs font-semilight text-grey-600'>
                            Products Delivered
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}