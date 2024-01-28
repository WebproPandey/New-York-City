function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

loco()

function loadereffect() {

  var tl = gsap.timeline()
  tl
    .to("#text",
      {
        height: "45vh",
        opacity: 1,
        duration: 1,
        ease: "power2"
      })
    .to("#text",
      {
        opacity: 0,
        ease: "power2"
      })


    .to(".loader , #text",
      {
        height: "0vh",
        top: "-100%",
        duration: 2,
        delay: 1,
        ease: "power3"
      })

}

loadereffect()

var progres = document.querySelector(".progresline")
gsap.to(progres,
  {
    width: "100%",
    scrollTrigger:
    {
      trigger: ".main",
      scroller: ".main",
      start: "top 0%",
      // end:"bottom bottom",
      // markers:true,
      scrub: true,
    }
  })

var scroll = document.querySelector('#scroll')
var scrollicon = document.querySelector(".scrollicon")
scrollicon.addEventListener("mouseenter", function () {
  scrollicon.style.height = '7vh';
  scroll.style.opacity = 1;
  console.log("ho rha hai");

});

scrollicon.addEventListener("mouseleave", function () {
  scrollicon.style.height = '6vh';
  scroll.style.opacity = 0;
  console.log("nhi ho rha hai");
});


var scroll2 = document.querySelector('#scrollup')
var scrollicon2 = document.querySelector(".scrollicon2")
scrollicon2.addEventListener("mouseenter", function () {
  scrollicon2.style.height = '7vh';
  scroll2.style.opacity = 1;

});

scrollicon2.addEventListener("mouseleave", function () {
  scrollicon2.style.height = '6vh';
  scroll2.style.opacity = 0;
});


gsap.to(".scrollbardown",
  {

    opacity: 0,
    y: "+=60vh",
    scrollTrigger:
    {
      trigger: ".scroller",
      scroller: ".main",
      start: "top 70%",
      scrub: true,
    }
  })

gsap.to(".scroller1",
  {
    opacity: 1,
    scrollTrigger:
    {
      trigger: ".scroller1",
      scroller: ".main",
      start: "top 10%",
      scrub: true
    }
  })





var scrollbardown = document.querySelector(".scrollbardown");
var text = document.querySelector("#fottertext");



function slide() {
  var tl = gsap.timeline({ paused: true })
  tl
    .to("#menushow",
      {
        y: "100vh",
      })
    .to(".slide1,.slide2,.slide3,.slide4",
      {
        height: "100vh",
        duration: .9,
        stagger: .2,
        ease: "power2",
        ease: "power1.inOut"

      })
    .to(".overlaymenu",
      {
        opacity: 1
      })



  var menu = document.querySelector("#menu")
  menu.addEventListener("click", function () {
    tl.play()
  })

  var close = document.querySelector("#close")
  close.addEventListener("click", function () {
    tl.reverse()
  })


}

slide()
function page2texteffect() {
  var h1 = document.querySelectorAll("#apple")
  h1.forEach(function (val) {
    var clutter = ""
    var splittext = val.textContent.split("");
    splittext.forEach(function (det) {
      clutter += `<span class="inline-block leading-[25vw]  scale-0">${det}</span>`;

    })
    val.innerHTML = clutter
    var span = document.querySelectorAll('span');
    span.forEach(function (e) {
      gsap.to(span,
        {
          scaleX: 1.1,
          scale: 1,
          y: -50,
          duration: 1,
          stagger: .1,

          scrollTrigger:
          {
            trigger: ".element",
            scroller: ".main",
            start: 'top 70%',
            end: "top 60%",
            scrub:true
          }
        })
    })

  })
}
page2texteffect()

function page4() {
  function demo() {

    var h1 = document.querySelector("#demo")
    h1split = h1.textContent.split("")
    clutter = ""
    h1split.forEach(function (val) {
      clutter += `<span  class=" inline-block leading-[25vw] scale-0  " >${val}</span>`
    })
    h1.innerHTML = clutter
    var span = document.querySelectorAll("span")
    span.forEach(function (e) {
      gsap.to(span,
        {
          scaleY: 1.2,
          scale: 1,
          duration: 2,
          stagger: 1,
          y: -50,
          scrollTrigger:
          {
            trigger: ".element2",
            scroller: ".main",
            start: "top 85%",
            end: "top 75%",
            scrub: true,

          }
        })
    })

  }
  demo()



  function million() {
    var textm = document.querySelector("#million")
    textmsplit = textm.textContent.split("")
    clutter2 = ""
    textmsplit.forEach(function (val) {
          clutter2 += `<span class ="span2 inline-block scale-[0]">${val}</span>`
    })
    textm.innerHTML = clutter2

    var span2 = document.querySelectorAll(".span2")
    span2.forEach(function (e) {
      gsap.to(span2,
        {
          scaleY: 1.2,
          scale: 1,
          duration: .5,
          stagger: .1,
          ease:"power3.inOut",
          y: -20,
          scrollTrigger:
          {
            trigger: ".element2",
            scroller: ".main",
            start: 'top 30%',
            end: "top 0%",
            scrub:true,
      }

        })
    })
  }
  million()


}
page4()


function page5() {

  var hood = document.querySelector("#nighborhood");
  hoodsplit = hood.textContent.split("")
  clutter = ""
  hoodsplit.forEach(function (e) {
    clutter += `<span class=" inline-block scale-0 " >${e}</span>`
  })
  hood.innerHTML = clutter
  var span = document.querySelectorAll("span")
  gsap.to(span,
    {
      scaleY: 1.1,
      scale: 1.1,
      y: -50,
      duration: 0.5,
      stagger: .5,
      scrollTrigger:
      {
        trigger: ".swiper",
        scroller: ".main",
        start: "top 20%",
        end: "top 0%",
        scrub: true,
      } 
    })

    var tl =  gsap.timeline({
      scrollTrigger:
      {
        trigger:'.page5',
        scroller:".main",
        start:"top  0%",
        end:"top -100%",
        pin:true,
        scrub:true
      }
    })
    tl.to("#box1",
    {
      left:"-100%",
      display:"none",
      duration:1,
    })
    tl.to("#box2",
    {
      left:"-100%",
      display:"none",
      duration:2,
    })
    tl.to("#box3",
    {
      left:"-100%",
      display:"none",
      delay:3,
      duration:3,
    })
    tl.to("#box4",
    {
      left:"-100%",
      display:"none",
      delay:3,

      duration:4,
    })
    tl.to("#box5",
    {
      left:"-100%",
      delay:5,
      duration:5,
    })

}
page5()




function page6() {
  var h1text = document.querySelector("#culture")
  h1textsplit = h1text.textContent.split("")
  clutter = ""
  h1textsplit.forEach(function (val) {
    clutter += `<span class="inline-block scale-0">${val}</span>`
  })
  h1text.innerHTML = clutter
  var span = document.querySelectorAll("span")
  gsap.to(span,
    {
      scaleY: 1.1,
      scale: 1.1,
      y: -50,
      duration: 2,
      stagger: .9,
      scrollTrigger:
      {
        trigger: ".page6",
        scroller: ".main",
        start: "top 50%",
        end: "top 30%",
         scrub:true
      }
    })

}
page6();
function page7() {
  var h1text = document.querySelector("#history")
  h1textsplit = h1text.textContent.split("")
  clutter = ""
  h1textsplit.forEach(function (val) {
    clutter += `<span class="inline-block scale-0">${val}</span>`
  })
  h1text.innerHTML = clutter
  var span = document.querySelectorAll("span")
  gsap.to(span,
    {
      scaleY: 1.1,
      scale: 1,
      y: -50,
      duration: 4,
      stagger: .9,
      scrollTrigger:
      {
        trigger: ".page7",
        scroller: ".main",
        start: "top 50%",
        end: "top 40%",
         scrub:true
      }
    })

}
page7();




// Sharey effect

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: .5,
});

Shery.makeMagnet("#homelink , #aboutlink , .heading1,.heading2,.heading3,.heading4 " /* Element to target.*/, {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});










