import React from 'react'

const Hero = ({ elevator: { title, subtitle, pitch }
        }) => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
            { title }
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
            { subtitle }
        </h2>
        <p className="text-xl text-gray-700 max-w-5xl mb-8">
            { pitch }
        </p>
        <a
            href="#contact"
            className="inline-block bg-black text-white px-6 py-3 rounded-2xl shadow hover:bg-gray-800 transition"
        >
            Let’s talk
        </a>
</section>
  )
}

export default Hero


