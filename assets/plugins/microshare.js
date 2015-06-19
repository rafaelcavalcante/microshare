$('[data-microshare]').on('click',function(){

	var shareService = $(this).attr('data-microshare-service').toLowerCase();
	var shareScheme;
	var shareUrl;
	var shareTitle = $(this).attr('data-microshare-title');

	if ( $(this).attr('data-microshare-url') ) {
		shareUrl = $(this).attr('data-microshare-url');
	} else {
		shareUrl = document.URL;
	}

	if ( shareService === 'facebook' || shareService === 'fb' ) {
		shareScheme = 'https://www.facebook.com/sharer/sharer.php?u=';
	} else if ( shareService === 'twitter') {
		shareScheme = 'https://twitter.com/home?status=';
	} else if ( shareService === 'googleplus' || shareService === 'gplus' ) {
		shareScheme = 'https://plus.google.com/share?url=';
	} else if ( shareService === 'in' || shareService === 'linkedin' ) {
		if ( shareTitle === '' ) {
			shareScheme = 'https://www.linkedin.com/shareArticle?mini=true&url='+shareUrl+'&title='+ document.title +'&summary=&source=';
		} else {
			shareScheme = 'https://www.linkedin.com/shareArticle?mini=true&url='+shareUrl+'&title='+shareTitle+'&summary=&source=';
		}
	}

	window.open(shareScheme+shareUrl,'_blank','height=400, width=800');

});
