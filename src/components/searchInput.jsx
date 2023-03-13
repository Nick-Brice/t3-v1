

export default function SearchInput(props) {

    return (
        <div className='flex my-3 justify-between rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
            <div className='px-8 py-2'>
                <label htmlFor={props.label}>{props.label}</label>
            </div>
            <div className='grid place-content-center min-w-[300px] rounded-lg shadow-[inset_0_0px_8px_0px_#f6f6f6]'>
                {props.setSelection && (

                    <input onInput={(e) => { props.setSelection(e.target.value); console.log(e.target.value) }} type="text" list={props.label} name={props.label} className="appearance-none text-white bg-transparent selection:text-red text-center inline-block w-[300px] h-[40px]" />
                )}
                {!props.setSelection && (

                    <input type="text" list={props.label} name={props.label} className="appearance-none text-white bg-transparent selection:text-red text-center inline-block w-[300px] h-[40px]" />
                )}
                <datalist className="appearance-none w-[300px] bg-red text-red" id={props.label}>
                    {props.options != null && props.options.map((choice) => (
                        <option className="text-black w-[300px]" value={choice[`${props.variable}`]}>
                            {choice[`${props.variable}`]}
                        </option>
                    ))}
                    {/* <option className="bg-red text-red" value="Berlin" />
                    <option value="Los Angeles" />
                    <option value="Moscow" />
                    <option value="Paris" /> */}
                </datalist>
            </div>
        </div>
    )
}