/*
 jQuery;
 */

 "use strict";

 var onetime1 = false;
 var onetime2 = false;
 var onetime3 = false;
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
        if ($(window).scrollTop() > 1600) {
            $("#trashDumpIntoOcean").fadeOut(300)
        }
        else{
            $("#trashDumpIntoOcean").fadeIn(300)
        }
        if ($(window).scrollTop() > 5000) {
            $("#bottle").fadeOut(300);
        }
        else{
            $("#bottle").fadeIn(300);
        }
        if ($(window).scrollTop() > 7000) {
            $("#bottle2").fadeOut(300);
        }
        else{
            $("#bottle2").fadeIn(300);
        }
        if ($(window).scrollTop() > 8500) {
            $("#bottle3").fadeOut(300);
        }
        else{
            $("#bottle3").fadeIn(300);
        }


        if ($(window).scrollTop() <= 11400 && $(window).scrollTop() > 10700) {
            document.getElementById("awareness-text").innerHTML = "fight for the cause, consider <a href='donations.html'> donating here</a>";
        }
        else if ($(window).scrollTop() <= 10700 && $(window).scrollTop() > 10000) {
                document.getElementById("awareness-text").innerHTML = "and there's nothing we can do, unless we work together";
        }
        else if ($(window).scrollTop() <= 10000 && $(window).scrollTop() > 9300) {
                document.getElementById("awareness-text").innerHTML = "single-use plastic is a big reason why this is happening";
        }
        else if ($(window).scrollTop() <= 9300 && $(window).scrollTop() > 8600) {
                document.getElementById("awareness-text").innerHTML = "plastic is killing our planet"; 
                $("#awareness-text").fadeIn();
        }
        else{
            $("#awareness-text").fadeOut();
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

const slide5Bottle = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 0, y: 0},
        {x: 800, y: 100},
    ]
}
const slide5Tween = new TimelineLite();

slide5Tween.add(
    TweenLite.to(".slide5Bottle", 1, {
        bezier: slide5Bottle,
        ease: Power1.easeInOut,
        opacity: 1,
    })
);

const slide5Scene = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-4',
    duration: 500,
    triggerHook: 0,
})
.setTween(slide5Tween)
.setPin('.timeline-section-4')
.addTo(controller);

const slide5Text = {
    curviness: 1.25,
    values: [
        {x: 0, y: 0},
        {x: -100, y: 100},
    ]
}
const slide5TextTween = new TimelineLite();

slide5TextTween.add(
    TweenLite.to(".timeline-ph-container-2", 1, {
        bezier: slide5Text,
        ease: Power1.easeInOut,
        opacity:1,
    })
);

const slide5TextScene = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-4',
    duration: 500,
    triggerHook: 0,
})
.setTween(slide5TextTween)
.addTo(controller);

const slide6Bottle = {
    curviness: 1.25,
    values: [
        {x: 0, y: 0},
        {x: -200, y: 100},
    ]
}
const slide6Tween = new TimelineLite();

slide6Tween.add(
    TweenLite.to(".slide6Bottle", 1, {
        bezier: slide6Bottle,
        ease: Power1.easeInOut,
        opacity: 1,
    })
);

const slide6Scene = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-5',
    duration: 500,
    triggerHook: 0,
})
.setTween(slide6Tween)
.setPin('.timeline-section-5')
.addTo(controller);

const slide6Text = {
    curviness: 1.25,
    values: [
        {x: 0, y: 0},
        {x: 100, y: 100},
    ]
}
const slide6TextTween = new TimelineLite();

slide6TextTween.add(
    TweenLite.to(".timeline-ph-container-3", 1, {
        bezier: slide6Text,
        ease: Power1.easeInOut,
        opacity:1,
    })
);

const slide6TextScene = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-5',
    duration: 500,
    triggerHook: 0,
})
.setTween(slide6TextTween)
.addTo(controller);

const in1 = {
    curviness: 1.25,
    values: [
        {x: 0, y: 0},
        {x: 1200, y: window.innerHeight + 1000},
    ]
}
const in1Tween = new TimelineLite();

in1Tween.add(
    TweenLite.to(".in1", 1, {
        bezier: in1,
        ease: Power1.easeInOut,
        opacity:1,
    })
);

const in1Scene = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-6',
    duration: 2000,
    triggerHook: 0,
})
.setTween(in1Tween)
.setPin('timeline-section-6')
.addTo(controller);

const in2 = {
    curviness: 1.25,
    values: [
        {x: 0, y: 0},
        {x: -400, y: window.innerHeight + 1000},
    ]
}
const in2Tween = new TimelineLite();

in2Tween.add(
    TweenLite.to(".in2", 1, {
        bezier: in2,
        ease: Power1.easeInOut,
        opacity:1,
    })
);

const in2Scene = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-6',
    duration: 2000,
    triggerHook: 0,
})
.setTween(in2Tween)
.addTo(controller);

const in3 = {
    curviness: 1.25,
    values: [
        {x: 0, y: 0},
        {x: 400, y: window.innerHeight + 2000},
    ]
}
const in3Tween = new TimelineLite();

in3Tween.add(
    TweenLite.to(".in3", 1, {
        bezier: in3,
        ease: Power1.easeInOut,
        opacity:1,
    })
);

const in3Scene = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-6',
    duration: 2000,
    triggerHook: 0,
})
.setTween(in3Tween)
.addTo(controller);

const in4 = {
    curviness: 1.25,
    values: [
        {x: 0, y: 0},
        {x: -1000, y: 600},
    ]
}
const in4Tween = new TimelineLite();

in4Tween.add(
    TweenLite.to(".in4", 1, {
        bezier: in4,
        ease: Power1.easeInOut,
        opacity:1,
    })
);

const in4Scene = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-6',
    duration: 2000,
    triggerHook: 0,
})
.setTween(in4Tween)
.addTo(controller);

const in5 = {
    curviness: 1.25,
    values: [
        {x: 0, y: 0},
        {x: 1000, y: 600},
    ]
}
const in5Tween = new TimelineLite();

in5Tween.add(
    TweenLite.to(".in5", 1, {
        bezier: in5,
        ease: Power1.easeInOut,
        opacity:1,
    })
);

const in5Scene = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-6',
    duration: 2000,
    triggerHook: 0,
})
.setTween(in5Tween)
.addTo(controller);

const in6 = {
    curviness: 1.25,
    values: [
        {x: 0, y: 0},
        {x: -1000, y: 600},
    ]
}
const in6Tween = new TimelineLite();

in6Tween.add(
    TweenLite.to(".in6", 1, {
        bezier: in6,
        ease: Power1.easeInOut,
        opacity:1,
    })
);

const in6Scene = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-6',
    duration: 2000,
    triggerHook: 0,
})
.setTween(in6Tween)
.addTo(controller);

const in7 = {
    curviness: 1.25,
    values: [
        {x: 0, y: 0},
        {x: -1000, y: window.innerHeight + 1500},
    ]
}
const in7Tween = new TimelineLite();

in7Tween.add(
    TweenLite.to(".in7", 1, {
        bezier: in7,
        ease: Power1.easeInOut,
        opacity:1,
    })
);

const in7Scene = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-6',
    duration: 2000,
    triggerHook: 0,
})
.setTween(in7Tween)
.addTo(controller);

const in8 = {
    curviness: 1.25,
    values: [
        {x: 0, y: 0},
        {x: 1000, y: 1000},
        {x: 2000, y: 600},
    ]
}
const in8Tween = new TimelineLite();

in8Tween.add(
    TweenLite.to(".in8", 1, {
        bezier: in8,
        ease: Power1.easeInOut,
        opacity:1,
    })
);

const in8Scene = new ScrollMagic.Scene({
    triggerElement: '.timeline-section-6',
    duration: 2000,
    triggerHook: 0,
})
.setTween(in8Tween)
.addTo(controller);
