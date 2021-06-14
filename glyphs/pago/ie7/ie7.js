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
		el.innerHTML = '<span style="font-family: \'Opciones-de-pago-Glyphs\'">' + entity + '</span>' + html;
	}
	var icons = {
		'pago-carnet': '&#xe900;',
		'pago-sodexo': '&#xe901;',
		'pago-opcion-2': '&#xe903;',
		'pago-apple-pay': '&#xe90d;',
		'pago-si-vale': '&#xe90e;',
		'pago-edenred': '&#xe911;',
		'pago-toka': '&#xe912;',
		'pago-samsung-pay': '&#xe913;',
		'pago-opcion-1': '&#xe925;',
		'pago-oxxo': '&#xf407;',
		'pago-mercado-pago-letras': '&#xf3be;',
		'pago-mercado-pago': '&#xf3ad;',
		'pago-mercado-pago-logo': '&#xf3c9;',
		'pago-clip': '&#xeffd;',
		'pago-mastercard': '&#xf3a7;',
		'pago-visa': '&#xe96b;',
		'pago-american-express': '&#xe943;',
		'pago-banco-azteca': '&#xea36;',
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
		c = c.match(/pago-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
