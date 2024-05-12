import React, { useState } from "react";
import Papa from "papaparse";

function CsvPanel() {
  const [busyData, setBusyData] = useState([]);
  const [classroomData, setClassroomData] = useState([]);
  const [coursesData, setCoursesData] = useState([]);
  const [servicesData, setServicesData] = useState([]);

  const handleFileChange = (event, setData) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      complete: (result) => {
        setData(result.data);
      },
      header: true
    });
  };

  const handleCreateSchedule = () => {
    console.log("Busy Data:", busyData);
    console.log("Classroom Data:", classroomData);
    console.log("Courses Data:", coursesData);
    console.log("Services Data:", servicesData);
  };

  return (
    <div>
      <label htmlFor="picker1">Busy CSV:</label>
      <input
        type="file"
        accept=".csv"
        id="picker1"
        onChange={(event) => handleFileChange(event, setBusyData)}
      />
      <label htmlFor="picker2">Classroom CSV:</label>
      <input
        type="file"
        accept=".csv"
        id="picker2"
        onChange={(event) => handleFileChange(event, setClassroomData)}
      />
      <label htmlFor="picker3">Courses CSV:</label>
      <input
        type="file"
        accept=".csv"
        id="picker3"
        onChange={(event) => handleFileChange(event, setCoursesData)}
      />
      <label htmlFor="picker4">Services CSV:</label>
      <input
        type="file"
        accept=".csv"
        id="picker4"
        onChange={(event) => handleFileChange(event, setServicesData)}
      />

      <div>
        <input
          type="button"
          id="uploadFile"
          value="Create Your Schedule"
          onClick={handleCreateSchedule}
        />
      </div>
    </div>
  );
}

export default CsvPanel;
