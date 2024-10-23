import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/footer';
import DarkModeSwitch from "../components/darkmodeswitch";
import * as React from "react";

export default function Layout({ children }) {
    const [isDarkMode, setIsDarkMode] = React.useState(false); // Default to light mode

    const toggleTheme = (event) => {
        setIsDarkMode(event.target.checked);
    };

    React.useEffect(() => {
        const body = document.body; // Get the body element
        if (isDarkMode) {
            body.classList.add('dark');
            body.classList.remove('light');
        } else {
            body.classList.add('light');
            body.classList.remove('dark');
        }

        // Cleanup function to remove the classes when unmounting
        return () => {
            body.classList.remove('light');
            body.classList.remove('dark');
        };
    }, [isDarkMode]);

    return (
        <div className={styles.container}>
            {/* Pass the state and change handler to DarkModeSwitch */}
            <DarkModeSwitch checked={isDarkMode} onChange={toggleTheme} />
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
                    transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition */
                }

                body.light {
                    background-color: #ffffff;
                    color: #000000;
                }

                body.dark {
                    background-color: #121212;
                    color: #ffffff;
                }

                * {
                    box-sizing: border-box;
                }
            `}</style>
            <Footer />
        </div>
    );
}
