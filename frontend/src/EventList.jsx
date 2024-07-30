import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventItem from './EventItem';
import './styles.css'
import AddEvent from './AddEvent';


const EventList = () => {
    const [events, setEvents] = useState([]);
    const [showAddEvent, setshowAddEvent] = useState(false);

    const fetchAllEvents = async () => {
        const response = await axios.get('http://localhost:1234/api/events');
        setEvents(response.data.data)
    }


    useEffect(() => {
        fetchAllEvents();
    }, [])

    const handlerAddEvent = () => {
  
        setshowAddEvent(true);
    }
    const closeAddEvent = () => {
        setshowAddEvent(false);
    };

    return (
        <div>
            { <h2>Scheduled Events</h2> }
          
        <button onClick={handlerAddEvent}>AddEvent</button>
            {showAddEvent && <AddEvent onClose={closeAddEvent} />}
           
           
{ 
            <div className="flexbox">
            {
                events.map((event, _) => {
                    return (
                        <EventItem event={event} setEvents={setEvents} events={events} />
                    )
                })
            }
            </div> }
        </div>
    )
}

export default EventList;