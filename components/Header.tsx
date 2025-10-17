'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-gray-dark/80 backdrop-blur-md border-b border-gray-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Marca */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center">
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-tech font-bold">
                  <span className="text-cyber-blue">TUF</span>
                  <span className="text-matrix-green">-ON</span>
                </span>
                <span className="text-xs text-gray-400 font-base -mt-1">
                  Teoria Universal dos Fluxos
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Menu Principal */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Início', href: '/' },
              { label: 'Teoria', href: '/teoria' },
              { label: 'Documentação', href: '/documentacao' },
              { label: 'Blog', href: '/blog' },
              { label: 'Contato', href: '/contato' },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link 
                  href={item.href}
                  className="text-gray-300 hover:text-cyber-blue transition-colors duration-300 font-tech text-sm"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* Botão CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyber-blue to-matrix-green text-gray-dark px-6 py-2 rounded-lg font-tech font-bold text-sm hover:shadow-lg hover:shadow-cyber-blue/30 transition-all duration-300"
            >
              ENTRAR NO PORTAL
            </motion.button>
          </div>

          {/* Botão Mobile - opcional deixar funcional depois */}
          <motion.button 
            className="md:hidden flex flex-col space-y-1"
            whileTap={{ scale: 0.95 }}
          >
            <span className="w-6 h-0.5 bg-cyber-blue"></span>
            <span className="w-6 h-0.5 bg-cyber-blue"></span>
            <span className="w-6 h-0.5 bg-cyber-blue"></span>
          </motion.button>
        </div>
      </nav>
    </motion.header>
  )
}
