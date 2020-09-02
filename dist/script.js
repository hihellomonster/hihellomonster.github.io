const rowHeight = 90;
const charWidth = 90;
const width = window.innerWidth;
const height = window.innerHeight;
const numRows = Math.ceil((height / rowHeight)) + 2;
const numChar = Math.ceil((width / charWidth) + 2);
const laugh = document.querySelector('.laugh');

for (let k = 0; k < numRows; k++) {
  const row = document.createElement('div');
  row.classList.add('row');

  for (let j = 0; j < numChar; j++) {
    row.innerHTML += j % 2 ? 'H' : 'A';
  }

  const text = new SplitText(row, { type: 'chars,words', })
  const factor = 0.4;
  const end = 1 + factor;
  const start = 1 - factor;

  gsap.set(text.chars, {
    scale: k % 2 ? start : end,
  });

  gsap.to(text.chars, {
    duration: 3,
    stagger: {
      amount: 3,
      repeat: -1,
      yoyo: true,
    },
    ease: ExpoScaleEase.config(start, end),
    scale: k % 2 ? end : start,
  })

  laugh.appendChild(row)
}

// gsap.to('.mouth', {
//   duration: 0.2,
//   repeat: -1,
//   yoyo: true,
//   y: '+=0.5', 
//   scaleY: '+=0.05',
// })

gsap.to('.gengar', {
  duration: 50,
  repeat: -1,
  yoyo: true,
  x: '+=random(100, 200)',
  ease: CustomWiggle.create('Wiggle.random', {wiggles: 50, type: 'random'}),
})

gsap.to('.gengar', {
  duration: 50,
  repeat: -1,
  yoyo: true,
  y: '+=random(100, 200)',
  // opacity: 0,
  ease: CustomWiggle.create('Wiggle.random', {wiggles: 50, type: 'random'}),
})