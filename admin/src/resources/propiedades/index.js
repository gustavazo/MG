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

const PropiedadFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="codigo" alwaysOn />
        <ReferenceInput label="contacto" source="contactoId" reference="contactos" allowEmpty>
            <SelectInput optionText="nombre" />
        </ReferenceInput>
    </Filter>
);

export const PropiedadList = (props) => {
    return (
        <List {...props} title="Lista de propiedades" filters={<PropiedadFilter/>}>
            <Datagrid>
                <TextField source="codigo" label="Código"/>
                <TextField source="tipoOperacion" label="Tipo de operación" />
                <TextField source="ciudad" label="Ciudad" />
                <TextField source="tipoPropiedad" label="Tipo de propiedad" />
                <TextField source="dormitorios" label="Dormitorios" />
                <TextField source="direccion" label="Dirección" />
                <EditButton/>
            </Datagrid>
        </List>
    )
}

export const PropiedadCreate = (props) => {
    return (
        <Create {...props} title="Crear Propiedad" >
            <SimpleForm variant="standard">
                <TextInput source="codigo" label="Codigo" validate={required()}/>

                <SelectInput source="tipoOperacion" choices={[
                     { id: 'venta', name: 'Venta' },
                     { id: 'alquiler', name: 'Alquiler' },
                ]} validate={required()}/>
                <SelectInput source="tipoPropiedad" choices={[
                     { id: 'casa', name: 'Casa' },
                     { id: 'departamento', name: 'Departamento' },
                     { id: 'terreno', name: 'Terreno' },
                     { id: 'campo', name: 'Campo' },
                     { id: 'galpon', name: 'Galpón' },
                     { id: 'oficina', name: 'Oficina' },
                     { id: 'localComercial', name: 'Local comercial' },
                     { id: 'cochera', name: 'Cochera' },
                ]} validate={required()}/>
                <SelectInput source="dormitorios" choices={[
                     { id: 'monoambiente', name: 'Monoambiente' },
                     { id: '1', name: '1' },
                     { id: '2', name: '2' },
                     { id: '3', name: '3' },
                     { id: '4', name: '4 o más' },
                ]} validate={required()}/>

                <TextInput validate={required()} source="direccion" label="Dirección" />
                <TextInput validate={required()} source="direccionMap" label="Dirección mapa" />
                <TextInput source="barrio" label="Barrio" />

                <SelectInput source="ciudad" choices={[
                     { id: 'rosario', name: 'Rosario' },
                     { id: 'san lorenzo', name: 'San Lorenzo' },
                     { id: 'funes', name: 'Funes' },
                     { id: 'puerto san martin', name: 'Puerto San Martín' },
                     { id: 'timbues', name: 'Timbues' },
                     { id: 'capitan bermudez', name: 'Capitán Bermúdez' },
                     { id: 'fray luis beltran', name: 'Fray Luis Beltrán' },
                     { id: 'andino', name: 'Andino' },
                     { id: 'roldan', name: 'Roldán' },
                     { id: 'pueblo esther', name: 'Pueblo Esther' },
                ]} validate={required()}/>

                <TextInput source="precio" label="Precio" />
                <TextInput source="formaPago" label="Forma de pago" />
                <TextInput source="supTerreno" label="Sup. del terreno" />
                <TextInput source="supCubierta" label="Sup. cubierta" />
                <TextInput source="supSCubierta" label="Sup. semi cubierta" />
                <TextInput source="antiguedad" label="Antiguedad" />
                <TextInput source="banos" label="Baños" />
                <TextInput source="cocheras" label="Cocheras" />
                <TextInput source="acceso" label="Acceso" />
                <TextInput source="piso" label="Piso" />
                <TextInput source="servicios" label="Servicios" />
                <TextInput source="descripcion" label="Descripción" />
                <TextInput source="video" label="Video" />
                <TextInput source="fotoPortada" label="Foto portada" />

                <ImageInput options={{ onDrop: onFileSelected }} source="fotoPortada" label="Imagen de perfil" accept="image/*" placeholder={<p>Suelte la imagen</p>}>
                    <ImageField source="src" title="title" />
                </ImageInput>

                <ImageInput options={{ onDrop: onFilesSelected }} source="fotos" labelMultiple="Fotos" multiple accept="image/*" placeholder={<p>Drop your file here</p>}>
                    <ImageField source="src" title="title" />
                </ImageInput>

                <SelectInput source="estadoOperacion" choices={[
                     { id: 'reservada', name: 'Reservada' },
                     { id: 'vendida', name: 'Vendida' },
                     { id: 'alquilada', name: 'Alquilada'}
                ]} />
                <BooleanInput source="aptaCredito" label="Apta crédito" />

                <BooleanInput source="destacada" label="Destacada" />
                <BooleanInput source="slider" label="Destacada en slider" />

                <ReferenceInput label="Contacto" source="contactoId" reference="contactos" validate={required()}>
                    <SelectInput optionText="nombre" />
                </ReferenceInput>
            </SimpleForm>
    </Create>
    )
}

export const PropiedadEdit = (props) => {
    return (
        <Edit {...props} title="Editar propiedad" >
            <SimpleForm>
                <TextInput source="codigo" label="Código" />
                <SelectInput source="tipoOperacion" choices={[
                     { id: 'compra', name: 'Compra' },
                     { id: 'venta', name: 'Venta' },
                ]} />
                <SelectInput source="tipoPropiedad" choices={[
                     { id: 'casa', name: 'Casa' },
                     { id: 'departamento', name: 'Departamento' },
                     { id: 'terreno', name: 'Terreno' },
                     { id: 'campo', name: 'Campo' },
                     { id: 'galpon', name: 'Galpón' },
                     { id: 'oficina', name: 'Oficina' },
                     { id: 'localComercial', name: 'Local comercial' },
                     { id: 'cochera', name: 'Cochera' },
                ]} />
                <SelectInput source="dormitorios" choices={[
                     { id: 'monoambiente', name: 'Monoambiente' },
                     { id: '1', name: '1' },
                     { id: '2', name: '2' },
                     { id: '3', name: '3' },
                     { id: '4 o más', name: '4 o más' },
                ]} />
                <TextInput source="direccion" label="Dirección" />
                <TextInput source="direccionMap" label="Dirección mapa" />
                <TextInput source="barrio" label="Barrio" />
                <SelectInput source="ciudad" choices={[
                     { id: 'rosario', name: 'Rosario' },
                     { id: 'san lorenzo', name: 'San Lorenzo' },
                     { id: 'funes', name: 'Funes' },
                     { id: 'puerto san martin', name: 'Puerto San Martín' },
                     { id: 'timbues', name: 'Timbues' },
                     { id: 'capitan bermudez', name: 'Capitán Bermúdez' },
                     { id: 'fray luis beltran', name: 'Fray Luis Beltrán' },
                     { id: 'andino', name: 'Andino' },
                     { id: 'roldan', name: 'Roldán' },
                     { id: 'pueblo esther', name: 'Pueblo Esther' },
                ]} />
                <TextInput source="precio" label="Precio" />
                <TextInput source="formaPago" label="Forma de pago" />
                <TextInput source="supTerreno" label="Sup. del terreno" />
                <TextInput source="supCubierta" label="Sup. cubierta" />
                <TextInput source="supSCubierta" label="Sup. semi cubierta" />
                <TextInput source="antiguedad" label="Antiguedad" />
                <TextInput source="banos" label="Baños" />
                <TextInput source="cocheras" label="Cocheras" />
                <TextInput source="acceso" label="Acceso" />
                <TextInput source="piso" label="Piso" />
                <TextInput source="servicios" label="Servicios" />
                <TextInput source="descripcion" label="Descripción" />
                <TextInput source="video" label="Video" />

                <TextInput source="fotos" label="Fotos" />
                <SelectInput source="estadoOperacion" choices={[
                     { id: 'reservada', name: 'Reservada' },
                     { id: 'vendida', name: 'Vendida' },
                     { id: 'alquilada', name: 'Alquilada'}
                ]} />
                <BooleanInput source="aptaCredito" label="Apta crédito" />
                <BooleanInput source="destacada" label="Destacada" />
                <BooleanInput source="slider" label="Destacada en slider" />

                <ReferenceInput label="Contacto" source="contactoId" reference="contactos">
                    <SelectInput optionText="nombre" />
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    )
}
