import Layout from '../components/layout';
import Head from 'next/head';


const Servicios = () => {
    return (
        <Layout>
                    <Head>
          <title>Alonso & asociados | Servicios</title>
          <meta name="description" content="Somos una empresa joven, que responde a las nuevas necesidades del mercado en constante crecimiento de Rosario y su zona.La mejor opciónpara sus operaciones inmobiliarias." />
        </Head>

            <div>
            {/*  This site was created in Webflow. http://www.webflow.com  */}
            {/*  Last Published: Sat Apr 25 2020 22:32:24 GMT+0000 (Coordinated Universal Time)  */}
            <meta charSet="utf-8" />
            <title>Alonso & asociados | Servicios</title>
            <meta content="sobre nosotros" property="og:title" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta content="Webflow" name="generator" />
            <link href="css/normalize.css" rel="stylesheet" type="text/css" />
            <link href="css/webflow.css" rel="stylesheet" type="text/css" />
            <link href="css/dazgroup.webflow.css" rel="stylesheet" type="text/css" />
            {/* [if lt IE 9]><![endif] */}
            <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
            <link href="images/webclip.png" rel="apple-touch-icon" />
            <header  style={{marginTop: 20}} id="hero-overlay" className="hero-overlay">
                <div className="centered-container w-container">
                    <h1 className="heading-14">Nuestros servicios</h1>
                    <p className="paragraph-10">
                    Somos una empresa joven, que responde a las nuevas necesidades &nbsp;del
                    mercado en constante crecimiento de Rosario y su zona.
                    <br /><br />
                    LA MEJOR OPCIÓN PARA SUS OPERACIONES INMOBILIARIAS<br /><br />
                    Compraventas en general<br />
                    Administración de alquileres urbanos<br />
                    Tasaciones<br />
                    Asesoramiento inmobiliario integral<br />
                    Arrendamientos rurales<br />
                    Asesoramiento legal<br />
                    </p>
                    <div className="div-block-68">
                    <a href="#contacto" className="button-6 w-button">
                        Contáctenos
                    </a>
                    </div>
                </div>
            </header>;
            {/* [if lte IE 9]><![endif] */}
            </div>
        </Layout>
    
    )
}

export default Servicios;