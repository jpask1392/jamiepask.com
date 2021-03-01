// Dependencies
import Head from "next/head"

// Component
const HeadComponent = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="HandheldFriendly" content="true" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />

    <link rel="preload" href="https://use.typekit.net/uuv2xsf.css" as="style" />
    <link rel="stylesheet" href="https://use.typekit.net/uuv2xsf.css" />
    {/* <link rel="shortcut icon" href="/img/favicon-96x96.png" /> */}
  </Head>
)

// Export
export default HeadComponent
