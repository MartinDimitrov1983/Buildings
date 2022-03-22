import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button';
import { EditIcon, DeleteIcon } from '../icons';
import styles from './index.module.css';

const TableRow = ({
    tableCells,
    tag: Tag,
    isBodyRow = true,
    onDelete,
    ...props
}) => {
    const navigate = useNavigate();

    const tableRowData = Object.entries(tableCells);
    const [[, value]] = tableRowData;
    const onEdit = (value) => {
        navigate(`/edit/${value}`);
    };

    if (tableRowData.length < 5) {
        tableRowData.length = 5;
    }


    return (
        <tr {...props}>
            {tableRowData.map(([id, value], index) => {
                if (id === 'image') {
                    return (
                        <Tag className={styles.center} key={index}>
                            <img className={styles.img} src={value} alt="img" />
                        </Tag>
                    );
                }
                return <Tag key={index}>{value}</Tag>;
            })}
            {isBodyRow && (
                <Tag className={styles.center}>
                    <Button onClick={() => onEdit(value)}>
                        <EditIcon />
                    </Button>
                    <Button onClick={() => onDelete(value)}>
                        <DeleteIcon />
                    </Button>
                </Tag>
            )}
        </tr>
    );
};
export default TableRow;
