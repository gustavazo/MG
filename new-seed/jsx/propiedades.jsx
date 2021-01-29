import Link from 'next/link'
import axios from 'axios';
import config from '../config';
import Buscador from '../components/Buscador';
import Head from 'next/head'



export const Propiedad = ({ info, parecida }) => {


  const aptaCredito = info.aptaCredito ? "Apta crédito" : "";
  const estadoOperacion = 
    info.reservada 
    ? "Reservada" 
    : info.alquilada 
    ? "Alquilada" 
    : info.vendida 
    ? "Vendida" 
    : "";

  function urlCreate(propiedad) {
    const direccion = (propiedad.tipoOperacion + "-" + propiedad.tipoPropiedad + propiedad.dormitorios + " dorm-" + (propiedad.direccion + " " +propiedad.ciudad).toLowerCase()).replace(/ /g, "-");
    return direccion;
  }  

  const direccion = urlCreate(info);

  return (
    <Link href={`/propiedades/${direccion}-${info.id}`} key={info.id}>
      <div className="div-block-66" style={{cursor:"pointer", title:"Ver propiedad"}}>   {/*........................tarjeta propiedad */}
        <a className="linkdestaca w-inline-block">
          <div className="divdestaca"><img src={info.fotoPortada} alt="" className="imgdestaca" /></div>
          <div className="div-block-27">
            <h3 className="heading-7">{info.tipoOperacion}</h3>
            <h3 className="heading-7">{info.tipoPropiedad}</h3>
            <h3 className="heading-7">{info.ciudad}</h3>
            <div className="text-block-8">{info.direccion}</div>
            <div className="div-block-37">
              <div className="diviconos"><img src="/images/m2.png" alt="" className="iconocasa" />
                <div className="text-block-11">{info.supCubierta}</div>
              </div>
              <div className="diviconos"><img src="/images/dorm.png" alt="" className="iconocasa" />
                <div className="text-block-11">{info.dormitorios}</div>
              </div>
              <div className="diviconos"><img src="/images/baños.png" alt="" className="iconocasa" />
                <div className="text-block-11">{info.banos}</div>
              </div>
              <div className="diviconos"><img src="/images/cochera.png" alt="" className="iconocasa" />
                <div className="text-block-11">{info.cocheras}</div>
              </div>
            </div>
          </div>
        </a>

        {info.aptaCredito || info.estadoOperacion  ?
          <div className="opcionesventa">
            <div className="text-block-21">
              {aptaCredito}
            </div>
            <div className="text-block-21 negrita">{info.estadoOperacion}</div>
          </div> : null
        }



      </div>
    </Link>
  )
}




const Propiedades = (props) => {
    const [propiedades, setPropiedades] = React.useState(props.propiedades);
    const [key, setKey] = React.useState(1);
    const [keyBuscador, setKeyBuscador ] = React.useState(0);

    console.log(propiedades);
     
    const buscarPropiedades = (filtro) => (evento) => {
        console.log('Por buscar con filtro: ', filtro, evento);

        if (evento) {
          evento.preventDefault();
        }


        // revisamos las propiedades del filtro que recibimos
        // si alguno de los valores, está vacio
        // la propiedad de ese valor NO la agregamos al nuevo filtro

        for (let key in filtro) {
          // me fijo si el valor de la propiedad está vacio
          if (filtro[key] === "") {
            delete filtro[key];
          }
        }

        console.log('filtro', filtro);

        axios.get(`${config.apiUrl}/propiedades`, {
          params: {
            filter: {
              where: filtro
            }
          }
        })
          .then((result) => {

            setPropiedades(result.data);
            setKey(key + 1);
          })
          .catch((err) => {
          })
      };

      return (
        <>
          <Head>
            <title>
              GM | Bienes Raíces
            </title>
            <meta name="description" content="Consulte por nuestras propiedades en Rosario y zona." />
          </Head>
        <div>
          {/*  This site was created in Webflow. http://www.webflow.com  
               Last Published: Sat Apr 25 2020 22:32:24 GMT+0000 (Coordinated Universal Time)  
          <meta charSet="utf-8" />
          <title>propiedades</title>
          <meta content="propiedades" property="og:title" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content="Webflow" name="generator" />
          <link href="css/normalize.css" rel="stylesheet" type="text/css" />
          <link href="css/webflow.css" rel="stylesheet" type="text/css" />
          <link href="css/dazgroup.webflow.css" rel="stylesheet" type="text/css" />
          
          <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
          <link href="images/webclip.png" rel="apple-touch-icon" />*/}
          
          <div className="section-17">
            
            <Buscador buscarPropiedades={buscarPropiedades} key={keyBuscador} reset={() => setKeyBuscador(keyBuscador + 1)}/> 

            <div className="wrapperdestacados">

              {
                propiedades.map(propiedad => (

                  <Propiedad info={propiedad} />

      
                )
                )

              }
            </div>
             
              { !propiedades.length ?
                <div className="divnotfound">
                  <div>No se encontraron resultados para la búsqueda.</div>
                </div> : null
              }   
            
          </div>
         
        </div>
        </>
      );
}
  
    export default Propiedades;