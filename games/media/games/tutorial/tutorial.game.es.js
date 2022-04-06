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
        "<h1>Starting Out with Undum</h1>\
        <img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        <p>Welcome to the Undum tutorial. Undum is a tool for writing\
        hypertext interactive fiction. It has some unique features\
        and a visual design that encourages narrative games.</p>\
        \
        <p>Hypertext interactive fiction is the digital equivalent of the\
        Choose Your Own Adventure (CYOA) books that were popular in the\
        1980s. The story is told in chunks, and you select from a range\
        of options to move it forward. Unlike the book form, however, the\
        digital form gives you far more flexibility to tell rich stories\
        and introduce more interesting game elements.</p>\
        \
        <p class='transient'>Click <a href='hub'>this link to\
        continue...</a></p>"
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
