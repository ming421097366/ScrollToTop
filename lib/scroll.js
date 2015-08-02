define(['jquery'], function($) {
	Scroll.DEFAULT_OPTS = {
		des: 0,
		duration: 800
	};

	function Scroll(opts) {
		this.opts = $.extend({}, Scroll.DEFAULT_OPTS, opts);
		this.$el = $("html,body");
	}
	Scroll.prototype.move = function() {
		var opts = this.opts;
			des = opts.des;
		if (($(window).scrollTop() !== des) && !(this.$el.is(":animated"))) {
			this.$el.animate({
				scrollTop: des
			}, opts.duration);

		}

	};

	Scroll.prototype.go = function() {
		var des = this.opts.des;
		if($(window).scrollTop() !== des) {
			this.$el.scrollTop(des);	
		}
		
	};
	return {
		Scroll: Scroll
	}
});