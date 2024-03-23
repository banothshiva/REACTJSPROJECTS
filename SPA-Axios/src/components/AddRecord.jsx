import axios from "axios";
import React, { useRef, useState } from "react";

const AddRecord = () => {
  const [res, setResult] = useState({});
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  const post_data = () => {
    PostEx();
  };

  const PostEx = async () => {
    const response = await axios.post("http://localhost:9001/save", {
      cid: ref1.current.value,
      cname: ref2.current.value,
      current_reading: ref3.current.value,
      previous_reading: ref4.current.value,
      units: ref5.current.value,
      totalBill: ref6.current.value,
    });

    const { data } = response;
    setResult(data);
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          border: "double",
          borderColor: "red",
          marginTop: 50,
        }}
      >
        CId : <input type="text" ref={ref1} />
        <br />
        <br />
        Name : <input type="text" ref={ref2} />
        <br />
        <br />
        CURRENT READING : <input type="text" ref={ref3} />
        <br />
        <br />
        PREVIOUS READING : <input type="text" ref={ref4} />
        <br />
        <br />
        UNITS : <input type="text" ref={ref5} />
        <br />
        <br />
        TOTAL BILL : <input type="text" ref={ref6} />
        <br />
        <br />
        <button onClick={post_data}>SAVE RECORD</button>
        <p>{JSON.stringify(res)}</p>
      </div>
    </>
  );
};

export default AddRecord;
