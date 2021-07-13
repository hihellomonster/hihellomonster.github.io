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
		el.innerHTML = '<span style="font-family: \'pizzeria\'">' + entity + '</span>' + html;
	}
	var icons = {
		'pizzeriaiconografia-pizzeria': '&#xe900;',
		'pizzeriaiconografia-pizzeria-caja-de-pizza': '&#xe942;',
		'pizzeriaiconografia-pizzeria-de-pizza': '&#xe943;',
		'pizzeriaiconografia-pizzeria-masa-de-pizza': '&#xe944;',
		'pizzeriaiconografia-pizzeria-me-gusta': '&#xe945;',
		'pizzeriaiconografia-pizzeria-pago-con-terminal': '&#xe946;',
		'pizzeriaiconografia-pizzeria-pala': '&#xe95b;',
		'pizzeriaiconografia-pizzeria-pedidos-a-domicilio': '&#xe95c;',
		'pizzeriaiconografia-pizzeria-pizza': '&#xe95d;',
		'pizzeriaiconografia-pizzeria-pizza-al-horno': '&#xe968;',
		'pizzeriaiconografia-pizzeria-preparando-pizza': '&#xe969;',
		'pizzeriaiconografia-pizzeria-queso': '&#xe96e;',
		'pizzeriaiconografia-pizzeria-rebanadora': '&#xe96f;',
		'pizzeriaiconografia-pizzeria-rodillo': '&#xe972;',
		'pizzeriaiconografia-pizzeria-salsa-de-tomate': '&#xe974;',
		'pizzeriaiconografia-pizzeria-tomate': '&#xe975;',
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
		c = c.match(/pizzeria[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
