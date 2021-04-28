/*
 jQuery;
 */

 "use strict";


 jQuery(document).ready(function ($) { 
    $(window).scroll(function() {
        var theta = $(window).scrollTop() / 500 % Math.PI;
        var bottle = document.getElementById("bottle");
        bottle.style.transform=  "rotate("+theta+"rad)";
    });
    
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $("#itGoesDown").fadeOut(300)

        }
        else {
            $("#itGoesDown").fadeIn(300)

        }
        if ($(window).scrollTop() > 2100) {
            $("#trashDumpIntoOcean").fadeOut(300)
        }
        else{
            $("#trashDumpIntoOcean").fadeIn(300)

        }
    });

 });
 
const controller = new ScrollMagic.Controller();

const bottle1Path = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 0, y: 0},
        {x: 20, y: 0},
        {x: 100, y: 0},
        {x: 140, y: 10},
        {x: 160, y: 0},
        {x: 220, y: 0},
        {x: 300, y: 40},
        {x: 400, y: 0},
        {x: window.innerWidth, y: 0},

    ]
}
const tween1 = new TimelineLite();

tween1.add(
    TweenLite.to(".bottle1", 1, {
        bezier: bottle1Path,
        ease: Power1.easeInOut
    })
);

const scene = new ScrollMagic.Scene({
    triggerElement: '.timeline-section',
    duration: 1000,
    triggerHook: 0,
})
.setTween(tween1)
 
.setPin('.timeline-section')
.addTo(controller);

const bottle2Path = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 0, y: 0},
        {x: -70, y: 0},
        {x: -140, y: 0},
        {x: -310, y: 0},
        {x: -400, y: 0},
        {x: -420, y: 0},
    ]
}
const tween2 = new TimelineLite();

tween2.add(
    TweenLite.to(".bottle2", 1, {
        bezier: bottle2Path,
        ease: Power1.easeInOut
    })
);

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.timeline-section',
    duration: 1000,
    triggerHook: 0,
})
.setTween(tween2)
 
.addTo(controller);


const bottle3Path = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 0, y: 0},
        {x: 20, y: 0},
        {x: 100, y: 0},
        {x: 140, y: 10},
        {x: 160, y: 0},
        {x: 220, y: 0},
        {x: 300, y: 40},
        {x: 400, y: 0},
        {x: window.innerWidth, y: 0},
    ]
}
const tween3 = new TimelineLite();

tween3.add(
    TweenLite.to(".bottle3", 1, {
        bezier: bottle3Path,
        ease: Power1.easeInOut
    })
);

const scene3 = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-2',
    duration: 1000,
    triggerHook: 0,
})
.setTween(tween3)
 
.setPin('.timeline-section-2')
.addTo(controller);

const bottle4Path = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 0, y: 0},
        {x: 20, y: 10},
        {x: 100, y: 20},
        {x: 140, y: 40},
        {x: 160, y: 50},
        {x: 220, y: 60},
        {x: 300, y: 70},
        {x: 400, y: 90},
        {x: window.innerWidth, y: 120},
    ]
}
const tween4 = new TimelineLite();

tween4.add(
    TweenLite.to(".bottle4", 1, {
        bezier: bottle4Path,
        ease: Power1.easeInOut
    })
);

const scene4 = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-2',
    duration: 1000,
    triggerHook: 0,
})
.setTween(tween4)
 
.addTo(controller);


const bottle5Path = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 0, y: 0},
        {x: 20, y: -10},
        {x: 100, y: -20},
        {x: 140, y: -40},
        {x: 160, y: -50},
        {x: 220, y: -60},
        {x: 300, y: -70},
        {x: 400, y: -90},
        {x: window.innerWidth, y: -120},
    ]
}
const tween5 = new TimelineLite();

tween5.add(
    TweenLite.to(".bottle5", 1, {
        bezier: bottle5Path,
        ease: Power1.easeInOut
    })
);

const scene5 = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-2',
    duration: 1000,
    triggerHook: 0,
})
.setTween(tween5)
 
.addTo(controller);

const bottle6Path = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 0, y: 0},
        {x: 20, y: -10},
        {x: 100, y: -20},
        {x: 140, y: -40},
        {x: 160, y: -50},
        {x: 220, y: -60},
        {x: 300, y: -70},
        {x: 400, y: -90},
        {x: window.innerWidth, y: -120},
    ]
}
const tween6 = new TimelineLite();

tween6.add(
    TweenLite.to(".bottle6", 1, {
        bezier: bottle6Path,
        ease: Power1.easeInOut
    })
);

const scene6 = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-3',
    duration: 1000,
    triggerHook: 0,
})
.setTween(tween6)
 
.addTo(controller);

const bottle7Path = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 0, y: 0},
        {x: 20, y: -10},
        {x: 100, y: -20},
        {x: 140, y: -40},
        {x: 160, y: -50},
        {x: 220, y: -60},
        {x: 300, y: -70},
        {x: 400, y: -90},
        {x: window.innerWidth, y: -120},
    ]
}
const tween7 = new TimelineLite();

tween7.add(
    TweenLite.to(".bottle7", 1, {
        bezier: bottle7Path,
        ease: Power1.easeInOut
    })
);

const scene7 = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-3',
    duration: 1000,
    triggerHook: 0,
})
.setTween(tween7)
 
.addTo(controller);

const bottle8Path = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 0, y: 0},
        {x: 20, y: -10},
        {x: 100, y: -20},
        {x: 140, y: -40},
        {x: 160, y: -50},
        {x: 220, y: -60},
        {x: 300, y: -70},
        {x: 400, y: -90},
        {x: window.innerWidth, y: -120},
    ]
}
const tween8 = new TimelineLite();

tween8.add(
    TweenLite.to(".bottle8", 1, {
        bezier: bottle8Path,
        ease: Power1.easeInOut
    })
);

const scene8 = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-3',
    duration: 1000,
    triggerHook: 0,
})
.setTween(tween8)
 
.addTo(controller);

const bottle9Path = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 0, y: 0},
        {x: 20, y: 10},
        {x: 100, y: 20},
        {x: 140, y: 40},
        {x: 160, y: 50},
        {x: 220, y: 60},
        {x: 300, y: 70},
        {x: 400, y: 90},
        {x: window.innerWidth, y: 120},
    ]
}
const tween9 = new TimelineLite();

tween9.add(
    TweenLite.to(".bottle9", 1, {
        bezier: bottle9Path,
        ease: Power1.easeInOut
    })
);

const scene9 = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-3',
    duration: 1000,
    triggerHook: 0,
})
.setTween(tween9)
 
.setPin('.timeline-section-3')
.addTo(controller);

const bottle10Path = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 0, y: 0},
        {x: 20, y: -10},
        {x: 100, y: -20},
        {x: 140, y: -40},
        {x: 160, y: -50},
        {x: 220, y: -60},
        {x: 300, y: -70},
        {x: 400, y: -90},
        {x: window.innerWidth, y: -120},
    ]
}
const tween10 = new TimelineLite();

tween10.add(
    TweenLite.to(".bottle10", 1, {
        bezier: bottle10Path,
        ease: Power1.easeInOut
    })
);

const scene10 = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-3',
    duration: 1000,
    triggerHook: 0,
})
.setTween(tween10)
 
.addTo(controller);


const bottle11Path = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 0, y: 0},
        {x: 20, y: -10},
        {x: 100, y: -20},
        {x: 140, y: -40},
        {x: 160, y: -50},
        {x: 220, y: -60},
        {x: 300, y: -70},
        {x: 400, y: -90},
        {x: window.innerWidth, y: -120},
    ]
}
const tween11 = new TimelineLite();

tween11.add(
    TweenLite.to(".bottle11", 1, {
        bezier: bottle11Path,
        ease: Power1.easeInOut
    })
);

const scene11 = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-3',
    duration: 1000,
    triggerHook: 0,
})
.setTween(tween11)
 
.addTo(controller);

const bottle12Path = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 0, y: 0},
        {x: 20, y: -10},
        {x: 100, y: -20},
        {x: 140, y: -40},
        {x: 160, y: -50},
        {x: 220, y: -60},
        {x: 300, y: -70},
        {x: 400, y: -90},
        {x: window.innerWidth, y: -120},
    ]
}
const tween12 = new TimelineLite();

tween12.add(
    TweenLite.to(".bottle12", 1, {
        bezier: bottle12Path,
        ease: Power1.easeInOut
    })
);

const scene12 = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-3',
    duration: 1000,
    triggerHook: 0,
})
.setTween(tween12)
 
.addTo(controller);

const bottle13Path = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 0, y: 0},
        {x: 20, y: -10},
        {x: 100, y: -20},
        {x: 140, y: -40},
        {x: 160, y: -50},
        {x: 220, y: -60},
        {x: 300, y: -70},
        {x: 400, y: -90},
        {x: window.innerWidth, y: -120},
    ]
}
const tween13 = new TimelineLite();

tween13.add(
    TweenLite.to(".bottle13", 1, {
        bezier: bottle13Path,
        ease: Power1.easeInOut
    })
);

const scene13 = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-3',
    duration: 1000,
    triggerHook: 0,
})
.setTween(tween13)
 
.addTo(controller);
