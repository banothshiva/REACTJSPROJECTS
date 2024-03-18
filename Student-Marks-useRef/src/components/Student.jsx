import { useRef, useState } from "react";

const Student = () => {
  const hallTicketNumber = useRef();
  const name = useRef();
  const springMarks = useRef();
  const springbootMarks = useRef();
  const reactJsMarks = useRef();

  const [data, setData] = useState({
    hallTicketNumber: "",
    name: "",
    springMarks: 0,
    springbootMarks: 0,
    reactJsMarks: 0,
    total: 0,
    percentage: 0,
    grade: "",
    result: "",
  });

  const display = (e) => {
    e.preventDefault();

    const springMarksValue = parseFloat(springMarks.current.value);
    const springbootMarksValue = parseFloat(springbootMarks.current.value);
    const reactJsMarksValue = parseFloat(reactJsMarks.current.value);

    const total = springMarksValue + springbootMarksValue + reactJsMarksValue;
    const percentage = (total / 3);

    let grade, result;

    if (springMarksValue > 35 && springbootMarksValue > 35 && reactJsMarksValue > 35) {
      if (percentage > 70) {
        grade = "A";
        result = "PASS";
      } 
      else if (percentage >= 60 && percentage < 70) 
      {
        grade = "B";
        result = "PASS";
      }
       else if (percentage >= 50 && percentage < 60)
        {
        grade = "C";
        result = "PASS";
      }
       else if (percentage < 50) 
       {
        grade = "D";
        result = "PASS";
      }
    } else {
      grade = "F";
      result = "FAILED IN THE EXAM RESULT";
    }

    setData({
      ...data,
      hallTicketNumber: hallTicketNumber.current.value,
      name: name.current.value,
      springMarks: springMarksValue,
      springbootMarks: springbootMarksValue,
      reactJsMarks: reactJsMarksValue,
      total,
      percentage,
      grade,
      result,
    });
  };

  return (
    <>
    <center>
      <div>

        HALL TICKET NUMBER :<input type="text" ref={hallTicketNumber} /><p></p>
        STUDENT NAME  :<input type="text" ref={name} /><p></p>
        SPRING MARKS    :<input type="text" ref={springMarks} /><p></p>
        SPRING BOOT MARKS :<input type="text" ref={springbootMarks} /><p></p>
        REACT JS MARKS :<input type="text" ref={reactJsMarks} /><p></p>
        <button onClick={display}>PRINT MARKS </button>
        
      </div>
      </center>
      <div>
        <h1>  HALL TICKET NUMBER:{data.hallTicketNumber}</h1>
        <h1>  STUDENT NAME :{data.name}</h1>
        <h1>  SPRING MARKS  :{data.springMarks}</h1>
        <h1>  SPRING BOOT MARKS :{data.springbootMarks}</h1>
        <h1>  REACT JS MARKS :{data.reactJsMarks}</h1>
        <h1>  TOTAL :{data.total}</h1>
        <h1>  PERCENTAGE :{data.percentage}</h1>
        <h1>  GRADE :{data.grade}</h1>
        <h1>  RESULT :{data.result}</h1>
      </div>
    </>
  );
};

export default Student;
