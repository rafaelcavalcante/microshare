(function() {
	var $ = jQuery;
	$(document).on('click', '[data-microshare]', function(e){
		e.preventDefault();

		var shareScheme,
			shareService = $(this).attr('data-microshare').toLowerCase(),
			shareTitle = $(this).attr('data-microshare-title') || document.title,
			shareUrl = $(this).attr('data-microshare-url') || document.URL,
			shareMap = [{
					name: ['facebook', 'fb'],
					link: 'https://www.facebook.com/sharer/sharer.php?u='
				}, {
					name: ['twitter', 'tw'],
					link: 'https://twitter.com/home?status='
				}, {
					name: ['googleplus', 'gplus'],
					link: 'https://plus.google.com/share?url='
				}, {
					name: ['linkedin', 'in'],
					link: 'https://www.linkedin.com/shareArticle?mini=true&url='+shareUrl+'&title='+shareTitle+'&summary=&source='
				}];

			for(var x in shareMap) {
				if(shareMap[x].name.indexOf(shareService) > -1) {
					shareScheme = shareMap[x].link + shareUrl;
					break;
				}
			}

		window.open(shareScheme,'_blank','height=400, width=800');

	});
})();
