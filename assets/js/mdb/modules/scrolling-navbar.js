"use strict";!function(a){var n=50;a(window).on("scroll",function(){var o=a(".navbar");o.length&&(o.offset().top>n?a(".scrolling-navbar").addClass("top-nav-collapse"):a(".scrolling-navbar").removeClass("top-nav-collapse"))})}(jQuery);