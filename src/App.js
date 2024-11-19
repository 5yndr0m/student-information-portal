import "./App.css";
import React, { useState } from 'react';
import { students as studentsData } from "./assets/StudentsDb";
import StuDataTable from "./components/stuDataTable";
import ProfileView from "./components/profileView";

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
    <div>
      <h1 className="title">Student Information Portal</h1>
      
      <div className={`app-container ${fontSize}`}>
        
        
        
        <div className="font-selector">
          <hr/>
          <button onClick={() => handleFontSizeChange('small')}>Small</button>
          <button onClick={() => handleFontSizeChange('medium')}>Medium</button>
          <button onClick={() => handleFontSizeChange('large')}>Large</button>
          <hr/>
        </div>
  
        <div className="content-container">
          <StuDataTable students={studentsData} handleViewProfile={handleViewProfile} />
  
          {/* Right Side - Student Profile */}
          {/* <div className="student-profile">
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
          </div> */}
          <ProfileView selectedStudent={selectedStudent} />
        </div>
      </div>
    </div>
  );
}

export default App;
