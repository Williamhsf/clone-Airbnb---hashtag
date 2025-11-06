import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../contexts/UserContext";

const Login = () => {
  const { user, setUser } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (email && password) {
      try {
        const { data: userDoc } = await axios.post("/users/login", {
          email,
          password,
        });
        setUser(userDoc);
        setRedirect(true);
      } catch (error) {
        alert(`Deu um erro ao logar: ${error.response.data}`);
      }
    } else {
      alert("Você precisa preencher o e-mail e a senha!");
    }
  };

  if (redirect || user) return <Navigate to="/" />;

  return (
    <section className='flex items-center'>
      <div className="w-full mx-auto flex max-w-96 flex-col gap-4 items-center">
        <h1 className='text-3xl font-bold'>Faça seu login</h1>

        <form className="flex w-full flex-col gap-2" onSubmit={handleSubmit}>
          <input 
            type="email" 
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder='Digite seu e-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder='Digite sua senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className='cursor-pointer bg-primary-400 text-white font-bold w-full rounded-full border border-gray-300 px-4 py-2'>
            Login
          </button>
        </form>

        <p>
          Ainda não tem uma conta? {" "}
          <Link to='/register' className='underline font-semibold'>
            Registre-se aqui!
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Login