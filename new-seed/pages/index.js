import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import Home from '../jsx/home';
import { getAllPropiedades } from '../lib/propiedades';

export default function Index(props) {
  return (
    <Layout pageTitle="GM Inmobiliaria">
      <Home propiedades={props.propiedades}/>
    </Layout>
  )
}

export async function getServerSideProps(arg) {
  const propiedades = await getAllPropiedades();

  return {
    props: { propiedades }
  } 
}