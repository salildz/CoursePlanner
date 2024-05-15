import React, { createContext, useContext, useState } from "react";


const DataContext = createContext();
 
export const DataProvider = ({ children }) => {
  const [busyData, setBusyData] = useState([]);
  const [classroomData, setClassroomData] = useState([]);
  const [coursesData, setCoursesData] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [generateScheduleSignal, setGenerateScheduleSignal] = useState(false);

  return (
    <DataContext.Provider
      value={{
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
