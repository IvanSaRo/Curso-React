import moment from 'moment';
import 'moment/locale/es';
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Navbar } from '../ui/Navbar';
import { messages } from './../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

moment.locale('es');


const localizer = momentLocalizer(moment);

const event = [{
    title: 'Cumpleaños',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Del jefe',
    user: {
        _id: '123',
        name: 'Fernando'
    }
}]



export const CalendarScreen = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleCLick = (e) => {
        console.log(e);
    }

    const onSelectEvent = (e) => {
        console.log(e);
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: '#367CF7',
            borderRadius: 'opx',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    };
    
    
    return (
        <div className="calendar-screen">
            <Navbar />


            <Calendar
                localizer={localizer}
                events={event}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={ eventStyleGetter }
                components={ {event: CalendarEvent} }
                onDoubleClickEvent={onDoubleCLick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                view={lastView}
            />    

            <CalendarModal />
        </div>
    )
}
