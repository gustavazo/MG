import Link from "next/link"; 


export default props => (
    <div>
        {/*<div data-collapse="medium" data-animation="default" data-duration={400} className="navbar-3 w-nav">
            <a href="#" className="brand w-nav-brand"><img src="/images/logoGm.png" alt="" className="image-9" /></a>
            <nav role="navigation" className="navmenu3 w-nav-menu">
                <a href="/" aria-current="page" className="navlink3 w-nav-link w--current">inicio</a>
                <a href="/propiedades/lista" className="navlink3 w-nav-link">Propiedades</a>
                <a href="/servicios" className="navlink3 w-nav-link">servicios</a>
                <a href="/sobre-nosotros" className="navlink3 w-nav-link">Sobre nosotros</a>
                <a href="/emprendimientos" className="navlink3 w-nav-link">Emprendimientos</a>
                <a href="/#contacto" className="navlink3 ctact w-nav-link">Contacto</a>
                <a href="https://www.facebook.com/inmobiliariaalonso" target="_blank" className="link-block-2 w-inline-block"><img src="/images/social-02.svg" alt="" className="image-11" /></a></nav>
            <div className="w-nav-button">
                <div className="w-icon-nav-menu" />
            </div>
    </div>*/}

        <div data-collapse="medium" data-animation="default" data-duration={400} role="banner" className="navbar-2 w-nav">
            <a href="#" className="brand-2 w-nav-brand"><img src="/images/logo.png" loading="lazy" sizes="(max-width: 479px) 84vw, 103px" srcSet="/images/logo-p-500.png 500w, images/logo.png 705w" alt="Logo" className="image" /></a>
            <nav role="navigation" className="nav-menu-2 w-nav-menu">
                <Link href="/">
                    <div className="nav-link w-nav-link">Home</div>
                </Link> 
                <Link href="">    
                    <div className="nav-link w-nav-link">emprendimientos</div>
                </Link>
                <Link href="sobre-nosotros">    
                    <div className="nav-link w-nav-link">sobre nosotros</div>
                </Link>
                <Link href="#footer">  
                    <div className="nav-link w-nav-link">contacto</div>
                </Link>   
                <div className="div-block-18">
                    <a href="#" className="link-block w-inline-block"><img src="/images/faceIcon.png" loading="lazy" alt="Icono Instagram" className="imgsocial" /></a>
                    <a href="#" className="w-inline-block"><img src="/images/instaIcon.png" loading="lazy" alt="Icono Instagram" className="imgsocial" /></a>
                </div>
            </nav>
            <div className="menu-button w-nav-button">
                <div className="icon-3 w-icon-nav-menu" />
            </div>
        </div>

    </div>
);