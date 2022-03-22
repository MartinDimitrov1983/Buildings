import React from 'react';
import styles from './index.module.css';
import Input from '../input';
import Button from '../button';
import { SAVE_TEXT } from '../../utils/constants';

const Form = ({ handleSubmit, building, setBuilding, title }) => {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.title}>{title}</p>
            <Input
                id="name"
                type="text"
                name="name"
                placeHolder="Name"
                label="Name"
                minLength={3}
                value={building?.name}
                onChange={(e) =>
                    setBuilding({ ...building, name: e.target.value })
                }
            />
            <Input
                id="area"
                type="number"
                name="area"
                placeHolder="Area"
                label="Area"
                value={building?.area}
                onChange={(e) =>
                    setBuilding({ ...building, area: e.target.value })
                }
            />
            <Input
                id="location"
                type="text"
                name="location"
                placeHolder="Location"
                label="Location"
                required={false}
                value={building?.location}
                onChange={(e) =>
                    setBuilding({ ...building, location: e.target.value })
                }
            />
            <Input
                id="image"
                type="text"
                name="image"
                placeHolder="Url"
                label="Url"
                required={false}
                value={building?.image}
                onChange={(e) =>
                    setBuilding({ ...building, image: e.target.value })
                }
            />
            <Button className={styles.btn} type="submit">
                {SAVE_TEXT}
            </Button>
        </form>
    );
};

export default Form;
