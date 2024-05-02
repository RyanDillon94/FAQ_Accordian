// // Variables from DOM
// const FAQs = document.getElementsByClassName("FAQs");
// for (let i = 0; i < FAQs.length; i++) {
//   FAQs[i].addEventListener("click", changeClass);
// }

// function changeClass() {
//   this.classList.toggle("active");

//   let actives = document.getElementsByClassName("active");
//   for (let ii = 0; ii < actives.length; ii++) {
//     if (actives[ii] !== this) {
//       actives[ii].classList.remove("active");
//     }
//   }
// }


document.addEventListener('DOMContentLoaded', function() {
  const faqs = document.querySelectorAll('.FAQs');

  faqs.forEach(function(faq) {
    const question = faq.querySelector('h4');
    const answer = faq.querySelector('p');

    question.addEventListener('click', function() {
      // Toggle the 'active' class on the parent FAQ element
      faq.classList.toggle('active');

      // Check if the FAQ element is now active
      if (faq.classList.contains('active')) {
        // Set max-height of the answer to its scrollHeight
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        // Set max-height back to 0 to collapse the answer
        answer.style.maxHeight = 0;
      }
    });
  });
});
