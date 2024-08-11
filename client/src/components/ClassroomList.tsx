// components/ClassroomList.js
const ClassroomList = ({ classrooms, onEdit, onDelete }: any) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Days</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classrooms.map((classroom: any) => (
            <tr key={classroom.id}>
              <td>{classroom.name}</td>
              <td>{classroom.startTime}</td>
              <td>{classroom.endTime}</td>
              <td>{classroom.daysInSession.join(', ')}</td>
              <td>
                <button onClick={() => onEdit(classroom)}>Edit</button>
                <button onClick={() => onDelete(classroom.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default ClassroomList;
  