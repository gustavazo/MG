// Recibe info.info con la data de la.
//propiedad
import Link from 'next/link'
import MapaPropiedad from '../components/MapaPropiedad'
import Lightbox from 'react-image-lightbox'
import Airform from 'react-airform'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,

} from 'react-share';

import {
  FacebookShareCount,

} from 'react-share';

import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,

} from 'react-share';

import { useRouter } from 'next/router'
import Head from 'next/head'

import MetaTags from 'react-meta-tags';


//-----------------------------------------------------



const PropiedadDetalle = ({ info, parecidas }) => {
  const [photoIndex, setPhotoIndex] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const router = useRouter();

  const rutaCompartir = `http://alonso-inmobiliaria.com${router.asPath}`;     /*----------------------------------- cambiaaaaar */

  const aptaCredito = info.aptaCredito ? "Apta crédito" : "";

  const estadoOperacion =
    info.reservada
      ? "Reservada"
      : info.alquilada
        ? "Alquilada"
        : info.vendida
          ? "Vendida"
          : "";

  const images = info.fotos;

  const latLng = info.direccion;

  const referencia = `Referencia : ${info.codigo} / ${info.tipoOperacion} / ${info.tipoPropiedad} / ${info.dormitorios} dorm / ${info.direccion} / ${info.ciudad}`

  const parecidasNew = parecidas.filter(parecida => info.id !== parecida.id).splice(0, 2);

  const mail = `"https://formspree.io/"`;

  console.log(info.contacto);

  const fotoContacto = `${info.contacto.foto}`;

  const shareUrl = rutaCompartir;

  const title = `${info.tipoOperacion} ${info.tipoPropiedad} ${info.dormitorios} dormitorios ${info.direccion} ${info.ciudad}`;

  const tele =  "";
  const what = `https://wa.me/549${tele}?text=${referencia}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={info.descripcion} />
        <meta name="og:type" content="website" />
        <meta name="og:image" content={info.fotoPortada} />
        <meta name="og:title" content={title}></meta>
        <meta name="og:description" content={info.descripcion}></meta>
        <meta name="og:url" content={rutaCompartir} />
      </Head>

      <div className="section-3">
        <div className="columns-2 w-row">
          <div className="column-6 w-col w-col-5 w-col-small-small-stack">
            <div className="div-block-20">
              <h1 className="heading-6">{info.tipoOperacion}</h1>
            </div>
            <div className="wrapperdatos">
              <div className="div-block-25">
                <h2 className="heading-7">{info.tipoPropiedad}</h2>
                <h2 className="heading-7">{info.dormitorios} dormitorios</h2>
                <h2 className="heading-7">{info.direccion}</h2>
                {info.barrio ?
                   <h2 className="heading-7">{info.barrio}</h2>
                   : null
                }
                <h2 className="heading-7">{info.ciudad}</h2>
                <h2 className="precio">{info.precio}</h2>
              </div>
              <div className="div-block-26">
                <div className="div-block-27">
                  <div className="text-block-7">Código de referencia:</div>
                  <h3 className="heading-8">{info.codigo}</h3>
                </div>
                <div className="div-block-27">
                  <div className="text-block-7">Forma de pago: </div>
                  <h3 className="heading-8">{info.formaPago}</h3>
                </div>
                <div className="div-block-27">
                  <div className="text-block-7">Superficie terreno:</div>
                  <h3 className="heading-8">{info.supTerreno}</h3>
                </div>
                <div className="div-block-27">
                  <div className="text-block-7">Superficie cubierta:</div>
                  <h3 className="heading-8">{info.supCubierta}</h3>
                </div>
                <div className="div-block-27">
                  <div className="text-block-7">Superficie semi cubierta:</div>
                  <h3 className="heading-8">{info.supSCubierta}</h3>
                </div>
                <div className="div-block-27">
                  <div className="text-block-7">Antiguedad:</div>
                  <h3 className="heading-8">{info.antiguedad}</h3>
                </div>
                <div className="div-block-27">
                  <div className="text-block-7">Plantas:</div>
                  <h3 className="heading-8">{info.plantas}</h3>
                </div>
                <div className="div-block-27">
                  <div className="text-block-7">Baños:</div>
                  <h3 className="heading-8">{info.banos}</h3>
                </div>
                <div className="div-block-27">
                  <div className="text-block-7">Cocheras:</div>
                  <h3 className="heading-8">{info.cocheras}</h3>
                </div>
                <div className="div-block-27">
                  <div className="text-block-7">Acceso:</div>
                  <h3 className="heading-8">{info.acceso}</h3>
                </div>
                <div className="div-block-27">
                  <div className="text-block-7">Piso:</div>
                  <h3 className="heading-8">{info.piso}</h3>
                </div>
                <div className="div-block-27">
                  <div className="text-block-7">Servicios:</div>
                  <h3 className="heading-8">{info.servicios}</h3>
                </div>
                <div className="text-block-7">Descripción:</div>
                <p className="paragraph">{info.descripcion}</p>
                
                <div style={{ paddingTop: '56.17021276595745%' }} className="video w-video w-embed"><iframe className="embedly-embed" src={info.video}  scrolling="no" title="YouTube embed" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen="true" /></div>
                <div className="compartir" />
              </div>
            </div>


            <div className="div-block-63">
              <div className="text-block-5">Compartir esta propiedad en redes sociales</div>
              <div className="wrapperSocial">
                <div style={{ marginRight: 10 }}>
                  <FacebookShareButton url={rutaCompartir}>
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>
                </div>
                <div style={{ marginRight: 10 }}>
                  <WhatsappShareButton url={rutaCompartir}>
                    <WhatsappIcon size={32} round={true} />
                  </WhatsappShareButton>
                </div>
                <div style={{ marginRight: 10 }}>
                  <TwitterShareButton url={rutaCompartir}>
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>
                </div>
              </div>
            </div>
          </div>


          <div className="column-5 w-col w-col-7 w-col-small-small-stack">
            <div className="div-block-19" style={{backgroundImage: `url("${info.fotoPortada}")`}} onClick={() => setIsOpen(true)}>
            {/*<div className="div-block-22">
                <div className="text-block-6">Hacer click en la magen para galería</div>
              </div>
              <a href="#" className="lightbox-link w-inline-block w-lightbox"><img src="https://d3e54v103j8qbb.cloudfront.net/img/placeholder-thumb.svg" loading="lazy" alt="" className="image-4" />
              </a>*/}

              <div className="div-block-22">
                <div className="text-block-6">Hacer click en la magen para galería</div>
              </div>

              <div>
                <button type="button" onClick={() => setIsOpen(true)}>
                  Open Lightbox
               </button>

                {isOpen && (
                  <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                      setPhotoIndex(
                        (photoIndex + images.length - 1) % images.length,
                      )
                    }
                    onMoveNextRequest={() =>
                      setPhotoIndex(
                        (photoIndex + 1) % images.length,
                      )
                    }
                  />
                )}
              </div>






              {estadoOperacion ?
              
                <div className="div-block-35">
                  <div className="txtvendida">{estadoOperacion}</div>
                </div> : null
              }

            </div>
           
            <div className="div-block-21">
                <MapaPropiedad coordenadas={info.geolocation} operacion={info.tipoOperacion}></MapaPropiedad>     {/*-------------- M A P A -------------- */}
            </div> 

            <div className="columns-4 w-row">
              <div className="column-8 w-col w-col-4 w-col-small-6 w-col-tiny-tiny-stack">
                <div className="txtctacto">Contacto</div>
                <img src={fotoContacto} />
                <div className="txtctacto">{info.contacto.nombre}</div>
                <div className="linkctacto"><img src="/images/mobileIcon.png" loading="lazy" alt="Icono móvil" className="image-8" />
                  <a href="#" className="txtctacto">{info.contacto.telefono}</a>
                </div>
                <div className="linkctacto"><img src="/images/whatsIcon.png" loading="lazy" alt="Icono Whatsapp" className="image-8" />
                  <a href="#" className="txtctacto">{info.contacto.telefono}</a>
                </div>
                <div className="linkctacto"><img src="/images/mailIcon.png" loading="lazy" alt="Icono mail" className="image-8" />
                  <a href="#" className="txtctacto">{info.contacto.mail}</a>
                </div>
              </div>
              <div className="column-9 w-col w-col-8 w-col-small-6 w-col-tiny-tiny-stack">
                <div className="div-block-33">
                  <div className="txtctacto">Consulte vía mail con el contacto</div>
                  <div className="form-block-2 w-form">
                    <form id="email-form-2" name="email-form-2" data-name="Email Form 2" className="w-clearfix"><input type="text" className="txtfieldprop w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder="Nombre" id="name-3" /><input type="email" className="txtfieldprop w-input" maxLength={256} name="email-4" data-name="Email 4" placeholder="Email" id="email-4" required /><input type="tel" className="txtfieldprop w-input" maxLength={256} name="email-4" data-name="Email 4" placeholder="Teléfono" id="email-4" required /><textarea placeholder="Mensaje" maxLength={5000} id="field-3" name="field-3" required className="txtfieldprop msje w-input" defaultValue={""} /><input type="submit" defaultValue="Enviar" data-wait="Please wait..." className="submit-button w-button" /></form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  )
};


export default PropiedadDetalle;
