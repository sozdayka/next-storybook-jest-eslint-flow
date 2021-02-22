// import Head from 'next/head'
// import { Header } from 'components/Header'

export default function Index () {
  return (
    <div>
      <h1>Batman TV Shows</h1>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>

        <p>
          Get started by editing{' '}
          <code>pages/index.js</code>
        </p>
      </main>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer> */}
    </div>
  )
}
