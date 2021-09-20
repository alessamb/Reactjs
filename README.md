# Curso React JS - Coderhouse

## Acerca de este proyecto

Saludable es un E-commerce conformado por los distintos desafíos realizados a lo largo del curso. <br>

<figure style="text-align: center">
   <img 
    alt="GIF animado donde se muestran algunas funcionalidades del proyecto"
    with="350" 
    height="350" 
    src="https://media.giphy.com/media/8lM0ZQ8frDITvQxzL8/giphy.gif?cid=790b761166b00bda63d16c2a761c7230d3c439d7f0964814&rid=giphy.gif&ct=g" 
  />
  <figcaption>GIF animado donde se muestran algunas funcionalidades que ofrece</figcaption>
</figure>


<hr>

## Herramientas utilizadas

Para la elaboración de este proyecto se utilizaron las siguientes herramientas:

- React JS (librería principal)
- Bulma CSS (estilos y diseño responsive).
- React Router Dom (navegación).
- Firebase (alojamiento de datos).

<hr>
## Instalación del proyecto

1. Debe clonar el repositorio utlizando _`git clone https://github.com/alessamb/SaludableMujica`_
2. Luego deberá instalar todas las dependencias del proyecto, para eso deberá ejecutar
   _`npm install` (también puede utilizar `npm i`)_
3. Por último, puede ejecutar el proyecto y realizar las pruebas utilizando _`npm start`_

<hr>

## Secciones del proyecto y funcionalidades

### Barra de navegación

- Permite navegar entre las distintas categorías, filtrando los productos correspondientes.
- Muestra cuántos productos se han agregado al carrito de compras.

### Sección principal

- Muestra los productos todos los productos.

### Sección de detalles

- Muestra información extendida del producto buscado o seleccionado.
- Puede seleccionar la cantidad que desea comprar.
- Puede añadirlo al carrito. Será redireccionado al carrito de compras.

### Carrito de compras

- Muestra un resumen de la compra a realizar junto al formulario para finalizar la transacción.
- Puede eliminar un producto en específico o bien vaciar el carrito por completo.
- Todos los datos ingresados en el formulario serán validados previamente a enviar su pedido.
- Una vez finalizada su compra, será notificado sobre el estado de la operación.
  - Si la operación fue exitosa, se le brindará el número de identificación de la transacción realizada.
