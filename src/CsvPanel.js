import React, { useState } from "react";
import Papa from "papaparse";
import { useData } from "./DataContext";
import WeeklySchedule1 from "./WeeklySchedule1";

function CsvPanel() {
  const {
    busyData,
    setBusyData,
    classroomData,
    setClassroomData,
    coursesData,
    setCoursesData,
    servicesData,
    setServicesData,
    generateScheduleSignal,
    setGenerateScheduleSignal,
  } = useData();

  const [busyFileSelected, setBusyFileSelected] = useState(false);
  const [classroomFileSelected, setClassroomFileSelected] = useState(false);
  const [coursesFileSelected, setCoursesFileSelected] = useState(false);
  const [servicesFileSelected, setServicesFileSelected] = useState(false);

  const handleFileChange = (event, setData, setFileSelected) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      complete: (result) => {
        const nonEmptyRows = result.data.filter((row) =>
          row.some((cell) => cell.trim() !== "")
        );

        if (setData === setClassroomData) {
          const processedClassroomData = nonEmptyRows.map((row) =>
            row[0].split(";")
          );
          setData(processedClassroomData);
          setFileSelected(true);
        } else {
          setData(nonEmptyRows);
          setFileSelected(true);
        }
      },
      header: false,
    });
  };

  const handleCreateSchedule = () => {
    if (busyFileSelected && classroomFileSelected && coursesFileSelected && servicesFileSelected) {
      setGenerateScheduleSignal(true);
    } else {
      alert("Please upload all CSV files.");
    }
  };

  return (
    <div>
      <h1>Upload Csv Files</h1>
      <label htmlFor="picker1">Busy CSV File:</label>
      <input
        type="file"
        accept=".csv"
        id="picker1"
        onChange={(event) =>
          handleFileChange(event, setBusyData, setBusyFileSelected)
        }
        disabled={busyFileSelected}
      />
      <label htmlFor="picker2">Classroom CSV File:</label>
      <input
        type="file"
        accept=".csv"
        id="picker2"
        onChange={(event) =>
          handleFileChange(event, setClassroomData, setClassroomFileSelected)
        }
        disabled={classroomFileSelected}
      />
      <label htmlFor="picker3">Courses CSV File:</label>
      <input
        type="file"
        accept=".csv"
        id="picker3"
        onChange={(event) =>
          handleFileChange(event, setCoursesData, setCoursesFileSelected)
        }
        disabled={coursesFileSelected}
      />
      <label htmlFor="picker4">Service CSV File:</label>
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
          value="Generate Schedule"
          onClick={handleCreateSchedule}
        />
      </div>
    </div>
  );
}

export default CsvPanel;
