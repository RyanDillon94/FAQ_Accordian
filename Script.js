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

      // Remove the 'active' class from other FAQ elements
      faqs.forEach(function(otherFaq) {
        if (otherFaq !== faq) {
          otherFaq.classList.remove('active');
          otherFaq.querySelector('p').style.maxHeight = 0;
        }
      });
    });
  });
});
