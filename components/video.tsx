import React from 'react';
import ReactPlayer from 'react-player';
import styles from '../styles/video.module.css';

export default function Video({src, title}) {
    // if input is a url, replace src with a link, otherwise pathname
    return (
        <div className={styles.videoContainer}>
            <video controls width="450">
                <source src={src} />
            </video>
        </div>
    );
}