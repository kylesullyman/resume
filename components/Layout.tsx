// components/layout.js
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Kyle Sullivan</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>{children}</main>

            <style jsx global>{`
                html,
                body {
                    padding: 1%;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                }

                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    );
}
