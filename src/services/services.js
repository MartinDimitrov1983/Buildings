import { localStorageManagement } from '../utils/localStorage';

const { getItem, setItem } = localStorageManagement();

export const getBuildings = async () => {
    return getItem('buildings');
};

export const getBuilding = async (id) => {
    const buildings = getItem('buildings');
    const building = buildings.find((building) => building.id === id);
    return building;
};

export const createBuildng = async (buildng) => {
    const id = Math.random() * 100;

    const newProp = {
        id: Number(id),
        name: buildng.name,
        area: buildng.area,
        location: buildng.location,
        image: buildng.image
    };

    const props = await getBuildings();
    const newProps = [...props, newProp];
    setItem('buildings', newProps);
};

export const deleteBuilding = async (id) => {
    const props = await getBuildings();
    const newProps = props.filter((Buildng) => Buildng.id !== id);
    setItem('buildings', newProps);
};

export const updateBuilding = async (buildng) => {
    const props = await getBuildings();
    const newProps = props.filter((prop) => prop.id !== buildng.id);
    const newProp = {
        id: Number(buildng.id),
        name: buildng.name,
        area: buildng.area,
        location: buildng.location,
        image: buildng.image
    };

    setItem('buildings', [...newProps, newProp]);
};
