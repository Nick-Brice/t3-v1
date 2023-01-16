import { ProportionalScaling } from "@icon-park/react";
import React from "react";

export default function HeaderButton(props) {
    return (
        <div className="flex place-content-center h-fit w-fit px-8 py-1 text-white bg-white/40 rounded-md hover:scale-105 duration-200">
            {props.children}
        </div>
    )
}