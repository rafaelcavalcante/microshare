(function(namespace, $) {
	var MicroShare = function() {
		var ms = this;
		this.shareMap = {
			facebook: 'https://www.facebook.com/sharer/sharer.php?u={{url}}',
			twitter: 'https://twitter.com/home?status={{url}}',
			gplus: 'https://plus.google.com/share?url={{url}}',
			linkedin: 'https://www.linkedin.com/shareArticle?mini=true&url={{url}}&title={{title}}&source={{url}}'
		};
		$(document).on('click', '[data-microshare]', ms.share.bind(ms));
	};

	MicroShare.prototype = {
		share: function(e) {
			e.preventDefault();
			var shareScheme = "";
			var target = $(e.currentTarget);
			var shareInfo = {
				service: target.attr('data-microshare').toLowerCase(),
				title: target.attr('data-microshare-title') || document.title,
				url: target.attr('data-microshare-url') || document.URL
			};
			shareScheme = this.setScheme(shareInfo);
			window.open(shareScheme,'_blank','height=400, width=800');
		},
		setScheme: function(shareInfo) {
			var scheme = this.shareMap[shareInfo.service];
			var regex = new RegExp("{{(\\w+)}}", 'gmi');
			scheme = scheme.replace(regex, function(match, string) {
				return shareInfo[string];
			});
			return scheme;
		},
		addShare: function(name, link) {
			this.shareMap[name] = link;
		}
	};
	$(function() {
		namespace.MicroShare = new MicroShare();
	});
})(window, window.jQuery || window.Zepto );
