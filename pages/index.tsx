// pages/index.js
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
    return (
        <Layout>
            <div className={styles.textAndImage}>
                <h1 className={styles.title}>kyle sullivan</h1>
                <img src="/logo.svg" className={styles.mainLogo} alt="Logo"/>
            </div>
            <p className={styles.description}>
                student dev from orange, ca<br/>
            </p>
            <div className={styles.mainLinks}>
                <Link href="/projects" className={styles.projectsLink}>my projects</Link>
                <Link href="/aboutme" className={styles.aboutmeLink}>about me</Link>
            </div>
            <div className={styles.grid}>
                {/*
                <a href="https://nextjs.org/docs" className={styles.card}>
                </a>

                <a href="https://nextjs.org/learn" className={styles.card}>
                </a>

                <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
                </a>

                <a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                   className={styles.card}>
                </a>
                */}

            </div>

        </Layout>
    );
}
