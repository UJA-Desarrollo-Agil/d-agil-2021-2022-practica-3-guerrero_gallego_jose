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

var nombre = "Charles"; // Por defecto

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

	situacion6: new undum.SimpleSituation(
		`<h1>¿Cómo lo saben?</h1>\
        <br/>Mientras estoy cogiendo ese palo de madera asqueroso lleno de sangre de a saber quién o qué, prefiero no imaginarlo, que estaba en el bosque tirado en una posición un tanto sospechosa, noto unas voces que me resultan familiares un poco más adentro del bosque.
		<br/>
		<br/>Creo que son de la gente que me tenía encerrado en aquel zulo de roca, me están buscando. Intento esconderme y por fin confirmo mis sospechas de que son ellos, ya que llevan las mismas vestiduras pero de otro color, parece que son como el grupo que está vigilando los alrededores y me están buscando.
		<br/>
		<br/>— ¡Número 4!
		<br/>
		<br/>Cuando me quiero dar cuenta, ya me están mirando y se dan cuenta de que estoy ahí escondido. Así que empiezo a correr como un loco huyendo de ellos e intentando perderlos. Primero decidí introducirme un poco más adentro del bosque dando la vuelta a los guardas, pero ellos lo vieron venir y se han ido hacia el mismo lado, ¡qué raro!
		<br/>
		<br/>Está claro que tengo que despistarlos de alguna forma, el problema es que es muy extraño ya que a todos los sitios a los que intento ir, ellos me siguen prácticamente al segundo y van detrás mía, es como si de alguna forma siempre supieran hacia dónde estoy yendo o hacia donde me muevo, no tiene explicación lógica.
		<br/>
		<ul class='transient'>\
		<br/><a href='situacion7'>Finalmente decido ir hacia la colina que antes había visto, a ver si cogiendo un poco de altura y escondiéndome por las rocas consigo despistarlos.</a>
		</ul>\
		`
	),

	situacion8: new undum.SimpleSituation(
        `<h1>Respuestas</h1>\
        <br/>— Por fin te tengo – Exclamó el guardia. Se acerca y me agarra del hombro.
		<br/>
		<br/><label for="nombreInput">Inserta tu nombre</label>
		<br/><input type="text" id="nombreInput">
		<ul class='transient'>\
        <li><a onclick="guardarNombre()" href='situacion811'>Continuar...</a></li>\
        </ul>\
		<div id=nombreInyectado></div>\
		`	
	),
	situacion811: new undum.SimpleSituation(
        `<br/>Estoy confundido, el nombre me ha despertado recuerdos pero aún no sé qué hacía en esa celda ni cuánto tiempo llevaba allí.
		<ul class='transient'>\
        <li><a href='situacion81'>¿Qué hacía en la celda?</a></li>\
        <li><a href='situacion82'>¿Cuánto tiempo llevo aquí?</a></li>\
        <li><a href='situacion83'>¡Tienes los cordones desatados!</a></li>\
        </ul>\
		<br/>`
	),
	situacion81: new undum.SimpleSituation(
        `<br/>¿Qué hacía en la celda?
		<br/>— Robaste en los aposentos de la princesa innumeras joyas.
		<ul class='transient'>\
        <li><a href='situacion82'>¿Cuánto tiempo llevo aquí?</a></li>\
        <li><a href='situacion83'>¡Tienes los cordones desatados!</a></li>\
        </ul>\
		<br/>— 
		`	
	),
	situacion82: new undum.SimpleSituation(
        `<br/>¿Cuánto tiempo llevo aquí?
		<br/>— Hace 10 años que llevas aquí.
		<ul class='transient'>\
        <li><a href='situacion81'>¿Qué hacía en la celda?</a></li>\
        <li><a href='situacion83'>¡Tienes los cordones desatados!</a></li>\
        </ul>\
		<br/>— 
		`	
	),
	situacion83: new undum.SimpleSituation(
        `<br/>¡Tienes los cordones desatados!
		<br/>— Ahora es mi momento para huir. Mientras me giro para salir por patas noto como una maza me golpea en la nuca. Caigo redondo al suelo y apenas puedo mantener los ojos abiertos.
		<ul class='transient'>\
        <li><a href='situacion9'>Continuar...</a></li>\
        </ul>\
		`	
	),
	situacion9: new undum.SimpleSituation(
        `<h1>Déjà vu</h1>\
        <br/>Consigo abrir un ojo mientras escucho el sonido de las olas romper sin cesar, parece que he vuelto a la celda dónde estaba.
		<br/>Mientras se acerca una sombra consigo deducir por sus vestimentas que es un médico. Me empieza a susurrar pero no consigo entender lo que me dice, me aplica un líquido dónde el guardia me había golpeado previamente.
		<br/>Se me comienza a cerrar el ojo que tenía medio abierto y a penas puedo mantener la conciencia desde que me aplicó ese líquido. Conforme me duermo siento un…
		<ul class='transient'>\
        <li><a href='situacion1'>Dormirse...</a></li>\
        </ul>\
		`
    )

};


function guardarNombre() {

	if(document.getElementById("nombreInput").value !== "") this.nombre = document.getElementById("nombreInput").value;

	const para = document.createElement("p");
	para.innerHTML = "<br/>— " + this.nombre + " es tu nombre, sufres de amnesia y cada vez olvidas más rápido todo. Siempre haces el mismo camino a la hora de escaparte, por ello, ha sido tan fácil encontrarte.";
	document.getElementById("nombreInyectado").appendChild(para);
}

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
