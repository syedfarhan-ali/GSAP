let h1 = document.querySelector("h1");
let text = h1.textContent;
let splitedText = text.split("");
let clutter = "";
// it is not neccessary to Math.floor this, but we did it anyway
let halfWayPoint = Math.floor(splitedText.length/2) 

function breakingText() {
  


  splitedText.forEach((ele,idx) => {
    if(idx < halfWayPoint)
      clutter += `<span class="a">${ele}</span>`;
    else
      clutter += `<span class="b">${ele}</span>`;

    
  });

  h1.innerHTML = clutter;
}

breakingText()

console.log(clutter);

gsap.from("h1 .a", {
  y:50,
  duration:0.8,
  delay:0.5,
  opacity:0,
  stagger:0.15
})

gsap.from("h1 .b", {
  y:50,
  duration:0.8,
  delay:0.5,
  opacity:0,
  stagger:-0.15
})