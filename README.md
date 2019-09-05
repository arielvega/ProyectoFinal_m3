# Proyecto Final
Proyecto Final del Modulo 3 de la Maestria en Direccion Estrategica en Ingenieria de Software, en donde se muestra la implementación de todos los niveles de pruebas en el diagrama piramidal.

## Requerimientos
Para poder ejecutar el proyecto se necesita ejecutarlo bajo plataforma Linux y tener instalado NodeJS

### NodeJS
Puede descargarlo en: https://nodejs.org/es/

### Instale las dependencias del proyecto

Ejecute el siguiente comando:

  `npm install`

## Inicio rápido
Para ejecutar todas las pruebas (Pruebas Unitarias, Pruebas de Comportamiento tanto a la API y a la UI) debe ejecutar en la carpeta raiz del proyecto el siguiente comando:

  `npm run test `

Luego de la ejecución se genera los reportes en formato HTML en la carpeta report y se muestra en el navegador.

## Modulos desarrollados
A continuacion se detalla las instrucciones para ejecutar los servicios y las pruebas;
 todas las pruebas generan un reporte en formato HTML para que sea mas intuitiva su comprensión,
  dichos reportes se generan en la carpeta *report*.

### Servidores de Servicios Web y de Paginas Web
Para ejecutar los servicios debe ejecuta en la carpeta raiz del proyecto el siguiente comando:

  `npm run servers `

Una vez ejecutados los servidores para probar el funcionamiento debe ingresar a http://localhost:8080/billetera/ingreso.html

Si desea detener los servicios debe ejecuta en la carpeta raiz del proyecto el siguiente comando:

  `npm run servers-stop `

### Pruebas Unitarias
Debe ejecutar en la carpeta raiz del proyecto:

  `npm run test:unittest `
  
### Pruebas de Comportamiento a la API
Ejecutar en la carpeta raiz del proyecto:

  `npm run test:api `
  
### Pruebas Comportamiento a la Interfaz de Usuario
Ejecutar en la carpeta raiz del proyecto:

  `npm run test:ui `
  