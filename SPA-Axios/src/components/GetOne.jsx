import React, { useRef, useState } from "react";
import axios from "axios";

const GetOneRecord = () => {
  const [record, setRecord] = useState(null);
  const [error, setError] = useState(null);
  const ref1 = useRef(null);

  const getRecord = async () => {
    try {
      const res = await axios.get(`http://localhost:9001/get/${ref1.current.value}`);
      const { data } = res;
      setRecord(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching record:", error);
      setError("Error fetching record. Please try again.");
      setRecord(null);
    }
  };

  const get_data = () => {
    getRecord();
  };

  return (
    <div style={{ textAlign: "center", border: "double", borderColor: "purple", margin: "50px auto", width: "60%" }}>
      <input type="text" ref={ref1} />
      <br />
      <br />
      <button onClick={get_data}>Get Single Record</button>
      {error && <p>{error}</p>}
      {record && (
        <table border={1}>
          <thead>
            <tr>
              <th>cid</th>
              <th>cname</th>
              <th>current_reading</th>
              <th>previous_reading</th>
              <th>units</th>
              <th>totalBill</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{record.cid}</td>
              <td>{record.cname}</td>
              <td>{record.current_reading}</td>
              <td>{record.previous_reading}</td>
              <td>{record.units}</td>
              <td>{record.totalBill}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GetOneRecord;
