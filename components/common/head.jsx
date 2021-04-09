// Dependencies
import Head from "next/head"

// Component
const HeadComponent = ({ title = '' }) => {
  // const formattedTitle = title.length > 0 ? `${title} - ${process.env.PROJECT_NAME}` : process.env.PROJECT_NAME

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      <meta name="HandheldFriendly" content="true" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <title>{ title }</title>

      <link rel="preload" href="https://use.typekit.net/uuv2xsf.css" as="style" />
      {/* <link rel="stylesheet" href="https://use.typekit.net/uuv2xsf.css" /> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-106964088-2"></script>

      <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-106964088-2');
              `,
          }}
        />
      
    </Head>
)}

// Export
export default HeadComponent
