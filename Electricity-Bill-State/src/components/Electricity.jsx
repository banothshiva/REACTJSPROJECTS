import React, { useState } from "react";

const Electricity = () => {
    const [data, setData] = useState({
        cId: "",
        cName: "",
        cReading: "",
        pReading: "",
    });
    const [result, setResult] = useState("");
    const [unit, setUnit] = useState(0);
    const [totalBill, setTotalBill] = useState(0);

    const { cId, cName, cReading, pReading } = data;

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const calculateBill = (e) => {
        e.preventDefault();
        const current = parseFloat(cReading);
        const previous = parseFloat(pReading);

        if (isNaN(current) || isNaN(previous)) {
            setResult("Please enter valid readings.");
            return;
        }

        let consumedUnits = current - previous;
        setUnit(consumedUnits);

        if (consumedUnits < 300) {
            setTotalBill(consumedUnits * 1.75);
        } else if (consumedUnits >= 300 && consumedUnits < 500) {
            setTotalBill(consumedUnits * 3.72);
        } else {
            setTotalBill(consumedUnits * 5.72);
        }

        setResult(`Bill calculated successfully! Consumed Units: ${consumedUnits}`);
    };

    return (
        <>
            <div>
                <label>CONSUMER ID :</label>
                <input type="text" name="cId" value={cId} onChange={handleChange} /><p></p>
                <label>CONSUMER NAME :</label>
                <input type="text" name="cName" value={cName} onChange={handleChange} /><p></p>
                <label>CURRENT READING :</label>
                <input type="text" name="cReading" value={cReading} onChange={handleChange} /><p></p>
                <label>PREVIOUS READING :</label>
                <input type="text" name="pReading" value={pReading} onChange={handleChange} /><p></p>
                SUBMIT :<input type="submit" value="PrintBill" onClick={calculateBill} />
            </div>
            <h1>{result}</h1>
            <h1>Total Units Consumed: {unit}</h1>
            <h1>Total Bill: ${totalBill.toFixed(2)}</h1>
        </>
    );
};

export default Electricity;
