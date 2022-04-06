// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    situacion1: new undum.SimpleSituation(
        `<h1>Entre rocas</h1>\
        Un escalofrío que recorre tu cuerpo entero. Notas cómo va desde la punta de los dedos de los pies hasta el último pelo de tu cabeza.
		<br/>Es lo único que eres capaz de sentir. Has perdido la noción del tiempo y espacio. No recuerdas absolutamente nada de ti, ni del lugar en el que te encuentras.
		<br/>Comienzas a abrir los ojos por la luz que hay en el sitio donde estás. Es como una pequeña cueva. Tan solo hay un agujero por el que apenas entra luz, protegido con dos grandes barrotes, y una puerta de madera reforzada con hierro. Las paredes, eran de roca. Además, había un montón de líneas en las paredes, como si alguien estuviera tratando de contar algo. 
		<br/>Al mirar la pared, es cuando te das cuenta de que estás en una cueva, o algo parecido.
		<br/>— ¡Número 2! – escuchas un eco a través de la pared. No sé si está muy lejos o no, ya que, debido a las rocas de las paredes, se distorsiona bastante el sonido.
		<br/>De repente, oyes un fuerte sonido, cómo una persona grita de dolor, y de repente, se vuelve a hacer ese infinito silencio. Las únicas dos cosas que puedes escuchar son el mar y tus propios pensamientos.
		<br/>— ¿Qué hago yo en este sitio? – mientras se lleva la mano a la cabeza. Nota una cicatriz de herida por haber recibido un fuerte golpe en la misma.
		<br/>— Tengo que descubrir qué hago aquí – susurraba mientras se intentaba poner de pie para echar un vistazo por el agujero que había en la roca. Llamar a eso ventana era exagerar. Apenas tenía el tamaño de mi cabeza, como para salir por ahí. 
		<br/>Notas que algo tira de ti. Miras hacia abajo, y ves que tienes las piernas encadenadas entre sí. La movilidad que tienes es bastante reducida, pero te permite andar y ponerte de pie. Finalmente, consigues acercarte a la ventana para ver tu entorno.
		<br/>Agua. Mar. Rocas. Agua. Mar. Y más rocas. Algún pájaro volando. Nada más. Era todo lo que podía ver por ese minúsculo agujero.`
    ),
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "situacion1";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
	// Aquí van los grupos para las qualities
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
	// Función que se ejecuta cuando comienza el juego.
    system.setCharacterText("<p>You are starting on an exciting journey.</p>");
};
