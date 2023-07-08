function compareStudents(student1, student2) {
  
    const totalMarksDiff = student2.chemistryMarks + student2.biologyMarks - (student1.chemistryMarks + student1.biologyMarks);
    if (totalMarksDiff !== 0) {
      return totalMarksDiff;
    }
    
  
  
    const biologyMarksDiff = student2.biologyMarks - student1.biologyMarks;
    if (biologyMarksDiff !== 0) {
      return biologyMarksDiff;
    }
  
   
    const birthDate1 = new Date(student1.dateOfBirth);
    const birthDate2 = new Date(student2.dateOfBirth);
    return birthDate1 - birthDate2;
  }
  

  const students = [
    {
        name: "Leo Messi",
        dob: "31-12-1995",
        biology: 95,
        chemistry: 91,
      },
      {
        name: "Cristiano Ronaldo",
        dob: "31-05-1992",
        biology: 90,
        chemistry: 81,
      },
      {
        name: "Virat Kohli",
        dob: "31-12-1995",
        biology: 95,
        chemistry: 96,
      },
      {
        name: "Rohit Sharma",
        dob: "31-12-1995",
        biology: 85,
        chemistry: 86,
      },
      {
        name: "Viswanathan Anand",
        dob: "12-12-1994",
        biology: 99,
        chemistry: 10,
      },
    
  ];
  
  students.sort(compareStudents);
  
  console.log(students);
  