const Fecha = () => {
    const fecha = new Date()
    let year = fecha.getFullYear();

    return (
        <div>{year} Derechos reservados</div>
    )
}

export default Fecha;