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
		<img src='media/img/island.png' class='float_right'>\
        Un escalofrío que recorre tu cuerpo entero. Notas cómo va desde la punta de los dedos de los pies hasta el último pelo de tu cabeza.
		<br/>Es lo único que eres capaz de sentir. Has perdido la noción del tiempo y espacio. No recuerdas absolutamente nada de ti, ni del lugar en el que te encuentras.
		<br/>Comienzas a abrir los ojos por la luz que hay en el sitio donde estás. Es como una pequeña cueva. Tan solo hay un agujero por el que apenas entra luz, protegido con dos grandes barrotes, y una puerta de madera reforzada con hierro. Las paredes, eran de roca. Además, había un montón de líneas en las paredes, como si alguien estuviera tratando de contar algo. 
		<br/>Al mirar la pared, es cuando te das cuenta de que estás en una cueva, o algo parecido.
		<br/>— ¡Número 2! – escuchas un eco a través de la pared. No sé si está muy lejos o no, ya que, debido a las rocas de las paredes, se distorsiona bastante el sonido.
		<br/>De repente, oyes un fuerte sonido, cómo una persona grita de dolor, y de repente, se vuelve a hacer ese infinito silencio. Las únicas dos cosas que puedes escuchar son el mar y tus propios pensamientos.
		<br/>— ¿Qué hago yo en este sitio? – mientras se lleva la mano a la cabeza. Nota una cicatriz de herida por haber recibido un fuerte golpe en la misma.
		<br/>— Tengo que descubrir qué hago aquí – susurraba mientras se intentaba poner de pie para echar un vistazo por el agujero que había en la roca. Llamar a eso ventana era exagerar. Apenas tenía el tamaño de mi cabeza, como para salir por ahí. 
		<br/>Notas que algo tira de ti. Miras hacia abajo, y ves que tienes las piernas encadenadas entre sí. La movilidad que tienes es bastante reducida, pero te permite andar y ponerte de pie. Finalmente, consigues acercarte a la ventana para ver tu entorno.
		<br/>Agua. Mar. Rocas. Agua. Mar. Y más rocas. Algún pájaro volando. Nada más. Era todo lo que podía ver por ese minúsculo agujero.
		<p class='transient'>Pulsa <a href='situacion2'>aquí para continuar...</a></p>`, {
			enter: function(character, system, from) {
				document.getElementById('audioOlas').pause();
                system.setCharacterText(
                    "<p align='center'>Estás bastante desorientado.</p>"
                );
                system.setQuality("hora", 0);
            }
		}
	),
	situacion2: new undum.SimpleSituation(
		`<h1>El banquete</h1>\
		<img src='media/img/bolsa.jpg' class='float_right imagen-situacion'>\
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
		<br/>Nada más terminar de comer, lo primero que intentas es quitarte las cadenas que tienes en los tobillos. Es hierro forjado, por lo que no se va a romper fácilmente, a pesar de que tenían marcas de que alguien las intentase abrir antes por fuerza bruta.
		<p class='transient'>Pulsa <a href='situacion3'>aquí para continuar...</a></p>`, {
			enter: function(character, system, from) {
                system.setQuality("hora", 1);
            }
		}
	),
	situacion3: new undum.SimpleSituation(
		`<h1>Respira hondo</h1>\
		<img src='media/img/barras-hierro.jpg' class='float_left imagen-situacion'>\
		<br/>— Tengo que intentar abrirlas como sea, porque no voy a poder romperlas – pensó él.
		<br/>Mirando por el suelo, no veía nada. Lo único que había era roca. Roca en las paredes, roca en el suelo, roca en el techo. Yo estaba dentro de una gran roca.
		<br/>Es ahí cuando se empieza a marear un poco, y se acerca a la ventana para intentar tomar un poco de aire fresco. Al acercarse a ese pequeño agujero y tomar una gran cantidad de aire fresco, ve que hay un pequeño y fino trozo de hierro encajado entre los recovecos naturales de la propia piedra.
		<br/>— ¿Servirá esto para algo? – conforme termina de decirlo, se da cuenta de que puede intentar forzar la cerradura que mantiene unida a la cadena.
		<br/>Clac. La cerradura de la cadena cede, y se sueltan las cadenas. Había resuelto un problema, pero tenía otro más grande literalmente. La puerta. ¿Cómo podía salir? Obviamente ese agujero no era una opción.
		<br/>Cuando me acerqué a ver la puerta, me llevé una gran sorpresa. ¡No había ninguna cerradura ni algo que la mantenga cerrada! La empujé un poco para abrir, y no opuso ningún tipo de resistencia.
		<br/>Nada más salir, vi cómo se estructuraba el lugar donde me encontraba. Era parecido a lo que imaginaba. Un pequeño pasillo, con unas cuantas habitaciones que debían ser similares a las mías.
		<br/>Para el futuro: Opcion A: escapar, Opcion B: no escapar. El resultado de ambas es el mismo.
		<br/>Como el pasillo no era largo, veía arena y una gran cantidad de luz proveniente de la entrada.  Tras mirar bien alrededor, veo que no hay nadie viendo, y salgo con la intención de escapar de allí, y averiguar más sobre mí.
		<br/><p class='transient'>Pulsa <a href='situacion4'>aquí para continuar...</a></p>`, {
			enter: function(character, system, from) {
				system.setQuality("trozohierro", 1);
                system.setQuality("hora", 2);
            }
		}
	),
	situacion4: new undum.SimpleSituation(
		`<h1>¿Cuánto llevo aquí?</h1>\
		<img src='media/img/sol.jpg' class='float_right imagen-situacion'>\
		<p>Un sol cegante y abrasante se ciñe sobre mí, acabo cubriéndome los ojos un breve rato hasta que acostumbro mi vista a aquel día. Mientras tanto, comienzo a percibir más cosas, poco a poco, palmeras y mucha arena.</p>\
		<p>Calor. Mucho calor. La lengua seca. No sé ya que es lo que me afecta de verdad. Quizás tenga calor por estar deshidratado. O tengo calor y me estoy deshidratando rápidamente. No lo sé. No paro de pensar, pero no sé lo que pensar con claridad. Calor. Mucho calor, y la lengua seca…</p>\
		<p>Diviso una orilla cercana, con una pequeña colina hacia atrás, justo encima de la cueva, y una especie de bosque tropical a ambos lados.\
		Empiezo a pensar en la idea de explorar un poco, pero ante tanto terreno y con los daños que tengo, \
		tengo que decidir si <a class='transient' href='situacion4playa'>exploro la playa</a> o <a href='situacion4bosque'>me adentro en alguno de los bosques</a>, \
		evitando la colina, pues mis maltrechas extremidades me impedirían llegar, por ahora, muy lejos.</p>`, {
			enter: function(character, system, from) {
                system.setQuality("hora", 3);
            }
		}
	),
	situacion4playa: new undum.SimpleSituation(
		`<h2>El rostro</h2>\
		<img src='media/img/playa.png' class='float_left imagen-situacion'>\
		<p>Comienzo a bajar a la costa, lentamente, pero con buen paso y, mientras observo como se termina de abrir la isla a mis ojos, con el palmeral quedándose atrás, una amplia playa se muestra ante mí.</p>\
		<p>Dando unos pasos por ella, diviso algunos restos inútiles, pero un gran brillo proveniente de uno de ellos me obliga a acercarme.</p>\
		<p><a href='situacion4espejo'>Coger el objeto brillante.</a></p>`, {
			enter: function(character, system, from) {
                document.getElementById('audioOlas').play();
            }
		}
	),
	situacion4espejo: new undum.SimpleSituation(
		`<p>Lo cojo con cuidado, pero aún así recibo un pequeño corte en mi mano. Es una especie de espejo, roto por los lados y resquebrajado, pero tengo la oportunidad de conocer algo de mí, mi propio rostro.</p>\
		<p>Me miro, poco a poco. Larga barba. Suciedad. ¿Cuánto llevo aquí? ¿Cómo me llamo? ¿De donde soy? ¿Por qué estoy aquí?</p>\
		<p>La cabeza me arde a preguntas, y me empieza a doler. Tiro ese espejo y regreso a la zona de la cueva.</p>
		<p><a href='./salirplaya'>Volver</a></p>`,
		{
			actions: {
				salirplaya: function (character, system, to) {
					document.getElementById('audioOlas').pause();
					if (!s4visitadoUno) {
						s4visitadoUno = true
						system.write("<p><a href='situacion4bosque'>Continuar al bosque</a></p>");
					} else {
						system.write("<p><a href='situacion5'>Continuar</a></p>");
					}
				}
			}
		}
	),
	situacion4bosque: new undum.SimpleSituation(
		`<h2>El bosque de la izquierda</h2>\
		<img src='media/img/cocotero.jpg' class='float_left imagen-situacion'>\
		<p>Ando hacia la izquierda de la cueva, dejando la arena a mis pies dar paso a un cúmulo de palos, hierbajos y tierra, mientras que el sol se empieza a esconder entre las copas de las palmeras.</p>\
		<p>Me acerco a un cocotero rodeado de cocos ya abiertos y semivacíos. Este está un poco débil, ya que lo agito con las fuerzas que tengo y desprende otro coco.</p>\
		<p>Cojo el coco y con algo de fuerza y daño, consigo abrirlo y beber de él. Debo seguir explorando, y vuelvo sobre mis pasos sin saber muy bien cómo continuar.</p>\
		<p><a href='./salirbosque'>Volver</a></p>`,
		{
			actions: {
				salirbosque: function (character, system, to) {
					if (!s4visitadoUno) {
						s4visitadoUno = true
						system.write("<p><a href='situacion4playa'>Continuar a la playa</a></p>");
					} else {
						system.write("<p><a href='situacion5'>Continuar</a></p>");
					}
				}
			}
		}
	),
	situacion5: new undum.SimpleSituation(
		`<h1>El bosque de la derecha</h1>\
		<img src='media/img/cueva.jpg' class='float_right imagen-situacion'>\
		<p>Sigo pensando para mis adentros, ahora que la boca ya me sabe a algo más que al ambiente isleño que tengo presente, en seguir una ruta para ver si encuentro algo de civilización, o algo que responda a unas preguntas que ni siquiera tengo yo claras.Mi mente recuerda que, a la derecha de la entrada de la cueva, había otro bosque que parecía subir hacia la colina que había tras la cueva. Pienso que es una buena idea, pues me ofrece más sombra que el otro bosque con cocoteros, y siendo más frondosa quizás me ofrezca la oportunidad de esconderme y escapar de aquellos que me tenían prisionero en la cueva. Pero, ¿dónde están?</p>\
		<p>Mi mente recuerda que, a la derecha de la entrada de la cueva, había otro bosque que parecía subir hacia la colina que había tras la cueva. Pienso que es una buena idea, pues me ofrece más sombra que el otro bosque con cocoteros, y siendo más frondosa quizás me ofrezca la oportunidad de esconderme y escapar de aquellos que me tenían prisionero en la cueva. Pero, ¿dónde están?</p>\
		<p>Finalmente, decido a ponerme en marcha con mis cansados y doloridos pies hacia dicho bosque, dejando atrás la caliente zona de arena de playa y acostumbrando rápidamente mi cuerpo y vista a andar sobre tierra algo húmeda, cosa que agradezco.</p>\
		<p>El terreno me eleva lentamente sobre la isla, es una ascensión cómoda, más observando mi  mala condición. Y la cabeza me sigue doliendo, y el cuerpo lleno de magulladuras. ¿Qué me ha pasado? ¿Cuánto llevo aquí? ¿Quién soy?</p>\
		<p>Al menos, pienso yo, con lo frondoso de este bosque puedo ocultarme mejor. Aunque eso ya lo había pensado hace unos momentos. Sigue habiendo cocoteros, y otras plantas que no identifico pero que parecen, en casos extremos, comestibles. Bueno, aunque quizás ni lo recuerde.</p>\
		<p>Mientras mi cabeza divaga, sigo andando y observando el bosque, perdido entre sus pocos claros. A lo que acabo deteniéndome pues observo, a mis pies, un palo de madera con algo de sangre.</p>\
		<p><a class='transient' href='situacion6a'>Continuar</a></p>`, {
			enter: function(character, system, from) {
                system.setQuality("hora", 4);
            }
		}
	),
	situacion6a: new undum.SimpleSituation(
		`<h1>¿Cómo lo saben?</h1>\
		<img src='media/img/palo-sangre.jpg' class='float_right imagen-situacion'>\
        <br/>Mientras estoy cogiendo ese palo de madera asqueroso lleno de sangre de a saber quién o qué, prefiero no imaginarlo, que estaba en el bosque tirado en una posición un tanto sospechosa, noto unas voces que me resultan familiares un poco más adentro del bosque.
		<br/>
		<br/>Creo que son de la gente que me tenía encerrado en aquel zulo de roca, me están buscando. Intento esconderme y por fin confirmo mis sospechas de que son ellos, ya que llevan las mismas vestiduras pero de otro color, parece que son como el grupo que está vigilando los alrededores y me están buscando.
		<br/>
		<br/>— ¡Número 4!
		<br/>
		<ul>\
		<br/>Cuando me quiero dar cuenta, ya me están mirando y se dan cuenta de que estoy ahí escondido.<a href='situacion6b'> Así que empiezo a correr como un loco huyendo de ellos e intentando perderlos.</a>
		`, {
			enter: function(character, system, from) {
				system.setQuality("hora", 5);
				system.setQuality("palo", 1);
			}
	}
		),


		situacion6b: new undum.SimpleSituation(
			`<h1>¡Corre!</h1>\
			<img src='media/img/colina.png' class='float_left imagen-situacion'>\
		<br/>Primero decidí introducirme un poco más adentro del bosque dando la vuelta a los guardas, pero ellos lo vieron venir y se han ido hacia el mismo lado, qué raro...
		<br/>
		<br/>Está claro que tengo que despistarlos de alguna forma, el problema es que es muy extraño ya que a todos los sitios a los que intento ir, ellos me siguen prácticamente al segundo y van detrás mía, es como si de alguna forma siempre supieran hacia dónde estoy yendo o hacia donde me muevo, no tiene explicación lógica.
		<br/>
		<ul>\
		<br/><a href='situacion7a'>Finalmente decido ir hacia la colina que antes había visto, a ver si cogiendo un poco de altura y escondiéndome por las rocas consigo despistarlos.</a>
		`, {
			enter: function (character, system, from) {
				system.setQuality("hora", 5);
			}
		}
		),

	situacion7a: new undum.SimpleSituation(
		`<h1>Hora de ser ingenioso</h1>\
		<img src='media/img/dos-caminos.jpg' class='float_right imagen-situacion'>\
        <br/>Es increíble, tome el camino que tome siempre me siguen y siempre adivinan hacia qué lado voy y qué caminos cojo exactamente sin dudarlo, no me entra en la cabeza.
		<br/>
		<br/>— ¡Quieto ahí número 4! – Exclamó uno de los guardias mientras corrían hacia mí.
		<br/>
		<br/>— ¿Qué pasa? ¿Por qué me seguís, qué queréis de mí? – Grité mientras corría aún más, intentando zafarme de ellos. Pero resultaba inútil.
		<br/>
		<ul>\
		<br/>Al llegar a la colina parece que los he despistado. Antes de entrar a una cueva que hay ahí veo que hay dos caminos,<a href='situacion7dentro'> uno para entrar a ella </a> y otro que va <a href='situacion7izq'>hacia la izquierda de la entrada </a> , debo decidir dónde ir.
		
		
		
		`, {
			enter: function(character, system, from) {
				system.setQuality("hora", 6);
				system.setQuality("palo", 0)
            }
		}
	),

	situacion7dentro: new undum.SimpleSituation(
		`<h1>Vamos hacia dentro</h1>\
		<img src='media/img/cueva-oscura.jpg' class='float_right imagen-situacion'>\
		<br/>Dejo el palo asqueroso que había encontrado antes al principio del camino hacia la izquierda para que piensen que he ido por ahí y se me ha caído, mientras que yo realmente entraré a la cueva a refugiarme y así los despistaré.
		<br/>
		<br/>Me adentro a la cueva en busca de algo que me dé esperanzas de cómo salir de esta pesadilla o aunque sea buscar algo donde refugiarme de ellos. Esta cueva parece segura, no hay peligro aparente, aunque la verdad que está un poco oscura, como es normal.
		<br/>
		<br/>Pasan un par de minutos y veo como por detrás mía se halla una luz. No puede ser, son ellos otra vez, ¿Cómo demonios me han encontrado?
		<br/>
		<ul class='transient'>\
		<br/><a href='situacion8'>Siguiente</a>
		</ul>\
		`, {
		enter: function (character, system, from) {
			system.setQuality("hora", 6);
		}
	}
	),

	situacion7izq: new undum.SimpleSituation(
		`<h1>Vaya, no hay salida</h1>\
        <br/>Decido ir hacia la izquierda de la cueva en busca de más sitios donde refugiarme.
		<br/>
		<ul>\
		<br/>El problema viene cuando al girar una roca que había en el camino me encuentro con que se acaba la isla, hay más playa en esa dirección, así que no me queda otra que <a href='situacion7dentro'> entrar en la cueva </a>.
		
		
		`, {
		enter: function (character, system, from) {
			system.setQuality("hora", 6);
		}
	}
	),

	situacion8: new undum.SimpleSituation(
		`<h1>Respuestas</h1>\
		<img src='media/img/pregunta.png' class='float_right imagen-situacion'>\
        <br/>— Por fin te tengo – Exclamó el guardia. Se acerca y me agarra del hombro.
		<br/>
		<br/><label for="nombreInput">Inserta tu nombre</label>
		<br/><input type="text" id="nombreInput">
		<ul class='transient'>\
        <li><a onclick="guardarNombre()" href='situacion811'>Continuar...</a></li>\
        </ul>\
		<div id=nombreInyectado></div>\
		`, {
			enter: function(character, system, from) {
                system.setQuality("hora", 7);
            }
		}
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
		<img src='media/img/cueva-final.png' class='float_left imagen-situacion'>\
        <br/>Consigo abrir un ojo mientras escucho el sonido de las olas romper sin cesar, parece que he vuelto a la celda dónde estaba.
		<br/>Mientras se acerca una sombra consigo deducir por sus vestimentas que es un médico. Me empieza a susurrar pero no consigo entender lo que me dice, me aplica un líquido dónde el guardia me había golpeado previamente.
		<br/>Se me comienza a cerrar el ojo que tenía medio abierto y a penas puedo mantener la conciencia desde que me aplicó ese líquido. Conforme me duermo siento un…
		<ul class='transient'>\
        <li><a href='situacion1'>Dormirse...</a></li>\
        </ul>\
		`, {
			enter: function(character, system, from) {
				document.getElementById('audioOlas').play();
                system.setQuality("hora", 8);
            }
		}
	)

};

s4visitadoUno = false;

function guardarNombre() {

	if (document.getElementById("nombreInput").value !== "") this.nombre = document.getElementById("nombreInput").value;

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
	hora: new undum.WordScaleQuality(
        "Hora", ["07:00", "09:00", "10:00", "11:00", "12:00", "14:00", "15:30", "16:30", "18:00"], {
            priority: "0001",
            group: 'progreso'
        }
    ),
	trozohierro: new undum.OnOffQuality(
        "Trozo de hierro", {
            priority: "0001",
            group: 'inventario',
            onDisplay: "&#10003;"
        }
    ),
	palo: new undum.OnOffQuality(
        "Palo", {
            priority: "0002",
            group: 'inventario',
            onDisplay: "&#10003;"
        }
    ),
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
	// Aquí van los grupos para las qualities
	progreso: new undum.QualityGroup(null, {
        priority: "0001"
    }),
	inventario: new undum.QualityGroup(null, {
        priority: "0002"
    }),
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
	system.setQuality("hora", 0);
	system.setCharacterText("<p align='center'>ZzzzzZzzZZzzz...</p>");
};
