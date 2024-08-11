"use client"

import axios from "axios";
import { useState } from "react"

// components/Timetable.js




const Timetable = ({ timetable }: any) => {
  const [subject, setSubject] = useState("")
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState( '');
  const [day, setDay] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const res = axios.post("http://localhost:4200/teacher/timetable", {
     subject,startTime,endTime,day
    })
    console.log(res);
  };

    return (
      <div className="mb-4">
         <form onSubmit={handleSubmit}>
      <div>
        <label className="block mb-2 text-sm font-medium" htmlFor="subject">Classroom Name:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"

        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium" htmlFor="startTime">Start Time:</label>
        <input
          type="time"
          id="startTime"
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
        value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium" htmlFor="endTime">End Time:</label>
        <input
          type="time"
          id="endTime"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"

        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium" htmlFor="day">Days in Session:</label>
        <input
          type="text"
          id="day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          required
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"

        />
      </div>
      <button type="submit">Create Timetable</button>
    </form>
 <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Day</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>
          {timetable && timetable?.map((period: any, index: any) => (
            <tr key={index}>
              <td className="mx-2">{period.subject}</td>
              <td className="mx-2">{period.day}</td>
              <td className="mx-2">{period.start_time}</td>
              <td className="mx-2">{period.end_time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
     
    );
  };
  
  export default Timetable;
  