import axios from "axios";
import { useEffect, useState } from "react";
const GetEx3=()=>{
const [arr , setArr]=useState([]);
const getData=async()=>{
    const result = await axios.get(`http://localhost:9001/getAll`);
    const {data}=result;
    setArr(data)
}
useEffect(()=>{
    getData();
},[]);
    return(<>
    <div className="container mt-5">
        <table border={1} className="table table-success table-borderd table-striped table-hover">
   <thead>
    <tr>
    <th>cid </th>
    <th>cname </th>
    <th> current_reading </th>
    <th> previous_reading </th>
    <th> units </th>
    <th> totalBill </th>
    </tr>
   </thead>
   <tbody>
    {
        arr.map((element,index)=>{
        return(
        <tr key={index}>
            <td>{element.cid}</td>
            <td>{element.cname}</td>
            <td>{element.current_reading}</td>
            <td>{element.previous_reading}</td>
            <td>{element.units}</td>
            <td>{element.totalBill}</td>
        </tr>
        
      )
    })
    
    }
   </tbody>
    <tfoot></tfoot>
        </table>  
      </div>
    </>)
}
export default GetEx3;