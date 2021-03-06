import Head from 'next/head'
import { APP_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://codefornepal.org/assets/img/c4n-icon.jpg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://codefornepal.org/assets/img/c4n-icon.jpg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://codefornepal.org/assets/img/c4n-icon.jpg"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="https://codefornepal.org/assets/img/c4n-icon.jpg"
        color="#000000"
      />
      <link rel="shortcut icon" href="https://codefornepal.org/assets/img/c4n-icon.jpg" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`${APP_NAME}`}
      />
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
      </Head>
  )
}

export default Meta
