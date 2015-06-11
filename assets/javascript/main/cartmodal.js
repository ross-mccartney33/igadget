$(document).ready(function() {
	$('#ModalContainer').DOMNodeAppear(function() {
		var $this = $(this);

		/*There is a problem with this function*/
		$('a[href]').each(function() {
			var url = $(this).attr('href');
			var fixedUrl = mw.originURLToProxy(url);
			$(this).attr('href', fixedUrl);
		});

		$this.addClass('mw-modal');
		$this.find('.fastCartBottom').remove();
		$('.actionLink').find('br').remove();
		$('.actionLink').addClass('mw-cartButtonDiv');
		$('.fastCartItemBox, .fastCartSummaryBox').addClass('mw-bold');
		$('.actionLink a[href]').addClass('mw-cartButton');

	})
})