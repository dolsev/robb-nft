import React, { useState, useEffect } from 'react';
import styles from '../styles/components/Table.module.css';
import GridSystem from '@/components/svgs/GridSystem';
import TableRowIcon from '@/components/svgs/TableRowIcon';
import SortIcon from '@/components/svgs/SortIcon';

type TickerData = {
    symbol: string;
    priceChange: string;
    priceChangePercent: string;
    weightedAvgPrice: string;
    prevClosePrice: string;
    lastPrice: string;
    lastQty: string;
    bidPrice: string;
    askPrice: string;
    openPrice: string;
    highPrice: string;
    lowPrice: string;
    volume: string;
    quoteVolume: string;
    openTime: number;
    closeTime: number;
    firstId: number;
    lastId: number;
    count: number;
}[];

const itemsPerPage = 20;

function Table() {
    const [isTable, setIsTable] = useState(true);
    const [apiData, setApiData] = useState<TickerData>([]);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [currentPage, setCurrentPage] = useState(1);

    const handleSwitcherClick = () => {
        setIsTable(!isTable);
    };

    type DataField = keyof TickerData[0];

    const handleSort = (field: DataField) => {
        const sortedData = [...apiData].sort((a, b) => {
            const aValue = (a as any)[field];
            const bValue = (b as any)[field];
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
                const response = await fetch('https://api.binance.com/api/v3/ticker/24hr');
                const data = await response.json();
                setApiData(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const totalPages = Math.ceil(apiData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = apiData.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

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
            {isTable ? (
                <table className={styles.tableMini}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th className={styles.pointer} onClick={() => handleSort('priceChange')}>
                            Price Change <SortIcon />
                        </th>
                        <th className={styles.pointer} onClick={() => handleSort('priceChangePercent')}>
                            Price Change % <SortIcon />
                        </th>
                        <th className={styles.pointer} onClick={() => handleSort('volume')}>
                            Volume <SortIcon />
                        </th>
                        <th className={styles.pointer} onClick={() => handleSort('quoteVolume')}>
                            Quote Volume <SortIcon />
                        </th>
                        <th className={styles.pointer} onClick={() => handleSort('highPrice')}>
                            High Price <SortIcon />
                        </th>
                        <th className={styles.pointer} onClick={() => handleSort('lowPrice')}>
                            Low Price <SortIcon />
                        </th>
                    </tr>
                    </thead>
                    <tfoot></tfoot>
                    <tbody>
                    {currentItems.map((item) => (
                        <tr key={item.symbol}>
                            <td data-title="Name">{item.symbol}</td>
                            <td data-title="Price Change">{item.priceChange}</td>
                            <td data-title="Price Change %">{item.priceChangePercent}</td>
                            <td data-title="Volume">{item.volume}</td>
                            <td data-title="Quote Volume">{item.quoteVolume}</td>
                            <td data-title="High Price">{item.highPrice}</td>
                            <td data-title="Low Price">{item.lowPrice}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <div>Grid System</div>
            )}
            <div className={styles.pagination}>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.pageNumber} ${currentPage === index + 1 ? styles.active : ''}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Table;
