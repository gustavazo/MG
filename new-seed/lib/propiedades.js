import axios from 'axios';
import conf from '../config';

function urlCreate(propiedad) {
  const direccion = (propiedad.tipoOperacion + "-" + propiedad.tipoPropiedad + propiedad.dormitorios + " dorm-" + (propiedad.direccion + " " +propiedad.ciudad).toLowerCase()).replace(/ /g, "-") + '-' + propiedad.id;
  return direccion;
}  

export async function getPropiedad(id) {
  const res = await axios(`${conf.apiUrl}/propiedades/${id}`)
  const propiedad = res.data

  return propiedad;
}

export async function getAllPropiedades() {
  const res = await axios(`${conf.apiUrl}/propiedades`);
  const propiedades = res.data

  return propiedades;
}

export async function getAllPropiedadesParecidas(filter) {
  const res = await axios.get(`${conf.apiUrl}/propiedades`, {
    params: { filter }
  });
  
  const propiedades = res.data

  return propiedades;
}

export async function getAllPropiedadesId() {
  const res = await axios(`${conf.apiUrl}/propiedades`);
  const propiedades = res.data

  return propiedades.map(propiedad => {
    return {
      params: {
        id: urlCreate(propiedad)
      }
    }
  })
}