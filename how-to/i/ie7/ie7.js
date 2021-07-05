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
		'avatar-hihello': '&#xec41;',
		'pokebola': '&#xf413;',
		'logo-hihello': '&#xea51;',
		'xiiber': '&#xf0b5;',
		'mascota': '&#xe900;',
		'dragon-ball-burger': '&#xe901;',
		'senzubucks-coffee': '&#xe904;',
		'corazon-doble': '&#xe906;',
		'netflix-sexflix': '&#xe907;',
		'masturbate': '&#xe908;',
		'gato': '&#xec5f;',
		'luna-pokemon': '&#xea48;',
		'sol-pokemon': '&#xea4b;',
		'yas-queen': '&#xea5f;',
		'flecha-atras': '&#xf0a8;',
		'flecha-siguiente': '&#xf0a9;',
		'lavarse-las-manos': '&#xf0c1;',
		'enjabonarse-las-manos': '&#xf09c;',
		'secarse-las-manos': '&#xf45a;',
		'touch_app': '&#xf56b;',
		'copiar': '&#xf093;',
		'guardar': '&#xf0b2;',
		'menu-puntos': '&#xf3ac;',
		'menu': '&#xf3ab;',
		'home': '&#xf0b3;',
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
		c = c.match(/[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
