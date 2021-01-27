import Link from 'next/link'
import Head from 'next/head'
import Propiedades from '../../jsx/propiedades'

import Layout from '../../components/layout'

import { getAllPropiedades } from '../../lib/propiedades';

export default function PropiedadLista(props) {
  return (
    <Layout>
      <Head>
        <title>Lista</title>
      </Head>

        <Propiedades propiedades={props.propiedades}/>  {/* le agregué :propiedades={props}  */}

    </Layout>
  )
}

export async function getServerSideProps(arg) {
  const propiedades = await getAllPropiedades();

  return {
    props: { propiedades }
  } 
}

