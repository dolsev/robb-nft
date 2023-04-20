import React, { useState, useEffect } from 'react';
import styles from '../styles/Table.module.css';
import GridSystem from "@/components/svgs/GridSystem";
import TableRowIcon from "@/components/svgs/TableRowIcon";
import SortIcon from "@/components/svgs/SortIcon";

function Table() {
    const [isTable, setIsTable] = useState(true);
    const [apiData, setApiData] = useState([]);

    const handleSwitcherClick = () => {
        setIsTable(!isTable);
    };
    const [sortOrder, setSortOrder] = useState('asc');
    const handleSort = (field) => {
        const sortedData = [...apiData].sort((a, b) => {
            const aValue = a[field] || a.project[field];
            const bValue = b[field] || b.project[field];
            if (sortOrder === 'asc') {
                return aValue - bValue;
            } else {
                return bValue - aValue;
            }
        });
        setApiData(sortedData);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://robox-test.herokuapp.com/api/collection', {
                    headers: {
                        apikey: 'test123',
                    }
                });
                const data = await response.json();
                setApiData(data.collection);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);


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

            <div className={styles.tableContainer}>
                <div className={styles.descriptionRow}>
                    <div className={styles.descriptionItemMain}>Collections</div>
                    <div onClick={() => handleSort('floor_price')} className={styles.descriptionItem}>Floor price <SortIcon/></div>
                    <div  onClick={() => handleSort('supply')} className={styles.descriptionItem}>Buy Now Price<SortIcon/></div>
                    <div  className={styles.descriptionItem}>24h Vol%<SortIcon/></div>
                    <div className={styles.descriptionItem}>24h Sales<SortIcon/></div>
                    <div className={styles.descriptionItem}>Interest<SortIcon/></div>
                </div>
                <div className={styles.tableBordered}>
                {apiData.map(item => (
                       <>
                        <div key={item.collection_id} className={styles.tableRow}>
                            <div className={styles.tableItemMain}><img className={styles.avatar} src={item?.project?.img_url}alt={''}/><p>{item.project.display_name}</p></div>
                            <div className={styles.tableItem}>{(item.floor_price*1000).toFixed(0)} SOL</div>
                            <div className={styles.tableItem}>{item.project.supply} SOL</div>
                            <div className={styles.tableItem}><span className={styles.green}>+{100}%</span></div>
                            <div className={styles.tableItem}>{(10000).toLocaleString()}</div>
                            <div className={styles.tableItem}>{10}%</div>
                            <button className={styles.buy}>Instant buy</button>
                        </div>
                           <hr className={styles.tableLine}/>
                       </>
                ))}
                </div>
            </div>
        </div>
    );
}

export default Table;
