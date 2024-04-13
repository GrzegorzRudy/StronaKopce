// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 100,
    elasticity: 2200,
    delay: (el, i) => 25 * (i+1)
  }).add({
  targets: '.ml9',
  opacity: 0,
  duration: 500,
  easing: "easeOutExpo",
  delay: 1000
});
