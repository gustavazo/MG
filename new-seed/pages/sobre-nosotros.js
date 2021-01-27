import Layout from '../components/layout'
import Head from 'next/head'


const SobreNosotros = () => {
    return (
        <Layout>
            <Head>
                <title>GM Bienes Raíces | Sobre nosotros</title>
                <meta name="description" content="Nacimos en Rosario y nos proyectamos en la región. Somos profesionales y ponemos el acento en el conocimiento y la especialización como principales herramientas para asesorar a nuestros clientes." />
            </Head> 
                
            <div>
            {/*  This site was created in Webflow. http://www.webflow.com  
              Last Published: Sat Apr 25 2020 22:32:24 GMT+0000 (Coordinated Universal Time)  
            <header id="hero-overlay" className="hero-overlay nos">
                <div className="centered-container w-container">
                <h1 className="heading-14">Sobre nosotros</h1>
                <p className="paragraph-10">Nuestra empresa es &nbsp;pionera en el rubro inmobiliario, &nbsp;forjada en los albores de la pujante ciudad de San Lorenzo, &nbsp;enmarcada en la emblemática &nbsp;zona de influencia de la ciudad &nbsp;de Rosario a orillas del río Paraná. <br />Dotado con &nbsp; la mayor estructura portuaria del país por donde se canalizan los embarques al mundo entero &nbsp;de la importante &nbsp;producción agrícola ganadera de la región.con una vida comercial de mas de 50 años &nbsp;continuos, &nbsp;siendo la primera empresa del rubro establecida en la ciudad, &nbsp;se convirtió en &nbsp;testigo dinamico &nbsp;del &nbsp;constante crecimiento comercial, industrial &nbsp;e inmobiliario de la zona.</p>
                <div className="div-block-68"><a href="#contacto" className="button-6 w-button">Contáctenos</a></div>
                </div>
            </header>
             [if lte IE 9]><![endif] */}

                <div className="section-4">
                    <div className="div-block-28" />
                    <div className="columns-3 w-row">
                        <div className="w-col w-col-4">
                            <h1 className="heading-9">Sobre nosotros</h1>
                        </div>
                        <div className="column-7 w-col w-col-8">
                            <p className="paragraph-2">Nacimos en Rosario y nos proyectamos en la región. Somos profesionales y ponemos el acento en el conocimiento y la especialización como principales herramientas para asesorar a nuestros clientes.<br /><br />Formamos una empresa que nació y creció con la premisa del desarrollo constante, capacitándonos continuamente para para poder brindarles el mejor servicio y asesoramiento a nuestros clientes, con atención personalizada, respetando sus espacios, tiempos y haciendo valer sus intereses.<br /><br />Nuestra principal premisa es brindar seriedad, eficiencia, honestidad y confianza.El desarrollo de nuestra tarea, el volumen de clientes, propiedades y operaciones, nos ha permitido demostrar lo que tan necesario es en el mercado inmobiliario, confianza.</p>
                        </div>
                    </div>
                    <div className="div-block-29"><img src="images/quotation-marks-marks-quote-icon-with-png-and-vector-format-for-quotation-mark-png-512_512.png" loading="lazy" alt="" className="image-6" />
                        <div className="text-block-8"> ...lo que tan necesario es en el mercado inmobiliario, <strong>confianza</strong>.</div><img src="images/quotation-marks-marks-quote-icon-with-png-and-vector-format-for-quotation-mark-png-512_512.png" loading="lazy" alt="" className="image-7" />
                    </div>
                </div> 
            </div>
        </Layout>
    )
}

export default SobreNosotros;