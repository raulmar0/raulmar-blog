import Head from 'next/head'
import { Shell } from '../components/Shell'
import styles from '../styles/Home.module.css'

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Shell location="home">

    </Shell>
  </div>
)

export default Home