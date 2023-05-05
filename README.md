## Aplicación de gestión de artículos y pedidos

En el directorio del proyecto, puede ejecutar:

### `npm start`

Ejecuta la aplicación en el modo de desarrollo.\
Abra [http://localhost:8001](http://localhost:8001) para verlo en su navegador.

La aplicación está configurada para abrirse en el puerto 8001 en el archivo .env puede ver ese puerto

### `npm test`

👉 Se realizo test unitario con react-testing-library en el archivo App.test, puede ejecutar el comando 'npm test' en ese archivo

### `Funcionalidades`

La aplicación tiene dos vistas principales(articulos y pedidos) para gestionar los 'articulos' y a su ves poder generar 'pedidos'. Entre las funcionalidades principales se detallan a continuación:\

👉 Gestión de Articulos, donde podra crear y editar articulos.\

👉 Gestión de pedidos donde podra crear y editar pedidos.\

👉 También se implemento traducciones en español e inglés\

### `Detalle tecnicos`

👉 Obtener datos en React con custom hook en useFetchList ya que puede utilizarse para cuando desea obtener datos de api de 'articles' y 'order' al hacer peticion GET.\

👉 Custom hook useForm para gestionar el estado en formulario para crear o editar article.\

👉 En custom hook useOrder se utilizo useReducer para gestionar el estado al realizar tareas de un pedido que puede contener un array de articulos.\

👉 Se utilizo concepto de Context para realizar traducción en toda la aplicacion. Se tuvo en cuenta que la hacer el refresh mantiene la traducion ya lo almacena en el localStorage\

👉 Generacion de test factories para utilizarlo en la ejecución de test unitario en archivo App.test.js\

👉 Navegar entre diferentes rutas utilizando modulo de react-router-dom

👉 En carpeta share se puso el componente Table ya que separa logica de negocio y se lo implementa de manera general para que puede ser utilizado en cualquier parte de la aplicación con solo pasar los parametros personalizado que necesita en cada vista de la aplicación.

👉 Sitio web responsivo en escritorio y móvil.

👉 En esta url puede ver la estructura del api que se construyo para utilizar en esta aplicación.\
Abra [https://github.com/nalancay/api_admin/blob/main/db.json](https://github.com/nalancay/api_admin/blob/main/db.json)
