import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import Form from '../../components/form';
import PageLayout from '../../page-layout';
import { createBuildng } from '../../services/services';
import { CREATE_BUILDING_TEXT } from '../../utils/constants';

const CratePage = () => {
    const [building, setBuilding] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await createBuildng(building);
        if (res === true) {
            navigate(`/details`);
        }
    };

    return (
        <PageLayout>
            <Form
                handleSubmit={handleSubmit}
                building={building}
                setBuilding={setBuilding}
                title={CREATE_BUILDING_TEXT}
            />
        </PageLayout>
    );
};

export default CratePage;
