(function($) {
	$.fn.fluidGrid = function(o) {
		opt = $.extend({
			basis: 240,
			fillLastLine: false,
			random: false,
			margin: 5
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
		this.css({
			display: 'flex',
			justifyContent: 'center',
			flexWrap: 'wrap',
			margin: '-' + opt.margin + 'px'
		});
		this.find('> div').addClass('grid_item').css({
			position: 'relative',
			margin: opt.margin + 'px'
		});
		this.imagesLoaded()
				.progress(function(instance, image) {
					div = $(image.img).css({
						position: 'absolute',
						left: 0,
						top: 0,
						width: '100%',
						height: '100%'
					}).closest('.grid_item');
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
