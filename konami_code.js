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

let i = 0
// function init() {
  //   // your code here
  document.body.addEventListener('keydown', (e) => {
    const key = e.key
    console.log(`index${i} key${key}`)
    if (key === codes[i]) {
      i ++
      if (i===codes.length){
        alert("Nice!")
      }
    }
    else {
      i = 0
    }
  });
// }
