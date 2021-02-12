import React, { Component } from 'react';


const Slider = (props) => {

    function urlCreate(propiedad) {
        const direccion = '/propiedades/' + (propiedad.tipoOperacion + "-" + propiedad.tipoPropiedad + propiedad.dormitorios + " dorm-" + (propiedad.direccion + " " +propiedad.ciudad).toLowerCase()).replace(/ /g, "-") + '-' + propiedad.id;
        return direccion;
    }
    
    
    const handlerClickToPropiedad = (propiedad) => () => {
        window.location.href = urlCreate(propiedad)
    }
    
    return(
              
        
        <div data-delay={5000} data-animation="cross" data-autoplay={1} data-easing="ease-in-out" data-nav-spacing={11} data-duration={700} data-infinite={1} className="slider w-slider">
            <div className="w-slider-mask">

            {/*<div className="slide w-slide">

                </div>*/}

                <div className="slide w-slide">
                    <div className="div-block">
                        <div className="div-block-31">
                            <h1 className="heading">EXPERIENCIA<br />EN OPERACIONES<br />INMOBILIARIAS</h1>
                            <div className="div-block-2" />
                            <h2 className="heading-2">Venta, alquiler y<br />administración de<br />propiedades en Rosario</h2>
                            <a href="#footer" className="button w-button">Contáctenos</a>
                        </div>
                        <div className="div-block-23">
                            <div className="div-block-24"><img src="images/mobileIcon.png" loading="lazy" alt="Icono móvil" className="image-5" />
                                <a href="#" className="link">+54 9 3416 20-3679</a>
                            </div>
                            <div><img src="images/whatsIcon.png" loading="lazy" alt="Icono Whatsapp" className="image-5" />
                                <a href="#" className="link">+54 9 3416 20-3679</a>
                            </div>
                        </div>
                    </div>
                </div>

                {

                    props.propiedades.map(propiedad => (
                        

                        <div className="slide-2 w-slide" style={{ backgroundImage: `url(${propiedad.fotoPortada})` }}>
                            <div className="div-block-3">
                                <div className="div-block-14">
                                    <h2 className="heading-3">{propiedad.tipoOperacion}</h2>
                                    <div className="div-block-4">
                                        <h3 className="heading-4">{propiedad.tipoPropiedad}</h3>
                                        <h3 className="heading-4">{propiedad.dormitorios} dorm</h3>
                                        <h3 className="heading-4">{propiedad.direccion}</h3>
                                        <h3 className="heading-4">{propiedad.ciudad}</h3>
                                    </div>
                                </div>
                                <div>
                                    <a className="button-2 w-button" onClick={handlerClickToPropiedad(propiedad)}>Ver propiedad</a>
                                </div>
                            </div>
                        </div>

                    ))
                }


            </div>
            <div className="left-arrow-2 w-slider-arrow-left">
                <div className="w-icon-slider-left" />
            </div>
            <div className="right-arrow-2 w-slider-arrow-right">
                <div className="w-icon-slider-right" />
            </div>
            <div className="slide-nav-2 w-slider-nav w-shadow" />
        </div>
    )  
} 
export default Slider;   