# MetaPhoto Album API

MetaPhoto Album API es un servicio backend diseñado para gestionar un álbum de fotos digital. Permite a los usuarios acceder a fotos, álbumes y detalles relacionados, ofreciendo funcionalidades como paginación y filtros avanzados para la búsqueda de fotos.

## Características

- **Fotos**: Obtiene fotografías de la API https://jsonplaceholder.typicode.com/
- **Paginación**: Soporte para paginación de resultados para optimizar la carga y visualización de las fotos.
- **Filtrado Avanzado**: Filtros por título de foto, título de álbum y correo electrónico del usuario.
- **Detalle de Fotos**: Obtener detalles específicos de cada foto, incluyendo metadatos como el título del álbum y el correo electrónico del usuario asociado.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express.js**: Framework de Node.js para aplicaciones web y API.
- **TypeScript**: Superset de JavaScript que añade tipado estático.

## Requisitos Previos

Para ejecutar este proyecto, necesitarás tener instalado Node.js y npm (Node Package Manager).

## Instalación

Sigue estos pasos para instalar el proyecto:

1. Clona el repositorio en tu máquina local:

```bash
git clone git@github.com:eescobedo/photo_technical_test.git MetaPhotoAlbumAPI
cd MetaPhotoAlbumAPI
```

2. Instala las dependencias del proyecto:
```bash
npm install
```

### Configuración
Configura las variables de entorno necesarias para la URL y el puerto que se usará y cualquier otra configuración específica del entorno. Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

```bash
ENVIRONMENT_PORT=Número de puerto para ejecutar el servidor (por defecto 3000)
EXTERNAL_API_URL=URL de la API externa para obtener fotos (por defecto https://jsonplaceholder.typicode.com)
```

### Uso
Para iniciar el servidor y ejecutar la API, utiliza:
``` bash
npm run dev
```

Esto iniciará el servidor en el puerto definido en tus variables de entorno (PORT), por defecto 3000, y la API estará accesible desde http://localhost:3000/api.

### Documentación de la API
La documentación de la API, incluyendo los endpoints disponibles y cómo utilizarlos, se puede encontrar en:

Ejemplos de llamadas usando la API:

- Obtener todas las fotos:
```bash
GET /api/photos
```
- Obtener todas las fotos con el título "natus q":
```bash
/api/photos?title=natus%20q
```
- Obtener todas las fotos del álbum con el título "natus q":
```bash
/api/photos?album.user.email=Sincere@april.biz
```
- Obtener todas las fotos del álbum con el título "quidem" y el título de la foto "repudiandae iusto":
```bash
/api/photos?album.title=quidem&title=repudiandae%20iusto
```
- Agregar paginación a la consulta:
```bash
/api/photos?offset=1&limit=10
```
En donde `offset` se refiere al número de página y `limit` al número de resultados por página.

Por defecto el valor de `limit` es **25** y el valor de `offset` es **0**.

### Licencia
Este proyecto está licenciado bajo la Licencia MIT. 