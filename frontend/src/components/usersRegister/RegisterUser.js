import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Registrase = () => {
  const [users, setUsers] = useState([]);
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    role: "",
    password: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8700/")
      .then(({ data }) => setUsers(data))
      .catch(({ data }) => toast.error(data));
  }, [users]);


  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8700/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      toast.success("Usuario eliminado con éxito");
    } catch ({ data }) {
      toast.error(data);
    }
  };

  
  const handleEditUser = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:8700/${id}`);
      setValues(data);
    } catch ({ data }) {
      toast.error(data);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:8700", values)
      .then(({ data }) => {
        toast.success(data);
        setUsers([...users, data]);
      })
      .catch(({ data }) => toast.error(data));

    setValues({
      nombre: "",
      apellido: "",
      email: "",
      role: "",
      password: "",
    });
  };
  const handleEditUserSubmit = async (event) => {
    event.preventDefault();
  
    try {
      await axios.put(`http://localhost:8700/${values.id}`, values);
      setUsers([...users.map((user) => user.id === values.id ? values : user)]);
      toast.success("Usuario editado con éxito");
    } catch ({ data }) {
      toast.error(data);
    }
  
    // Agrega este código al final de la función:
    setValues({
      nombre: "",
      apellido: "",
      email: "",
      role: "",
      password: "",
    });
  };
  

  return (
    <div>
      <h2>Registrarse</h2>

      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            name="nombre"
            id="nombre"
            value={values.nombre}
            className="form-control rounded-0"
            onChange={(event) => setValues({ ...values, nombre: event.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            placeholder="Ingrese su apellido"
            name="apellido"
            id="apellido"
            value={values.apellido}
            className="form-control rounded-0"
            onChange={(event) => setValues({ ...values, apellido: event.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Ingrese su email"
            name="email"
            id="email"
            value={values.email}
            className="form-control rounded-0"
            onChange={(event) => setValues({ ...values, email: event.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="role">Role</label>
          <br />
          <select
            id="role"
            name="role"
            required
            onChange={(event)=>setValues({ ...values, role: event.target.value })}
          >
            <option value="admin" label="admin">Administrador</option>
            <option value="jurado" label="jurado">Jurado</option>
            <option value="estudiante" label="estudiante" >Estudiante</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese contraseña"
            name="password"
            id="password"
            value={values.password}
            className="form-control rounded-0"
            onChange={(event) => setValues({ ...values, password: event.target.value })}
          />
        </div>

        <button type="submit" className="btn btn-success">Registrarse</button>
      </form>

      <h2>Usuarios registrados</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
        <button type="button" className="btn btn-danger" onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
        <button type="button" className="btn btn-primary" onClick={() => handleEditUser(user.id)}>Editar</button>
      </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Registrase;
