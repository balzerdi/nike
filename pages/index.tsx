import type { NextPage } from 'next'
import Head from 'next/head'
import Notice from '../components/atoms/icons/Notice'
import Hero from '../components/sections/Hero'

const Home: NextPage = () => {
    return (
        <div>
            <Notice />
            <Head>
                <title>Nike - LeBron 17 LMTD</title>
                <meta name="description" content="Feel strong like LeBron" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
        </div>
    )
}

export default Home
