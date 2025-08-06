

import "./globals.css";

import {Header} from '../components';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header /> {/* Renderiza o header em todas as paginas */}
        {children}  {/* Renderiza o conteudo da pagina aqui */}
      </body>
    </html>
  );
}
