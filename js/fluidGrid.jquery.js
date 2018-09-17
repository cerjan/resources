(function($) {
	$.fn.fluidGrid = function(o) {
		opt = $.extend({
			basis: 240,
			fillLastLine: false
		}, o);
		console.log(imagesLoaded);
		this.imagesLoaded()
				.progress(function(imstance, image) {
					div = $(image.img).parent();
					div.css({
						flexGrow: 2 * image.img.naturalWidth / image.img.naturalHeight,
						flexBasis: opt.basis * image.img.naturalWidth / image.img.naturalHeight
					});
					$('<div class="spacer" />').css({
						paddingTop: (100 * image.img.naturalHeight / image.img.naturalWidth) + '%'
					}).appendTo(div);
		});
		if (!opt.fillLastLine) $('<div />').css({flexGrow: 20}).appendTo(this);
		return this;
	};
}(jQuery));
