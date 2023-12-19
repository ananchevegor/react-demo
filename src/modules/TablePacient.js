import React, {useEffect, useState} from "react";
import  axios  from "axios";
import { localhost } from "../constants/constant";

function TablePacient() {
    const [data, setData] = useState([])
    const postData = {
        id_doctor: '3'
      };
    useEffect(() => {
        console.log(localhost);
        axios.post(localhost+"/pacient", postData)
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error('Error:', error.message);
        })
    })

    return(
        <table className="styled-table">
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Диагноз/ Операция</th>
                    <th>Контакты</th>
                    <th>Результаты</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((pacient, index) => {
                        return <tr key={index}>
                            <th>{pacient.name}</th>
                            <th>{pacient.diagnose}</th>
                            <th>{pacient.phone}</th>
                            <th><button className="styled-button">Подробнее</button></th>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default TablePacient;
