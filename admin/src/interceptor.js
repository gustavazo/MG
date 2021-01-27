import cfg from './conf';

const interceptor = requestHandler => (type, resource, params) => {
    console.log(type, resource)
   
    if (resource === 'propiedades') {
  
      if (type === 'UPDATE') {
        console.log('UP!', params.data);
        if (params.data.picture) {
          params.data.picture = `${cfg.containerURL}/download/${params.data.picture.title}`;
          console.log('READY MEN');
        }

        // if (params.data.)
      }
  
      if (type === 'CREATE') {
        console.log('CRE!', params.data);

        if (params.data.fotoPortada) {
          params.data.fotoPortada = `${cfg.CONTAINER_URL}/download/${params.data.fotoPortada.title}`;
          console.log('READY');
        }

        if (params.data.fotos) {
            const newArray = params.data.fotos.map(foto => {
                return `${cfg.CONTAINER_URL}/download/${foto.title}`
            });

            params.data.fotos = newArray;
          }
      }
  
      // if (params.data.picture) {
      //   params.data.picture = `${cfg.containerURL}/download/${params.data.picture.title}`;
      //   console.log('READY');
      // }
    }

    if (resource === 'contactos') {
      if (type === 'CREATE') {
        console.log(params.data);
        if (params.data.foto) {
          params.data.foto = `${cfg.CONTAINER_URL}/download/${params.data.foto.title}`;
        }
      }
    }
  
    return requestHandler(type, resource, params);
  };

  export default interceptor;