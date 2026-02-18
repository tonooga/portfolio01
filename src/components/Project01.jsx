import React from 'react'
import Hero from '../components/Hero'
import { FaMapMarker, FaCalendarAlt, FaBook, FaBookReader } from 'react-icons/fa'

const Project01 = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 mt-10">
        <section className='pt-10 pb-16'>
            <div className='px-4 sm:px-8'>
                <div className='w-full max-w-full xl:mx-auto xl:max-w-[80rem] 2xl:max-w-[90rem]'>
                    <div className='grid gap-6 max-w-full'>
                        <article className='w-full max-w-full rounded-xl border bg-card text-card-foreground'>
                            <div className='space-y-12 px-10 pt-14 pb-10'>
                                <header className='space-y-8'>
                                    <div className='space-y-6 text-center max-w-4xl mx-auto'>
                                        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance text-foreground transition-colors'>
                                            The importance of being earnst
                                        </h1>
                                        <div className='flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground'>
                                            <div className='flex items-center gap-2'>
                                                <FaCalendarAlt className='fa-jelly fa-calendar h-4 w-4 text-muted-foreground'/>
                                                <span>Updated</span>
                                                <time dateTime='2024-05-04T09:34:21.700Z'>Jan 19, 2026</time>
                                            </div>
                                        </div>
                                    </div>
                                </header>
                                <div className='relative w-full overflow-hidden'>
                                    <img alt='project01'
                                    className='w-full h-auto max-h-[1500px] object-cover'
                                    src='\src\assets\images\Colca-Peru 2017 byJORG.JPG'/>

                                </div>
                                <div className='px-6 py-12 sm:px-10 sm:py-14'>
                                    <div className='flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(220px,280px)_1fr] lg:gap-10'>
                                        <div className='space-y-8'>
                                            <div className='flex flex-col gap-6'>
                                                <div className='flex flex-col gap-4'>
                                                    <div className='flex items-center gap-4'>
                                                        <a>
                                                            <span className='relative flex shrink-0 overflow-hidden rounded-full h-8 w-8 border border-border transition-opacity hover:opacity-80'>
                                                                <img className='aspect-square h-full w-full' src='\src\assets\foto_JO_2.jpeg'/>
                                                            </span>
                                                        </a>
                                                        <a className='hover:text-primary transition-colors'>
                                                            <h3>Jose A. Oga</h3>
                                                        </a>
                                                    </div>
                                                    <div>Engineering and Data</div>
                                                </div>
                                            </div>
                                            <div className='space-y-3'>
                                                <p className='text-xs uppercase tracking-wide text-muted-foreground'>TAGS</p>
                                                <div className='flex flex-wrap gap-2 text-sm text-muted-foreground'>
                                                    <a className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 transition hover:border-primary hover:text-primary" href="/tag/nextjs">#react</a>
                                                    <a className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 transition hover:border-primary hover:text-primary" href="/tag/seo">#seo</a>
                                                </div>
                                            </div>
                                            <div className='sticky top-8'>
                                                <div className="hidden lg:block space-y-2 max-h-[calc(100vh-3rem)] overflow-y-auto">
                                                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">On this page</p>
                                                    <nav className="space-y-1 text-[13px]" aria-label="On this page">
                                                        <a className="block rounded px-2 py-1 ml-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" href="#heading-what-distinguishes-next-seo-from-other-frameworks">What Distinguishes Next SEO from Other Frameworks?</a>
                                                        <a className="block rounded px-2 py-1 ml-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" href="#heading-the-concepts-of-search-engines-ssr-and-ssg-are-changing">The Concepts of Search Engines, SSR, and SSG Are Changing</a>
                                                        <a className="block rounded px-2 py-1 ml-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" href="#heading-the-approach-has-changed-not-the-seo-concepts">The Approach Has Changed, Not the SEO Concepts</a>
                                                        <a className="block rounded px-2 py-1 ml-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" href="#heading-react-server-components">React Server Components</a>
                                                        <a className="block rounded px-2 py-1 ml-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" href="#heading-streaming-ui-chunks">Streaming UI Chunks</a>
                                                        <a className="block rounded px-2 py-1 ml-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" href="#heading-nextjs-13-app-directory">Next.js 13 App Directory</a>
                                                        <a className="block rounded px-2 py-1 ml-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" href="#heading-updated-next-image-component">Updated Next Image Component</a>
                                                        <a className="block rounded px-2 py-1 ml-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" href="#heading-the-next-font-component">The Next Font Component</a>
                                                        <a className="block rounded px-2 py-1 ml-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" href="#heading-common-seo-related-tasks-with-nextjs">Common SEO-Related Tasks with Next.js</a>
                                                        <a className="block rounded px-2 py-1 ml-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" href="#heading-nextjs-seo-with-version-13">Next.js SEO With Version 13</a>
                                                        <a className="block rounded px-2 py-1 ml-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" href="#heading-how-to-configure-the-head-tag-for-search-engine-optimization">How to Configure the Head Tag for Search Engine Optimization</a>
                                                        <a className="block rounded px-2 py-1 ml-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" href="#heading-the-next-special-headjs-file">The Next Special head.js File</a>
                                                        <a className="block rounded px-2 py-1 ml-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" href="#heading-the-next-metadata-component">The Next Metadata Component</a>
                                                        <a className="block rounded px-2 py-1 ml-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" href="#heading-nextjs-export-metadata-example">Next.js export metadata Example</a>
                                                        <a className="block rounded px-2 py-1 ml-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" href="#heading-nextjs-export-generatemetadata-example">Next.js export generateMetadata Example</a>
                                                        <a className="block rounded px-2 py-1 ml-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" href="#heading-how-to-implement-structured-data-with-next-13">How to Implement Structured Data with Next 13</a>
                                                        <a className="block rounded px-2 py-1 ml-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" href="#heading-how-to-add-structured-data-to-the-layout-or-page-component">How to Add Structured Data to the Layout or Page Component</a>
                                                        <a className="block rounded px-2 py-1 ml-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" href="#heading-nextjs-seo-wrapping-things-up">Next.js SEO – Wrapping Things Up</a>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='space-y-12 min-w-0 contain-[inline-size]'>
                                            <div className='prose dark:prose-invert prose-pre:bg-foreground prose-pre:text-background prose-pre:border prose-pre:border-border prose-pre:rounded prose-pre:px-5 prose-pre:py-4 dark:prose-pre:bg-muted dark:prose-pre:text-foreground dark:prose-pre:border-border prose-pre:overflow-x-auto max-w-3xl mx-auto text-base [&>div>p:first-child]:mt-0 [&>div>p:first-child]:pt-0 min-w-0 wrap-break-word [&_a]:break-all **:max-w-full'>
                                                <div>
                                                    <p>Next.js is a popular React-based web framework that has gained popularity and a growing community in recent years. It's an effective tool for creating dynamic websites that function well on mobile devices and are quick to develop for search engines.</p>
                                                    <p>The intricacy of isomorphic system design makes Next.js SEO a difficult concept to understand. particularly if you're using only documentation and are transitioning from standard React apps.
                                                        Next.js offers a strong foundation for attaining high-quality SEO web metrics in your online application with its integrated support for server-side rendering, static site creation, and now React server components.
                                                        It also assists you in optimizing numerous pages of Node.js and React.js apps for search engines while delivering outstanding user experiences.</p>
                                                    <h3 id='heading-what-distinguishes-next-seo-from-other-frameworks'>What Distinguishes Next SEO from Other Frameworks?</h3>
                                                    <p>The unique selling point of Next SEO is how it condenses a tonne of functionality and free tools into a tidy bundle that you can quickly understand and use for your one-page applications.
                                                        When it comes to tasks like picture optimization, cumulative layout shift minimization, and search engine optimization, Next performs admirably.
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Project01