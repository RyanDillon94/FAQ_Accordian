// Variables from DOM
const FAQs = document.getElementsByClassName("FAQs");
for (let i = 0; i < FAQs.length; i++) {
  FAQs[i].addEventListener("click", changeClass);
}

function changeClass() {
  this.classList.toggle("active");

  let actives = document.getElementsByClassName("active");
  for (let ii = 0; ii < actives.length; ii++) {
    if (actives[ii] !== this) {
      actives[ii].classList.remove("active");
    }
  }
  document.getElementById("FAQs").style.transition = "all 2s";
}
