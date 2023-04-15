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
      
        <div class="flavor.flavor-container">
          <h1 class = "flavor.flavor-name"> Rocky Road </h1>
          <p class = "flavor.flavor-description"> Marshmallows and nuts and stuff in icecream. It is extraordinarily good. It is a must have immediately.</p>
        </div>
      
      <Footer />
    </div>
  )
}
