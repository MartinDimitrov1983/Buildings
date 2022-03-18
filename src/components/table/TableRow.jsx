import React from 'react';
import { useHistory } from 'react-router-dom';
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
    const history = useHistory();

    const tableRowData = Object.entries(tableCells);
    const [[id, value]] = tableRowData;
    const onEdit = (value) => {
        history.push(`/edit/${value}`);
    };

    return (
        <tr {...props}>
            {tableRowData.map((value, index) => {
                if (value[0] === 'image') {
                    return (
                        <Tag className={styles.center} key={index}>
                            <img
                                className={styles.img}
                                src={value[1]}
                                alt="img"
                            />
                        </Tag>
                    );
                }
                return <Tag key={index}>{value[1]}</Tag>;
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
