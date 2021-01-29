import Link from 'next/link'
import axios from 'axios';
import config from '../config';
import Buscador from '../components/Buscador';
import MapContainer from '../components/MapContainer';
import Slider from '../components/Slider';
import { Propiedad } from '../jsx/propiedades';
import Head from 'next/head'

import MetaTags from 'react-meta-tags'





const Home = (props) => {
  const [propiedades, setPropiedades] = React.useState(props.propiedades);
  const [key, setKey] = React.useState(1);
  const [keyBuscador, setKeyBuscador] = React.useState(0);

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

  //------------------destacadas

  const destacadas = props.propiedades.filter(propiedad => propiedad.destacada == true);

  //------------------destacadas slider

  const destacadasSlider = props.propiedades.filter(propiedad => propiedad.slider == true);

  return (

    <>
      <Head>
        <title>
          GM | Servicios inmobiliarios
      </title>
        <meta name="description" content="Compraventas en general | Administración de alquileres urbanos | Tasaciones | Asesoramiento inmobiliario integral" />
      </Head>

      <div>

        <div id="home" className="section">
          <Slider propiedades={destacadasSlider} />
        </div>


        <div className="section-2">
          <div className="wrappermappropiedades">

            <Buscador buscarPropiedades={buscarPropiedades} key={keyBuscador} reset={() => setKeyBuscador(keyBuscador + 1)} />

            <div data-duration-in={300} data-duration-out={100} className="tabs w-tabs">
              <div className="tabs-menu w-tab-menu">
                <a data-w-tab="Tab 1" className="tablink w-inline-block w-tab-link w--current">
                  <div>Lista</div>
                </a>
                <a data-w-tab="Tab 2" className="tablink w-inline-block w-tab-link">
                  <div>Mapa</div>
                </a>
              </div>
              <div className="w-tab-content">
                <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                  <div className="fotos">
                  {
                    propiedades.map(p => (
                      <div className="fichapropiedad" style={{backgroundImage: `url("${p.fotoPortada}")`}}>
                        <div className="infoficha">
                          <div className="div-block-12">
                            <div className="text-block-3">{p.direccion}</div>
                            <a href="#" className="button-5 w-button">Ver</a>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                  </div>
                </div>
                <div data-w-tab="Tab 2" className="w-tab-pane">
                  {/*<MapContainer propiedades={propiedades} key={key}/>*/}
                  {/*<img src="images/Sin-título.png" loading="lazy" sizes="(max-width: 479px) 97vw, (max-width: 991px) 96vw, (max-width: 2204px) 86vw, 1896px" srcSet="images/Sin-título-p-500.png 500w, images/Sin-título-p-800.png 800w, images/Sin-título-p-1080.png 1080w, images/Sin-título-p-1600.png 1600w, images/Sin-título.png 1896w" alt="" className="image-3" />*/}
                </div>
              </div>
            </div>



            <MapContainer propiedades={propiedades} key={key} />


            
          </div>

          {!propiedades.length ?
            <div className="divnotfound">
              <div>No se encontraron resultados para la búsqueda.</div>
            </div> : null
          }
        </div>



      </div>






      {/*<div className="section-14">
        <h2 className="heading-12">Propiedades destacadas</h2>
      </div>
      <div className="wrapperdestacados">


          {


          destacadas.map(propiedad => (

            <Propiedad info={propiedad} />
           )
          )
        }       
      </div>*/}

    </>
  )
}

export default Home;