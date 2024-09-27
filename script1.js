window.addEventListener("load", function () {

    const loadingPage = document.querySelector(".loading-page");
    gsap.fromTo(loadingPage, { y: 0, opacity: 1 }, { y: -1000, opacity: 1, display: "none", duration: 1, delay: 1.5 });

    // Show the main content with a delay of 2 seconds and a smooth fade-in effect
    const mainContent = document.querySelector(".mainwrapper");
    gsap.from(mainContent, { opacity: 0, duration: 1, delay: 1.5 });
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

// Get the dot element

// GSAP animations using ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


gsap.from(".loading-text",{
    scale:0.5,  
    opacity:0,
    ease:"power2.inOut",
    duration:0.5
});
gsap.from(".nav-items a,.nav-icons a", {
    x: -100,
    opacity: 0,
    ease: "power1",
    delay: 2,
    stagger: {
        amount: 0.5,
        each: 0.12,
        from: 0,
    },
});

gsap.from(".nav-items a,.nav-icons a", {
    x: -100,
    opacity: 0,
    ease: "power1",
    delay: 2,
    stagger: {
        amount: 0.5,
        each: 0.12,
        from: 0,
    },
});

gsap.from(".page1 h1,.page1 .h1-stroke, .page1 h3, .page1 h3-stroke ,.page1 .ylwbtn ,.page1 .ylwmbbtn", {
    y: 50,
    opacity: 0,
    delay: 2,
    duration: 0.5


});
gsap.from(".page1 img", {
    scale: 0,
    opacity: 0,
    delay: 2.3,
    duration: 1,

});
const heading = document.querySelectorAll('.h1-heading,#work img,.pageaboutdesc');
heading.forEach((headings) => {

    gsap.from(headings, {
        y: 50,
        duration: 1,

        scrollTrigger: {
            trigger: headings,
            scroller: "body",
            scrub: 2,
            start: "top 90%",
            end: "bottom 50%",

        }
    });
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
    // ScrollTrigger animation for scrolling downwards
    gsap.to(line, {
        height: '40vh', // Increase the height to 40vh
        scrollTrigger: {
            trigger: line,
            start: 'top 80%', // Start the animation when 80% of the .line element is in view
            end: 'bottom 50%', // End the animation when 20% of the .line element is in view
            scrub: true, // Smoothly animate the height change
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