import { useEffect, useState } from "react";
import Calendar from '../components/calendar';
import { parseDate, getLocalTimeZone, today, isWeekend } from '@internationalized/date';
import { useDateFormatter, useLocale } from 'react-aria';
import RangeCalendar from '../components/rangerCalendar';

export default function DateField() {

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    var temp = new Date();
    var dd = String(temp.getDate()).padStart(2, '0');
    var mm = String(temp.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = temp.getFullYear();

    let todaysDate = `${yyyy}-${mm}-${dd}`;

    let [date, setDate] = useState(parseDate(todaysDate));
    let formatter = useDateFormatter({ dateStyle: 'full' });

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleChange = (element) => {
        setDate(element)
        toggleMenu();
    }


    return (
        <div className="relative">
            <button className="t text-center w-full" onClick={toggleMenu}>{formatter.format(date.toDate(getLocalTimeZone()))}</button>
            {isOpen && (
                <div className="absolute right-0 z-10 opacity-100 top-8">
                    <Calendar
                        setIsOpen={toggleMenu}
                        aria-label="Date (controlled)"
                        value={date}
                        onChange={
                            setDate }/>
                </div>
            )}
        </div>
    )
}