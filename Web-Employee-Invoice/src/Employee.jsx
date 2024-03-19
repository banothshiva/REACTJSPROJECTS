import React, { useState } from "react";

const Employee = () => {
    const [data, setData] = useState({
        empNo: "",
        empName: "",
        salary: "",
        TA: "",
        DA: "",
        HRA: "",
        NetSalary: "",
        discount: "",
        PF: "",
        GrossSalary: ""
    });

    const change = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };

    const display = (e) => {
        e.preventDefault();

        let { salary, discount } = data;
        salary = parseFloat(salary);
        discount = parseFloat(discount);

        let TA, DA, HRA, PF;
        if (salary < 3000) {
            TA = salary * (7 / 100);
            DA = salary * (9 / 100);
            HRA = salary * (11 / 100);
            PF = salary * (13 / 100);
        } 
        else if (salary >= 3000 && salary <= 5000) {
            TA = salary * (13 / 100);
            DA = salary * (15 / 100);
            HRA = salary * (17 / 100);
            PF = salary * (19 / 100);
        } else {
            TA = salary * (21 / 100);
            DA = salary * (23 / 100);
            HRA = salary * (25 / 100);
            PF = salary * (27 / 100);
        }

        const GrossSalary = TA + DA + HRA;
        const discountAmount = salary * (discount / 100);
        const NetSalary = GrossSalary - PF;

        setData({
            ...data,
            TA: TA.toFixed(2),
            DA: DA.toFixed(2),
            HRA: HRA.toFixed(2),
            PF: PF.toFixed(2),
            GrossSalary: GrossSalary.toFixed(2),
            NetSalary: NetSalary.toFixed(2)
        });
    };

    const { empNo, empName, salary, discount, TA, DA, HRA, PF, GrossSalary, NetSalary } = data;

    return (
        <>
            <div>EMPLOYEE INVOICE APPLICATION </div>
            <form onSubmit={display}>
                EMPLOYEE NO : <input type="text" name="empNo" value={empNo} onChange={change} placeholder="ENTER EMP NUMBER" /><p></p>
                EMPLOYEE NAME : <input type="text" name="empName" value={empName} onChange={change} placeholder="ENTER EMP NAME" /><p></p>
                EMPLOYEE SALARY : <input type="text" name="salary" value={salary} onChange={change} placeholder="ENTER EMP SALARY" /><p></p>
                DISCOUNT : <input type="text" name="discount" value={discount} onChange={change} placeholder="ENTER DISCOUNT" /><p></p>
                <input type="submit" value="PRINT INVOICE" />
            </form>
            <h2>Employee Invoice</h2>
            <p>Discount: {discount}%</p>
            <p>TA: {TA}</p>
            <p>DA: {DA}</p>
            <p>HRA: {HRA}</p>
            <p>PF: {PF}</p>
            <p>GROSS SALARY: {GrossSalary}</p>
            <p>NET SALARY: {NetSalary}</p>
        </>
    );
};

export default Employee;
