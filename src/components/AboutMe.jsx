import React from 'react'

const AboutMe = ({ aboutme }) => {
  return (
    <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        { aboutme.text.map((text, index) => (
            <p key={index} className="text-lg text-gray-700 max-w-5xl mb-4">{text}</p>)
        )}
        </div>
    </section>
  )
}

export default AboutMe


