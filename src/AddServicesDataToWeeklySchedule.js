function addServicesDataToWeeklySchedule(servicesData) {
    const schedule = {};
  
    // servicesData içindeki her bir öğe için
    servicesData.forEach(item => {
      // Dersin günü ve saati
      const day = item.day;
      const time = item.time;
  
      // Saati ve günü uygun formatta alalım (örneğin: "8:30,9:30,10:30" -> ["8:30", "9:30", "10:30"])
      const timeSlots = time.split(',');
  
      // Her zaman 3 ders olduğunu varsayalım
      for (let i = 0; i < 3; i++) {
        // Dersin saatini ve id'sini oluşturalım
        const slot = timeSlots[i];
        const id = `${1100 + i}${day[0]}`;
  
        // Dersin zamanını ve ders adını ekleyelim
        if (!schedule[id]) {
          schedule[id] = { time: slot, course: item.course };
        } else {
          // İlgili saatte ders varsa, sonraki uygun saate geçelim
          const nextId = `${1100 + i + 1}${day[0]}`;
          if (!schedule[nextId]) {
            schedule[nextId] = { time: slot, course: item.course };
          }
        }
      }
    });
  
    return schedule;
  }
  