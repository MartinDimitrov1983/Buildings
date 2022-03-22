import React, { useState, useEffect } from 'react';
import Table from '../../components/table/Table';
import Header from '../../components/header';
import Button from '../../components/button';
import CreateIcon from '../../components/icons/create';
import PageLayout from '../../page-layout';
import styles from './index.module.css';
import { useNavigate } from 'react-router';
import { deleteBuilding } from '../../services/services';
import { fetchData } from '../../utils/fetchData';

const DetailsPage = () => {
    const navigate = useNavigate();
    const [buildings, setBuildings] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData(setBuildings, setLoading);
    }, []);

    const onDelete = async (id) => {
        await deleteBuilding(id);
        await fetchData(setBuildings, setLoading);
    };

    if (loading) {
        return <div>Loading....</div>;
    }

    return (
        <PageLayout>
            <Header />
            <div className={styles.home}>
                <Button onClick={() => navigate('/create')}>
                    <CreateIcon />
                </Button>
            </div>
            <Table data={buildings} onDelete={onDelete} />
        </PageLayout>
    );
};

export default DetailsPage;
