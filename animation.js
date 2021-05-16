const stationimage = document.querySelector(".stationimage");

var tl = gsap.timeline( {repeat:-1, delay: 0.8});
var once = gsap.timeline();

tl.to(stationimage, {y: -20, duration: 1.3, ease: Power1.easeInOut})
.to(stationimage, {y: 0, duration: 1.3, ease: Power1.easeInOut});

once.from("#stationh3", {y: 40, opacity: 0, duration: 1, ease: Power1.easeOut})
.from("#stationh1", {y: 40, opacity: 0, duration: 1, ease: Power1.easeOut});