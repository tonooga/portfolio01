import React from 'react'

const Services = ({ services }) => {
  return (
      <section className="max-w-5xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-semibold mb-10">What I Do</h2>
            <h3 className="text-xl text-gray-700 max-w-5xl mb-8">{services.intro}</h3>
          <div className="grid md:grid-cols-3 gap-8">
          { services.services.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-700">
                  {item.description}</p>
            </div>
          ))}
          </div>
      </section>
  )
}

export default Services


