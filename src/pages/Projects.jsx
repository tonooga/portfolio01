import React from 'react'
import Hero from '../components/Hero'
import Project01 from '../components/Project01'
import { NavLink } from 'react-router-dom'

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
        {/* <Hero title='Projects' subtitle=''
                pitch='These are samples of projects I have built showing the whole process from idea to implementation.'/> */}
        {/* Showcase */}
        <section className="bg-white py-20">
            <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-5xl font-semibold mb-6">Projects</h2>
            <p className="text-lg text-gray-700 max-w-5xl mb-4">
                My passion is to build solutions that create value for my customers.
                These are samples of projects I have built showing the whole process from idea to implementation.
            </p>
            <p className="text-lg text-gray-700 max-w-5xl">
            </p>
            </div>
        </section>

        {/* Services Section */}
        <section className="max-w-5xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-semibold mb-10">Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
            <NavLink className="bg-white p-6 rounded-2xl shadow" to='/projects/project01'>
                <h3 className="text-xl font-semibold mb-3">Data Analytics</h3>
                <p className="text-gray-700">
                From exploratory analysis to decision‑support models, I help
                organizations understand what their data is really telling them.
                </p>
            </NavLink>
            <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold mb-3">Software & Data Apps</h3>
                <p className="text-gray-700">
                Full‑stack development of analytics‑driven applications, APIs, and
                automation pipelines deployed in production environments.
                </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold mb-3">Database & Systems Design</h3>
                <p className="text-gray-700">
                Robust data models and architectures designed for scalability,
                maintainability, and business evolution.
                </p>
            </div>
            </div>
        </section>

        {/* Projects Section */}
        <section className="bg-white py-20">
            <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-6">Selected Projects</h2>
            <p className="text-lg text-gray-700 max-w-5xl mb-10">
                A curated selection of projects demonstrating end‑to‑end thinking —
                from problem framing and data engineering to analytics and deployment.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 border rounded-2xl">
                <h3 className="text-xl font-semibold mb-2">Analytics‑Driven Business App</h3>
                <p className="text-gray-700">
                    Designed a full‑stack application combining database design,
                    analytics, and a web interface to support operational decisions.
                </p>
                </div>
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

export default ProjectsPage