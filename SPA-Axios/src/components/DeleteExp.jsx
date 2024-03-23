import axios from "axios";
import { useRef, useState } from "react";

const DeleteExpample = () => {
  const [num, setNum] = useState({});
  const ref1 = useRef(null);

  const deleteData = async () => {
    try {
      const result = await axios.delete(`http://localhost:9001/delete/${ref1.current.value}`);
      const { data } = result;
      setNum(data);
    } catch (error) {
      console.error("Error deleting record:", error);
      setNum({ error: "Error deleting record. Please try again." });
    }
  };

  const deleteRecord = () => {
    deleteData();
  };

  return (
    <>
      <input type="text" ref={ref1} /><br />
      <button onClick={deleteRecord}>DELETE RECORD</button>
      <p>{JSON.stringify(num)}</p>
    </>
  );
};

export default DeleteExpample;
