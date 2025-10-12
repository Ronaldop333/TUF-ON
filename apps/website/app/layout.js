export const metadata = {
  title: 'TUF-ON - Teoria da Unificação Física',
  description: 'Portal oficial da Teoria TDUF - Física Quântica Avançada',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <nav>
          <h1>TUF-ON</h1>
          {/* Logo mais adicionaremos o LanguageToggle aqui */}
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
