# ReacFlix
Ejemplos Prácticos de __Programación Reactiva__ en Ingenieria de Software UNC

  La idea principal es familiarizarnos con los conceptos de programacion reactiva, empleando el patron de arquitectura Model-View-ViewModel( MVVM ) y el patron de Diseño Publisher-Subscriber. Al final del dia se desea hacer una implementacion simplificada del TOP10 de Series de Netflix&#174; trabajando sobre el concepto de MicroFrontend.

![Flyer ReacFlix](https://raw.githubusercontent.com/danilopaez/ReacFlix/master/docs/flyer.png "Flyer ReacFlix")
  
## Entrando en Calor con [VUE]( https://vuejs.org/ )
Para el primer ejemplo donde nos conectamos a Binance( Exchange de Criptomonedas) mediante WebSocket Seguro y luego renderizamos reactivamente la vista empleando VueJS tienes que pedir la rama vue asi:

```
git checkout vue
```

## Primer Practico de implementacion MVVM

En este super simple codigo, la idea es revisar como se distribuyen los elementos entre la View, el Model y el ViewModel analizando el desacoplamiento de cada componente.

### Prerequisitos

A partir de ahora vamos a trabajar con Meteor como Framework Reactivo en Cliente y Servidor. El ejemplo del cliente lo vamos a hacer con Blaze por su simpleza didáctica y el backend con Meteor que corre por sobre NodeJS. Usaremos la implementación del Publisher-Subscriber del Framework, y exploraremos cómo implementa la reactividad mediante [ Tracker ](https://docs.meteor.com/api/tracker.html)

Para ello necesitamos instalar Meteor desde aqui: (https://www.meteor.com/developers/install)

Luego instalamos las Dependencias del Proyecto en NPM(gestor de paquetes para NodeJS) haciendo en la consola o terminal:

```
meteor npm install
```

Finalmente, podemos levantar el servidor en el puerto 3000 de la siguiente forma:

```
meteor
```

Una vez que el servidor este disponible nos deberia aparecer esto

> => App running at: http://localhost:3000/

Recien ahi podemos visitarlo con nuestro navegador favorito.


Para el primer ejemplo nos debemos mover al la rama t1(temporada 1)

```
git checkout t1
```

Luego vamos profundizando el concepto de Computation, Invalidate y Autorun que permite la reactividad en Meteor. Para ello nos movemos a la rama t2

```
git checkout t2
```

Hasta aqui, solo tenemos reactividad en el Cliente. A partir de ahora vamos a utilizar el Patron Pub-Sub y nos vamos a conectar a la Base de Datos que contienen las dosis de vacunas disponibles. Desde cualquier Cliente de MongoDB, nos conectamos al host: localhost:3001 y buscamos la Colleccion vaccines. Alli hacemos pruebas modificando Documentos, insertando y borrandolos con la intención de ver lo que sucede en la Vista. Recien ahi cerramos todo el ciclo. Desde el clientes con una Subscripcion hasta el Servidor con una Publicacion y retornando al Cliente. Para ello entramos en la rama covid:

```
git checkout covid
```

Por ultimos vamos a implementar finalmente el MicroComponente Frontend que nos muestra el Top10(top 6 en realidad para el ejemplo) de NetFlix de manera reactiva. Lo que se puede apreciar en este ejemplo es como trabaja la vista. Se definen 2 interacciones de los usuarios, una que es cuando un usuario hace click en una serie se actualiza el valor de las vistas y otra es en el boton de reseteo de las vistas, que se muestra cuando alguno de ellos ha llegado a 10.

```
git checkout t3
```

Reactive Programming Slides
_____
  * [Presentacion.key](https://github.com/danilopaez/ReacFlix/blob/master/docs/Presentacion.key?raw=true)
  * [Presentacion.pdf](https://github.com/danilopaez/ReacFlix/blob/master/docs/Presentacion.pdf?raw=true)
  * [Presentacion.pptx](https://github.com/danilopaez/ReacFlix/blob/master/docs/Presentacion.pptx?raw=true)

Todos estos ejemplos, son ejemplos didácticos. No los use en produccion. Para empezar se deberia sacar el paquere INSECURE y se deberian hacer varios ajustes menores para ponerlo en produccion.

Disclaimer: Todas las Marcas Registradas de las empresas, productos y servicios son propiedad exclusiva de dichas marcas.









