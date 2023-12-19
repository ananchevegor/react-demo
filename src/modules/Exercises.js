import axios from "axios";
import React, { useEffect, useState }  from "react";
import { localhost } from "../constants/constant";

function Exercises() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(localhost+"/exercises")
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log('Error:', error.message);
        })
    })
    return(
        <table className="styled-table">
            <tbody>
                {
                    data.map((exersices, index) => {
                        return <tr key={index}>
                            <th>{exersices.ExerciseID}</th>
                            <th>{exersices.Name} - {exersices.Description}</th>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default Exercises;
