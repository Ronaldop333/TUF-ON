'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const experiments = [
  {
    id: 1,
    name: "Gravity Playground",
    description: "Explore a curvatura do espaço-tempo emergente e veja planetas orbitando campos gravitacionais simulados.",
    image: "/experiments/gravity.jpg",
    category: "Simulação Física",
    status: "Disponível"
  },
  {
    id: 2,
    name: "Tempo Relativo",
    description: "Visualize a dilatação do tempo conforme a gravidade e a velocidade afetam campos e eventos.",
    image: "/experiments/time.jpg", 
    category: "Experimento Teórico",
    status: "Acesso Beta"
  },
  {
    id: 3,
    name: "Fluxo de Luz Causal",
    description: "Experimente como a luz pode sincronizar interações entre entidades e campos em ciclos causais.",
    image: "/experiments/light.jpg",
    category: "Interação de Campo",
    status: "Em construção"
  }
]

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % experiments.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % experiments.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + experiments.length) % experiments.length)
  }

  return (
    <section className="relative bg-gray-dark py-16 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-tech font-bold mb-4">
            <span className="text-cyber-blue">Experimentos</span>
            <span className="text-matrix-green"> Virtuais TUF</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ferramentas imersivas baseadas na Teoria Universal do Fluxo para explorar conceitos reais da física.
          </p>
        </motion.div>

        {/* Carrossel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center w-full">
                  {/* Imagem */}
                  <div className="flex justify-center">
                    <div className="relative w-64 h-64 rounded-lg overflow-hidden bg-gray-800 shadow-lg">
                      <Image
                        src={experiments[currentIndex].image}
                        alt={experiments[currentIndex].name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="text-white">
                    <span className="text-cyber-blue font-tech text-sm mb-2 block">
                      {experiments[currentIndex].category}
                    </span>
                    <h3 className="text-3xl font-bold mb-4">
                      {experiments[currentIndex].name}
                    </h3>
                    <p className="text-gray-300 mb-6 text-lg">
                      {experiments[currentIndex].description}
                    </p>
                    <div className="flex items-center gap-6 mb-6">
                      <span className="text-sm font-tech text-matrix-green">
                        {experiments[currentIndex].status}
                      </span>
                      <button className="bg-gradient-to-r from-cyber-blue to-matrix-green text-gray-dark px-6 py-3 rounded-lg font-tech font-bold hover:scale-105 transition-transform">
                        Explorar Simulação
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-card/80 hover:bg-cyber-blue/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-card/80 hover:bg-cyber-blue/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
          >
            ›
          </button>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-6">
            {experiments.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-cyber-blue' : 'bg-gray-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

