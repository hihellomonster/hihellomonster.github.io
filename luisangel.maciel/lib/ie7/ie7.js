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
		el.innerHTML = '<span style="font-family: \'luisangelmaciel\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-avatar-hihello': '&#xec41;',
		'icon-luna-pokemon': '&#xea48;',
		'icon-sol-pokemon': '&#xea4b;',
		'icon-b-google-my-business': '&#xe900;',
		'icon-b-grindr': '&#xe901;',
		'icon-b-hornet': '&#xe902;',
		'icon-b-mercado-libre': '&#xe903;',
		'icon-b-onlyfans': '&#xe904;',
		'icon-b-scruff': '&#xe905;',
		'icon-google-my-business': '&#xe906;',
		'icon-grindr': '&#xe90b;',
		'icon-hornet': '&#xe90c;',
		'icon-mercado-libre': '&#xe914;',
		'icon-onlyfans': '&#xe91b;',
		'icon-scruff': '&#xe91d;',
		'icon-netflix-gayflix': '&#xe929;',
		'icon-tumblr': '&#xe92b;',
		'icon-youtube': '&#xea5c;',
		'icon-tripadvisor': '&#xf65e;',
		'icon-google': '&#xea5b;',
		'icon-twitter-bird1': '&#xf5a5;',
		'icon-whatsapp': '&#xea5a;',
		'icon-facebook-azul-letra': '&#xf0a1;',
		'icon-gmail': '&#xe92c;',
		'icon-tumbrl': '&#xf661;',
		'icon-intagram-camera': '&#xf66c;',
		'icon-pinterest': '&#xe92d;',
		'icon-send': '&#xe92e;',
		'icon-codepen2': '&#xf659;',
		'icon-repliit': '&#xf65a;',
		'icon-codesandbox': '&#xf65b;',
		'icon-w3spaces': '&#xf663;',
		'icon-hi5': '&#xf662;',
		'icon-hhm': '&#xea54;',
		'icon-logo-viajemos-todxs-por-mexico-turismo-gay-turismo-rosa-color': '&#xf344;',
		'icon-cursor-hand': '&#xf630;',
		'icon-hospedaje': '&#xf63d;',
		'icon-codepen': '&#xf657;',
		'icon-repliit1': '&#xf66f;',
		'icon-github-logo': '&#xf671;',
		'icon-github': '&#xf65c;',
		'icon-w3spaces1': '&#xf672;',
		'icon-www': '&#xf65f;',
		'icon-twitter-bird': '&#xf5a4;',
		'icon-flecha-atras': '&#xf0a8;',
		'icon-flecha-siguiente': '&#xf0a9;',
		'icon-touch_app': '&#xf56b;',
		'icon-tarjeta-de-regalo': '&#xf463;',
		'icon-home': '&#xf0b3;',
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
