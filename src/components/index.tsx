
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Nome do Projeto */}
        <h1 className="text-xl font-bold text-white">
          MeuProjeto
        </h1>

        {/* Navegação */}
        <nav className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          <Link href="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
          <Link href="/contatos" className="text-white hover:text-gray-300">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
