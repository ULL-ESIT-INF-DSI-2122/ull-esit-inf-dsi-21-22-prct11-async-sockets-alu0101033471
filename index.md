# Informe de la actividad
Práctica sobre una aplicación de procesamientos de notas de texto. Donde se permite añadir, modificar, eliminar, listar y leer notas de un usuario concreto. Además,  las notas se almacenarán como ficheros JSON. Todo esto debe ser implementado con un servidor y un cliente haciendo uso de los sockets proporcionados por el módulo net de Node.js.

## Desarrollo
Para el desarrollo de esta práctica se ha contado con un servidor  en **server.ts**, un cliente en **client.ts**, 5 clases por cada procesamiento de nota en 5 ficheros , 5 clases para los comandos del paquete **yargs**.

## Estructura
Para el siguiente ejercicio se prepararon las mismas clases que en la práctica 9 pero con disintas variaciones, para separar las funcionalidades de código y **yargs** por separado.:
* En **add_yargs.ts**, la clase  **Add** con un método que implementa la herramienta **yargs** para crear un type **RequestType** y pasarlo como dato del cliente al servidor y en **add.ts**, la clase  **Add** para poder añadir notas de texto y crear los directorios donde se van a almacenar segundo el usuario que ejecute el comando.
* En **list_yargs.ts**, la clase  **List** con un método que implementa la herramienta **yargs** para crear un type **RequestType** y pasarlo como dato del cliente al servidor y en **list.ts**, la clase  **list** para poder listar las notas de texto de un usuario.
* En **read_yargs.ts**, la clase  **Read** con un método que implementa la herramienta **yargs** para crear un type **RequestType** y pasarlo como dato del cliente al servidor y en **read.ts**, la clase  **Read** para poder leer una nota en concreto de un usuario.
* En **remove_yargs.ts**, la clase  **Remove** con un método que implementa la herramienta **yargs** para crear un type **RequestType** y pasarlo como dato del cliente al servidor y en **remove.ts**, la clase  **Remove** para poder eliminar una nota en concreto de un usuario.
* En **modify_yargs.ts**, la clase  **Modify** con un método que implementa la herramienta **yargs** para crear un type **RequestType** y pasarlo como dato del cliente al servidor y en **modify.ts**, la clase  **Modify** para poder modificar una nota en concreto de un usuario.

Las notas han sido creadas y almacenadas de la misma manera que en la practica 9.

## Código

### Clase Add en add_yargs.ts 
La clase **Add** cuenta con un método **addNote()** que se encarga de usar la herramienta **yargs** con el comando **add** que se pasaría por linea de comandos. Su función es comunicar al **cliente** con el **servidor** pasandole un resultado en **RequestType** para su uso en el **servidor**.

```typescript
  handler(argv) {
        let request: RequestType = {
          type :  'add',
          user: String(argv.user),
          title : String(argv.title),
          body : String(argv.body),
          color :  String(argv.color),
          
        } 
        client.write(JSON.stringify(request, null, 2));
      },
```