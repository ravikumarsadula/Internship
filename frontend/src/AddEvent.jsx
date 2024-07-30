import React, { useState } from 'react';
import './styles.css'
import axios from 'axios'

function AddEvent({onClose}) {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    
    const handleTiltleChange = (e) => {
        setTitle(e.target.value)
    }
    
    const handleDateChange = (e) => {
        setDate(e.target.value)
    }
    
    const handleTimeChange = (e) => {
        setTime(e.target.value)
    }
    
    const handleLocationChange = (e) => {
        setLocation(e.target.value)
    }
    
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const PostEvent = async () => {
        const payload ={
            title:title,
            date: date,
            time: time,
            location: location,
            description: description
        }
        const response =await axios.post('http://localhost:1234/api/events',payload)
        console.log(response)  
    }
    const AddEventE = () => {
        PostEvent();
        onClose();
    }
  
    return (
        
        <div className="event-item">

                    <div className="event-item-key">
                        Title: &nbsp;
                        <input type="text" name="title" value={title} onChange={handleTiltleChange} ></input>
                    </div>
                    <div className="event-item-key">
                        Date: &nbsp;
                        <input type="text" name="date" value={date} onChange={handleDateChange} ></input>
                    </div>
                    <div className="event-item-key">
                        Time: &nbsp;
                        <input type="text" name="time" value={time} onChange={handleTimeChange} ></input>
                    </div>
                    <div className="event-item-key">
                        Location: &nbsp;
                        <input type="text" name="location" value={location} onChange={handleLocationChange}  ></input>
                    </div>
                    <div className="event-item-key">
                        Description: &nbsp;
                        <input type="text" name="description" value={description} onChange={handleDescriptionChange}></input>
                    </div>

                    <button onClick={AddEventE}>AddSubmit</button>

                
              
        

        </div>
    
  )
}

export default AddEvent

