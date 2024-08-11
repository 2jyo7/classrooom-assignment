"use client";
import { useState } from "react";
import ClassroomForm from "./ClassroomForm";
import axios from "axios";
import { useRouter } from "next/navigation";

// Static list of teachers and students
export  const teachers = [
  { email: "teacher1@example.com", role: "Math Teacher" },
  { email: "teacher2@example.com", role: "Science Teacher" },
  { email: "teacher23@example.com", role: "Hindi Teacher" },
  { email: "teacher26@example.com", role: "English Teacher" },
  { email: "teacher13@example.com", role: "Calculus Teacher" },
  { email: "teacher91@example.com", role: "Sanskrit Teacher" },
];

export const students = [
  { email: "student1@example.com", role: "Grade 10" },
  { email: "student2@example.com", role: "Grade 11" },
   { email: "student21@example.com", role: "Grade 9" },
  { email: "student51@example.com", role: "Grade 9" },
   { email: "student61@example.com", role: "Grade 8" },
  { email: "student33@example.com", role: "Grade 11" },
];

const PrincipalDash = () => {
  const router = useRouter();
  const [classrooms, setClassrooms] = useState<any>([]);


  const handleClassroomSubmit = async (classroomData: any) => {
    const res = axios.post("http://localhost:4200/principal/createClassRoom", classroomData)
    console.log(res);
    
    setClassrooms([...classrooms, classroomData]);
    router.push("/teacher")
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-black text-white">
      <h1 className="text-center text-2xl font-bold mb-4">
        Principal Dashboard
      </h1>

      <div className="bg-gray-800 shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Teachers</h2>
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
                  {teachers.map((teacher: any) => (
                    <tr className="hover:bg-gray-700" key={teacher.email}>
                      <td className="p-4">{teacher.email}</td>
                      <td className="p-4">{teacher.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

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
        <p className="mt-5">
          This classroom app is for everyone involved in it. For your ease to
          learn everything about the classes, teachers, and subjects with their
          timeline. Learn more by going to the{" "}
          <a
            className="text-blue-400 hover:underline"
            href="/teacher"
            target="_blank"
          >
            Teacher and Student Dashes.
          </a>
          .
        </p>
      </div>

      <div className="bg-gray-800 shadow-md rounded-lg p-6 mb-8">
        <div className="max-w-md mx-auto backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
          <h2 className="text-2xl font-bold pb-5">Create Classroom</h2>
          <ClassroomForm onSubmit={handleClassroomSubmit} />
        </div>
      </div>

      <div className="bg-gray-800 shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Classrooms</h2>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-600 table-fixed">
                <thead className="bg-gray-900">
                  <tr>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase">
                      Name
                    </th>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase">
                      Start Time
                    </th>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase">
                      End Time
                    </th>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase">
                      Days
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-600">
                  {classrooms.map((classroom: any, index: number) => (
                    <tr className="hover:bg-gray-700" key={index}>
                      <td className="p-4">{classroom.name}</td>
                      <td className="p-4">{classroom.startTime}</td>
                      <td className="p-4">{classroom.endTime}</td>
                      <td className="p-4">
                        {classroom.daysInSession}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalDash;
