import React from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from Next.js
import styles from '../styles/video.module.css';

// Dynamically import ReactPlayer with no SSR (Server Side Rendering)
const ReactPlayerNoSSR = dynamic(() => import('react-player'), {
    ssr: false, // Disable SSR for ReactPlayer
});

export default function Video({ src, title }) {
    return (
        <div className={styles.videoContainer}>
            <ReactPlayerNoSSR
                url={src}
                controls={true}
                playing={true}
                width="450px"
                height="auto"
                title={title}
            />
        </div>
    );
}
