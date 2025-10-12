export const metadata = {
  title: 'TUF-ON - Teoria Universal FLuxo ',
  description: 'Portal oficial da Teoria TDUF - Física Quântica Avançada',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{
        margin: 0,
        padding: 0,
        fontFamily: 'Inter, sans-serif',
        backgroundColor: '#ffffff', // Fundo branco clean como TradGen
        color: '#1a365d',
        minHeight: '100vh'
      }}>
        {/* Menu Dark como TradGen */}
        <nav style={{
          backgroundColor: '#1a365d', // Navy dark igual TradGen
          padding: '1rem 2rem',
          boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
          borderBottom: '1px solid #2d3748'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h1 style={{
              color: '#ffffff',
              margin: 0,
              fontSize: '1.5rem',
              fontWeight: '700',
              letterSpacing: '-0.5px'
            }}>
              TUF-ON
            </h1>
            
            {/* Menu Items - estilo TradGen */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center'
            }}>
              <a href="#" style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'color 0.2s'
              }}>Início</a>
              <a href="#" style={{
                color: '#a0aec0',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'color 0.2s'
              }}>Teoria</a>
              <a href="#" style={{
                color: '#a0aec0',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'color 0.2s'
              }}>Documentação</a>
              <a href="#" style={{
                color: '#a0aec0',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'color 0.2s'
              }}>Contato</a>
            </div>
          </div>
        </nav>
        
        {/* Conteúdo Principal com fundo clean */}
        <main style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '3rem 2rem',
          minHeight: 'calc(100vh - 80px)',
          backgroundColor: '#ffffff'
        }}>
          {children}
        </main>
      </body>
    </html>
  )
}
