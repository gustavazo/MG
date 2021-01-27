import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import cfg from './conf';

import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

const ImageField = props => {
    let id, foto;
    const fotoKey = props.fotoKey;

    if (props.record) {
        id = props.record.id;
        foto = props.record[fotoKey]
    } else {
        id = props.id;
        foto = props.foto
    }

    const fileInput = useRef();

    const onClickHandler = () => {
        fileInput.current.click()
    }

    console.log(foto)

    const [fotoDisplay, setFotoDisplay] = React.useState(foto);
    const [loading, setLoading] = React.useState(false);

    const onInputChangeHandler = evt => {
        console.log(evt.target.files);

        const file = evt.target.files[0];
        const formData = new FormData();

        formData.append('image', file);

        setLoading(true);

        axios.post(`${cfg.CONTAINER_URL}/upload`, formData)
            .then(result => {

                const urlImage = `${cfg.CONTAINER_URL}/download/${file.name}`;

                axios.patch(`${cfg.API_URL}/contactos/${id}`, {
                    foto: urlImage
                })
                    .then(result2 => {

                        setFotoDisplay(urlImage);
                        setLoading(false);
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    return (
        <div>

            <div style={styles.imageContainer}>
                {
                    loading ?
                        <CircularProgress /> :
                        <img src={fotoDisplay} width={250} onClick={onClickHandler}></img>
                }

            </div>

            <input type="file" onChange={onInputChangeHandler} style={{ display: 'none' }} ref={fileInput}></input>
        </div>
    )
};

export const ImageFieldsContainer = props => {
    const { id, fotos } = props.record;
    

    return (
        <div>
            {
                fotos.map(foto => <ImageField id={id} foto={foto}/>)
            }
        </div>
    )
};

export default ImageField;
