(function($) {
	$.fn.fluidGrid = function(o) {
		opt = $.extend({
			basis: 240,
			fillLastLine: false,
			random: false
		}, o);
		opt.percent = false;
		if (String(opt.basis).substr(-1) === '%') {
			opt.percent = true;
			opt.basis = parseInt(opt.basis);
		}
		if (typeof imagesLoaded !== 'function') {
			console.log('Function imagesLoaded() does not exist. (use https://cerjan.github.io/resources/js/imagesloaded.pkgd.min.js)');
			return;
		}
		this.find('> div').addClass('grid_item');
		this.imagesLoaded()
				.progress(function(imstance, image) {
					div = $(image.img).closest('.grid_item');
					div.css({
						flexGrow: 2 * image.img.naturalWidth / image.img.naturalHeight,
						flexBasis: opt.basis * image.img.naturalWidth / image.img.naturalHeight + (opt.percent ? '%' : 0)
					});
					if (opt.random) div.css({
						order: Math.floor(1000 * Math.random())
					});
					$('<div class="spacer" />').css({
						paddingTop: (100 * image.img.naturalHeight / image.img.naturalWidth) + '%'
					}).appendTo(div);
		});
		if (!opt.fillLastLine) $('<div />').css({flexGrow: 20, order: 1000}).appendTo(this);
		return this;
	};
}(jQuery));
