import React, { useState, useCallback, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Form from '../../components/form';
import PageLayout from '../../page-layout';
import { getBuilding, updateBuilding } from '../../services/services';

const EditPage = () => {
    const history = useHistory();
    const { id } = useParams();

    const [building, setBuilding] = useState();
    const [loading, setLoading] = useState(true);

    const getData = useCallback(async () => {
        const buildingId = Number(id);
        const buildingData = await getBuilding(buildingId);
        setBuilding(buildingData);
        setLoading(false);
    }, [id]);

    useEffect(() => {
        getData();
    }, [getData]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const propId = Number(id);
        const body = { ...building, id: propId };
        const res = await updateBuilding(body);
        if (res === true) {
            history.push(`/details`);
        }
    };

    if (loading) {
        return <div>Loading....</div>;
    }

    return (
        <PageLayout>
            {!loading && (
                <Form
                    handleSubmit={handleSubmit}
                    building={building}
                    setBuilding={setBuilding}
                    title="Edit building"
                />
            )}
        </PageLayout>
    );
};

export default EditPage;
