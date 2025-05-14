import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const mockUsers = []; // aqui você poderia colocar usuários mockados se quiser

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const foundUser = mockUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      alert("Login bem-sucedido!");
      // navigate("/home");
    } else {
      alert("Credenciais inválidas.");
    }
  };

  return (
    <div className="h-screen w-screen bg-white flex flex-col">
      <Header />
      <div className="flex justify-center items-center flex-1">
        <div className="flex flex-col justify-center items-center w-[750px] h-[400px] bg-gray-300 p-8 rounded">
          <h1 className="text-3xl text-center font-bold font-serif mb-6">Login</h1>
          <div className="flex flex-col w-[400px]">
            <label className="font-serif font-semibold mb-1">Usuário ou E-mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-center h-10 mb-4 rounded"
            />

            <div className="flex justify-between items-center mb-1">
              <label className="font-serif font-semibold">Senha</label>
              <a href="/recuperar" className="text-sm text-blue-500 font-bold hover:underline">
                Esqueceu a senha?
              </a>
            </div>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white text-center h-10 mb-4 rounded"
            />

            <button
              onClick={handleLogin}
              className="bg-gray-500 text-white font-bold rounded-md w-[150px] h-10 self-center"
            >
              Entrar
            </button>
          </div>
          <p className="mt-4">
            Não tem conta? <a href="/cadastro" className="font-bold">Cadastre-se</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
