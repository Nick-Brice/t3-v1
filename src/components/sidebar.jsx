import React from "react";

const Sidebar = () => {

    return (
        <div className="fixed">
            <div className="flex flex-col bg-secondaryblack w-36 h-screen p-4">
                <div className="flex justify-center p-4 pb-8">
                    <img className="" width="100%" src="/Portal_Icon.png" />
                </div>
                <div className="flex flex-col gap-6 justify-center text-white">
                    <div className="flex items-center">
                        <img height="20px" className="h-[20px]" src="/Dash_W.png"/>
                        <p className="pl-2">Dashboard</p>
                    </div>
                    <div className="flex items-center">
                        <img height="20px" className="h-[20px]" src="/Tracker_W.png"/>
                        <p className="pl-2">Tracker</p>
                    </div>
                    <div className="flex items-center">
                        <img height="20px" className="h-[20px]" src="/Product_W.png"/>
                        <p className="pl-2">Products</p>
                    </div>
                    <div className="flex items-center">
                        <img height="20px" className="h-[20px]" src="/Streams_W.png"/>
                        <p className="pl-2">Streams</p>
                    </div>
                    <div className="flex items-center">
                        <img height="20px" className="h-[20px]" src="/Event_W.png"/>
                        <p className="pl-2">Events</p>
                    </div>
                    <div className="flex items-center">
                        <img height="20px" className="h-[20px]" src="/Upload_W.png"/>
                        <p className="pl-2">Upload</p>
                    </div>
                    <div className="flex items-center">
                        <img height="20px" className="h-[20px]" src="/API_W.png"/>
                        <p className="pl-2">API Docs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;