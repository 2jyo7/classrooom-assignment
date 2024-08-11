"use client"
// components/ClassroomForm.js
import { useState } from 'react';

const ClassroomForm = ({ onSubmit, classroom }: any) => {
  const [name, setName] = useState(classroom ? classroom.name : '');
  const [startTime, setStartTime] = useState(classroom ? classroom.startTime : '');
  const [endTime, setEndTime] = useState(classroom ? classroom.endTime : '');
  const [daysInSession, setDaysInSession] = useState(classroom ? classroom.daysInSession : []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formattedDaysInSession = JSON.stringify(daysInSession);
    onSubmit({ name, startTime, endTime, daysInSession: formattedDaysInSession });
    setName("");
    setStartTime("");
    setEndTime("");
    setDaysInSession("");
  };

  return (
    <div className="mb-4">
 <form onSubmit={handleSubmit}>
      <div>
        <label className="block mb-2 text-sm font-medium" htmlFor="name">Classroom Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        <label className="block mb-2 text-sm font-medium" htmlFor="daysInSession">Days in Session:</label>
        <select
          multiple
          value={daysInSession}
          onChange={(e) => setDaysInSession(Array.from(e.target.selectedOptions, option => option.value))}
          required
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"

        >
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
      </div>
      <button type="submit">{classroom ? 'Update Classroom' : 'Create Classroom'}</button>
    </form>
    </div>
   
  );
};

export default ClassroomForm;
