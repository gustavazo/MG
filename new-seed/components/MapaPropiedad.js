import React, { Component } from 'react';

const styles = {
    map: {
        width: '100%',
        height: 300
    }
}



export class MapaPropiedad extends Component {
    componentDidMount() {
        const { lat, lng } = this.props.coordenadas;
        //console.log(this.coordenadas);

        let marcador = new ol.Feature({
            geometry: new ol.geom.Point(
                ol.proj.fromLonLat([lng, lat])// En dónde se va a ubicar
            ),
            //markId: String(this.props.propiedades[0].id)
        });

        let srcIcon = "../images/iconoAlq.png"; //Elige el icono de compra  alquiler
        

        if(this.props.operacion === 'venta') {
            srcIcon = "../images/iconoVenta.png";
        }

        //console.log(this.props.tipoOperacion);

        // Agregamos icono
        marcador.setStyle(new ol.style.Style({
            image: new ol.style.Icon({
                src: srcIcon,
            })
        }));

        // marcadores debe ser un arreglo
        const marcadores = []; // Arreglo para que se puedan agregar otros más tarde

        marcadores.push(marcador);// Agregamos el marcador al arreglo

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
            view: new ol.View({
                center: ol.proj.fromLonLat([lng, lat]), // 32.95001
                zoom: 15
            })
        });

        // Y agregamos la capa al mapa
        map.addLayer(capa);
    }
    render() {
        return (
            <div>
                <div id="map" style={styles.map}></div>
            </div>
        );
    }
}

export default MapaPropiedad;
