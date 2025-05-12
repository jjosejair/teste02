import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <main className="min-h-screen bg-white flex flex-col justify-between">
        <div className="bg-gray-200 py-10 text-center">
          <h1 className="text-3xl font-serif text-gray-800">Área do associado</h1>
        </div>

        <form className="max-w-xl mx-auto w-full px-6 py-10 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Usuário ou E-mail *</label>
            <input type="text" className="mt-1 w-full bg-gray-200 p-3 rounded-md border border-gray-300" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Senha *</label>
            <input type="password" className="mt-1 w-full bg-gray-200 p-3 rounded-md border border-gray-300" />
          </div>

          <div className="text-sm text-blue-600 hover:underline cursor-pointer">Esqueceu a senha?</div>

          <div className="bg-gray-100 p-4 text-center border">[reCAPTCHA aqui]</div>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">Login</button>

          <p className="text-center text-sm">
            Não tem conta? <Link to="/cadastro" className="text-blue-600 underline">Cadastre-se</Link>
          </p>
        </form>

        <Footer />
      </main>
    </>
  );
}