import Layout from '../components/Layout';
import styles from '../styles/Home.module.css'
import Head from 'next/head';
import Link from 'next/link';

export default function AboutMe() {
    return (
        <Layout>
            <Link href="/" className={styles.homepageLink}>home</Link>
            <Head>
                <title>about me</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.aboutmePage}>
                <div className={styles.textAndImage}>
                    <div>
                        <h1 className={styles.title}>about me</h1>
                    </div>
                    <img src="/logo.svg" className={styles.mainlogo} alt="Logo" />
                </div>
                <p className={styles.description}>
                    about me stuff
                </p>
            </div>
        </Layout>
    );
}