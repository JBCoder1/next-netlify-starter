import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Testing Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hello!" />
        <p className="description">
          This is text.
        </p>
        
      </main>
      
      <Footer />
    </div>
  )
}
