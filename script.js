var tl = gsap.timeline();
Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: .5,
  });
Shery.makeMagnet(".a , .magnet");

Shery.textAnimate("#page1 h1  , .text h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration:4 ,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

Shery.hoverWithMediaCircle(".a , .magnet ,.fanta", {videos:[ "https://videos.pexels.com/video-files/856296/856296-sd_640_320_24fps.mp4"]})

Shery.imageEffect("#images", {
    style: 2,
    /*optional parameters
    these parameter dose not applies to custom scroll trigger callback */
    scrollSnapping: true,
    scrollSpeed: 6,
    touchSpeed: 6,
    damping: 6,
    delay:4,
  });


tl.to(".fentabottle",{

    top:"153%",
    left:"20%",
    rotate:"360",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:"true",
        start:"top 50%",
        end:"top 50%",
        scrub:3,

    }
})

tl.to(".cutorange",{
    top:"170%",
    left:"10%",

    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:"true",
        start:"top 50%",
        end:"top 50%",
        scrub:3,
    }
})

var tl2 = gsap.timeline();

tl2.to(".fentabottle",{
    // top:"241%",
    y:550,
    x:416,
    rotate:"360",
    // left:"51%",

    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        // markers:"true",
        start:"top 30%",
        end:"top 90%",
        scrub:4,
    }
})

tl2.to(".cutorange",{
    // top:"170%",
    // left:"10%",
    y:500,
    x:470,

    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        // markers:"true",
        start:"top 30%",
        end:"top 90%",
        scrub:4,
    }
})

tl2.from(".cocacola",{
    x:-300,
    y:180,
    rotate:360,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"50% 50%",
        end:"50% 58%",
        scrub:4,
    }
})

tl2.from(".pepsi",{
    x:300,
    y:180,
    rotate:360,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"50% 50%",
        end:"50% 58%",
        scrub:4,
    }
})


tl2.from(".lemon",{
    x:300,
    y:180,
    rotate:360,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"50% 50%",
        end:"50% 58%",
        scrub:4,
    }
})


function page6Animation(){
    gsap.to(".page6-mark",{
        x:-1100,
        scrollTrigger: {
            trigger:"#page6",
            scroller: "#main",
            // markers:true,
            start:"top 150%",
            end:"top -50%",
            scrub:2,
        }
    })

    gsap.to(".page6-marking",{
        x:-1000,
        scrollTrigger: {
            trigger:"#page6",
            scroller: "#main",
            // markers:true,
            start:"top 160%",
            end:"top -50%",
            scrub:2,
        }
    })
}
page6Animation()