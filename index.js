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
/*! This file is auto-generated */
!(function (i, n) {
	var o, s, e;
	function c(e) {
		try {
			var t = {
				supportTests: e,
				timestamp: new Date().valueOf(),
			};
			sessionStorage.setItem(o, JSON.stringify(t));
		} catch (e) {}
	}
	function p(e, t, n) {
		e.clearRect(0, 0, e.canvas.width, e.canvas.height),
			e.fillText(t, 0, 0);
		var t = new Uint32Array(
				e.getImageData(
					0,
					0,
					e.canvas.width,
					e.canvas.height
				).data
			),
			r =
				(e.clearRect(0, 0, e.canvas.width, e.canvas.height),
				e.fillText(n, 0, 0),
				new Uint32Array(
					e.getImageData(
						0,
						0,
						e.canvas.width,
						e.canvas.height
					).data
				));
		return t.every(function (e, t) {
			return e === r[t];
		});
	}
	function u(e, t, n) {
		switch (t) {
			case 'flag':
				return n(
					e,
					'\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f',
					'\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f'
				)
					? !1
					: !n(
							e,
							'\ud83c\uddfa\ud83c\uddf3',
							'\ud83c\uddfa\u200b\ud83c\uddf3'
					  ) &&
							!n(
								e,
								'\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f',
								'\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f'
							);
			case 'emoji':
				return !n(
					e,
					'\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff',
					'\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff'
				);
		}
		return !1;
	}
	function f(e, t, n) {
		var r =
				'undefined' != typeof WorkerGlobalScope &&
				self instanceof WorkerGlobalScope
					? new OffscreenCanvas(300, 150)
					: i.createElement('canvas'),
			a = r.getContext('2d', {
				willReadFrequently: !0,
			}),
			o =
				((a.textBaseline = 'top'),
				(a.font = '600 32px Arial'),
				{});
		return (
			e.forEach(function (e) {
				o[e] = t(a, e, n);
			}),
			o
		);
	}
	function t(e) {
		var t = i.createElement('script');
		(t.src = e), (t.defer = !0), i.head.appendChild(t);
	}
	'undefined' != typeof Promise &&
		((o = 'wpEmojiSettingsSupports'),
		(s = ['flag', 'emoji']),
		(n.supports = {
			everything: !0,
			everythingExceptFlag: !0,
		}),
		(e = new Promise(function (e) {
			i.addEventListener('DOMContentLoaded', e, {
				once: !0,
			});
		})),
		new Promise(function (t) {
			var n = (function () {
				try {
					var e = JSON.parse(sessionStorage.getItem(o));
					if (
						'object' == typeof e &&
						'number' == typeof e.timestamp &&
						new Date().valueOf() < e.timestamp + 604800 &&
						'object' == typeof e.supportTests
					)
						return e.supportTests;
				} catch (e) {}
				return null;
			})();
			if (!n) {
				if (
					'undefined' != typeof Worker &&
					'undefined' != typeof OffscreenCanvas &&
					'undefined' != typeof URL &&
					URL.createObjectURL &&
					'undefined' != typeof Blob
				)
					try {
						var e =
								'postMessage(' +
								f.toString() +
								'(' +
								[
									JSON.stringify(s),
									u.toString(),
									p.toString(),
								].join(',') +
								'));',
							r = new Blob([e], {
								type: 'text/javascript',
							}),
							a = new Worker(URL.createObjectURL(r), {
								name: 'wpTestEmojiSupports',
							});
						return void (a.onmessage = function (e) {
							c((n = e.data)), a.terminate(), t(n);
						});
					} catch (e) {}
				c((n = f(s, u, p)));
			}
			t(n);
		})
			.then(function (e) {
				for (var t in e)
					(n.supports[t] = e[t]),
						(n.supports.everything =
							n.supports.everything && n.supports[t]),
						'flag' !== t &&
							(n.supports.everythingExceptFlag =
								n.supports.everythingExceptFlag &&
								n.supports[t]);
				(n.supports.everythingExceptFlag =
					n.supports.everythingExceptFlag &&
					!n.supports.flag),
					(n.DOMReady = !1),
					(n.readyCallback = function () {
						n.DOMReady = !0;
					});
			})
			.then(function () {
				return e;
			})
			.then(function () {
				var e;
				n.supports.everything ||
					(n.readyCallback(),
					(e = n.source || {}).concatemoji
						? t(e.concatemoji)
						: e.wpemoji &&
						  e.twemoji &&
						  (t(e.twemoji), t(e.wpemoji)));
			}));
})((window, document), window._wpemojiSettings);

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
var jetpackCarouselStrings = {
	widths: [370, 700, 1000, 1200, 1400, 2000],
	is_logged_in: '1',
	lang: 'en',
	ajaxurl:
		'https://davidssoftwareengineer.wpcomstaging.com/wp-admin/admin-ajax.php',
	nonce: '3233a9f216',
	display_exif: '1',
	display_comments: '1',
	single_image_gallery: '1',
	single_image_gallery_media_file: '',
	background_color: 'black',
	comment: 'Comment',
	post_comment: 'Post Comment',
	write_comment: 'Write a Comment...',
	loading_comments: 'Loading Comments...',
	download_original:
		'View full size <span class="photo-size">{0}<span class="photo-size-times">\u00d7</span>{1}</span>',
	no_comment_text:
		'Please be sure to submit some text with your comment.',
	no_comment_email:
		'Please provide an email address to comment.',
	no_comment_author: 'Please provide your name to comment.',
	comment_post_error:
		'Sorry, but there was an error posting your comment. Please try again later.',
	comment_approved: 'Your comment was approved.',
	comment_unapproved: 'Your comment is in moderation.',
	camera: 'Camera',
	aperture: 'Aperture',
	shutter_speed: 'Shutter Speed',
	focal_length: 'Focal Length',
	copyright: 'Copyright',
	comment_registration: '0',
	require_name_email: '1',
	login_url:
		'https://davidssoftwareengineer.wpcomstaging.com/wp-login.php?redirect_to=https%3A%2F%2Fdavidssoftwareengineer.wpcomstaging.com%2F2024%2F01%2F10%2Fearly-insights-on-chatgpt-a-chatbot-technology-with-great-potential%2F',
	blog_id: '1',
	meta_data: [
		'camera',
		'aperture',
		'shutter_speed',
		'focal_length',
		'copyright',
	],
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
