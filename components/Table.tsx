import React, { useState, useEffect } from 'react';
import styles from '../styles/components/Table.module.css';
import GridSystem from "@/components/svgs/GridSystem";
import TableRowIcon from "@/components/svgs/TableRowIcon";
import SortIcon from "@/components/svgs/SortIcon";

function Table() {
    const [isTable, setIsTable] = useState(true);
    const [apiData, setApiData] = useState<ApiDataType>([]);

    const handleSwitcherClick = () => {
        setIsTable(!isTable);
    };
    const [sortOrder, setSortOrder] = useState('asc');
    type DataField = 'collection_id' | 'floor_price' | 'project' | 'supply';

    const handleSort = (field: DataField) => {
        const sortedData = [...apiData].sort((a, b) => {
            const aValue = (a as any)[field] || (a as any).project[field];
            const bValue = (b as any)[field] || (b as any).project[field];
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
        <div className={styles.dataSection}>
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
            <table className={styles.tableMini}>
                <thead>
                <tr>
                    <th>Collection</th>
                    <th className={styles.pointer} onClick={() => handleSort('floor_price')}>Floor price <SortIcon/></th>
                    <th className={styles.pointer} onClick={() => handleSort('supply')}>Buy Now Price <SortIcon/></th>
                    <th>24h Vol% <SortIcon/></th>
                    <th>24h Sales <SortIcon/></th>
                    <th>Interest (14 days) <SortIcon/></th>
                    <th></th>
                </tr>
                </thead>
                <tfoot>
                </tfoot>
                <tbody>
                    {apiData.map(item=>(
                        <tr>
                        <td ><div className={styles.collection}><img className={styles.avatar} src={item?.project?.img_url} alt={''}/><p>{item.project.display_name}</p></div></td>
                        <td data-title='Floor price'>{(item.floor_price*1000).toFixed(0)} SOL</td>
                        <td data-title='Buy Now Price'>{item?.project?.supply} SOL</td>
                        <td data-title='24h Vol%'><span className={styles.green}>+{100}%</span></td>
                        <td data-title='24h Sales'>{(10000).toLocaleString()}</td>
                        <td data-title='Interest (14 days)'>{10}%</td>
                        <td><a className={styles.buy}>Instant Buy</a></td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    );
}

export default Table;
