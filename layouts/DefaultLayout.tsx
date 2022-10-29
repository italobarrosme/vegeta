import { Navbar } from '@/useComponents/Navbar';
import Head from 'next/head'

const DefaultLayout = ({ children }: any) => {
  return (
    <div className="container mx-auto font-sans overflow-y-auto">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {children}
      </main>
    </div>
  )
}

export default DefaultLayout;