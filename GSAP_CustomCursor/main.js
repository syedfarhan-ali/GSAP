let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let imageDiv = document.querySelector("#image")

main.addEventListener("mousemove", (self)=>{
  gsap.to(cursor, {
    x:self.x,
    y:self.y,
    duration:1,
    ease:"back.out"
  })
})

imageDiv.addEventListener("mouseenter", (self) =>{
  cursor.innerHTML = "view more"
  gsap.to(cursor,{
    scale:4
  })
})

imageDiv.addEventListener("mouseleave", (self) =>{
  cursor.innerHTML = ""
  gsap.to(cursor,{
    scale:1
  })
})