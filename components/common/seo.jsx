
// Dependencies
import Head from 'next/head'

// https://searchengineland.com/anatomy-google-search-listing-282725

// Component
export default function Seo ({ title = '' }) {
  // const formattedTitle = title.length > 0 ? `${title} - ${process.env.PROJECT_NAME}` : process.env.PROJECT_NAME

  return (
    <Head>
      <title>{ `Jamie Pask | ${title}` }</title>
      <meta property="og:title" content={ title } />
      <meta name="twitter:title" content={ title } />
      <meta name="description" content="View the web development portfolio of Jamie Pask. See the variety of recent web projects using web technologies ranging from Wordpress to Shopify to React. See case studies of the development process and challenges faced during. Learn how I ended up in Los Angeles after moving from the UK. Reach out to begin working together!" />
      <meta name="keywords" content="portfolio, Jamie Pask, React, Wordpress, Shopify, Los Angeles, web technologies, UK" />
      <meta name="author" content="Jamie Pask" />
    </Head>
  )
}
