import Link from 'next/link';
import styles from '../styles/footer.module.css'
import Image from "next/image";

export default function Footer() {
    return (
        <h1 className={styles.footer}>

            <Link href="https://github.com/kylesullyman" className={styles.footerLink}>
                <div className={styles.logoWrapper}>
                    <Image src="/githubLogo.svg" width={20} height={20} alt="logo" className={styles.githubLogo}/>
                </div>
                <span>
                my github
                </span>
            </Link>
        </h1>

    );
}