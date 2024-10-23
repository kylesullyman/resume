import Layout from '../components/layout';
import styles from '../styles/projects.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Video from '../components/video';
import * as React from 'react';

export default function Projects() {
    return (
        <Layout>
            <Link href="/" className={styles.homepageLink}>home</Link>
            <Head>
                <title>my projects</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            {/* Move your content outside the Head component */}
            <div className={styles.projectsPage}>
                <div className={styles.textAndImage}>
                    <div>
                        <h1 className={styles.title}>my projects</h1>
                    </div>
                    <img src="/logo.svg" className={styles.mainLogo} alt="Logo"/>
                </div>
                <div className={styles.body}>
                    <p className={styles.description}>Here are some of the projects I have worked on:
                    </p>
                    <h1 className={styles.sphereSmackTitle}>Sphere Smackdown: Brawl of the Balls</h1>
                    <Video src="/sphereSmackdownClip.mov" title="Sphere Smackdown"/>
                </div>
            </div>
        </Layout>
    );
}
