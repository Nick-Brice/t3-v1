import Link from "next/link";
import React from "react";
// import { useRouter } from 'next/router';

export default function TabMenu(props) {
    // const router = useRouter();
    // const urlPath = router.pathname;
    const urlPath = props.urlPath;
    // const splitPath = urlPath.split('/');
    // const root = '/' + splitPath[1];

    const [showMenuText, setShowMenuText] = React.useState(null);

    const handleHover = (tab) => {
        setShowMenuText(tab);
        // console.log(urlPath);
    };

    let children = props.data;
    let firstChildren = children.slice(0, -1);
    let lastChild = children.slice(-1);

    return (
        <div className="relative flex self-end justify-self-center">
            {children.map((child, index) => (
                <div className="relative z-10 -mr-8">
                    {/* {console.log(child.page)} */}
                    {urlPath == child.page && (
                        <Link href={{ pathname: child.page }}>
                            <div
                                className="z-10 cursor-default  rounded-t-2xl bg-primary text-white shadow-center-md"
                                onMouseOver={() => handleHover(child.title)}
                                onMouseOut={() => handleHover(null)}
                            >
                                <div className={index != children.length - 1 ? "grid h-[80px] max-w-[230px] place-items-center py-2 pl-6 pr-12  text-center" : "grid h-[80px] max-w-[230px] place-items-center py-2 pl-6 pr-6  text-center"}>
                                    <div className="flex text-center">
                                        <img
                                            height="20px"
                                            className="z-20 mr-4 h-[30px] self-center"
                                            src={child.imgW}
                                        />
                                        <h3 className="self-center font-semibold leading-5">
                                            {child.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}
                    {urlPath != child.page && (
                        <Link href={{ pathname: child.page }}>
                            <div
                                className="z-10 cursor-pointer rounded-t-2xl  bg-secondarywhite text-white shadow-center-md transition duration-150 hover:bg-secondarygrey"
                                onMouseOver={() => handleHover(child.title)}
                                onMouseOut={() => handleHover(null)}
                            >
                                <div className={index != children.length - 1 ? "grid h-[80px] max-w-[230px] place-items-center py-2 pl-6 pr-12  text-center" : "grid h-[80px] max-w-[230px] place-items-center py-2 pl-6 pr-6 text-center"}>
                                    <div className="flex text-center">
                                        {showMenuText !== child.title && (
                                            <img
                                                height="20px"
                                                className="z-20 h-[30px] self-center"
                                                src={child.imgB}
                                            />
                                        )}
                                        {showMenuText === child.title && (
                                            <img
                                                height="20px"
                                                className="z-20 mr-4 h-[30px] self-center"
                                                src={child.imgB}
                                            />
                                        )}
                                        {showMenuText === child.title && (
                                            <h3 className="self-center leading-5 text-black">
                                                {child.title}
                                            </h3>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            ))
            }
            {/* {
                lastChild.map((child) => (
                    <div className="relative z-10 -mr-8">
                        {urlPath == child.page && (
                            <Link href={{ pathname: child.page }}>
                                <div
                                    className="z-10 cursor-default  rounded-t-2xl bg-primary text-white shadow-center-md"
                                    onMouseOver={() => handleHover(child.title)}
                                    onMouseOut={() => handleHover(null)}
                                >
                                    <div className="grid h-[80px] max-w-[230px] place-items-center py-2 pl-6 pr-6  text-center">
                                        <div className="flex text-center">
                                            <img
                                                height="20px"
                                                className="z-20 mr-4 h-[30px] self-center"
                                                src={child.imgW}
                                            />
                                            <h3 className="self-center font-semibold leading-5">
                                                {child.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )}
                        {urlPath != child.page && (
                            <Link href={{ pathname: child.page }}>
                                <div
                                    className="z-10 cursor-pointer rounded-t-2xl  bg-secondarywhite text-white shadow-center-md transition duration-150 hover:bg-secondarygrey"
                                    onMouseOver={() => handleHover(child.title)}
                                    onMouseOut={() => handleHover(null)}
                                >
                                    <div className="grid h-[80px] max-w-[230px] place-items-center py-2 pl-6 pr-6  text-center">
                                        <div className="flex text-center justify-items-center">
                                            {showMenuText !== child.title && (
                                                <img
                                                    height="20px"
                                                    className="z-20 h-[30px]"
                                                    src={child.imgB}
                                                />
                                            )}
                                            {showMenuText === child.title && (
                                                <img
                                                    height="20px"
                                                    className="z-20 mr-4 h-[30px]"
                                                    src={child.imgB}
                                                />
                                            )}
                                            {showMenuText === child.title && (
                                                <h3 className="self-center leading-5 text-black">
                                                    {child.title}
                                                </h3>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div>
                ))
            } */}
        </div >
    );
}
