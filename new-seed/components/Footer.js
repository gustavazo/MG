import Fecha from '../components/Fecha';

export default props => (
    <div>
        {/*<div id="contacto" className="section-15">
            <div className="div-block-46">
                <p className="paragraph-8">Somos una empresa joven, que responde a las nuevas necesidades del mercado en constante crecimiento de Rosario y su zona.<br />Consúltenos.<br /></p>
            </div>
        </div>
        <div className="div-block-47">
            <div className="w-row">
                <div className="column-6 w-col w-col-3">
                    <div>
                        <div className="contlogo"><img src="/images/logoAlonso.png" srcSet="/images/logoAlonso-p-500.png 500w, images/logoAlonso-p-800.png 800w, images/logoAlonso-p-1080.png 1080w, images/logoAlonso-p-1600.png 1600w, images/logoAlonso.png 2709w" sizes="(max-width: 479px) 100vw, 71px" alt="" className="image-13" /></div>
                        <div className="text-block-15">Shopping Fisherton Plaza A.J. Paz 1065</div>
                        <div className="text-block-15">Edificio: OFFICE-TWO Of.10 - Rosario</div>
                        <div className="text-block-15">(0341) 4868977 | 15 3413418</div>
                    </div>
                    
                    <div className="div-block-50">
                        <a href="/" className="linkfooter">INICIO</a>
                        <a href="/propiedades/lista" className="linkfooter">PROPIEDADES</a>
                        <a href="/servicios" className="linkfooter">SERVICIOS</a>
                        <a href="/sobre-nosotros" className="linkfooter">SOBRE NOSOTROS</a>
                        <a href="/emprendimientos" className="linkfooter">EMPRENDIMIENTOS</a>
                        <a href="/#contacto" className="linkfooter">CONTACTO</a>
                    </div>
                
                    <div>
                    <a href="https://trestsoftware.com" className="linkTresT">Diseño y desarrollo :
                        <div><img src="/images/logo.jpg"  alt="" className="logoTresT" /></div>
    
                    </a> 
                    </div>
                
                </div>
                <div className="column-7 w-col w-col-3">
                    <div className="div-block-48">
                        <div className="contlogo"><img src="/images/logoVaci.png" alt="" className="image-13" /></div>
                        <div className="text-block-15">Av. San Martín 1075 San Lorenzo</div>
                        <div className="text-block-15">(03476) 423113 | 427547</div>
                    </div>
                    <div className="div-block-51">
                        <div className="text-block-15">Walter Alonso<br />Corredor Inmobiliario<br />Matrícula 1298</div>
                        <div className="text-block-15 italic">
                            <Fecha /> 
                        </div>
                    </div>
                </div>
                <div className="w-col w-col-1" />
                <div className="column-8 w-col w-col-5">
                    <div className="w-form">
                    <h2 className="heading-10">Envíenos su consulta y a la brevedad le responderemos</h2>

                        <form
                            className="form-block"
                            action="https://formsubmit.co/info@alonso-inmobiliaria.com"
                            method="POST"
                            name="email-form"
                            data-name="Email Form"
                            className="w-clearfix"
                            id="email-form"
                        >

                            <input type="text" className="w-input" maxLength={256} name="Nombre" data-name="Name" placeholder="Nombre" id="name" required />
                            <input type="email" className="w-input" maxLength={256} name="Email" data-name="Email" placeholder="Su email" id="email" required />
                            <input type="text" className="w-input" maxLength={256} name="Telefono" data-name="Field 2" placeholder="Teléfono" id="field-2" />
                            <textarea id="field" name="Mensaje" maxLength={5000} className="w-input" defaultValue="" />
                            <input type="hidden" name="_replyto" />
                            <input type="submit" value="Enviar" data-wait="Por favor espere..." className="submit-button-3 w-button" />


                            <div className="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </form>
                  
                        
                    </div>
                </div>
            </div>
        </div>*/}

        <div id="footer" className="footer">
            <div className="w-row">
                <div className="column-4 w-col w-col-3">
                    <div>
                        <div className="div-block-16"><img src="/images/localIcon.png" loading="lazy" alt="Icono localización" className="iconfooter" />
                            <div className="txtfooter"></div>
                        </div>
                        <div className="div-block-16"><img src="/images/mobileIcon.png" loading="lazy" alt="Icono móvil" className="iconfooter" />
                            <div className="txtfooter">
                                <a className="txtfooter" href="tel:+5493416203679">
                                    +54 9 3416 20-3679
                                </a>
                                
                            </div>
                        </div>
                        <div className="div-block-16"><img src="/images/whatsIcon.png" loading="lazy" alt="Icono Whatsapp" className="iconfooter" />
                            <div className="txtfooter">
                                <a className="txtfooter" href="https://wa.me/+5493416203679?text=mensaje">
                                    +54 9 3416 20-3679
                                </a>   
                            </div>
                        </div>
                        <div className="div-block-16"><img src="/images/mailIcon.png" loading="lazy" alt="Icono mail" className="iconfooter" />
                            <div className="txtfooter">gm.bienesraices20@hotmail.com</div>
                        </div>
                        <div className="div-block-16">
                            <a href="https://www.facebook.com/GM-Bienes-Ra%C3%ADces-113127583702411">
                                <img src="/images/faceIcon.png" loading="lazy" alt="Icono facebook" className="iconsocfooter" />
                            </a> 
                            <a href="https://instagram.com/gm_propiedades20?igshid=8lbesknih5rj">   
                                <img src="/images/instaIcon.png" loading="lazy" alt="Icono Instagram" className="iconsocfooter" />
                            </a>    
                        </div>
                    </div>
                </div>
                <div className="w-col w-col-2" />
                <div className="w-col w-col-7">
                    <div className="text-block-5">Envíenos su consulta y a la brevedad le responderemos.</div>
                    <div className="form-block w-form">
                        <form
                            action="https://formsubmit.co/gm.bienesraices20@hotmail.com"
                            method="POST" 
                            id="email-form" 
                            name="email-form" 
                            data-name="Email Form" 
                            className="form-2">
                                    <div className="w-row">
                                        <div className="w-col w-col-4"><input type="text" className="txtfield w-input" maxLength={256} name="Nombre" data-name="Name 2" placeholder="Nombre" id="name-2" /></div>
                                        <div className="w-col w-col-4"><input type="email" className="txtfield w-input" maxLength={256} name="Email" data-name="Email 3" placeholder="Email" id="email-3" required /></div>
                                        <div className="w-col w-col-4"><input type="phone" className="txtfield w-input" maxLength={256} name="Teléfono" data-name="Email 2" placeholder="Teléfono" id="email-2" required /></div>
                                    </div><textarea placeholder="Mensaje" maxLength={5000} id="field-2" name="Mensaje" data-name="Field 2" className="txtfield msje w-input" defaultValue={""} />
                                    <div className="div-block-17"><input type="submit" defaultValue="Enviar" data-wait="Please wait..." className="submitbutton w-button" /></div>
                        </form>
                        <div className="w-form-done">
                            <div>Gracias! Su envío ha sido recibido!</div>
                        </div>
                        <div className="w-form-fail">
                            <div>Oops! Algo salió mal al enviar el Mail.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-block-13"><img src="/images/logoBlanco.png" loading="lazy" alt="" className="image-2" />
                <div className="text-block-4">© 2021 | Todos los derechos reservados</div>
                <div className="text-block-4">Lucía Giménez | Matrícula 1845<br />COCIR Rosario</div>
            </div>
        </div>
    </div>
);
