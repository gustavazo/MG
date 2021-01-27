import Layout from '../../components/layout'
import { useRouter } from 'next/router'

import { getAllPropiedadesId, getPropiedad, getAllPropiedadesParecidas } from '../../lib/propiedades'

import PropiedadDetalle from '../../jsx/propiedad'

export default function Propiedad({ propiedad, propiedadesParecidas }) {
    const router = useRouter();

    return (
        <Layout>
            {
                router.isFallback ? (
                    <h1>Cargando...</h1>
                ) :
                (
                    <PropiedadDetalle info={propiedad} parecidas={propiedadesParecidas}/>
                )
            }
        </Layout>
    )
}

// corre en momento de compilacion
export async function getStaticPaths() {
    const paths = await getAllPropiedadesId();

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const queryString = context.params.id;
    const splittedUrl = queryString.split('-');
    const idFinal = splittedUrl[splittedUrl.length - 1];

    console.log('HEY', splittedUrl, idFinal);

    const propiedad = await getPropiedad(idFinal);

    const filter = {
        where: {
            tipoOperacion: propiedad.tipoOperacion,
            ciudad: propiedad.ciudad,
            tipoPropiedad: propiedad.tipoPropiedad
        }
    }

    const propiedadesParecidas = await getAllPropiedadesParecidas(filter);

    return {
        props: {
            propiedad,
            propiedadesParecidas
        }
    }
}
