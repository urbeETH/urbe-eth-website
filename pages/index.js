import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>urbe.eth</title>
        <meta name="description" content="Benvenuti in urbe.eth, la prima community romana che si occupa del web3!" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className='h-screen w-full flex flex-col items-center justify-center space-y-8'>
        <Image src='/logo.png' className='h-64 w-64' alt='urbe.eth logo' />
        <h1 className='font-bold text-2xl animate-pulse'>Work in progress.</h1>
      </div>
    </div>
  )
}
