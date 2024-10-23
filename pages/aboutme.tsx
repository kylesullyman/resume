import Layout from '../components/layout';
import styles from '../styles/aboutme.module.css'
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
            <div className={styles.aboutMePage}>
                <div className={styles.textAndImage}>
                    <div>
                        <h1 className={styles.title}>about me</h1>
                    </div>
                    <img src="/logo.svg" className={styles.mainlogo} alt="Logo"/>
                </div>
                <div className={styles.aboutMeBody}>
                    <img src="/cheese.png" alt="Headshot" className={styles.profilePhoto}/>


                </div>
                <div className={styles.description}>
                    <p>
                        about me stuff
                    </p>
                </div>
            </div>
        </Layout>
    );
}