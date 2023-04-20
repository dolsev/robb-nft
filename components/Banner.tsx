import styles from '../styles/Banner.module.css';

const Banner = () => (
    <div className={styles.banner}>
        <h1 className={styles.title}>Buy your favorite NFTs with <span className={styles.highlight}>leverage</span></h1>
        <div className={styles.stats}>
            {[...Array(5)].map((_, i) => (
                <div key={i+'stat'} className={styles.stat}>
                    <h2 className={styles.header}>8497.55 SOL</h2>
                    <p className={styles.description}>Total Interest (from Active Loans)</p>
                </div>
            ))}
        </div>
        <div className={styles.mainIcon}>
            <div className={styles.top}>
                <div className={styles.red}></div>
                <div className={styles.purple}></div>
            </div>
            <div className={styles.bot}>
                <div className={styles.blue}></div>
                <div className={styles.green}></div>
            </div>
        </div>
    </div>
);

export default Banner;
