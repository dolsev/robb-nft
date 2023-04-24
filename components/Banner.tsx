import styles from '../styles/components/Banner.module.css';

interface BannerData {
    head: string;
    desc: string;
    currency?: string;
}

const bannerData: BannerData[] = [
    { head: '8497.55', desc: 'Total Interest (from Active Loans)', currency: 'SOL' },
    { head: '21673', desc: 'Total active positions' },
    { head: '4085/1508', desc: 'Loans in 24H/12H' },
    { head: '295240.32', desc: 'Active Loans Volume', currency: 'SOL' },
    { head: '337506.33', desc: 'Total Value Locked', currency: 'SOL' }
];

const Banner = () => (
    <div className={styles.banner}>
        <h1 className={styles.title}>Buy your favorite NFTs with <span className={styles.highlight}>leverage</span></h1>
        <div className={styles.stats}>
            {bannerData.map((data, i) => (
                <div key={i+'stat'} className={styles.stat}>
                    <h2 className={styles.header}>{data.head} <span className={styles.currency}>{data.currency}</span></h2>
                    <p className={styles.description}>{data.desc}</p>
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
