import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Projects() {
    return (
        <Layout>
            <Link href="/" className={styles.homepageLink}>home</Link>
            <Head>
                <title>my projects</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Move your content outside of the Head component */}
            <div className={styles.projectsPage}>
                <div className={styles.textAndImage}>
                    <div>
                        <h1 className={styles.title}>my projects</h1>
                    </div>
                    <img src="/logo.svg" className={styles.mainlogo} alt="Logo" />
                </div>
                <p className={styles.description}>
                    Here are some of the projects I have worked on:
                </p>
            </div>
        </Layout>
    );
}
