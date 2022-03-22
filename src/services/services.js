import { v4 as uuidv4 } from 'uuid';
import { localStorageManagement } from '../utils/localStorage';

const { getItem, setItem } = localStorageManagement();

export const getBuildings = () => {
    return new Promise((resolve, reject) => {
        const buildings = getItem('buildings');

        if (!buildings) {
            return setTimeout(
                () => reject(new Error('Buidings not found')),
                500
            );
        }

        setTimeout(() => resolve(buildings), 500);
    });
};

export const getBuilding = (id) => {
    return new Promise((resolve, reject) => {
        const buildings = getItem('buildings');
        const building = buildings.find((building) => building.id === id);

        if (!building) {
            return setTimeout(
                () => reject(new Error('Buiding not found')),
                500
            );
        }

        setTimeout(() => resolve(building), 500);
    });
};

export const createBuildng = async (buildng) => {
    return new Promise((resolve, reject) => {
        const buildings = getItem('buildings');

        const building = {
            id: uuidv4(),
            name: buildng.name,
            area: buildng.area,
            location: buildng.location || '',
            image: buildng.image || ''
        };

        const newBuidings = [...buildings, building];

        if (!building.id || !building.name || !building.area) {
            return setTimeout(
                () => reject(new Error("Can't create buiding")),
                500
            );
        }

        setItem('buildings', newBuidings);
        setTimeout(() => resolve(true), 500);
    });
};

export const deleteBuilding = async (id) => {
    return new Promise((resolve, reject) => {
        const buildings = getItem('buildings');
        const newBuidings = buildings.filter((buildng) => buildng.id !== id);

        if (!id) {
            return setTimeout(
                () => reject(new Error('Buiding not found')),
                500
            );
        }

        setItem('buildings', newBuidings);
        setTimeout(() => resolve(newBuidings), 500);
    });
};

export const updateBuilding = async (buildng) => {
    return new Promise((resolve, reject) => {
        let buildings = getItem('buildings');
        const buidingIndex = buildings.findIndex(
            (prop) => prop.id === buildng.id
        );
        const newBuiding = {
            id: Number(buildng.id),
            name: buildng.name,
            area: buildng.area,
            location: buildng.location,
            image: buildng.image
        };

        if (!newBuiding.id) {
            return setTimeout(
                () => reject(new Error('Buiding not found')),
                500
            );
        }

        buildings.splice(buidingIndex, 1, newBuiding);

        setItem('buildings', buildings);
        setTimeout(() => resolve(true), 500);
    });
};
