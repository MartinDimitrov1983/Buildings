import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from '../../components/form';
import PageLayout from '../../page-layout';
import { getBuilding, updateBuilding } from '../../services/services';
import { EDIT_BUILDING_TEXT } from '../../utils/constants';

const EditPage = () => {
    const navigate = useNavigate();
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
            navigate(`/details`);
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
                    title={EDIT_BUILDING_TEXT}
                />
            )}
        </PageLayout>
    );
};

export default EditPage;
