const filtroInicial = {
    tipoOperacion: '',
    ciudad: '',
    tipoPropiedad: '',
    dormitorios: ''
};



const Buscador = (props) => {
    const [filtro, setFiltro] = React.useState(filtroInicial);
    
    
    const onSelectFiltro = (evt) => {
        const nombreFiltro = evt.target.name;
        const valor = evt.target.value;

        setFiltro({
            ...filtro,
            [nombreFiltro]: valor
        });

        
    };

    React.useEffect(() => {
        console.log('filtro cambio-------------------', filtro);

        if (filtro === filtroInicial) {
            props.buscarPropiedades(filtroInicial)()
        }

    }, [filtro]);

    const resetFilter = (evento) => {
        props.reset();
    }

    return (
        <>
            
                
                <div className="div-block-9">
                    <div className="destacado" />
                    <div className="selectfilter">
                        <div className="text-block-2">Búsqueda:

                            {filtro.tipoOperacion === '' ?
                                <div>
                                    Todos 
                                </div> : <div>{filtro.tipoOperacion} </div>
                            }

                            {filtro.ciudad === '' ?
                                <div>
                                    / Todos 
                                </div> : <div>/ {filtro.ciudad} </div>
                            }
                            
                            {filtro.tipoPropiedad === '' ?
                                <div>
                                    / Todos 
                                </div> : <div>/ {filtro.tipoPropiedad} </div>
                            } 

                            {filtro.dormitorios === '' ?
                                <div>
                                    / Todos 
                                </div> : <div>/ {filtro.dormitorios} </div>
                            }  
                                
                        </div>
                    </div>
                    <div className="form-block-3 w-form">
                        <form id="email-form-2" name="email-form-2" data-name="Email Form 2" className="form-3">
                            <div className="div-block-6">
                                <div className="text-block-9">Tipo operación</div>
                                <select id="field-3" name="tipoOperacion" className="selectfield w-select" value={filtro.tipoOperacion} onChange={onSelectFiltro}>
                                    <option value="">Todos</option>
                                    <option value="venta">Venta</option>
                                    <option value="alquiler">Alquiler</option>
                                </select>
                            </div>
                            <div className="div-block-6">
                                <div className="text-block-9">Localidad</div>
                                <select id="field-3" name="ciudad" className="selectfield w-select" value={filtro.ciudad} onChange={onSelectFiltro}>
                                    <option value="">Todos</option>
                                    <option value="rosario">Rosario</option>
                                    <option value="funes">Funes</option>
                                </select>
                            </div>
                            <div className="div-block-6">
                                <div className="text-block-9">Tipo propiedad</div>
                                <select id="field-3" name="tipoPropiedad" className="selectfield w-select" value={filtro.tipoPropiedad} onChange={onSelectFiltro}>
                                    <option value="">Todos</option>
                                    <option value="casa">Casa</option>
                                    <option value="departamento">Departamento</option>
                                    <option value="barrioAbierto">Barrio abierto</option>
                                    <option value="barriocerrado">Barrio cerrado</option>
                                    <option value="terreno">Terreno</option>
                                    <option value="campo">Campo</option>
                                    <option value="galpon">Galpón</option>
                                    <option value="oficina">Oficina</option>
                                    <option value="localComercial">Local comercial</option>
                                    <option value="cochera">Cochera</option>
                                </select>
                            </div>
                            <div className="div-block-6">
                                <div className="text-block-9">Dormitorios</div>
                                <select id="field-3" name="dormitorios" className="selectfield w-select" value={filtro.dormitorios} onChange={onSelectFiltro}>
                                    <option value="">Todos</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4 o más</option>
                                </select>
                            </div>
                            <div className="div-block-7">
                                <input type="submit" onClick={props.buscarPropiedades(filtro)} defaultValue="Buscar" className="button-3 w-button" />
                            </div>
                            <div className="div-block-7">
                                <a href="#" className="button-3 w-button" onClick={resetFilter}>Quitar filtros</a>
                            </div>
                        </form>
                        
                    </div>
                    
                </div>    

            
        </>
    )
}

export default Buscador;