import axios from "axios";
import React, {useEffect, useState} from "react";
import { localhost } from "../constants/constant";

function ChangeDataDoctor() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        qualification: '',
        specialization: '',
        certificate: '',
        license: '',
        password: '',
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
        axios.post(localhost+"/updatedoctor", formData)
        .then(response => {
            console.log("Success")
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
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <label>
          Фамилия:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
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
          Квалификация:
          <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} />
        </label>
        <label>
          Специализация:
          <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} />
        </label>
        <label>
          Сертификат:
          <input type="text" name="certificate" value={formData.certificate} onChange={handleChange} />
        </label>
        <label>
          Лицензия:
          <input type="text" name="license" value={formData.license} onChange={handleChange} />
        </label>
        <label>
          Пароль:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <button type="submit">Отправить</button>
      </form>
    );
}

export default ChangeDataDoctor;