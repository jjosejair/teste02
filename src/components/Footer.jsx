export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <img src="/logo.png" alt="Logo ACC" className="h-12 mb-3" />
          <p className="mb-2">&copy; 2025 ACC. Todos os direitos reservados.</p>
          <div className="flex space-x-3 text-lg">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Sobre</a></li>
            <li><a href="#" className="hover:underline">Associação</a></li>
            <li><a href="#" className="hover:underline">Fale Conosco</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Termos e Condições</a></li>
            <li><a href="#" className="hover:underline">Política de Privacidade</a></li>
            <li><a href="#" className="hover:underline">Ajuda</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Stay up to date</h4>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full p-2 rounded text-black"
          />
        </div>
      </div>
    </footer>
  );
}