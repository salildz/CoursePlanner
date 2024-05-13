import React from "react";

function MakeSchedule({ busyData, classroomData, coursesData, servicesData }) {
  return (
    <div>
      <h2>Busy Data:</h2>
      {busyData ? (
        <ul>
          {busyData.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      ) : (
        <p>No busy data available</p>
      )}

      <h2>Classroom Data:</h2>
      {classroomData ? (
        <ul>
          {classroomData.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      ) : (
        <p>No classroom data available</p>
      )}

      <h2>Courses Data:</h2>
      {coursesData ? (
        <ul>
          {coursesData.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      ) : (
        <p>No courses data available</p>
      )}

      <h2>Services Data:</h2>
      {servicesData ? (
        <ul>
          {servicesData.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      ) : (
        <p>No services data available</p>
      )}
    </div>
  );
}

export default MakeSchedule;
