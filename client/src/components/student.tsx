"use client"
// pages/dashboard/student.js
import { useState, useEffect } from 'react';
import Timetable from './Timetable';

const StudentDashboard = () => {
  const [classmates, setClassmates] = useState([]);
  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    fetchClassmates();
    fetchTimetable();
  }, []);

  const fetchClassmates = async () => {
    // Fetch classmates from the API
    const response = await fetch('/api/classmates');
    const data = await response.json();
    setClassmates(data);
  };

  const fetchTimetable = async () => {
    // Fetch timetable from the API
    const response = await fetch('/api/timetable');
    const data = await response.json();
    setTimetable(data);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-black text-white ">
      <h1>Student Dashboard</h1>

      <h2>Classmates</h2>
      <ul>
        {classmates.map((student: any) => (
          <li key={student.id}>{student.email}</li>
        ))}
      </ul>

      <h2>Timetable</h2>
      <Timetable timetable={timetable} />
    </div>
  );
};

export default StudentDashboard;
