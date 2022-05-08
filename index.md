# Informe de la actividad
Práctica sobre una aplicación de procesamientos de notas de texto. Donde se permite añadir, modificar, eliminar, listar y leer notas de un usuario concreto. Además,  las notas se almacenarán como ficheros JSON. Todo esto debe ser implementado con un servidor y un cliente haciendo uso de los sockets proporcionados por el módulo net de Node.js.

## Desarrollo
Para el desarrollo de esta práctica se ha contado con un servidor  en **server.ts**, un cliente en **client.ts**, 5 clases por cada procesamiento de nota en 5 ficheros , 5 clases para los comandos del paquete **yargs**.

## Estructura
Para el siguiente ejercicio se prepararon las mismas clases que en la práctica 9 pero con disintas variaciones, para separar las funcionalidades de código y **yargs** por separado.:
* En **add_yargs.ts**, la clase  **Add** con un método que implementa la herramienta **yargs** para crear un type **RequestType** y pasarlo como dato del cliente al servidor y en **add.ts**, la clase  **Add** para poder añadir notas de texto y crear los directorios donde se van a almacenar segundo el usuario que ejecute el comando.
* La clase  **List** con un método que implementa la herramienta **yargs** para poder listar las notas de texto de un usuario.
* La clase  **Read** con un método que implementa la herramienta **yargs** para poder leer una nota en concreto de un usuario.
* La clase  **Remove** con un método que implementa la herramienta **yargs** para poder eliminar una nota en concreto de un usuario.
* La clase  **Modify** con un método que implementa la herramienta **yargs** para poder modificar una nota en concreto de un usuario.