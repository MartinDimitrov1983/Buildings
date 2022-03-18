import React from 'react';
import styles from './index.module.css';
import Input from '../input';
import Button from '../button';

const Form = ({ handleSubmit, buildings, setBuildings, title }) => {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.title}>{title}</p>
            <Input
                id="name"
                type="text"
                name="name"
                placeHolder="Name"
                label="Name"
                value={buildings?.name}
                onChange={(e) =>
                    setBuildings({ ...buildings, name: e.target.value })
                }
            />
            <Input
                id="area"
                type="number"
                name="area"
                placeHolder="Area"
                label="Area"
                value={buildings?.area}
                onChange={(e) =>
                    setBuildings({ ...buildings, area: e.target.value })
                }
            />
            <Input
                id="location"
                type="text"
                name="location"
                placeHolder="Location"
                label="Location"
                value={buildings?.location}
                onChange={(e) =>
                    setBuildings({ ...buildings, location: e.target.value })
                }
            />
            <Input
                id="image"
                type="text"
                name="image"
                placeHolder="Url"
                label="Url"
                value={buildings?.image}
                onChange={(e) =>
                    setBuildings({ ...buildings, image: e.target.value })
                }
            />
            <Button className={styles.btn} type="submit">
                Save
            </Button>
        </form>
    );
};

export default Form;
