import React  from "react";
import Student from "./Student";
function Employee(props){
return(
<>
<p>EMPLOYEE ID {props.id}</p>
<p>EMPLOYEE NAME {props.name}</p>
<p>EMPLOYEE SALARY {props.salary}</p>
<Student  rollNo={"100"} name={"deva"} fees="500.20"  />
<Student arr={[10,22,33,44]}/>
</>

)

}
export default Employee