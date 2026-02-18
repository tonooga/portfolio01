import React from 'react'
import Hero from './Hero'
import { FaMapMarker, FaCalendarAlt, FaBook, FaBookReader } from 'react-icons/fa'
import articles from '../../data/articles.json'
import photo_cover from '/src/assets/images/missing_train_5x4.png'
import photo_author from '/src/assets/foto_jo_2.jpeg'

const Article01 = () => {
    const article = articles[0]
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
                                            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance text-foreground transition-colors leading-snug'>
                                                {article.title}
                                            </h1>
                                            <div className='flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground'>
                                                <div className='flex items-center gap-2'>
                                                    <FaCalendarAlt className='fa-jelly fa-calendar h-4 w-4 text-muted-foreground'/>
                                                    <span>Created</span>
                                                    <time dateTime='2024-05-04T09:34:21.700Z'>{article.date_created}</time>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <FaCalendarAlt className='fa-jelly fa-calendar h-4 w-4 text-muted-foreground'/>
                                                    <span>Updated</span>
                                                    <time dateTime='2024-05-04T09:34:21.700Z'>{article.date_updated}</time>
                                                </div>
                                            </div>
                                        </div>
                                    </header>
                                    <div className='relative w-full overflow-hidden'>
                                        <img alt={article.photo_alt}
                                        className='w-full h-auto max-h-[1300px] object-cover'
                                        // src='\src\assets\images\missing_train_5x4.png'/>
                                        // src={article.photo_url}/>
                                        src={photo_cover}/>
                                    </div>
                                    <div className='px-6 py-12 sm:px-10 sm:py-14'>
                                        <div className='flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(220px,280px)_1fr] lg:gap-10'>
                                            <div className='space-y-8 scroll-mt-20 lg:sticky lg:top-20 lg:self-start'>
                                                <div className='flex flex-col gap-6'>
                                                    <div className='flex flex-col gap-4'>
                                                        <div className='flex items-center gap-4'>
                                                            <a>
                                                                <span className='relative flex shrink-0 overflow-hidden rounded-full h-8 w-8 border border-border transition-opacity hover:opacity-80'>
                                                                    <img className='aspect-square h-full w-full' src='/src/assets/foto_jo_2.jpeg'/>
                                                                    {/* <img className='aspect-square h-full w-full' src={photo_author}/> */}
                                                                </span>
                                                            </a>
                                                            <a className='hover:text-primary transition-colors'>
                                                                <h3>{article.author}</h3>
                                                            </a>
                                                        </div>
                                                        <div>{article.themes[0]}</div>
                                                    </div>
                                                </div>
                                                <div className='space-y-3'>
                                                    <p className='text-xs uppercase tracking-wide text-muted-foreground'>TAGS</p>
                                                    <div className='flex flex-wrap gap-2 text-sm text-muted-foreground'>
                                                        {/* <a className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 transition hover:border-primary hover:text-primary" href="/tag/nextjs">#react</a> */}
                                                        {article.tags.map((tag, index) => (
                                                            <a key={index} className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 transition hover:border-primary hover:text-primary" href={`/tag/${tag}`}>#{tag}</a>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className='sticky top-8'>
                                                    <div className="hidden lg:block space-y-2 max-h-[calc(100vh-3rem)] overflow-y-auto">
                                                        <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">On this page</p>
                                                        <nav className="space-y-1 text-[13px]" aria-label="On this page">
                                                            {/* <a className="block rounded px-2 py-1 ml-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" href="#heading-from-clauses-to-pricing">From Clauses to Pricing</a> */}
                                                            {article.content.map((section, index) => (
                                                                <a key={index} className="block rounded px-2 py-1 ml-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" href={`#heading-${section.section?.toLowerCase().replace(/\s+/g, '-')}`}>{section.section}</a>
                                                            ))}
                                                        </nav>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='space-y-12 min-w-0 contain-[inline-size]'>
                                                <div className='prose dark:prose-invert prose-pre:bg-foreground prose-pre:text-background prose-pre:border prose-pre:border-border prose-pre:rounded prose-pre:px-5 prose-pre:py-4 dark:prose-pre:bg-muted dark:prose-pre:text-foreground dark:prose-pre:border-border prose-pre:overflow-x-auto max-w-3xl mx-auto text-base [&>div>p:first-child]:mt-0 [&>div>p:first-child]:pt-0 min-w-0 wrap-break-word [&_a]:break-all **:max-w-full'>
                                                    <div>
                                                        {article.content.map((section, index) => (
                                                            <div key={index}>
                                                                <h2 id={`heading-${section.section?.toLowerCase().replace(/\s+/g, '-')}`} className='text-2xl md:text-3xl mb-4 scroll-mt-20'>{section.section}</h2>
                                                                {section.text.map((paragraph, index) => (
                                                                    <p key={index} className='text-1xl md:text-2xl mb-4'>{paragraph}</p>
                                                                ))}
                                                            </div>
                                                        ))}
                                                        {article.links && article.links.length > 0 && (
                                                            <div className="mt-8">
                                                                <h3 className="text-2xl md:text-3xl mb-4">References</h3>
                                                                <ul className="list-disc pl-5 space-y-1">
                                                                    {article.links.map((link, index) => (
                                                                        <li key={index} className="text-2xl md:text-2xl mb-4">
                                                                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{link.text}</a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
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

export default Article01