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
		'avatar-hihello': '&#xec41;',
		'luna-pokemon': '&#xea48;',
		'sol-pokemon': '&#xea4b;',
		'b-google-my-business': '&#xe900;',
		'b-grindr': '&#xe901;',
		'b-hornet': '&#xe902;',
		'b-mercado-libre': '&#xe903;',
		'b-onlyfans': '&#xe904;',
		'b-scruff': '&#xe905;',
		'google-my-business': '&#xe906;',
		'grindr': '&#xe90b;',
		'hornet': '&#xe90c;',
		'mercado-libre': '&#xe914;',
		'onlyfans': '&#xe91b;',
		'scruff': '&#xe91d;',
		'netflix-gayflix': '&#xe929;',
		'tumblr': '&#xe92b;',
		'youtube': '&#xea5c;',
		'tripadvisor': '&#xf65e;',
		'google': '&#xea5b;',
		'twitter-bird1': '&#xf5a5;',
		'whatsapp': '&#xea5a;',
		'facebook-azul-letra': '&#xf0a1;',
		'gmail': '&#xe92c;',
		'tumbrl': '&#xf661;',
		'intagram-camera': '&#xf66c;',
		'pinterest': '&#xe92d;',
		'send': '&#xe92e;',
		'codepen2': '&#xf659;',
		'repliit': '&#xf65a;',
		'codesandbox': '&#xf65b;',
		'w3spaces': '&#xf663;',
		'hi5': '&#xf662;',
		'hhm': '&#xea54;',
		'logo-viajemos-todxs-por-mexico-turismo-gay-turismo-rosa-color': '&#xf344;',
		'cursor-hand': '&#xf630;',
		'hospedaje': '&#xf63d;',
		'codepen': '&#xf657;',
		'repliit1': '&#xf66f;',
		'github-logo': '&#xf671;',
		'github': '&#xf65c;',
		'w3spaces1': '&#xf672;',
		'www': '&#xf65f;',
		'twitter-bird': '&#xf5a4;',
		'flecha-atras': '&#xf0a8;',
		'flecha-siguiente': '&#xf0a9;',
		'touch_app': '&#xf56b;',
		'tarjeta-de-regalo': '&#xf463;',
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
