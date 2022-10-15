document.addEventListener('DOMContentLoaded', function() {
    var sideNav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sideNav);

    var slider = document.querySelectorAll('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 500,
        transition: 600,
        interval: 3000
    });

    var parallax = document.querySelectorAll('.parallax');
    M.Parallax.init(parallax);

    var materialBox = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(materialBox);

    var scrollSpy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollSpy, {
        scrollOffset: 50
    });
});