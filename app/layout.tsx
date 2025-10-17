import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-base'
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-tech'
})

export const metadata: Metadata = {
  title: 'TUF-on - Laboratório Virtual de Física Emergente',
  description: 'Simulações, teoria, descobertas e exploração do universo com a Teoria Universal dos Fluxos (TDUF).',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="bg-gray-dark text-white font-base">
        <Header />

        {/* ⚠️ Modo em construção */}
        <div className="under-construction">
          Você está acessando um projeto científico em fase de construção.
        </div>

        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}
