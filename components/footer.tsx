import Link from 'next/link';
import styles from '../styles/footer.module.css';
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Link href="https://github.com/kylesullyman" className={styles.footerLink}>
                <div className={styles.logoWrapper}>
                    <Image src="/githubLogo.svg" width={20} height={20} alt="GitHub logo"
                           className={styles.githubLogo}/>
                    <span>my github</span>
                </div>
            </Link>
            <div className={styles.liLink}>
                <Link href="https://www.linkedin.com/in/kyle-sullivan-511a352b7/" className={styles.footerLink}>
                    <div className={styles.logoWrapper}>
                        <Image src="/liLogo.svg" width={20} height={20} alt="LinkedIn logo"
                               className={styles.liLogo}/>
                        <span>my linkedin</span>
                    </div>
                </Link>
            </div>
        </footer>
    );
}
