(function () {
    "use strict";

    $(window).scroll(function() {
        $('.js-pageHeader').toggleClass('scroll', $(this).scrollTop() > 50);
    });
})();