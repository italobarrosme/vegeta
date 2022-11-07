import { Hero } from '@/useComponents/Hero'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="cripto" />
      </Head>

      <h1 className='flex justify-center items-center text-brand-secondary-light'>DOCKER PRODUCTION</h1>

      <Hero title="testando componente">

      </Hero>
    </>
  )
}

export default Home
