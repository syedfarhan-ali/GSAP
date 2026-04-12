// gsap.to('#box', {
//   x:1000,
//   duration:1,
//   delay:1,
  
// })
// gsap.to('#box2', {
//   x:1000,
//   duration:1,
//   delay:1,
  
// })
// gsap.from('#box', {
//   x:1000,
//   duration:1,
//   delay:1,
//   rotate:360,
//   backgroundColor:'blue'
// })
// gsap.to('#box', {
//   x:1000,
//   duration:1,
//   delay:1,
//   rotate:360,
//   backgroundColor:'blue',
//   borderRadius:'100%'
// })

// gsap.from('h1', {
//   opacity:0,
//   duration:2,
//   delay:0.5,
//   yoyo:true,
//   repeat:-1,
//   stagger:0.3
// })

// gsap.to('#box1', {
//   x:1000,
//   rotate:360,
//   duration:1,
//   delay:.5,
//   repeat:-1
// })
// gsap.to('#box2', {
//   x:1000,
//   rotate:360,
//   duration:1,
//   delay:.5,
//   repeat:-1
// })
// gsap.to('#box3', {
//   x:1000,
//   rotate:360,
//   duration:1,
//   delay:.5,
//   repeat:-1
// })

let tl = gsap.timeline()

tl.to('#box1', {
  x:1000,
  rotate:360,
  duration:1,
  delay:1,
})
tl.to('#box2', {
  x:1000,
  rotate:360,
  duration:1,
})
tl.to('#box3', {
  x:1000,
  rotate:360,
  duration:1,
})
