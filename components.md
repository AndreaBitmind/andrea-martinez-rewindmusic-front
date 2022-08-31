APP

- Recibe: token del usuario
- Muestra:
  - Full application + name app
- Estado: logueado o no logueado, la página en la que está
  Acción: Setea o Guarda en local storage el token

LOGIN:

- Recibe: si es Form Login
- Muestra: un formulario con campos userName y Password, con un botón y su texto. Y
  un link para ir a Form Register
- Estado: actualizará los datos que va introduciendo el usuario.
  Acción: al clickar el usuario, enviar el formulario y los datos del usuario pasan al store.

REGISTER:

- Recibe: si es Form Register
- Muestra: un formulario con campos userName y Password y un botón con su texto.
- Estado propio: ir actualizando los datos del usuario.
  Acción: al clickar se envía la info formulario de registro

HEADER:

- Recibe: nada
- Muestra: logo, imagen y botones (boton crear, filtro, sign in, sing out)
- Estado propio: app le dice en qué página está
- Acción: clicar filtro, clicar create, o clickar en el boton de logout para desloguearse

LISTA DE CANCIONES

- Recibe: el array con las canciones
  Muestra:
  - Muestra tantas cards de canciones como reciba de la API.
  - Paginación con el nº por página
- Estado: variable según el número de canciones que haya
  Acción del usuario: clicar paginación

CARD CANCIÓN

- Recibe por props: la info de la canción
- Muestra:

  - un título
  - un titulo de banda
  - una foto del album
  - una tag con el instrumento

- Si estás logeado muestra:

  - un título
  - un titulo de banda
  - una foto del album
  - una tag con el instrumento
  - un botón de edit
  - un icono de eliminar

- Estado: nada
  Acción del usuario: al clicar encima de la card, se va a la card detalle

CARD DE DETALLE DE LA CANCIÓN

- Recibe por props: la info de la canción
- Muestra:

  - un título
  - un titulo de banda
  - una foto del album
  - año de la canción
  - el nombre del instrumento
  - reproductor embedded

- Estado: nada
  Acción del usuario: ninguna

FORM EDICIÓN CANCIÓN

- Recibe: info de la canción y qué tipo de formulario es
- Muestra: formulario con inputs:

  - Nombre de la canción
  - Album
  - Year
  - Banda
  - Instrumento
  - URL album picture
  - URL Embedded SoundCloud
  - Botón modificar
  - Botón eliminar

- Estado: nada
  Acción: submit botón modificar
  Click botón eliminar

FORM CREAR CANCIÓN

- Recibe: qué tipo de formulario es
- Muestra: formulario con inputs:
  - Nombre de la canción
  - Album
  - Year
  - Banda
  - Instrumento
  - URL album picture
  - URL Embedded SoundCloud
  - Botón modificar
  - Botón eliminar
- Botón de crear
- Estado: nada
- Acción: submit

BOTÓN

- Recibe: un texto y la acción a realizar (props)
- Muestra: un botón con el texto recibido
- Estado: nada
  Acción del usuario: invoca acción a realizar al ser clickado

PAGINACIÓN
Recibe: El número de página que se está mostrando.
Estado: Ninguno.
Muestra: El número de página recibido dos iconos de flecha.
Acciones del usuario: Cuando el usuario clickea los iconos, uno lo lleva a la página anterior y otro a la posterior.

MODALES
*Recibe: su tipo y texto propio
*Estado:

- Loading…
- Success!
- Fail!
  *Muestra: Un loader
  *Acciones del usuario: Ninguna.

Datos: Array de objetos de canciones
Modificaciones:
Volcar/cargar todas las canciones
Crear canción
Modificar canción
Eliminar canción
