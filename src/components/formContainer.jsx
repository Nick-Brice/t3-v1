import React from "react"

export default function FormContainer(props) {
    const [open, setOpen] = React.useState(false);

    return (
        // <div className={`grid place-content-center ${props.className} rounded-lg`}>
        <div className={`relative flex flex-col flex-wrap items-end pr-16 ${props.className}`}>
            {props.optional == true && !open && (
                <button className="absolute -top-2 left-3 text-xs h-2 z-50" type="button" onClick={() => setOpen(!open)}>+ &nbsp;&nbsp;&nbsp;advanced fields</button>
            )}
            {props.optional == true && open && (<button className="absolute top-0 left-[13px] text-xs h-2 z-50" type="button" onClick={() => setOpen(!open)}>- &nbsp;&nbsp;&nbsp;minimise advanced fields</button>)}
            {props.optional == true && (
                <div className={open ? "relative flex flex-col flex-wrap items-end" : "relative flex-col flex-wrap items-end hidden"}>
                    {props.children}
                </div>
            )}
            {props.optional == undefined && props.children}
        </div>
        // </div>
    )
}