import { useState } from "react";
import "../styles/inscripcion.css";

// Validaciones
const isValidDNI = (dni) => {
  const dniRegex = /^[0-9]{8}[A-Za-z]$/;
  return dniRegex.test(dni);
};

const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export default function Voluntarios() {
  const [form, setForm] = useState({
    nombre: "",
    dni: "",
    direccion: "",
    telefono: "",
    correo: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    dni: "",
    direccion: "",
    telefono: "",
    correo: "",
  });

  const validate = () => {
    let newErrors = {};

    if (!form.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!isValidDNI(form.dni)) newErrors.dni = "DNI inválido";
    if (!form.direccion.trim()) newErrors.direccion = "La dirección es obligatoria";
    if (!/^\d{9}$/.test(form.telefono)) newErrors.telefono = "Teléfono inválido";
    if (!isValidEmail(form.correo)) newErrors.correo = "Correo inválido";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Formulario enviado:", form);
    }
  };

  return (
    <div className="inscripcion-container">
      <h2>Formulario de Voluntariado</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input name="nombre" type="text" placeholder="Nombre" onChange={handleChange} required />
          {errors.nombre && <p className="error">{errors.nombre}</p>}
        </label>
        <label>
          DNI:
          <input name="dni" type="text" placeholder="DNI" onChange={handleChange} required />
          {errors.dni && <p className="error">{errors.dni}</p>}
        </label>
        <label>
          Dirección:
          <input name="direccion" type="text" placeholder="Dirección" onChange={handleChange} required />
          {errors.direccion && <p className="error">{errors.direccion}</p>}
        </label>
        <label>
          Teléfono:
          <input name="telefono" type="tel" placeholder="Teléfono" onChange={handleChange} required />
          {errors.telefono && <p className="error">{errors.telefono}</p>}
        </label>
        <label>
          Correo:
          <input name="email" type="email" placeholder="Correo" onChange={handleChange} required />
          {errors.correo && <p className="error">{errors.correo}</p>}
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
