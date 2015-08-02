
define(["jquery","scroll"],function($,scroll) {

	function BackTop(el,opts) {
		this.$el = $(el);
		this.opts = $.extend({},BackTop.DEFAULT_OPTS,opts);
		this.scrollTo = new scroll.Scroll({
			des : this.opts.des,
			duration : this.opts.duration
		});

		if (this.opts.mode === "move") {
			this.$el.on("click",$.proxy(this._move,this));
		} else {
			this.$el.on("click",$.proxy(this._go,this));
		}
		this._checkPosition();
		$(window).on("scroll",$.proxy(this._checkPosition,this));

	}

	BackTop.DEFAULT_OPTS = {
		mode : "move",
		pos : $(window).height(),
		des : 0,
		duration : 800
	};

	BackTop.prototype._checkPosition = function() {
		var $el = this.$el;		
		if($(window).scrollTop() > this.opts.pos) {	
			$el.fadeIn();			
		} else {
			$el.fadeOut();			
		}

	}
	BackTop.prototype._move = function() {
		this.scrollTo.move();
		console.log("a");
	}
	BackTop.prototype._go = function() {
		this.scrollTo.go();
	}

	$.fn.extend({
		backtop : function(opts) {
			return this.each(function(){
				new BackTop(this,opts);
			});
		}
	});

	return {
		BackTop : BackTop
	}



});