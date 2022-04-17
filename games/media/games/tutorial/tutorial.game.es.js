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
	situacion2: new undum.SimpleSituation(
        `<h1>El banquete</h1>\
        <br/>— ¡Número 3! – otra vez se deshizo el silencio. Me giré rápidamente. Esta vez una grave y fuerte voz se había acercado bastante al sitio donde yo estaba. ¿Estaban matando o hiriendo a todos los que estábamos ahí?, ¿sería yo el siguiente?
		<br/>Me estoy preparando para lo peor. Ese golpe, que vino seguido de un grito de dolor insoportable y agonizante. Espero, espero, y espero un poco más, pero nunca llega.
		<br/>— ¡Número 4!
		<br/>Había alguien tras la puerta. Tras eso, le dan unos cuantos golpes a la puerta, acto seguido, comienza a abrirse lentamente la misma.
		<br/>Un hombre de considerable tamaño, con un largo cabello y una mirada totalmente perdida. Sus ropajes no parecían caros. Lo desaliñado que llevaba el pelo lo confirmaba.
		<br/>— ¿Es que hoy no quieres comer? – sin pensar, rápidamente asiento. Claro que tenía hambre. Pero además del hambre, tenía otro problema, y es que no recordaba nada desde antes de despertarme.
		<br/>— ¡Ja, ja, ja! – suelta unas carcajadas ese hombre. ¿Se ríe de mí?, ¿de mi situación, la cual ni conozco?
		<br/>Acto seguido, mete sus grandes manos en una bolsa de tela, y saca un trozo de pan. Por la pinta que tenía, no era especialmente apetecible.
		<br/>Me lo tira encima. Podría reaccionar, pero la verdad, no me encontraba en situación de hacerlo. Por lo que ignoro cómo me está tratando, y pienso en hacerle una pregunta.
		<br/>— ¿Puedes decirme qué hago aquí? – da un portazo antes de que yo pudiese acabar la frase.
		<br/>— Bueno, pues nada. No hay manera de averiguar quién soy, dónde estoy y por qué desde aquí dentro – pensó el prisionero. Fue en ese instante, cuando se dio cuenta que la única manera de aclarar todo esto, era saliendo de donde estaba.
		<br/>Comenzó a comer como un animal, lo más rápido que le permitía su dolorida mandíbula. El pan duro tampoco se dejaba comer bien.
		<br/>Nada más terminar de comer, lo primero que intentas es quitarte las cadenas que tienes en los tobillos. Es hierro forjado, por lo que no se va a romper fácilmente, a pesar de que tenían marcas de que alguien las intentase abrir antes por fuerza bruta.`
    ),



	situacion4: new undum.SimpleSituation(
		`<h1>¿Cuánto llevo aquí?</h1>\
		<p>Un sol cegante y abrasante se ciñe sobre mí, acabo cubriéndome los ojos un breve rato hasta que acostumbro mi vista a aquel día. Mientras tanto, comienzo a percibir más cosas, poco a poco, palmeras y mucha arena.</p>\
		<p>Calor. Mucho calor. La lengua seca. No sé ya que es lo que me afecta de verdad. Quizás tenga calor por estar deshidratado. O tengo calor y me estoy deshidratando rápidamente. No lo sé. No paro de pensar, pero no sé lo que pensar con claridad. Calor. Mucho calor, y la lengua seca…</p>\
		<p>Diviso una orilla cercana, con una pequeña colina hacia atrás, justo encima de la cueva, y una especie de bosque tropical a ambos lados.\
		Empiezo a pensar en la idea de explorar un poco, pero ante tanto terreno y con los daños que tengo, \
		tengo que decidir si <a href='situacion4playa'>exploro la playa</a> o <a href='situacion4bosque'>me adentro en alguno de los bosques</a>, \
		evitando la colina, pues mis maltrechas extremidades me impedirían llegar, por ahora, muy lejos.</p>`
	),
	situacion4playa: new undum.SimpleSituation(
		`<h2>El rostro</h2>\
		<p>Comienzo a bajar a la costa, lentamente, pero con buen paso y, mientras observo como se termina de abrir la isla a mis ojos, con el palmeral quedándose atrás, una amplia playa se muestra ante mí.</p>\
		<p>Dando unos pasos por ella, diviso algunos restos inútiles, pero un gran brillo proveniente de uno de ellos me obliga a acercarme.</p>\
		<a href='situacion4espejo'>Coger el objeto brillante.</a>`
	),
	situacion4espejo: new undum.SimpleSituation(
		`<p>Lo cojo con cuidado, pero aún así recibo un pequeño corte en mi mano. Es una especie de espejo, roto por los lados y resquebrajado, pero tengo la oportunidad de conocer algo de mí, mi propio rostro.</p>\
		<p>Me miro, poco a poco. Larga barba. Suciedad. ¿Cuánto llevo aquí? ¿Cómo me llamo? ¿De donde soy? ¿Por qué estoy aquí?</p>\
		<p>La cabeza me arde a preguntas, y me empieza a doler. Tiro ese espejo y regreso a la zona de la cueva.</p>\
		<p><a href='situacion4bosque'>Continuar</a></p>`
	),
	situacion4bosque: new undum.SimpleSituation(
		`<h2>El bosque de la izquierda</h2>\
		<p>Ando hacia la izquierda de la cueva, dejando la arena a mis pies dar paso a un cúmulo de palos, hierbajos y tierra, mientras que el sol se empieza a esconder entre las copas de las palmeras.</p>\
		<p>Me acerco a un cocotero rodeado de cocos ya abiertos y semivacíos. Este está un poco débil, ya que lo agito con las fuerzas que tengo y desprende otro coco.</p>\
		<p>Cojo el coco y con algo de fuerza y daño, consigo abrirlo y beber de él. Debo seguir explorando, y vuelvo sobre mis pasos sin saber muy bien cómo continuar.</p>`
		//<a href='situacion5'>Continuar</a>
	)
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
