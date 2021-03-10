
// Dependencies
import Head from 'next/head'

// Component
export default function Seo ({ title = '' }) {
  // const formattedTitle = title.length > 0 ? `${title} - ${process.env.PROJECT_NAME}` : process.env.PROJECT_NAME

  return (
    <Head>
      <title>{ `Jamie Pask | ${title}` }</title>
      <meta property="og:title" content={ title } />
      <meta name="twitter:title" content={ title } />
    </Head>
  )
}
