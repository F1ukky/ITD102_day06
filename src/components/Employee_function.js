import React, { useEffect, useState } from "react";
import axios from "axios";

const Employee = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/employee')
        .then(response => {
            setData(response.data);
        })
    },[]);

    return (
        <>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        {item.name} { " " } {item.position}
                    </li>
                ))}
            </ul>
        </>
    );
  };
  
  export default Employee;