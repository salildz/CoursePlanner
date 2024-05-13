import React, { useState } from "react";
import Papa from "papaparse";
import { useData } from "./DataContext"; // DataContext'den useData özel kancasını içe aktarın

function CsvPanel() {
  const { busyData, setBusyData, classroomData, setClassroomData, coursesData, setCoursesData, servicesData, setServicesData } = useData();

  const [busyFileSelected, setBusyFileSelected] = useState(false);
  const [classroomFileSelected, setClassroomFileSelected] = useState(false);
  const [coursesFileSelected, setCoursesFileSelected] = useState(false);
  const [servicesFileSelected, setServicesFileSelected] = useState(false);

  const handleFileChange = (event, setData, setFileSelected) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      complete: (result) => {
        setData(result.data);
        setFileSelected(true);
      },
      header: false,
    });
  };

  const handleCreateSchedule = () => {

  };

  return (
    <div>
      <label htmlFor="picker1">Busy CSV:</label>
      <input
        type="file"
        accept=".csv"
        id="picker1"
        onChange={(event) =>
          handleFileChange(event, setBusyData, setBusyFileSelected)
        }
        
        disabled={busyFileSelected}
      />
      <label htmlFor="picker2">Classroom CSV:</label>
      <input
        type="file"
        accept=".csv"
        id="picker2"
        onChange={(event) =>
          handleFileChange(event, setClassroomData, setClassroomFileSelected)
        }
        disabled={classroomFileSelected}
      />
      <label htmlFor="picker3">Courses CSV:</label>
      <input
        type="file"
        accept=".csv"
        id="picker3"
        onChange={(event) =>
          handleFileChange(event, setCoursesData, setCoursesFileSelected)
        }
        disabled={coursesFileSelected}
      />
      <label htmlFor="picker4">Services CSV:</label>
      <input
        type="file"
        accept=".csv"
        id="picker4"
        onChange={(event) =>
          handleFileChange(event, setServicesData, setServicesFileSelected)
        }
        disabled={servicesFileSelected}
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
