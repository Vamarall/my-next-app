

import "./globals.css";


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
        <h1>TESTE</h1>
        {children}  {/* Renderiza o conteudo da pagina aqui */}
      </body>
    </html>
  );
}
