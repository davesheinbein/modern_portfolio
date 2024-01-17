window._wpemojiSettings = {
	baseUrl:
		'https://s.w.org/images/core/emoji/14.0.0/72x72/',
	ext: '.png',
	svgUrl: 'https://s.w.org/images/core/emoji/14.0.0/svg/',
	svgExt: '.svg',
	source: {
		concatemoji:
			'https://davidssoftwareengineer.wpcomstaging.com/wp-includes/js/wp-emoji-release.min.js?ver=6.4.2',
	},
};

/* <![CDATA[ */
var wpNotesIsJetpackClient = true;
var wpNotesIsJetpackClientV2 = true;
/* ]]> */
window.addEventListener(
	'message',
	function (event) {
		// Confirm that the message is from the right origin.
		if ('https://widgets.wp.com' !== event.origin) {
			return;
		}
		// Check whether 3rd Party Cookies are blocked
		var has3PCBlocked = 'WPCOM:3PC:blocked' === event.data;

		var tagerElement = document.getElementById(
			'wp-admin-bar-notes'
		);

		if (has3PCBlocked && tagerElement) {
			// Hide the notification button/icon
			tagerElement.style.display = 'none';
		}
	},
	false
);

var jetpackSwiperLibraryPath = {
	url: 'https://davidssoftwareengineer.wpcomstaging.com/wp-content/plugins/jetpack/_inc/build/carousel/swiper-bundle.min.js',
};

var WPGroHo = {
	my_hash: '608846e8c39caf645a7ed901ebcee02a',
};

(function () {
	var request,
		b = document.body,
		c = 'className',
		cs = 'customize-support',
		rcs = new RegExp('(^|\\s+)(no-)?' + cs + '(\\s+|$)');

	request = true;

	b[c] = b[c].replace(rcs, ' ');
	// The customizer requires postMessage and CORS (if the site is cross domain).
	b[c] +=
		(window.postMessage && request ? ' ' : ' no-') + cs;
})();
