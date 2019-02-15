window.onload = function () {
    window.onscroll = function () {
        scrollSticky();
    }
    var header = document.getElementById("b-page-header");
    var sticky = header.offsetTop;
    function scrollSticky() {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }
    document.getElementById('b-togger').onclick = function () {
        toggerMenu();
    }

    function toggerMenu() {
        var x = document.getElementById('top-menu');
        if (x.className === 'b-page-nav') {
            x.className += ' responsive';
        } else {
            x.className = 'b-page-nav'
        }
    }
    var accodion = document.getElementsByClassName('b-btn-accordion');
    for (i = 0; i < accodion.length; i++) {
        accodion[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}

wow = new WOW(
    {
        animateClass: 'animated',
        offset: 100,
        callback: function (box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    }
);
wow.init();
jQuery(document).ready(function ($) {
    "use strict";
    // loading page
    var loaderPage = function () {
        $('.b-page-loader').fadeOut('slow');
    }
    // Document on load.
    $(document).ready(function () {
        loaderPage();
    });
});