const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  document.body.addEventListener('keydown', (e) => {
    const key = e.key
    let index = 0
    if (key === codes[index]) {
      index ++
      if (index===codes.length){
        alert("Nice!")
      }
    }
    else {
      index = 0
    }
  })
}
