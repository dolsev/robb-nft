import React, { useState } from 'react';
import styles from '../styles/Table.module.css';
import GridSystem from "@/components/svgs/GridSystem";
import TableRowIcon from "@/components/svgs/TableRowIcon";


function Table() {
    const [isTable, setIsTable] = useState(true);

    const handleSwitcherClick = () => {
        setIsTable(!isTable);
    };

    return (
        <div className={styles.table}>
            <div className={styles.titleBox}>
                <h1 className={styles.title}>Trending Collections</h1>
                <div className={styles.switcher}>
                    <button
                        className={`${styles.switcherBtnLeft} ${isTable ? styles.active : ''}`}
                        onClick={handleSwitcherClick}
                    >
                        <TableRowIcon className={styles.icon} />
                    </button>
                    <button
                        className={`${styles.switcherBtnRight} ${!isTable ? styles.active : ''}`}
                        onClick={handleSwitcherClick}
                    >
                        <GridSystem className={styles.icon} />
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Table;