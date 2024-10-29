import Layout from '../components/layout';
import styles from '../styles/aboutme.module.css'
import Head from 'next/head';
import Link from 'next/link';

export default function AboutMe() {
    return (
        <Layout>
            <Link href="/" className={styles.homepageLink}>home</Link>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>about me</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={styles.aboutMePage}>
                <div className={styles.textAndImage}>
                    <div>
                        <h1 className={styles.title}>about me</h1>
                    </div>
                    <img src="/logo.svg" className={styles.mainlogo} alt="Logo"/>
                </div>
                <div className={styles.aboutMeBody}>
                    <img src="/cheese.jpg" alt="Headshot" className={styles.profilePhoto}/>
                </div>
                <div className={styles.description}>
                    <p>
                        <strong>
                            Hello! My name is Kyle Sullivan and I'm a second year computer science major/game dev minor
                            at
                            Chapman University.
                        </strong>
                        <br/><br/>
                        Proficiency in C++, C#, Python, Java, C <br/>
                        Learning TS, HTML, CSS <br/>
                        Video Editing - AE / Premiere <br/>
                        Design - Photoshop / Illustrator<br/><br/><br/>
                        <strong>
                            Contact: kylsullivan@chapman.edu
                        </strong>
                    </p>
                </div>
            </div>
        </Layout>
    );
}