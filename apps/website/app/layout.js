export const metadata = {
  title: 'TUF-ON - Teoria Universal dos Fluxos',
  description: 'Portal oficial da TDUF – Explorando uma nova Física de Interações Fundamentais.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body style={{
        margin: 0,
        padding: 0,
        fontFamily: 'Inter, sans-serif',
        backgroundColor: '#ffffff',
        color: '#1a365d',
        minHeight: '100vh'
      }}>
        {/* NAV */}
        <nav style={{
          backgroundColor: '#1a365d',
          padding: '1rem 2rem',
          boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
          borderBottom: '1px solid #2d3748'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap'
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

            <div style={{
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginTop: '0.5rem'
            }}>
              <a href="/" style={menuLinkStyle(true)}>Início</a>
              <a href="/teoria" style={menuLinkStyle()}>Teoria</a>
              <a href="/documentacao" style={menuLinkStyle()}>Documentação</a>
              <a href="/contato" style={menuLinkStyle()}>Contato</a>
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT */}
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

function menuLinkStyle(isActive = false) {
  return {
    color: isActive ? '#ffffff' : '#a0aec0',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'color 0.2s',
    paddingBottom: '2px',
    borderBottom: isActive ? '2px solid #00f0ff' : '2px solid transparent',
  }
}
