$(function() {
	$(document).on('click', '[data-microshare]', function(e){
		e.preventDefault();

		var shareScheme;
		var shareService = $(this).attr('data-microshare').toLowerCase();
		var shareTitle = $(this).attr('data-microshare-title') || document.title;
		var shareUrl = $(this).attr('data-microshare-url') || document.URL;
		var shareMap = {
			facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
			twitter: 'https://twitter.com/home?status=',
			gplus: 'https://plus.google.com/share?url=',
			linkedin: 'https://www.linkedin.com/shareArticle?mini=true&url='+shareUrl+'&title='+shareTitle+'&summary=&source='
		};
		shareScheme = shareMap[shareService] + shareUrl;

		window.open(shareScheme,'_blank','height=400, width=800');
	});
});
