const stationimage = document.querySelector(".stationimage");
const optionmenu = document.querySelector(".option-container");

var tl = gsap.timeline( {repeat:-1, delay: 1});
var once = gsap.timeline();

tl.to(stationimage, {y: -20, duration: 1.3, ease: Power1.easeInOut})
.to(stationimage, {y: 0, duration: 1.3, ease: Power1.easeInOut});

once.from("#stationh3", {y: 40, opacity: 0, duration: 1, ease: Power1.easeOut})
.from("#stationh1", {y: 40, opacity: 0, duration: 1, ease: Power1.easeOut}, "-=0.5");

function optionShow(){
    once.to(optionmenu, {opacity: 1, duration: 0.6, ease: Power1.easeOut}, "+=2")
    .from(optionmenu, {y: 40, duration: 0.6, ease: Power1.easeOut}, "-=0.6");
}