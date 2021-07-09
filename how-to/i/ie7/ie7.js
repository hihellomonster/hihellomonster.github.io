/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'how-to\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-chaos-dragon-ball-z': '&#xe9c8;',
		'icon-trasero-vegeta': '&#xea17;',
		'icon-amor-love-toy-story': '&#xea37;',
		'icon-logo-viajemos-todxs-por-mexico-turismo-gay-turismo-rosa-color': '&#xf344;',
		'icon-cursor-hand': '&#xf630;',
		'icon-hospedaje': '&#xf63d;',
		'icon-codepen': '&#xf657;',
		'icon-github': '&#xf65c;',
		'icon-www': '&#xf65f;',
		'icon-twitter-bird': '&#xf5a4;',
		'icon-drag-rupaul': '&#xea47;',
		'icon-viajero': '&#xea5d;',
		'icon-solicitar-transporte': '&#xf45f;',
		'icon-sexoral-one': '&#xf45b;',
		'icon-bailar': '&#xea60;',
		'icon-avatar-fuera-del-closet': '&#xea61;',
		'icon-hombre': '&#xea62;',
		'icon-corriendo': '&#xf094;',
		'icon-flecha-atras': '&#xf0aa;',
		'icon-flecha-siguiente': '&#xf0ab;',
		'icon-touch_app': '&#xf56c;',
		'icon-tarjeta-de-regalo': '&#xf463;',
		'icon-home': '&#xf0b4;',
		'icon-avatar-hihello': '&#xec41;',
		'icon-pokebola': '&#xf413;',
		'icon-logo-hihello': '&#xea51;',
		'icon-xiiber': '&#xf0b5;',
		'icon-mascota': '&#xe900;',
		'icon-dragon-ball-burger': '&#xe901;',
		'icon-senzubucks-coffee': '&#xe904;',
		'icon-corazon-doble': '&#xe906;',
		'icon-netflix-sexflix': '&#xe907;',
		'icon-masturbate': '&#xe908;',
		'icon-gato': '&#xec5f;',
		'icon-luna-pokemon': '&#xea48;',
		'icon-sol-pokemon': '&#xea4b;',
		'icon-yas-queen': '&#xea5f;',
		'icon-flecha-atras1': '&#xf0a8;',
		'icon-flecha-siguiente1': '&#xf0a9;',
		'icon-lavarse-las-manos': '&#xf0c1;',
		'icon-enjabonarse-las-manos': '&#xf09c;',
		'icon-secarse-las-manos': '&#xf45a;',
		'icon-touch_app1': '&#xf56b;',
		'icon-copiar': '&#xf093;',
		'icon-guardar': '&#xf0b2;',
		'icon-menu-puntos': '&#xf3ac;',
		'icon-menu': '&#xf3ab;',
		'icon-home1': '&#xf0b3;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
