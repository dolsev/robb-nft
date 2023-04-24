import Head from 'next/head'
import styles from '@/styles/components/Home.module.css'
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Table from "@/components/Table";
export default function Home() {
  return (
    <>
      <Head>
        <title>Robox</title>
        <meta name="description" content="Robox nft app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
                rel="stylesheet"/>
      </Head>
      <div className={styles.app}>
          <Navbar />
          <Banner/>
          <Table/>
      </div>
    </>
  )
}
