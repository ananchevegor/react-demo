import axios from "axios";
import React, {useEffect, useState} from "react";
import { localhost } from "../constants/constant";

function ChangeDataPacient() {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        phone: '',
        email: '',
        pass: '',
        id: '7',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(localhost+"/updatepatient", formData)
        .then(response => {
            console.log("Success");
        })
        .catch(error => {
            console.log("Error: "+ error);
        })
        console.log('Submitted data:', formData);
      };


    return(
        <form className="form-container" onSubmit={handleSubmit}>
        <label>
          Имя:
          <input type="text" name="firstName" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Фамилия:
          <input type="text" name="lastName" value={formData.surname} onChange={handleChange} />
        </label>
        <label>
          Телефон:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Пароль:
          <input type="password" name="password" value={formData.pass} onChange={handleChange} />
        </label>
        <button type="submit">Отправить</button>
      </form>
    );
}

export default ChangeDataPacient;