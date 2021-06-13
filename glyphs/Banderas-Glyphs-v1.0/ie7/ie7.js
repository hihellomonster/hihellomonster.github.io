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
		el.innerHTML = '<span style="font-family: \'Banderas-Glyphs\'">' + entity + '</span>' + html;
	}
	var icons = {
		'bandera-tailandia': '&#xe900;',
		'bandera-argentina': '&#xe905;',
		'bandera-guatemala': '&#xe909;',
		'bandera-chile': '&#xe915;',
		'bandera-colombia': '&#xe919;',
		'bandera-costarica': '&#xe91c;',
		'bandera-mexico': '&#xe921;',
		'bandera-eeuu': '&#xe929;',
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
		c = c.match(/bandera-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
