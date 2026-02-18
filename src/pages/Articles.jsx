import React from 'react'
import Hero from '../components/Hero'
import Project01 from '../components/Project01'
import { NavLink } from 'react-router-dom'

const ArticlesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
        {/* <Hero title='Projects' subtitle=''
                pitch='These are samples of projects I have built showing the whole process from idea to implementation.'/> */}
        {/* Showcase */}
        <section className="bg-white py-20">
            <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-5xl font-semibold mb-6">Articles</h2>
            <p className="text-lg text-gray-700 max-w-5xl mb-4">
                This space is to share my thoughts and insights on data science, analytics, and technology.
                Inspiring leaders to apply data-driven approaches to solve real-world business challenges accross many industries.
            </p>
            <p className="text-lg text-gray-700 max-w-5xl">
            </p>
            </div>
        </section>

        {/* Articles Section */}
        <section className="bg-white py-20">
            <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-6">Selected Articles</h2>
            <p className="text-lg text-gray-700 max-w-5xl mb-10">
                A curated selection of articles to inspire ways to leverage data analytics for more business impact, in any industry.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
                <NavLink className="p-6 border rounded-2xl" to='/articles/article01'>
                    <h3 className="text-xl font-semibold mb-2">Missing the train in the Digital Transformation</h3>
                    <p className="text-gray-700">
                        How organizations can avoid the pitfalls of digital transformation and build more resilient, future-ready systems.
                    </p>
                </NavLink>

                <div className="p-6 border rounded-2xl">
                <h3 className="text-xl font-semibold mb-2">Data Pipeline & Automation</h3>
                <p className="text-gray-700">
                    Built automated pipelines to collect, clean, and structure data
                    for downstream analytics and reporting.
                </p>
                </div>

                
            </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-black text-white py-20">
            <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-6">Let’s Work Together</h2>
            <p className="text-lg max-w-5xl mb-8">
                If you’re a founder, executive, or team looking to turn data into
                action, I’d be happy to explore how we can work together.
            </p>
            <a
                href="mailto:tono.oga@gmail.com"
                className="inline-block bg-white text-black px-6 py-3 rounded-2xl font-medium hover:bg-gray-200 transition"
            >
                Get in touch
            </a>
            </div>
        </section>
    </div>
  )
}

export default ArticlesPage