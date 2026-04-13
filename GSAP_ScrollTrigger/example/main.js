gsap.to("#page2 h1",{
    transform:"translateX(-550%)",
    scrollTrigger:{
        trigger:"#page2", //whenever we use pin always use the parent as the trigger
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -225%",
        scrub:2,
        pin:true
    }
})