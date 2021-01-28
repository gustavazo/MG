import React, { Component } from 'react';

function urlCreate(propiedad) {
  const direccion = '/propiedades/' + (propiedad.tipoOperacion + "-" + propiedad.tipoPropiedad + propiedad.dormitorios + " dorm-" + (propiedad.direccion + " " +propiedad.ciudad).toLowerCase()).replace(/ /g, "-") + '-' + propiedad.id;
  return direccion;
}

const styles = {
  map: {
    width: '100%',
    height: 500
  },
  popUpContainer: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20
  },
  
  mapCard: {                /* Mapa ----------------------*/
    width: '100%', 
  },
  divDestacaMap: {
    position: 'relative',
    overflow: 'hidden',
    height: 'auto'  
  },
  opciones: {
    position: "absolute",
    left: "0%",
    top: "0%",
    right: "0%",
    bottom: "auto",
    display: ["-webkit-box", "-webkit-flex", "-ms-flexbox", "flex"],
    height: "auto",
    padding: "3px",
    WebkitBoxPack: "justify",
    WebkitJustifyContent: "space-between",
    msFlexPack: "justify",
    justifyContent: "space-between",
    WebkitBoxAlign: "center",
    WebkitAlignItems: "center",
    msFlexAlign: "center",
    alignItems: "center",
    backgroundColor: "rgba(42, 124, 121, 0.86)"  
  },
  txtReservada: {
    display: "inline-block",

  },
  txtApta: {
    float: "right",
  },
  popCloser: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    float: "right",
    backgroundColor: "rgba(150, 220, 229, 0.56)",
    color: "white",
    padding: 5,
    borderRadius: 100,
    zIndex: 1000
  },
  wrapperPop: {
    position:"absolute",
    width: "100%",
    zIndex: 1000
  }
}

export class MapContainer extends Component {
  state = {
    propiedadActual: null
  }

  arrangeMapPropiedades = () => {
    const marcadores = [];

    /**
  * Elements that make up the popup.
  */
    var container = document.getElementById('popup');
    var content = document.getElementById('popup-content');
    var closer = document.getElementById('popup-closer');

    /**
     * Create an overlay to anchor the popup to the map.
     */
    var overlay = new ol.Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    });


    /**
  * Add a click handler to hide the popup.
  * @return {boolean} Don't follow the href.
  */
    closer.onclick = function () {          //closer.onclick
      console.log('CERRATE')
      overlay.setPosition(undefined);
      closer.blur();
      return false;
    };

    //--------------------------------------------------------------------------------

    this.props.propiedades.forEach((elemento) => {
      const { lat, lng } = elemento.geolocation;

      const prueba = elemento.tipoOperacion;

      let marcador = new ol.Feature({
        geometry: new ol.geom.Point(
          ol.proj.fromLonLat([lng, lat])// En dónde se va a ubicar
        ),
        markId: String(elemento.id),

      });

      let srcIcon = "../images/iconoAlq.png"; //Elige el icono de compra  alquiler

      
      
      if(elemento.tipoOperacion === 'venta') {
          srcIcon = "../images/iconoVenta.png";
      }


      // Agregamos icono
      marcador.setStyle(new ol.style.Style({
        image: new ol.style.Icon({
          src: srcIcon,
        })
      }));

      // marcadores debe ser un arreglo
      // Arreglo para que se puedan agregar otros más tarde

      marcadores.push(marcador);// Agregamos el marcador al arreglo
    })

    //---------------------------------------------------------------------------------

    let capa = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: marcadores, // A la capa le ponemos los marcadores
      }),
    });

    const map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({ source: new ol.source.OSM() })
      ],

      overlays: [overlay],
      target: 'map',

      view: new ol.View({
        center: ol.proj.fromLonLat([-60.666668, -32.85001]), // 32.95001
        zoom: 10
      })
    });

    // Y agregamos la capa al mapa
    map.addLayer(capa);

    map.on('singleclick', (evt) => {
      var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
        // Aquí se puede filtrar la feature
        return feature;

      });
      if (feature) {

        console.log(feature.get('markId'));

        var coordinate = evt.coordinate;

        const propiedadActual = this.props.propiedades.filter(propiedad => Number(feature.get('markId')) === propiedad.id)[0];

        this.setState({
          propiedadActual: propiedadActual
        });

        overlay.setPosition(coordinate);
      }
    });
  }

  componentDidUpdate() {
    // this.arrangeMapPropiedades();
  }

  componentDidMount() {
    console.log('COMPONENT MOUNTED');
    this.arrangeMapPropiedades();
    /*map.on('singleclick', function (evt) {
      var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
        // Aquí se puede filtrar la feature
        return feature;

      });
      if (feature) {
        window.location.href = '/propiedades/' + feature.get('markId')    // falta pasarle las coordenadas al mapa de la propiedad
      }
    });*/

    /**
    * Add a click handler to the map to render the popup.
    */
  }

  handlerClickToPropiedad = (propiedad) => () => {
    
    window.location.href = urlCreate(propiedad)
  }

  render() {
    return (
      <div>
        <div id="map" style={styles.map}></div>

        <div id="popup" style={styles.mapCard}>
          <div style={styles.wrapperPop}>
            <a href="#" id="popup-closer" style={styles.popCloser}>X</a>        {/*className="popupCloser"*/}
          </div>
          <div>
            {
              this.state.propiedadActual ? (
                <>
                  <a className="linkdestaca w-inline-block" style={{cursor:'pointer'}} title="Click para ver toda la info" onClick={this.handlerClickToPropiedad(this.state.propiedadActual)}>

                    <div style={styles.divDestacaMap}><img src={this.state.propiedadActual.fotoPortada} alt="" className="imgdestaca" />  

                    </div>
                    <div className="div-block-aa">
                      
                      
                      <h3 className="heading-77">{`${this.state.propiedadActual.tipoOperacion} ${this.state.propiedadActual.tipoPropiedad} ${this.state.propiedadActual.ciudad}`}</h3>
                      <div className="text-block-88">{this.state.propiedadActual.direccion}</div>
                      
                    </div>
                    
                  </a>
                  

                  
                </>

              ) : null
            }


          </div>

        </div>


      </div>
    );
  }
}


export default MapContainer;