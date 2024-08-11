"use client"
// pages/dashboard/teacher.js
import { useState, useEffect } from 'react';
import Timetable from './Timetable';
import { students } from './PrincipalDash';
import axios from 'axios';

const TeacherDashboard = () => {
  const [timetable, setTimetable] = useState<any>([]);

  useEffect(() => {
    fetchTimetable();
  }, []);

  

  const fetchTimetable = async () => {
    // Fetch timetable from the API
    const response = await axios.get('http://localhost:4200/teacher/getTimeTable');
    const data = response.data;
    console.log(data);
    
    setTimetable(data);
  };
 
  const studentList = students;

  return (
    <div className="max-w-4xl mx-auto p-4 bg-black text-white ">
      <h1>Teacher Dashboard</h1>
      <div className="bg-gray-800 shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Students</h2>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-600 table-fixed">
                <thead className="bg-gray-900">
                  <tr>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase">
                      Email
                    </th>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase">
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-600">
                  {students.map((student: any) => (
                    <tr className="hover:bg-gray-700" key={student.email}>
                      <td className="p-4">{student.email}</td>
                      <td className="p-4">{student.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
       
      </div>
      <h2>Students</h2>
      <h2>Timetable</h2>
      <Timetable timetable={timetable} />
    </div>
  );
};

export default TeacherDashboard;
