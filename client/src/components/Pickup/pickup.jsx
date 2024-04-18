
import './pickup.css'

import TimePicker from 'react-time-picker';

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './TimePicker.css';
import 'react-clock/dist/Clock.css';

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';



const Pickup = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState('10:00');

  const [formData, setFormData] = useState({
    Date: '',
    Time: '',
    Location: '',
    Notes: ''
  });

  function handleSubmit(event) {
    event.preventDefault();

    const location = document.getElementById('location').value;
    const notes = document.getElementById('notes').value;

    console.log("Hello");

    setFormData({
      Date: startDate,
      Time: time,
      Location: location,
      Notes: notes
    });

    console.log(formData);

    // send the request/mutation

  }

  return (
    <div className="container">

      <form onSubmit={handleSubmit}>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

        <TimePicker onChange={setTime} value={time} />

        <label>Location: </label>
        <input type="text" name="Location" id="location"/>

        <label> Notes: </label>
        <textarea id="notes"> </textarea>

        <button type="submit">Submit</button>
      </form>

    </div>

  );
}

export default Pickup;

