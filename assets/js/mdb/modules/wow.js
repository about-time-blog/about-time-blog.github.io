"use strict";var WOW;!function(i){WOW=function(){return{init:function(){function t(){var t=window.innerHeight,s=window.scrollY;i(".wow").each(function(){if("visible"!=i(this).css("visibility")&&(t+s-100>n(this)&&s<n(this)||t+s-100>n(this)+i(this).height()&&s<n(this)+i(this).height()||t+s==i(document).height()&&n(this)+100>i(document).height())){var a=i(this).index(".wow"),o=i(this).attr("data-wow-delay");if(o){o=i(this).attr("data-wow-delay").slice(0,-1);var h=this;parseFloat(o);i(h).addClass("animated"),i(h).css({visibility:"visible"}),i(h).css({"animation-delay":o}),i(h).css({"animation-name":e[a]});var c=1e3*i(this).css("animation-duration").slice(0,-1);i(this).attr("data-wow-delay")&&(c+=1e3*i(this).attr("data-wow-delay").slice(0,-1));h=this;setTimeout(function(){i(h).removeClass("animated")},c)}else{i(this).addClass("animated"),i(this).css({visibility:"visible"}),i(this).css({"animation-name":e[a]});c=1e3*i(this).css("animation-duration").slice(0,-1),h=this;setTimeout(function(){i(h).removeClass("animated")},c)}}})}function s(){i(".wow").each(function(){var t=i(this).index(".wow"),s=i(this).attr("data-wow-delay");if(s){s=i(this).attr("data-wow-delay").slice(0,-1);parseFloat(s);i(this).addClass("animated"),i(this).css({visibility:"visible"}),i(this).css({"animation-delay":s+"s"}),i(this).css({"animation-name":e[t]})}else i(this).addClass("animated"),i(this).css({visibility:"visible"}),i(this).css({"animation-name":e[t]})})}function a(){var s=window.innerHeight,a=window.scrollY;i(".wow.animated").each(function(){if(s+a-100>n(this)&&a>n(this)+100||s+a-100<n(this)&&a<n(this)+100||n(this)+i(this).height>i(document).height()-100)i(this).removeClass("animated"),i(this).css({"animation-name":"none"}),i(this).css({visibility:"hidden"});else{var t=1e3*i(this).css("animation-duration").slice(0,-1);i(this).attr("data-wow-delay")&&(t+=1e3*i(this).attr("data-wow-delay").slice(0,-1));var e=this;setTimeout(function(){i(e).removeClass("animated")},t)}}),t(),o--}function n(i){var t=i.getBoundingClientRect(),s=document.body,a=document.documentElement,n=window.pageYOffset||a.scrollTop||s.scrollTop,e=a.clientTop||s.clientTop||0,o=t.top+n-e;return Math.round(o)}var e=[],o=1;i(".wow").each(function(){i(this).css({visibility:"hidden"}),e[i(this).index(".wow")]=i(this).css("animation-name"),i(this).css({"animation-name":"none"})}),i(window).scroll(function(){o?a():t()}),s()}}}}(jQuery);