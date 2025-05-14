import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo ACC" className="h-10" />
          <nav className="hidden md:flex space-x-4 text-sm">
            <Link to="/" className="hover:underline">Login</Link>
            <Link to="#" className="hover:underline">Associação</Link>
            <Link to="#" className="hover:underline">Fale Conosco</Link>
            <Link to="#" className="hover:underline">Serviços</Link>
            <Link to="#" className="hover:underline">Parceiros</Link>
            <Link to="#" className="hover:underline">Notícias</Link>
            <Link to="#" className="hover:underline">Contato</Link>
          </nav>
        </div>
        <Link to="/cadastro" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm">
          Cadastrar
        </Link>
      </div>
    </header>
  );
}
