(function ($) {
	$.fn.faTabs = function (options) {
		var opts = {
			panelClass: "fatabs-panel",
			arrows: false,
			arrowsFade: false,
			prevID: "arrow-prev",
			nextID: "arrow-next"
		};
		if (options) {
			$.extend(opts, options);
		}
		var element = $(this);
		$(this).click(function () {
			var caller = $(this);
			var objetivo = $(caller.attr("href"));
			if ($("." + opts.panelClass + ":visible").length) {
				$("." + opts.panelClass + ":visible").fadeOut("slow", function () {
					objetivo.fadeIn();
				});
			} else {
				objetivo.fadeIn();
			}
			caller.parent().siblings().removeClass("ativo");
			caller.parent().addClass("ativo");
			if (caller.parent().index() === 0 && opts.arrowsFade) {
				$("#" + opts.prevID).fadeOut();
			} else {
				$("#" + opts.prevID).fadeIn();
			}
			if (caller.parent().index() == caller.parent().parent().children().length - 1 && opts.arrowsFade) {
				$("#" + opts.nextID).fadeOut();
			} else {
				$("#" + opts.nextID).fadeIn();
			}
			return caller.attr("href");
		});
		var myUrl = document.location.toString();
		if (myUrl.match('#')) {
			element.filter("[href=#" + myUrl.split('#')[1] + "]").click();
		} else {
			element.filter(":first").click();
		}
		if (opts.arrows) {
			$("#" + opts.prevID).click(function () {
				var current = element.parent().siblings(".ativo");
				current.prev("li").children("a").click();
				$(this).attr("href", element.parent().siblings(".ativo").children("a").attr("href"));
			});
			$("#" + opts.nextID).click(function () {
				var current = element.parent().siblings(".ativo");
				current.next("li").children("a").click();
				$(this).attr("href", element.parent().siblings(".ativo").children("a").attr("href"));
			});
		}
		return this;
	};
})(jQuery);
