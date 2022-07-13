import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import getInfo from "../../redux/login";



const Login =  () => {

  const navigate = useNavigate();
  
  const usuario = getInfo();
  console.log("userArr", usuario);

  const [form, setForm] = useState({username: '', password: ''});
  const {username, password} = form;
  const [users, setUsers] = useState([]);
  const [info, setInfo] = useState({});
  

  const submitLogin = ev => {
    ev.preventDefault();    
    
  }

  const handleInput = ev => setForm({ ...form, [ev.target.name]: ev.target.value })


  return (
    <form onSubmit={submitLogin}>

      <label>
        <p>user</p>
        <input name="username" type="text" value={form.username} onChange={handleInput} />
      </label>

      <label>
        <p>Contraseña</p>
        <input name="password" type="password" value={form.password} onChange={handleInput} />
      </label>
      
      <div>
        <button type="submit">Acceder</button>
      </div>

    </form>
  )
  
}

export default Login