import { useCalendar, useCalendarGrid, useCalendarCell, useLocale } from 'react-aria';
import { useCalendarState } from 'react-stately';
import { createCalendar, getWeeksInMonth } from '@internationalized/date';
import * as React from 'react';
import Button from '../components/button';


// Reuse the Button from your component library. See below for details.

export default function Calendar(props) {
    let { locale } = useLocale();
    let state = useCalendarState({
        ...props,
        locale,
        createCalendar
    });

    let ref = React.useRef();
    let { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(
        props,
        state,
        ref
    );

    return (
        <div {...calendarProps} ref={ref} className="border w-fit h-fit">
            <div className="p-2 bg-black text-white text-center">
                <h2>{title}</h2>
                <div className='flex justify-between'>
                    <Button {...prevButtonProps}>&lt;</Button>
                    <Button {...nextButtonProps}>&gt;</Button>
                </div>
            </div>
            <CalendarGrid state={state} />
        </div>
    );
}


function CalendarGrid({ state, ...props }) {
    let { locale } = useLocale();
    let { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);

    // Get the number of weeks in the month so we can render the proper number of rows.
    let weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

    return (
        <table className='border-t bg-secondarywhite' {...gridProps}>
            <thead {...headerProps}>
                <tr>
                    {weekDays.map((day, index) => <th className="text-primary" key={index}>{day}</th>)}
                </tr>
            </thead>
            <tbody>
                {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
                    <tr key={weekIndex}>
                        {state.getDatesInWeek(weekIndex).map((date, i) => (
                            date
                                ? (
                                    <CalendarCell
                                        key={i}
                                        state={state}
                                        date={date}
                                    />
                                )
                                : <td key={i} />
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}


function CalendarCell({ state, date }) {
    let ref = React.useRef();
    let {
        cellProps,
        buttonProps,
        isSelected,
        isOutsideVisibleRange,
        isDisabled,
        isUnavailable,
        formattedDate
    } = useCalendarCell({ date }, state, ref);

    let newformattedDate = <div className='text-center'>{formattedDate}</div>

    return (
        <td {...cellProps}>
            <div
                {...buttonProps}
                ref={ref}
                hidden={isOutsideVisibleRange}
                className={`cell p-1 rounded-xl font-semibold ${isDisabled ? 'text-gray-400' : 'hover:bg-gray-300'
                    } ${isUnavailable ? 'text-red-500' : ''} ${isSelected ? 'text-white bg-black hover:bg-black' : ''}`}
            >
                {newformattedDate}
            </div>
        </td>
    );
}