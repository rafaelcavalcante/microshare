$(document).on('[data-microshare]',function(e){
	e.preventDefault();

	var shareScheme,
		shareService = $(this).attr('data-microshare').toLowerCase(),
		shareTitle = $(this).attr('data-microshare-title') || document.title,
		shareUrl = $(this).attr('data-microshare-url') || document.URL;

	if ( shareService === 'facebook' || shareService === 'fb' ) {
		shareScheme = 'https://www.facebook.com/sharer/sharer.php?u=';
	} else if ( shareService === 'twitter') {
		shareScheme = 'https://twitter.com/home?status=';
	} else if ( shareService === 'googleplus' || shareService === 'gplus' ) {
		shareScheme = 'https://plus.google.com/share?url=';
	} else if ( shareService === 'in' || shareService === 'linkedin' ) {
		shareScheme = 'https://www.linkedin.com/shareArticle?mini=true&url='+shareUrl+'&title='+shareTitle+'&summary=&source=';
	}

	window.open(shareScheme+shareUrl,'_blank','height=400, width=800');

});