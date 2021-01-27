'use strict';
const axios = require('axios');

const GEOCODE_API_TOKEN = '9e17cf8c0a3e21';

module.exports = function (Propiedad) {
    Propiedad.observe('before save', (ctx, next) => {
        // me fijo si la propiedad se crea o se edita
        if (ctx.instance) {
            // es una propiedad nueva`

            // armamos direccion final del mapa
            const direccionMapa =
                `${ctx.instance.direccion}, ${ctx.instance.ciudad}, Santa Fe, Argentina`;

            ctx.instance.direccionMap = direccionMapa;

            // agrego lat y long
            const apiUrl = `https://us1.unwiredlabs.com/v2/search.php?token=${GEOCODE_API_TOKEN}&q=${direccionMapa}`;

            axios.get(apiUrl)
                .then(result => {
                    console.log(result);
                    const lat = result.data.address[0].lat;
                    const lng = result.data.address[0].lon;

                    // armo la geolocalizacion
                    const geolocation = {
                        lat: lat,
                        lng: lng
                    };

                    ctx.instance.geolocation = geolocation;

                    next()
                })
                .catch(err => {
                    console.log(err);

                    next(err);
                })
        } else {
            // es una propiedad existente

            next()
        }
    });
};
