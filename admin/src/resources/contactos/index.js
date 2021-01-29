import React from 'react';
import axios from 'axios';
import conf from '../../conf';

import {
    List,
    Datagrid,
    TextField,
    NumberField,
    DateField,
    DateTimeField,
    BooleanField,
    RichTextField,
    ChoiceField,
    ReferenceField,
    Filter
} from 'react-admin';

import {
    ShowButton,
    EditButton,
    Edit,
    SimpleForm,
    DateInput,
    DisabledInput,
    AutocompleteInput,
    TextInput,
    ReferenceInput,
    SelectInput,
    NumberInput,
    BooleanInput,
    ArrayInput,
    SimpleFormIterator,
    ImageInput,
    ImageField
} from 'react-admin';
import {
    Create,
    SaveButton,
    Toolbar,
    required
} from 'react-admin';
import {
    Show,
    SimpleShowLayout
} from 'react-admin';

import MyImageField from '../../imageField';

//import RichTextInput from 'ra-input-rich-text';

const onFileSelected = async e => {
    console.log('file', e)
    const formData = new FormData();

    formData.append('image', e[0]);

    try {
        const upload = await axios.post(`${conf.CONTAINER_URL}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        console.log('upload success', upload);

    } catch (error) {
        console.log('error', error);
    }
}

const onFilesSelected = async e => {
    console.log('files', e)

    try {
        const result = await Promise.all(
            e.map(async file => {
                const formData = new FormData;

                formData.append('file', file);

                return await axios.post(`${conf.CONTAINER_URL}/upload`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            })
        );

        console.log('FINAL', result);
    } catch (error) {
        console.log('error', error);
    }
}

//////////////////////////////////////

/*const PropiedadFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="codigo" alwaysOn />
        <ReferenceInput label="contacto" source="contactoId" reference="contactos" allowEmpty>
            <SelectInput optionText="nombre" />
        </ReferenceInput>
    </Filter>
);*/

export const ContactoList = (props) => {
    return (
        <List {...props} title="Lista de contactos">
            <Datagrid>
                <TextField source="nombre" label="Código"/>
                <TextField source="mail" label="Mail" />
                <TextField source="telefono" label="Teléfono" />
                <TextField source="foto" label="Foto" />
                <EditButton/>
            </Datagrid>
        </List>
    )
}

export const ContactoCreate = (props) => {
    return (
        <Create {...props} title="Crear Contacto" >
            <SimpleForm>
                
                <TextInput source="nombre" label="Código"/>
                <TextInput source="mail" label="Mail" />
                <TextInput source="telefono" label="Teléfono" />
                <ImageInput options={{ onDrop: onFileSelected }} source="foto" label="Imagen de perfil" accept="image/*" placeholder={<p>Suelte la imagen</p>}>
                    <ImageField source="src" title="title" />
                </ImageInput>
        
            </SimpleForm>
        </Create>
    )
}

export const ContactoEdit = (props) => {
    console.log(props);
    return (
        <Edit {...props} title="Editar contacto" >
            <SimpleForm>
            <TextField source="nombre" label="Código"/>
                <TextInput source="mail" label="Mail" />
                <TextInput source="telefono" label="Teléfono" />

                <MyImageField fotoKey={'foto'}/>
            </SimpleForm>
        </Edit>
    )
}
