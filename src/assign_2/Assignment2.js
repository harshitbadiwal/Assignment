    import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import "./Assignment2.css"
import moment from "moment/moment";
    const Assignment2 = () =>{

        const [Date, SetDate] = useState('');
           
     
          

const selectedDate =()=>{
    console.log("before date format",Date)
    const formatDate = moment(Date).format('MM/DD/YY')
    console.log("after date format", formatDate)
 
}

        return<>
    <div className="Date-area">
        <input className="date-input" type="date"  onChange={(e)=>SetDate(e.target.value)} />
        <button className="date-submit" onClick={()=>selectedDate()}> Submit </button>
    </div>
        </>
    }
    export default Assignment2