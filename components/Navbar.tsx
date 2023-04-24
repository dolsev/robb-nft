import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/components/Navbar.module.css';
import SearchMagnifyingGlass from "@/components/svgs/SearchMagnifyingGlass";
import MoonIcon from "@/components/svgs/MoonIcon";

const Navbar = () => {
    const [screenWidth, setScreenWidth] = useState(0);
    const [searchVisible, setSearchVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const searchPlaceholder = 'Search collections, NFTs';

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Link href="/">
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
                    </Link>
                    <div>
                        <h1 className={styles.siteName}>
                            {screenWidth < 1440 ? 'Robox' : 'Robox.Fi'}
                        </h1>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Link href="/trade">
                        <button className={styles.button}>Trade</button>
                    </Link>
                    <Link href="/lend">
                        <button className={styles.button}>Lend</button>
                    </Link>
                    <Link href="/leaderboards">
                        <button className={styles.button}>Leaderboards</button>
                    </Link>
                    <Link href="/about">
                        <button className={styles.button}>About</button>
                    </Link>
                </div>
            </div>
            <div className={styles.right}>
                {screenWidth >= 1440 || searchVisible ? (
                    <>
                        <button
                            className={styles.searchIcon}
                        >
                            <SearchMagnifyingGlass
                                className={styles.glass}
                                width={24} height={24} />
                        </button>
                        <input
                            type="text"
                            placeholder={searchPlaceholder}
                            className={styles.searchInput}
                        />
                    </>
                ) : (
                    <button className={styles.searchButton} onClick={toggleSearch}>
                        <SearchMagnifyingGlass
                            className={styles.glass} width={24} height={24} />
                    </button>
                )}
                <button className={`${styles.moonButton}`}>
                    <MoonIcon color={'black'} width={24} height={24} />
                </button>
                <Link href="/trade">
                    {screenWidth < 1440 ? (
                        <button className={styles.walletButton}>
                            <div className={styles.walletCircle}></div>
                        </button>
                    ) : (
                        <button className={styles.button}>Connect Wallet</button>
                    )}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
