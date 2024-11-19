import "./App.css";
import React, { useState } from 'react';
import { students as studentsData } from "./assets/StudentsDb";

function App() {
  const [selectedStudent, setSelectedStudent] = useState(studentsData[0]);
  const [fontSize, setFontSize] = useState('medium');

  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };

  const handleViewProfile = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div className="main">
      <h1>Student Information Portal</h1>
      
      <div className={`app-container ${fontSize}`}>
        
        
        
        <div className="font-selector">
          <hr/>
          <button onClick={() => handleFontSizeChange('small')}>Small</button>
          <button onClick={() => handleFontSizeChange('medium')}>Medium</button>
          <button onClick={() => handleFontSizeChange('large')}>Large</button>
          <hr/>
        </div>
  
        <div className="content-container">
          <div className="students-table">
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Course</th>
                  <th>Country</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {studentsData.map((student, index) => (
                  <tr key={index}>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.course}</td>
                    <td>{student.country}</td>
                    <td>
                      <button onClick={() => handleViewProfile(student)}>
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          {/* Right Side - Student Profile */}
          <div className="student-profile">
            {selectedStudent && (
              <>
                <img
                  className="profile"
                  src={require(`./assets/profilepic/${selectedStudent.profilePic}`)}
                  alt="Profile"
                />
                <h2>{selectedStudent.firstName} {selectedStudent.lastName}</h2>
                <p><strong>Course:</strong> {selectedStudent.course}</p>
                <p><strong>Country:</strong> {selectedStudent.country}</p>
                <p><strong>Email:</strong> {selectedStudent.email}</p>
                <p><strong>Phone:</strong> {selectedStudent.phone}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
