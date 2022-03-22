import React from 'react';
import TableRow from './TableRow.jsx';
import styles from './index.module.css';

const HEADER_VALUES = {
    id: 'Id',
    name: 'Name',
    area: 'Area',
    location: 'Location',
    Image: 'Image',
    Action: 'Action'
};
const Table = ({ data, onDelete, ...props }) => {
    return (
        <div className={styles.container} {...props}>
            <table className={styles.table}>
                <thead>
                    <TableRow
                        tableCells={HEADER_VALUES}
                        tag="th"
                        isBodyRow={false}
                    />
                </thead>
                <tbody>
                    {data?.map((rowData) => (
                        <TableRow
                            key={`key-${rowData.id}-${rowData.name}`}
                            tableCells={rowData}
                            tag="td"
                            onDelete={onDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
