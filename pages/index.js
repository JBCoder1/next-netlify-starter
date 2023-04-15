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
          This is text, yo.
        </p>
      </main>
    <img src = "public/Screen Shot 2021-10-20 at 6.35.39 PM.png">
      
        <div class="flavor-container">
          <h1 class = "flavor-name"> Rocky Road </h1>
          <p class = "flavor-description"> Marshmallows and nuts and stuff in icecream. It is extraordinarily good. It is a must have immediately.</p>
        </div>
      
      <Footer />
    </div>
  )
}
