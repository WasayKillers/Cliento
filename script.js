document.querySelector("body").addEventListener("wheel", function(event) {
    if (event.deltaY > 0) { // Scrolling down
        gsap.to(".nav", {
            y: "-100%",
            ease:"linear",
            duration:0.3
        });
    } else { // Scrolling up
        gsap.to(".nav", {
            y: "0%",
                        ease:"linear",
                        duration:0.3

        });
    }
});


document.querySelector("body").addEventListener("mouseenter",function(){
  gsap.to(".cursor",{
    scale:"1"
  })
})
document.querySelector("body").addEventListener("mouseleave",function(){
  gsap.to(".cursor",{
    scale:"0"
  })
})
document.querySelector("body").addEventListener("mousemove", function(dets) {
    gsap.to(".cursor", {
        x: dets.pageX - 14, // Offset to center the cursor
        y: dets.pageY - 14  // Offset to center the cursor
      });
});

