import Layout from '../components/layout';
import styles from '../styles/projects.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Video from '../components/video';
import Accordion from '../components/accordion';
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
                    <Accordion title="about the project"
                               body="This is a game I worked on with a close friend Emily Bosa as a means to learn the ins and outs of 2d collisions and physics in the Unity engine. This also provided valuable practice in using Unity's version control system, which proved to be a hassle in itself but worth it to learn. "></Accordion>
                </div>
            </div>
        </Layout>
    );
}
