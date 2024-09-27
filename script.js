
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 300)
})

gsap.ticker.lagSmoothing(0)

let animationsTriggered = false;
gsap.set("#work .h1-heading", { y: 50, opacity: 0 });

function animateNavItems() {
  gsap.from(".nav-items a, .nav-icons a", {
    x: -100,
    opacity: 0,
    ease: "power1",
    stagger: {
      amount: 0.5,
      each: 0.12,
    },
  });
}

function animatePage1() {
  gsap.from(".page1 h1, .page1 h3,.page1 .ylwbtn, .page1 .ylwmbbtn", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.8,
    stagger: {
      amount: 0.5,
      each: 0.12,
    },
  });

  gsap.from(".page1 img", {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    delay: 1.2,
  });
  gsap.from("#work .h1-heading", {
    y: 50,
    duration: 0.8,
    delay: 2,
  });
  gsap.to("#work .h1-heading", {
    opacity: 1,
    y: 20,
    duration: 0.8,
    delay: 2,
  });
}

function startAnimations() {
  // Check if the animations have already been triggered
  if (!animationsTriggered) {

    const mainContent = document.querySelector(".mainwrapper");
    gsap.to(mainContent, { opacity: 1, duration: 1 });
    animateNavItems();
    animatePage1();
    animationsTriggered = true; // Mark the animations as triggered
  }
}
window.addEventListener("load", function () {
  setTimeout(function () {

    startAnimations();
  }, 10); // 1.5 seconds delay
});

const dot = document.querySelector('.dot');

document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const container = document.querySelector('.mainwrapper');
  const containerRect = container.getBoundingClientRect();

  // Calculate the relative position of the mouse inside the container
  const relativeX = mouseX - containerRect.left;
  const relativeY = mouseY - containerRect.top;

  dot.style.left = relativeX + 'px';
  dot.style.top = relativeY + 'px';

});



document.addEventListener('mouseleave', () => {
  dot.style.opacity = '0';
});
document.addEventListener('mouseenter', () => {
  dot.style.opacity = '1';
});

const headings = document.querySelectorAll('.h1-heading, #work img, .pageaboutdesc');

headings.forEach((heading, index) => {
  // Check if the current heading is the first child of .h1-heading
  const isFirstChildOfH1 = heading.classList.contains('h1-heading') && index === 0;

  // Apply GSAP animation only if it's not the first child of .h1-heading
  if (!isFirstChildOfH1) {
    gsap.from(heading, {
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: heading,
        scroller: "body",
        scrub: 2,
        start: "top 90%",
        end: "bottom 50%",
      }
    });
  }
});

const sections = document.querySelectorAll('.verticle1-page2,.verticle2-page2');

sections.forEach((section) => {
  gsap.from(section, {
    y: 100,
    duration: 0.5,

    scrollTrigger: {
      trigger: section,
      scroller: "body",
      scrub: 2,
      start: "top 90%",
      end: "top 60%",
    }
  });
});

const lines = document.querySelectorAll('.line');

lines.forEach(line => {
  gsap.to(line, {
    height: '40vh',
    scrollTrigger: {
      trigger: line,
      start: 'top 80%', 
      end: 'bottom 50%', 
      scrub: true, 
    }
  });
});
gsap.from(".aboutdescbox .aboutleft", {
  opacity: 0.5,
  duration: 0.5,
  scale: 0.5,
  scrollTrigger: {
    trigger: ".aboutdescbox .aboutleft",
    scroller: "body",
    scrub: 2,
    start: "top 90%",
    end: "top 60%",
  }
});
gsap.from(".aboutdescbox .aboutright", {
  y: 50,
  opacity: 0.5,
  duration: 0.3,

  scrollTrigger: {
    trigger: ".aboutdescbox .aboutright",
    scroller: "body",
    scrub: 1,

    start: "top 90%",
    end: "top 60%",
  }
});

const expert = document.querySelectorAll('.my-expertise .blk .expertise');
expert.forEach((experts) => {

  gsap.from(experts, {
    x: -100,
    opacity: 0,
    duration: 0.1,
    stagger: 0.05,
    scrollTrigger: {
      trigger: experts,
      scroller: "body",
      scrub: 1,
      start: "top 90%",
      end: "top 50%",
    }
  });
});
const expertylw = document.querySelectorAll('.my-expertise .ylw .expertise');
expertylw.forEach((expertsylw) => {

  gsap.from(expertsylw, {
    x: 100,
    opacity: 0,
    duration: 0.1,
    stagger: 0.05,
    scrollTrigger: {
      trigger: expertsylw,
      scroller: "body",
      scrub: 1,
      start: "top 90%",
      end: "top 50%",
    }
  });
});

gsap.to(".contact-form h1",{
    scale:1.1,
    delay:5,
    duration:0.5,
    repeatdelay:3,
    yoyo:true,
    repeat:-1,
})
