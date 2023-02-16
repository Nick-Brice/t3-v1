import React from "react";
import DropdownInput from "./dropdownInput";
import TextInput from "./textInput";

export default function FormWrapper(props) {

    return (

        <form onSubmit={props.OnSubmit} className=' bg-gradient-to-l relative from-primary to-secondary text-white rounded-lg mx-4 '>
            {props.children}
            {/* <div className="grid place-content-center">
                    <div className="flex flex-col flex-wrap items-end">
                        {props.children}

                    </div>
                </div>
                <div className="grid place-content-center bg-red rounded-lg">
                    <div className="flex flex-col flex-wrap items-end">
                        {props.children}
                        <button className="relative my-3 bg-white text-black px-4 py-2 rounded-full w-full self-center" type="submit">
                            <div>
                                Submit
                            </div>
                        </button>
                    </div>
                </div> */}
        </form>

    )
}