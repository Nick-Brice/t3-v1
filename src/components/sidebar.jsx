import React from "react";
import { useRouter } from 'next/router'
import Link from "next/link";

const Sidebar = () => {

    const router = useRouter()
    const urlPath = router.asPath;
    const splitPath = urlPath.split('/');
    const root = splitPath[1]

    const handleClick = (e, href) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <div className="fixed">
            <div className="flex flex-col bg-secondaryblack w-36 h-screen p-4">
                <div className="flex justify-center p-4 pb-8">
                    <Link href={{ pathname: '/home' }} >
                        <img className="" width="100%" src="/Portal_Icon.png" />
                    </Link>
                </div>
                <div className="flex flex-col gap-6 justify-center text-white">
                    <div className="relative flex items-center">
                        <img height="20px" className="h-[20px] z-20" src="/Dash_W.png" />
                        <img className={root == 'home' ? 'absolute h-[35px] z-10 -left-[7px]' : 'absolute hidden h-[20px]'} src="/Active_Underlay.png" />
                        <Link href={{ pathname: '/home' }} >
                            <p className={root == 'home' ? 'pl-2 rounded-lg bg-gradient-to-r from-secondary to-primary pr-2' : 'pl-2'}  >Home</p>
                        </Link>
                    </div>
                    <div className="relative flex items-center">
                        <img height="20px" className="h-[20px] z-20" src="/Tracker_W.png" />
                        <img className={root == 'tracker' ? 'absolute h-[35px] z-10 -left-[7px]' : 'absolute hidden h-[20px]'} src="/Active_Underlay.png" />
                        <Link href={{ pathname: '/tracker' }} >
                            <p className={root == 'tracker' ? 'pl-2 rounded-lg bg-gradient-to-r from-secondary to-primary pr-2' : 'pl-2'}>Tracker</p>
                        </Link>
                    </div>
                    <div className="relative flex items-center">
                        <img height="20px" className="h-[20px] z-20" src="/Product_W.png" />
                        <img className={root == 'products' ? 'absolute h-[35px] z-10 -left-[7px]' : 'absolute hidden h-[20px]'} src="/Active_Underlay.png" />
                        <Link href={{ pathname: '/products/overview' }} >
                            <p className={root == 'products' ? 'pl-2 rounded-lg bg-gradient-to-r from-secondary to-primary pr-2' : 'pl-2'}>Products</p>
                        </Link>
                    </div>
                    <div className="relative flex items-center">
                        <img height="20px" className="h-[20px] z-20" src="/Streams_W.png" />
                        <img className={root == 'streams' ? 'absolute h-[35px] z-10 -left-[7px]' : 'absolute hidden h-[20px]'} src="/Active_Underlay.png" />
                        <Link href={{ pathname: '/streams' }} >
                            <p className={root == 'streams' ? 'pl-2 rounded-lg bg-gradient-to-r from-secondary to-primary pr-2' : 'pl-2'}>Streams</p>
                        </Link>
                    </div>
                    <div className="relative flex items-center">
                        <img height="20px" className="h-[20px] z-20" src="/Event_W.png" />
                        <img className={root == 'events' ? 'absolute h-[35px] z-10 -left-[7px]' : 'absolute hidden h-[20px]'} src="/Active_Underlay.png" />
                        <Link href={{ pathname: '/events' }} >
                            <p className={root == 'events' ? 'pl-2 rounded-lg bg-gradient-to-r from-secondary to-primary pr-2' : 'pl-2'}>Events</p>
                        </Link>
                    </div>
                    <div className="relative flex items-center">
                        <img height="20px" className="h-[20px] z-20" src="/Upload_W.png" />
                        <img className={root == 'upload' ? 'absolute h-[35px] z-10 -left-[7px]' : 'absolute hidden h-[20px]'} src="/Active_Underlay.png" />
                        <Link href={{ pathname: '/upload' }} >
                            <p className={root == 'upload' ? 'pl-2 rounded-lg bg-gradient-to-r from-secondary to-primary pr-2' : 'pl-2'}>Upload</p>
                        </Link>
                    </div>
                    <div className="relative flex items-center">
                        <img height="20px" className="h-[20px] z-20" src="/API_W.png" />
                        <img className={root == 'docs' ? 'absolute h-[35px] z-10 -left-[7px]' : 'absolute hidden h-[20px]'} src="/Active_Underlay.png" />
                        <Link href={{ pathname: '/docs' }} >
                            <p className={root == 'docs' ? 'pl-2 rounded-lg bg-gradient-to-r from-secondary to-primary pr-2' : 'pl-2'}>API Docs</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;