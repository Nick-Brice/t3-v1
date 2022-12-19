import React from "react";

const Sidebar = () => {

    return (
        <div className="fixed">
            <div className="flex flex-col bg-secondaryblack w-36 h-screen p-4">
                <div className="flex justify-center py-6">
                    <img className="" width="75%" src="/favicon.ico" />
                </div>
                <div className="flex flex-col gap-6 justify-center text-grey">
                    <p>Dashboard</p>
                    <p>Tracker</p>
                    <p>Products</p>
                    <p>Streams</p>
                    <p>Events</p>
                    <p>Upload Data</p>
                    <p>API Docs</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;