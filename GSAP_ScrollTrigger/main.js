gsap.from("#page1 #box", {
  scale:0,
  delay:1,
  duration:2,
  rotate:360
})
// gsap.from("#page2 #box", {
//   scale:0,
//   duration:2,
//   rotate:360,
//   // scrollTrigger:"#page2 #box"
//   scrollTrigger:{
//     trigger:"#page2 #box",
//     scroller:"body",
//     markers:true,
//     start:"top 60%"
//   }
// })
gsap.from("#show h1",{
  x:500,
  duration:1,
  opacity:0,
  scrollTrigger:{
    trigger:"#show h1",
    scroller:"body",
    markers:true,
    start:"top 50%"
  }
})
gsap.from("#show h2",{
  x:-500,
  duration:1,
  opacity:0,
  scrollTrigger:{
    trigger:"#show h2",
    scroller:"body",
    markers:true,
    start:"top 50%"
  }
})
gsap.from("#page2 #box",{
  scale:0,
  delay:1,
  duration:2,
  rotate:720,
  scrollTrigger:{
    trigger:"#page2 #box",
    scroller:"body",
    markers:true,
    start:"top 50%",
    scrub:2,
    pin:true
  }
})