import React, { createContext, useContext, useState } from "react";

// Context oluştur
const DataContext = createContext();

// Verileri sağlayacak veri sağlayıcısı bileşeni
export const DataProvider = ({ children }) => {
  const [busyData, setBusyData] = useState([]);
  const [classroomData, setClassroomData] = useState([]);
  const [coursesData, setCoursesData] = useState([]);
  const [servicesData, setServicesData] = useState([]);

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Verilere erişimi sağlayacak bir özel kancayı (hook) tanımla
export const useData = () => useContext(DataContext);
