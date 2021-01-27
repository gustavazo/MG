import Layout from '../components/layout';
import Head from 'next/head';


const Emprendimientos = () => {
    return (
        <Layout>
            <Head>
            <title>Alonso & asociados | Emprendimientos</title>
            <meta name="description" content="Somos una empresa joven, que responde a las nuevas necesidades del mercado en constante crecimiento de Rosario y su zona.La mejor opciónpara sus operaciones inmobiliarias." />
            </Head>

            <div>
            
            <meta charSet="utf-8" />
            <title>Alonso & asociados | Servicios</title>
            
            <header  style={{marginTop: 20}} id="hero-overlay" className="hero-overlay">
                <div className="centered-container w-container">
                    <h1 className="heading-14">Emprendimientos</h1>
                    <p className="paragraph-10">
                    
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

export default Emprendimientos;