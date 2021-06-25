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
		el.innerHTML = '<span style="font-family: \'Siluetas-Glyphs\'">' + entity + '</span>' + html;
	}
	var icons = {
		'siluetas-boss': '&#xe901;',
		'siluetas-disaster': '&#xe902;',
		'siluetas-food': '&#xe908;',
		'siluetas-gay': '&#xe909;',
		'siluetas-geek': '&#xe90a;',
		'siluetas-les': '&#xe90b;',
		'siluetas-lover': '&#xe90c;',
		'siluetas-relaxing': '&#xe90d;',
		'siluetas-sad': '&#xe90e;',
		'siluetas-sex': '&#xe90f;',
		'siluetas-single': '&#xe910;',
		'siluetas-sleep': '&#xe911;',
		'siluetas-smoke': '&#xe912;',
		'siluetas-social': '&#xe900;',
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
		c = c.match(/siluetas-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
