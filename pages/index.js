import Head from 'next/head'
import Image from 'next/image'
import CategoryExperience from '../components/category-experience'
import Layout from '../components/Layout'
export default function Home() {
  return (<>
    <Head>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <main className='px-6 b-white '>
        <CategoryExperience />
      </main>
    </Layout>

  </>



  )
}
