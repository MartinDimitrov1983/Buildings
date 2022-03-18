import React, { useState, useCallback, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Form from '../../components/form';
import PageLayout from '../../page-layout';
import { getBuilding, updateBuilding } from '../../services/services';

const EditPage = () => {
    const history = useHistory();
    const { id } = useParams();

    const [buildings, setBuildings] = useState();

    const getData = useCallback(async () => {
        const propId = Number(id);
        const prop = await getBuilding(propId);
        setBuildings(prop);
    }, [id]);

    useEffect(() => {
        getData();
    }, [getData]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const propId = Number(id);
        const body = { ...buildings, id: propId };
        await updateBuilding(body);
        history.push(`/details`);
    };

    return (
        <PageLayout>
            <Form
                handleSubmit={handleSubmit}
                buildings={buildings}
                setBuildings={setBuildings}
                title="Edit building"
            />
        </PageLayout>
    );
};

export default EditPage;
