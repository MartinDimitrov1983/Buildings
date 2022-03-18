import React, { useState } from 'react';
import { useHistory } from 'react-router';

import Form from '../../components/form';
import PageLayout from '../../page-layout';
import { createBuildng } from '../../services/services';

const CratePage = () => {
    const [buildings, setBuildings] = useState({});
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(buildings)
        await createBuildng(buildings);
        history.push(`/details`);
    };

    return (
        <PageLayout>
            <Form
                handleSubmit={handleSubmit}
                buildings={buildings}
                setBuildings={setBuildings}
                title="Create building"
            />
        </PageLayout>
    );
};

export default CratePage;
