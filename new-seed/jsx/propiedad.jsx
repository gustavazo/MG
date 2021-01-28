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
/*export const Propiedad = ({ info }) => {

  const aptaCredito = info.aptaCredito ? "Apta crédito" : "";
  const estadoOperacion = 
    info.reservada 
    ? "Reservada" 
    : info.alquilada 
    ? "Alquilada" 
    : info.vendida 
    ? "Vendida" 
    : "";

  

  return (
    <Link href={`/propiedades/${info.id}`} key={info.id}>
      <div className="div-block-66" >
        <a
          href="propiedad.html"
          aria-current="page"
          className="linkdestaca w-inline-block w--current"
        >
          <div className="divdestaca">
            <img
              src={info.fotoPortada}
              srcSet="images/FRENTE-B-ALTA-p-500.jpeg 500w, images/FRENTE-B-ALTA-p-800.jpeg 800w, images/FRENTE-B-ALTA-p-1080.jpeg 1080w, images/FRENTE-B-ALTA-p-1600.jpeg 1600w, images/FRENTE-B-ALTA-p-2000.jpeg 2000w, images/FRENTE-B-ALTA.jpg 2338w"
              sizes="(max-width: 767px) 94vw, (max-width: 991px) 56vw, (max-width: 8992px) 26vw, 2338px"
              alt
              className="imgdestaca"
            />
          </div>
          <div className="div-block-27">
            <h3 className="heading-7">venta casa rosario</h3>
            <div className="text-block-8">Elorza 456</div>
            <div className="div-block-37">
              <div className="diviconos">
                <img src="images/m2.png" alt className="iconocasa" />
                <div className="text-block-11">200</div>
              </div>
              <div className="diviconos">
                <img src="images/dorm.png" alt className="iconocasa" />
                <div className="text-block-11">3</div>
              </div>
              <div className="diviconos">
                <img src="images/baños.png" alt className="iconocasa" />
                <div className="text-block-11">2</div>
              </div>
              <div className="diviconos">
                <img src="images/cochera.png" alt className="iconocasa" />
                <div className="text-block-11">2</div>
              </div>
              <div className="diviconos">
                <img src="images/aptaCredito.png" alt className="iconocasa" />
              </div>
            </div>
          </div>
        </a>;
        
        {info.aptaCredito || info.estadoOperacion ?
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
}*/


const PropiedadDetalle = ({ info, parecidas }) => {
  const [photoIndex, setPhotoIndex] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const router = useRouter();

  const rutaCompartir = `http://alonso-inmobiliaria.com${router.asPath}`;

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

  const mail = `"https://formspree.io/${info.contacto.mail}`;

  //console.log(mail);

  const fotoContacto = `${info.contacto.foto}`;

  const shareUrl = rutaCompartir;

  const title = `${info.tipoOperacion} ${info.tipoPropiedad} ${info.dormitorios} dormitorios ${info.direccion} ${info.ciudad}`;

  const tele = info.contacto.telefono.replace(/\s+/g, '');
  const what = `https://wa.me/549${tele}?text=${referencia}`
  console.log(what);

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

      

      {/*<div className="section-16">
        <div className="div-block-53" />
        <div className="columns-3 w-row">
          <div className="column-2 w-col w-col-5">
            <div className="div-block-54">
              <div className="div-block-52">
                <h1 className="h1propiedad">{info.tipoOperacion}</h1>
                <div className="contdatos">
                  <div className="punto">»</div>
                  <h2 className="h2datos">{info.tipoPropiedad}</h2>
                </div>
                <div className="contdatos">
                  <div className="punto">»</div>
                  <h2 className="h2datos">{info.dormitorios} dormitorios</h2>
                </div>
                <div className="contdatos">
                  <div className="punto">»</div>
                  <h2 className="h2datos">{info.direccion}</h2>
                </div>

                {info.barrio ?
                  <div className="contdatos">
                    <div className="punto">»</div>
                    <h2 className="h2datos">{info.barrio}</h2>
                  </div> : null
                }

                <div className="contdatos">
                  <div className="punto">»</div>
                  <h2 className="h2datos">{info.ciudad}</h2>
                </div>
                <div className="divprecio">
                  <div className="txtprecio">Precio: {info.precio}</div>
                </div>
              </div>
              <div className="div-block-57">
                <div className="div-block-56">
                  <div className="signomayor">&gt;</div>
                  <div className="txtcaract">Código de referencia:</div>
                  <div className="resultcaract">{info.codigo}</div>
                </div>
                <div className="div-block-56">
                  <div className="signomayor">&gt;</div>
                  <div className="txtcaract">Forma de pago:</div>
                  <div className="resultcaract">{info.formaPago}</div>
                </div>
                <div className="div-block-56">
                  <div className="signomayor">&gt;</div>
                  <div className="txtcaract">Superficie del terreno:</div>
                  <div className="resultcaract">{info.supTerreno} m2</div>
                </div>
                <div className="div-block-56">
                  <div className="signomayor">&gt;</div>
                  <div className="txtcaract">Superficie cubierta:</div>
                  <div className="resultcaract">{info.supCubierta} m2</div>
                </div>
                <div className="div-block-56">
                  <div className="signomayor">&gt;</div>
                  <div className="txtcaract">Superficie semi cubierta:</div>
                  <div className="resultcaract">{info.supSCubierta} m2</div>
                </div>
                <div className="div-block-56">
                  <div className="signomayor">&gt;</div>
                  <div className="txtcaract">Antigüedad:</div>
                  <div className="resultcaract">{info.antiguedad}</div>
                </div>
                <div className="div-block-56">
                  <div className="signomayor">&gt;</div>
                  <div className="txtcaract">Plantas:</div>
                  <div className="resultcaract">{info.plantas}</div>
                </div>
                <div className="div-block-56">
                  <div className="signomayor">&gt;</div>
                  <div className="txtcaract">Baños:</div>
                  <div className="resultcaract">{info.banos}</div>
                </div>
                <div className="div-block-56">
                  <div className="signomayor">&gt;</div>
                  <div className="txtcaract">Cocheras:</div>
                  <div className="resultcaract">{info.cocheras}</div>
                </div>
                <div className="div-block-56">
                  <div className="signomayor">&gt;</div>
                  <div className="txtcaract">Acceso:</div>
                  <div className="resultcaract">{info.acceso}</div>
                </div>
                <div className="div-block-56">
                  <div className="signomayor">&gt;</div>
                  <div className="txtcaract">Piso:</div>
                  <div className="resultcaract">{info.piso}</div>
                </div>
                <div className="div-block-56">
                  <div className="signomayor">&gt;</div>
                  <div className="txtcaract">Servicios:</div>
                  <div className="resultcaract">{info.servicios}</div>
                </div>
              </div>
              <div className="descripc">
                <div className="titulonaranja">Descripción</div>
                <p className="parrdescrip">{info.descripcion}</p>
              </div>
            </div>
            <div className="div-block-62" />
            <div style={{ paddingTop: '56.17021276595745%' }} id="w-node-6e95e4747161-be5037ad" className="w-embed-youtubevideo youtube"><iframe src={info.video} frameBorder={0} style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'auto' }} allow="autoplay; encrypted-media" allowFullScreen /></div>


            <div className="div-block-63">
              <div className="titulonaranja">Compartir esta propiedad en redes sociales</div>
              <div className="html-embed-2 w-embed w-script">
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
          <div className="column-3 w-col w-col-7">
            <a href="#" title="Hacer click para ver más" className="lightbox-link w-inline-block w-lightbox" onClick={() => setIsOpen(true)}>
              <img src={info.fotoPortada} sizes="(max-width: 767px) 100vw, (max-width: 6703px) 58vw, 3888px" alt="" className="image-17" />
            </a>

            <div>
              {/* <button type="button" onClick={() => setIsOpen(true)}>
                            Open Lightbox
                          </button> */}
              {/*}
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

            {aptaCredito || estadoOperacion ?
              <div className="opcionesventa">
                <div className="text-block-21">{aptaCredito}</div>
                <div className="text-block-21 negrita">{estadoOperacion}</div>
              </div> : null
            }


            <div className="divestado" />


            <div>

              {/*<div className="div-block-58">

                <MapaPropiedad coordenadas={info.geolocation} operacion={info.tipoOperacion}></MapaPropiedad>
          </div>*/}

           {/* </div>
            <div className="div-block-61">
              <div className="columns-4 w-row">
                <div className="w-col w-col-5">
                  <div className="txtcaract">Contacto</div><img src={fotoContacto} />
                  <div className="text-block-17">{info.contacto.nombre}</div>
                  <div className="div-block-59"><img src="../images/celu.png" alt="" className="imgiconctacto" /><a href="tel:3415494381" className="linkctacto">{info.contacto.telefono}</a></div>
                  <div className="div-block-59"><img src="../images/whatt.png" alt="" className="imgiconctacto" /><a href={what} className="linkctacto">{info.contacto.telefono}</a></div>
                  <div className="div-block-59"><img src="../images/mail.png" alt="" className="imgiconctacto" /><a href="#" className="linkctacto">{info.contacto.mail}</a></div>
                </div>
                <div className="column-4 w-col w-col-7">
                  <div className="div-block-60">
                    <div className="txtcaract">Consulte por mail con el contacto</div>

                    <Airform email="walonso@live.com.ar">
                      

                      <input type="text" className="w-input" maxLength={256} name="Nombre" data-name="Name" placeholder="Nombre" id="name" required />
                      <input type="email" className="w-input" maxLength={256} name="Email" data-name="Email" placeholder="Su email" id="email" required />
                      <input type="text" className="w-input" maxLength={256} name="Telefono" data-name="Field 2" placeholder="Teléfono" id="field-2" />
                      <textarea id="field" name="Mensaje" maxLength={5000} className="w-input" defaultValue={referencia.toUpperCase()} />
                      <input type="hidden" name="_replyto" />
                      <input type="submit" value="Enviar" data-wait="Por favor espere..." className="submit-button-3 w-button" />


                    </Airform>

                  </div>
                </div>
              </div>
            </div>

            {/* Otras propiedades que pueden interesarle

            {parecidasNew.length ? <div className="titulonaranja">Otras propiedades que pueden interesarle</div> : null}
            <div className="columns-6 w-row">
              {
                parecidasNew.map(parecida => {

                  const aptaCredito = parecida.aptaCredito ? "Apta crédito" : "";
                  const estadoOperacion = 
                    parecida.reservada 
                    ? "Reservada" 
                    : parecida.alquilada 
                    ? "Alquilada" 
                    : parecida.vendida 
                    ? "Vendida" 
                    : "";

                  return (
                    <div className="w-col w-col-6 w-col-stack" style={{ margin: 5, width: '46%'}}>
                      <div >
                      <a href="propiedad.html" aria-current="page" className="linkdestaca w-inline-block w--current">
                        <div className="divdestaca">
                        <img src={parecida.fotoPortada} alt="" className="imgdestaca" /></div>
                        <div className="div-block-27">
                        <h3 className="heading-7">{parecida.tipoOperacion}</h3>
                          <h3 className="heading-7">{parecida.tipoPropiedad}</h3>
                          <h3 className="heading-7">{parecida.ciudad}</h3>

                          <div className="text-block-8">{parecida.direccion}</div>
                          <div className="div-block-37">
                            <div className="diviconos"><img src="/images/m2.png" alt="" className="iconocasa" />
                              <div className="text-block-11">{parecida.supCubierta}</div>
                            </div>
                            <div className="diviconos"><img src="/images/dorm.png" alt="" className="iconocasa" />
                              <div className="text-block-11">{parecida.dormitorios}</div>
                            </div>
                            <div className="diviconos"><img src="/images/baños.png" alt="" className="iconocasa" />
                              <div className="text-block-11">{parecida.banos}</div>
                            </div>
                            <div className="diviconos"><img src="/images/cochera.png" alt="" className="iconocasa" />
                              <div className="text-block-11">{parecida.cocheras}</div>
                            </div>
                            
                          </div>
                          
                        </div>
                      </a>
                      {parecida.aptaCredito || parecida.estadoOperacion ?
                        <div className="opcionesventa">
                          <div className="text-block-21">
                            {aptaCredito}
                          </div>
                          <div className="text-block-21 negrita">{parecida.estadoOperacion}</div>
                        </div> : null
                      }
                     </div>
                     
                    </div>
                  ) 
                    
                })
              }
            </div>
          </div>
        </div>
      </div>
            */}



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
            <div className="div-block-19">
              <div className="div-block-22">
                <div className="text-block-6">Hacer click en la magen para galería</div>
              </div>
              <a href="#" className="lightbox-link w-inline-block w-lightbox"><img src="https://d3e54v103j8qbb.cloudfront.net/img/placeholder-thumb.svg" loading="lazy" alt="" className="image-4" />
              </a>

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
                <div className="linkctacto"><img src="images/mobileIcon.png" loading="lazy" alt="Icono móvil" className="image-8" />
                  <a href="#" className="txtctacto">{info.contacto.telefono}</a>
                </div>
                <div className="linkctacto"><img src="images/whatsIcon.png" loading="lazy" alt="Icono Whatsapp" className="image-8" />
                  <a href="#" className="txtctacto">{info.contacto.telefono}</a>
                </div>
                <div className="linkctacto"><img src="images/mailIcon.png" loading="lazy" alt="Icono mail" className="image-8" />
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
